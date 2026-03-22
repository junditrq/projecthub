import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { useFileUploaderContext } from "@/providers/file-uploader-provider";
import { Plus } from "lucide-react";

const UploaderFooter = () => {
  const {
    cancelUploads,
    open,
    uploadItems,
    restrictions: { maxNumberOfFiles },
  } = useFileUploaderContext();
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
        onClick={() => cancelUploads()}
      >
        Cancel
      </Button>
    </CardFooter>
  );
};

export default UploaderFooter;
