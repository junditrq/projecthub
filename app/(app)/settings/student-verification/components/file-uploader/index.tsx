"use client";
import { getUploadURLAction } from "@/app/(app)/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFileUploader } from "@/hooks/use-file-uploader";
import { uploadFilesWithXHR } from "@/lib/upload-helper";
import { cn, formatBytes } from "@/lib/utils";
import { TrashIcon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

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
  const {
    maxFileSize = Infinity,
    allowedTypes = [],
    maxNumberOfFiles = 1,
  } = restrictions;

  const allowedFormats = allowedTypes
    .map((type: string) => type.split("/")[1].toUpperCase())
    .join(", ");

  const [error, setError] = useState<string | null>(null);

  const { executeAsync: getUploadURL } = useAction(getUploadURLAction);

  const {
    uploadItems,
    addUploadItem,
    updateProgress,
    markSuccess,
    markError,
    cancelUpload,
  } = useFileUploader();

  const onDrop = useCallback(
    async (fileList: File[]) => {
      setError(null);

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

      if (newFiles.length < fileList.length) {
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
          // TODO: Make better error messages and error handlinge
          setError(
            "Some files were ignored because they're too big, not supported, or are already selected.",
          );
        }
      }

      if (
        !(maxNumberOfFiles === 1 && newFiles.length === 1) &&
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

  return (
    <Field>
      <FieldLabel htmlFor="picture">College ID</FieldLabel>
      <Card
        {...getRootProps({})}
        className={cn(
          "bg-background min-h-64 transition-all",
          "border-muted-foreground/25 border-2 border-dashed",
          {
            "bg-muted/50 border-primary border-dashed": isDragActive,
          },
        )}
      >
        <CardContent className="relative grid grow place-content-center text-center">
          <Input
            {...getInputProps({
              id: "picture",
              type: "file",
              placeholder: "Select",
              accept:
                allowedTypes.length > 0 ? allowedTypes?.join(",") : undefined,
              multiple: maxNumberOfFiles > 1,
              disabled: uploadItems.length === maxNumberOfFiles,
            })}
          />

          <p className="text-sm">
            Drop files here or{" "}
            <Button
              variant={"link"}
              className="cursor-pointer px-0 text-base"
              onClick={open}
              type="button"
            >
              browse files
            </Button>
          </p>
          <FieldDescription className="absolute bottom-0 w-full text-xs">
            {allowedFormats},
            {maxNumberOfFiles > 1 && ` ${maxNumberOfFiles} files only`}, up to{" "}
            {formatBytes(maxFileSize)}
          </FieldDescription>
        </CardContent>
      </Card>
      {}

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
            <Button
              type="button"
              onClick={() => cancelUpload(uploadItem.fileKey)}
            >
              <TrashIcon />
            </Button>
          </div>
        ))}
      </div>
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
};
export default FileUploader;
