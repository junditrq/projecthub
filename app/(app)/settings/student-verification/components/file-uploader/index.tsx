'use client';
import { UploadItem as UploadItemType, useFileUploader } from '@/hooks/use-file-uploader';
import { getUploadURLAction } from '@/lib/actions/storage.actions';
import { uploadFilesWithXHR } from '@/lib/upload-helper';
import { formatBytes } from '@/lib/utils';
import { FileUploaderProvider } from '@/providers/file-uploader-provider';
import { useAction } from 'next-safe-action/hooks';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';
import UploadDropzone from './upload-dropzone';

export interface FileUploaderProps {
  inputId: string;
  restrictions?: {
    maxNumberOfFiles?: number;
    maxFileSize?: number;
    allowedTypes?: string[];
  };
  onChange?: (value: UploadItemType[]) => void;
  error?: boolean;
}

const FileUploader = ({
  restrictions = {},
  inputId,
  error = false,
  onChange,
}: FileUploaderProps) => {
  const { maxFileSize = Infinity, allowedTypes = [], maxNumberOfFiles = 1 } = restrictions;

  const allowedFormats = allowedTypes
    .map((type: string) => type.split('/')[1].toUpperCase())
    .join(', ');

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

  const onChangeRef = useRef(onChange);

  useLayoutEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(uploadItems);
    }
  }, [uploadItems]);

  const onDrop = useCallback(
    async (fileList: File[]) => {
      const newFiles = fileList
        .filter((file) => {
          const existingUploadItem = uploadItems.find(
            (uploadItem) => uploadItem.file.name === file.name
          );

          if (existingUploadItem) {
            if (existingUploadItem.status === 'error') {
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
              `File "${file.name}" has an invalid format. Valid formats are: ${allowedFormats}.`
            );
            return false;
          }

          if (file.size > maxFileSize) {
            console.log(file.name);
            toast.error(
              `File "${file.name}" is too large. Maximum size is ${formatBytes(maxFileSize)}.`
            );
            return false;
          }

          return true;
        });

      if (
        !(maxNumberOfFiles === 1 && newFiles.length === 1) &&
        newFiles.length + uploadItems.length > maxNumberOfFiles
      ) {
        toast.error(`Too many files. Maximum number of files is ${maxNumberOfFiles}`);
        return;
      }

      newFiles.forEach(async (file, index) => {
        if (maxNumberOfFiles === 1) {
          if (uploadItems.length > 0) {
            cancelUpload(uploadItems[0].fileKey);
          }
        }

        const abortController = new AbortController();

        const fileKey = `tmp/${Date.now()}-${index}-${file.name}`;

        addUploadItem({
          file,
          fileKey,
          previewURL: file.type.startsWith('image') ? URL.createObjectURL(file) : undefined,
          abortController,
          status: 'uploading',
        });

        try {
          const result = await getUploadURL({ fileKey, fileType: file.type });

          if (abortController.signal.aborted) {
            return;
          }

          if (!result?.data) {
            markError(fileKey, 'Failed to upload File');
            return;
          }

          uploadFilesWithXHR({
            file: file,
            abortController: abortController,
            uploadURL: result.data,

            onSuccess: () => {
              markSuccess(fileKey);
            },

            onError: (message) => markError(fileKey, message),

            onProgress: (progress) => updateProgress(fileKey, progress),
          });
        } catch (e) {
          console.error(e);
          markError(fileKey, 'Failed to upload file.');
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
      updateProgress,
      uploadItems,
    ]
  );

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    noClick: true,
    onDrop,
  });

  const rootProps = getRootProps();
  const inputProps = getInputProps({
    id: inputId,
    type: 'file',
    placeholder: 'Select',
    accept: allowedTypes.length > 0 ? allowedTypes?.join(',') : undefined,
    multiple: maxNumberOfFiles > 1,
    disabled: uploadItems.length === maxNumberOfFiles,
  });

  return (
    <FileUploaderProvider
      value={{
        open,
        error,
        restrictions: {
          allowedTypes,
          maxFileSize,
          maxNumberOfFiles,
        },
        cancelUpload,
        cancelUploads,
        uploadItems,
        allowedFormats,
      }}
    >
      <UploadDropzone rootProps={rootProps} inputProps={inputProps} isDragActive={isDragActive} />
    </FileUploaderProvider>
  );
};
export default FileUploader;
