import { UploadItem as UploadItemType } from "@/hooks/use-file-uploader";
import { cn } from "@/lib/utils";
import UploadItem from "./upload-item";

const UploadItemsGrid = ({
  uploadItems,
  cancelUpload,
}: {
  uploadItems: UploadItemType[];
  cancelUpload: (fileKey: string) => void;
}) => {
  return (
    <div
      className={cn(
        "w-full",
        "grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-3 pb-4",
        "max-h-[27rem] overflow-y-auto p-4",
      )}
    >
      {uploadItems.map((uploadItem) => (
        <UploadItem
          key={uploadItem.fileKey}
          cancelUpload={cancelUpload}
          uploadItem={uploadItem}
        />
      ))}
    </div>
  );
};

export default UploadItemsGrid;
