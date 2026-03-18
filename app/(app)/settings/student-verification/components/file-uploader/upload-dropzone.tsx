import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UploadItem } from "@/hooks/use-file-uploader";
import { cn } from "@/lib/utils";
import UploaderEmpty from "./upload-empty";
import UploadItemCard from "./upload-item";
import UploadItemsGrid from "./upload-items-grid";
import UploaderFooter from "./uploader-footer";

interface UploadDropzoneProps {
  rootProps: React.HTMLAttributes<HTMLDivElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  isDragActive: boolean;
  allowedFormats: string;
  maxFileSize: number;
  maxNumberOfFiles: number;
  open: () => void;
  uploadItems: UploadItem[];
  cancelUpload: (fileKey: string) => void;
  cancelUploads: (uploadItems: UploadItem[]) => void;
}

const UploadDropzone = ({
  rootProps,
  inputProps,
  isDragActive,
  allowedFormats,
  maxFileSize,
  maxNumberOfFiles,
  open,
  uploadItems,
  cancelUpload,
  cancelUploads,
}: UploadDropzoneProps) => {
  return (
    <Card
      {...rootProps}
      className={cn(
        "bg-background min-h-64 transition-all",
        "border-muted-foreground/25 border-2 border-dashed",
        {
          "bg-muted/50 border-primary border-dashed": isDragActive,
        },
      )}
    >
      <CardContent className="relative flex grow flex-col items-center justify-center text-center transition-all">
        <Input {...inputProps} />

        {uploadItems.length === 0 ? (
          <UploaderEmpty
            allowedFormats={allowedFormats}
            maxFileSize={maxFileSize}
            maxNumberOfFiles={maxNumberOfFiles}
            open={open}
          />
        ) : uploadItems.length === 1 ? (
          <UploadItemCard
            cancelUpload={cancelUpload}
            uploadItem={uploadItems[0]}
          />
        ) : (
          <UploadItemsGrid
            uploadItems={uploadItems}
            cancelUpload={cancelUpload}
          />
        )}
      </CardContent>

      {uploadItems.length > 0 && maxNumberOfFiles > 1 && (
        <UploaderFooter
          cancelUploads={cancelUploads}
          open={open}
          maxNumberOfFiles={maxNumberOfFiles}
          uploadItems={uploadItems}
        />
      )}
    </Card>
  );
};

export default UploadDropzone;
