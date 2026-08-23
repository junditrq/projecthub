import { FileUploaderProps } from '@/app/(app)/settings/student-verification/components/file-uploader';
import { useFileUploader } from '@/hooks/use-file-uploader';
import { createContext, useContext } from 'react';

type FileUploaderContextType = Pick<
  ReturnType<typeof useFileUploader>,
  'uploadItems' | 'cancelUpload' | 'cancelUploads'
> & {
  open: () => void;
  error: FileUploaderProps['error'];
  restrictions: Required<NonNullable<FileUploaderProps['restrictions']>>;
  allowedFormats: string;
};

const FileUploaderContext = createContext<FileUploaderContextType | null>(null);

export const FileUploaderProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: FileUploaderContextType;
}) => {
  return <FileUploaderContext.Provider value={value}>{children}</FileUploaderContext.Provider>;
};

export const useFileUploaderContext = () => {
  const context = useContext(FileUploaderContext);
  if (!context) {
    throw new Error('useFileUploaderContext must be used within a FileUploaderProvider');
  }
  return context;
};
