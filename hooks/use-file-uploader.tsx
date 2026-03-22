import {
    deleteStorageFileAction,
    deleteStorageFilesAction,
} from "@/app/(app)/actions";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useReducer, useRef } from "react";

export interface UploadItem {
  fileKey: string;
  file: File;
  previewURL?: string;
  progress?: number;
  status: "uploading" | "success" | "error";
  errorMessage?: string;
  abortController?: AbortController;
}

type UploadItems = UploadItem[];

type ActionType =
  | { type: "ADD_ITEM"; payload: UploadItem }
  | { type: "UPDATE_PROGRESS"; payload: { fileKey: string; progress: number } }
  | { type: "MARK_SUCCESS"; payload: { fileKey: string } }
  | { type: "MARK_ERROR"; payload: { fileKey: string; errorMessage: string } }
  | { type: "CANCEL_UPLOAD"; payload: { fileKey: string } }
  | { type: "CLEAN_UP" };

const reducer = (uploadItems: UploadItems, action: ActionType): UploadItems => {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...uploadItems, action.payload];
    }
    case "UPDATE_PROGRESS": {
      return uploadItems.map((uploadItem) => {
        if (uploadItem.fileKey === action.payload.fileKey) {
          return {
            ...uploadItem,
            progress: action.payload.progress,
          };
        }
        return uploadItem;
      });
    }

    case "MARK_SUCCESS": {
      return uploadItems.map((uploadItem) => {
        if (uploadItem.fileKey === action.payload.fileKey) {
          return {
            ...uploadItem,
            status: "success",
            progress: 1,
          };
        }
        return uploadItem;
      });
    }
    case "MARK_ERROR": {
      return uploadItems.map((uploadItem) => {
        if (uploadItem.fileKey === action.payload.fileKey) {
          return {
            ...uploadItem,
            status: "error",
            errorMessage: action.payload.errorMessage,
            progress: 0,
          };
        }

        return uploadItem;
      });
    }
    case "CANCEL_UPLOAD": {
      return uploadItems.filter(
        (uploadItem) => uploadItem.fileKey !== action.payload.fileKey,
      );
    }
    case "CLEAN_UP": {
      return [];
    }
    default:
      return uploadItems;
  }
};

export const useFileUploader = () => {
  const [uploadItems, dispatch] = useReducer(reducer, []);
  const itemsRef = useRef(uploadItems);
  const { execute: deleteFile } = useAction(deleteStorageFileAction);
  const { execute: deleteFiles } = useAction(deleteStorageFilesAction);

  useEffect(() => {
    itemsRef.current = uploadItems;
  }, [uploadItems]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((item) => {
        if (item.previewURL) {
          URL.revokeObjectURL(item.previewURL);
        }
        item.abortController?.abort();
      });
    };
  }, []);

  const addUploadItem = (item: UploadItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const updateProgress = (fileKey: string, progress: number) => {
    dispatch({ type: "UPDATE_PROGRESS", payload: { fileKey, progress } });
  };

  const markSuccess = (fileKey: string) => {
    dispatch({ type: "MARK_SUCCESS", payload: { fileKey } });
  };

  const markError = (fileKey: string, errorMessage: string) => {
    dispatch({ type: "MARK_ERROR", payload: { fileKey, errorMessage } });
  };

  const cancelUpload = (fileKey: string) => {
    const uploadItem = uploadItems.find(
      (uploadItem) => uploadItem.fileKey === fileKey,
    );

    if (!uploadItem) return;

    if (uploadItem.previewURL) {
      URL.revokeObjectURL(uploadItem.previewURL);
    }
    if (uploadItem.status === "success") {
      deleteFile({ fileKey: uploadItem.fileKey });
    }
    uploadItem.abortController?.abort();

    dispatch({ type: "CANCEL_UPLOAD", payload: { fileKey } });
  };

  const cancelUploads = () => {
    const fileKeys = uploadItems
      .filter((item) => item.status === "success")
      .map((item) => item.fileKey);

    deleteFiles({ fileKeys });

    uploadItems.forEach((uploadItem) => {
      if (uploadItem.previewURL) {
        URL.revokeObjectURL(uploadItem.previewURL);
      }
      uploadItem.abortController?.abort();
    });
    dispatch({ type: "CLEAN_UP" });
  };

  return {
    uploadItems,
    addUploadItem,
    updateProgress,
    markSuccess,
    markError,
    cancelUpload,
    cancelUploads,
  };
};
