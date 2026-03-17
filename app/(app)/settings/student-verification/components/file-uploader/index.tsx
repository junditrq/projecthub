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

  const { executeAsync: getUploadURL } = useAction(getUploadURLAction, {
    onError: ({ error, input }) => {
      markError(
        input.fileKey,
        error.serverError ||
          error.thrownError?.message ||
          "Failed to get upload URL",
      );
    },
  });

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    const fileList = e.target.files;
    if (!fileList) return;

    const file = fileList[0];
    if (!file) return;

    if (fileList.length > maxNumberOfFiles) {
      setError(
        `Too many files. Maximum number of files is ${maxNumberOfFiles}`,
      );
      return;
    }

    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      setError(`Please select a valid format: ${allowedFormats}`);
      return;
    }

    if (file.size > maxFileSize) {
      setError(
        `File is too large. Maximum size is ${formatBytes(maxFileSize)}.`,
      );
      return;
    }

    // Maybe keep all of those in the reducer as one part of the cancelUpload
    if (maxNumberOfFiles === 1 && uploadItems[0]) {
      cancelUpload(uploadItems[0].fileKey);
    }

    const abortController = new AbortController();

    console.log(file);

    const fileKey = `/tmp/${Date.now()}-${file.name}`;

    addUploadItem({
      file,
      fileKey,
      previewURL: URL.createObjectURL(file),
      abortController,
      status: "uploading",
    });

    const result = await getUploadURL({ fileKey });

    if (!result?.data) {
      markError(fileKey, "Failed to get upload URL");
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
