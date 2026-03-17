import { useReducer } from "react";

export interface UploadItem {
  fileKey: string;
  file: File;
  previewURL: string;
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
  | { type: "CANCEL_UPLOAD"; payload: { fileKey: string } };

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
    default:
      return uploadItems;
  }
};

export const useFileUploader = () => {
  const [uploadItems, dispatch] = useReducer(reducer, []);

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

    if (uploadItem.status === "uploading") {
      uploadItem.abortController?.abort();
    }

    if (uploadItem.status === "success") {
      // call teh action
    }

    URL.revokeObjectURL(uploadItem.previewURL);

    dispatch({ type: "CANCEL_UPLOAD", payload: { fileKey } });
  };

  return {
    uploadItems,
    addUploadItem,
    updateProgress,
    markSuccess,
    markError,
    cancelUpload,
  };
};
