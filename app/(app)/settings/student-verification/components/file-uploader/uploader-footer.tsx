import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { UploadItem } from "@/hooks/use-file-uploader";
import { Plus } from "lucide-react";

const UploaderFooter = ({
  open,
  uploadItems,
  maxNumberOfFiles,
  cancelUpload,
}: {
  open: () => void;
  uploadItems: UploadItem[];
  maxNumberOfFiles: number;
  cancelUpload: (fileKey: string) => void;
}) => {
  return (
    <CardFooter className="flex justify-between text-sm">
      <Button
        type="button"
        variant={"link"}
        className="cursor-pointer"
        onClick={open}
        disabled={uploadItems.length === maxNumberOfFiles}
      >
        Add more <Plus />
      </Button>

      <span>
        {uploadItems.length} {uploadItems.length > 1 ? "files" : "file"}{" "}
        selected
      </span>
      <Button
        type="button"
        variant={"link"}
        className="cursor-pointer"
        onClick={() =>
          uploadItems.forEach((item) => cancelUpload(item.fileKey))
        }
      >
        Cancel
      </Button>
    </CardFooter>
  );
};

export default UploaderFooter;
