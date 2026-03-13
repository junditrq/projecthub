"use client";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { formatBytes } from "@/lib/utils";
import { useState } from "react";

interface FileUploaderProps {
  onUploadFinished?: (url: string) => void;
  restrictions?: {
    maxNumberOfFiles?: number;
    maxFileSize?: number;
    allowedTypes?: string[];
  };
}

const FileUploader = ({
  onUploadFinished,
  restrictions = {},
}: FileUploaderProps) => {
  const [error, setError] = useState<string | null>(null);

  const { maxFileSize = Infinity, allowedTypes = [] } = restrictions;

  const allowedFormats = allowedTypes
    .map((type: string) => type.split("/")[1].toUpperCase())
    .join(", ");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    const file = e.target.files?.[0];
    if (!file) return;

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

    console.log(file);
  };

  return (
    <Field onChange={onChange}>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input
        id="picture"
        type="file"
        accept={allowedTypes.length > 0 ? allowedTypes?.join(",") : undefined}
      />
      <FieldDescription>Select a picture to upload.</FieldDescription>
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
};
export default FileUploader;
