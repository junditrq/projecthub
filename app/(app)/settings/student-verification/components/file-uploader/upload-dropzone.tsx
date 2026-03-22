import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useFileUploaderContext } from "@/providers/file-uploader-provider";
import UploaderEmpty from "./upload-empty";
import UploadItemCard from "./upload-item";
import UploadItemsGrid from "./upload-items-grid";
import UploaderFooter from "./uploader-footer";

interface UploadDropzoneProps {
  rootProps: React.HTMLAttributes<HTMLDivElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  isDragActive: boolean;
}

const UploadDropzone = ({
  rootProps,
  inputProps,
  isDragActive,
}: UploadDropzoneProps) => {
  const {
    error,
    uploadItems,
    restrictions: { maxNumberOfFiles },
  } = useFileUploaderContext();

  return (
    <Card
      {...rootProps}
      className={cn(
        "bg-background min-h-64 transition-all",
        "border-muted-foreground/25 border-2 border-dashed ring-0",
        {
          "bg-muted/50 border-primary border-dashed": isDragActive,
          "border-destructive": error,
        },
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-0",
      )}
    >
      <CardContent className="relative flex grow flex-col items-center justify-center text-center transition-all">
        <Input data-invalid={error} {...inputProps} />

        {uploadItems.length === 0 ? (
          <UploaderEmpty />
        ) : uploadItems.length === 1 ? (
          <UploadItemCard uploadItem={uploadItems[0]} />
        ) : (
          <UploadItemsGrid />
        )}
      </CardContent>

      {uploadItems.length > 0 && maxNumberOfFiles > 1 && <UploaderFooter />}
    </Card>
  );
};

export default UploadDropzone;
