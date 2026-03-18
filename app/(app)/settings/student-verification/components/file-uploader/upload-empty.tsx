import { Button } from "@/components/ui/button";
import { FieldDescription } from "@/components/ui/field";
import { formatBytes } from "@/lib/utils";
import { UploadCloud } from "lucide-react";

const UploaderEmpty = ({
  allowedFormats,
  maxNumberOfFiles,
  maxFileSize,
  open,
}: {
  allowedFormats: string;
  maxNumberOfFiles: number;
  open: () => void;
  maxFileSize: number;
}) => {
  return (
    <>
      <div className="animate-fade-in flex flex-col items-center justify-center gap-2">
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

        <UploadCloud className="text-center" />
      </div>

      <FieldDescription className="absolute bottom-0 w-full text-xs">
        {allowedFormats},
        {maxNumberOfFiles > 1 && ` ${maxNumberOfFiles} files only`}, up to{" "}
        {formatBytes(maxFileSize)}
      </FieldDescription>
    </>
  );
};

export default UploaderEmpty;
