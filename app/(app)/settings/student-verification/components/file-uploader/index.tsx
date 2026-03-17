"use client";
import { getUploadURLAction } from "@/app/(app)/actions";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFileUploader } from "@/hooks/use-file-uploader";
import { uploadFilesWithXHR } from "@/lib/upload-helper";
import { formatBytes } from "@/lib/utils";
import { useAction } from "next-safe-action/hooks";
import Image from "next/image";
import { useState } from "react";

interface FileUploaderProps {
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
}: FileUploaderProps) => {
  const [error, setError] = useState<string | null>(null);

  const {
    uploadItems,
    addUploadItem,
    updateProgress,
    markSuccess,
    markError,
    cancelUpload,
  } = useFileUploader();

  const {
    maxFileSize = Infinity,
    allowedTypes = [],
    maxNumberOfFiles = 1,
  } = restrictions;

  const allowedFormats = allowedTypes
    .map((type: string) => type.split("/")[1].toUpperCase())
    .join(", ");

  const { executeAsync: getUploadURL } = useAction(getUploadURLAction);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    const fl = e.target.files;
    if (!fl) return;

    const fileList = Array.from(fl); // File []

    const errors = {
      too_large: false,
      invalid_format: false,
      file_already_exists: false,
    };

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

          errors["file_already_exists"] = true;
          return false;
        }

        return true;
      })
      .filter((file) => {
        if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
          errors["invalid_format"] = true;
          return false;
        }

        if (file.size > maxFileSize) {
          console.log(file.name);
          errors["too_large"] = true;
          return false;
        }

        return true;
      });

    console.log(errors);

    if (
      uploadItems.length < maxNumberOfFiles &&
      newFiles.length < fileList.length
    ) {
      if (fileList.length === 1) {
        setError(
          errors["invalid_format"]
            ? `Please select a valid format: ${allowedFormats}`
            : errors["too_large"]
              ? `File is too large. Maximum size is ${formatBytes(maxFileSize)}.`
              : errors["file_already_exists"]
                ? "File already uploaded"
                : "Some files were ignored because they're too big or not supported.",
        );
      } else {
        setError(
          errors["file_already_exists"]
            ? "File already uploaded"
            : "Some files were ignored because they're too big or not supported.",
        );
      }
    }

    if (
      maxNumberOfFiles > 1 &&
      newFiles.length + uploadItems.length > maxNumberOfFiles
    ) {
      setError(
        `Too many files. Maximum number of files is ${maxNumberOfFiles}`,
      );
      return;
    }

    console.log(newFiles);
    console.log(uploadItems);

    newFiles.forEach(async (file) => {
      if (maxNumberOfFiles === 1) {
        if (uploadItems.length > 0) {
          cancelUpload(uploadItems[0].fileKey);
        }
      }

      const abortController = new AbortController();

      const fileKey = `/tmp/${Date.now()}-${file.name}`;

      addUploadItem({
        file,
        fileKey,
        previewURL: URL.createObjectURL(file),
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
  };

  return (
    <Field onChange={onChange}>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input
        id="picture"
        type="file"
        accept={allowedTypes.length > 0 ? allowedTypes?.join(",") : undefined}
        multiple={maxNumberOfFiles > 1}
      />
      <FieldDescription>Select a picture to upload.</FieldDescription>
      <div className="mt-2">
        {uploadItems.map((uploadItem) => (
          <div key={uploadItem.fileKey}>
            <p>{uploadItem.file.name}</p>
            <p>
              {uploadItem.status === "uploading" &&
                `Uploading... ${Math.round((uploadItem.progress || 0) * 100)}%`}
              {uploadItem.status === "success" && "Upload successful!"}
              {uploadItem.status === "error" &&
                `Error: ${uploadItem.errorMessage}`}
            </p>
            <Image
              width={200}
              height={200}
              className="aspect-square rounded-md object-cover"
              src={uploadItem.previewURL}
              alt={uploadItem.file.name}
            />
          </div>
        ))}
      </div>
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
};
export default FileUploader;
