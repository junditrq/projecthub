"use client";
import { getUploadURLAction } from "@/app/(app)/actions";
import {
    UploadItem as UploadItemType,
    useFileUploader,
} from "@/hooks/use-file-uploader";
import { uploadFilesWithXHR } from "@/lib/upload-helper";
import { formatBytes } from "@/lib/utils";
import { useAction } from "next-safe-action/hooks";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import UploadDropzone from "./upload-dropzone";

interface FileUploaderProps {
  inputId: string;
  onUploadFinished?: (fileKey: string) => void;
  restrictions?: {
    maxNumberOfFiles?: number;
    maxFileSize?: number;
    allowedTypes?: string[];
  };
}

const FileUploader = ({
  onUploadFinished = () => {},
  restrictions = {},
  inputId,
}: FileUploaderProps) => {
  const {
    maxFileSize = Infinity,
    allowedTypes = [],
    maxNumberOfFiles = 1,
  } = restrictions;

  const allowedFormats = allowedTypes
    .map((type: string) => type.split("/")[1].toUpperCase())
    .join(", ");

  const { executeAsync: getUploadURL } = useAction(getUploadURLAction);

  const {
    uploadItems,
    addUploadItem,
    updateProgress,
    markSuccess,
    markError,
    cancelUpload,
    cancelUploads,
  } = useFileUploader();

  const onDrop = useCallback(
    async (fileList: File[]) => {
      const newFiles = fileList
        .filter((file) => {
          const existingUploadItem = uploadItems.find(
            (uploadItem) => uploadItem.file.name === file.name,
          );

          if (existingUploadItem) {
            if (existingUploadItem.status === "error") {
              cancelUpload(existingUploadItem.fileKey);
              return true;
            }

            toast.error(`File "${file.name}" is already selected.`);
            return false;
          }

          return true;
        })
        .filter((file) => {
          if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
            toast.error(
              `File "${file.name}" has an invalid format. Valid formats are: ${allowedFormats}.`,
            );
            return false;
          }

          if (file.size > maxFileSize) {
            console.log(file.name);
            toast.error(
              `File "${file.name}" is too large. Maximum size is ${formatBytes(maxFileSize)}.`,
            );
            return false;
          }

          return true;
        });

      if (
        !(maxNumberOfFiles === 1 && newFiles.length === 1) &&
        newFiles.length + uploadItems.length > maxNumberOfFiles
      ) {
        toast.error(
          `Too many files. Maximum number of files is ${maxNumberOfFiles}`,
        );
        return;
      }

      newFiles.forEach(async (file, index) => {
        if (maxNumberOfFiles === 1) {
          if (uploadItems.length > 0) {
            cancelUpload(uploadItems[0].fileKey);
          }
        }

        const abortController = new AbortController();

        const fileKey = `/tmp/${Date.now()}-${index}-${file.name}`;

        addUploadItem({
          file,
          fileKey,
          previewURL: file.type.startsWith("image")
            ? URL.createObjectURL(file)
            : undefined,
          abortController,
          status: "uploading",
        });

        try {
          const result = await getUploadURL({ fileKey });

          if (!result?.data) {
            markError(fileKey, "Failed to upload File");
            return;
          }

          uploadFilesWithXHR({
            file: file,
            abortController: abortController,
            uploadURL: result.data,

            onSuccess: () => {
              markSuccess(fileKey);
              onUploadFinished(fileKey);
            },

            onError: (message) => markError(fileKey, message),

            onProgress: (progress) => updateProgress(fileKey, progress),
          });
        } catch (e) {
          console.error(e);
          markError(fileKey, "Failed to upload file.");
        }
      });
    },
    [
      addUploadItem,
      allowedFormats,
      allowedTypes,
      cancelUpload,
      getUploadURL,
      markError,
      markSuccess,
      maxFileSize,
      maxNumberOfFiles,
      onUploadFinished,
      updateProgress,
      uploadItems,
    ],
  );

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    noClick: true,
    onDrop,
  });

  const rootProps = getRootProps();
  const inputProps = getInputProps({
    id: inputId,
    type: "file",
    placeholder: "Select",
    accept: allowedTypes.length > 0 ? allowedTypes?.join(",") : undefined,
    multiple: maxNumberOfFiles > 1,
    disabled: uploadItems.length === maxNumberOfFiles,
  });

  return (
    <UploadDropzone
      rootProps={rootProps}
      inputProps={inputProps}
      isDragActive={isDragActive}
      allowedFormats={allowedFormats}
      maxFileSize={maxFileSize}
      maxNumberOfFiles={maxNumberOfFiles}
      open={open}
      uploadItems={uploadItems as UploadItemType[]}
      cancelUpload={cancelUpload}
      cancelUploads={cancelUploads}
    />
  );
};
export default FileUploader;
