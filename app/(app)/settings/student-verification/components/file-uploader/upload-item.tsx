import { Button } from "@/components/ui/button";
import { UploadItem as UploadItemType } from "@/hooks/use-file-uploader";

import { cn, formatBytes } from "@/lib/utils";
import { useFileUploaderContext } from "@/providers/file-uploader-provider";
import { FileIcon, X } from "lucide-react";
import Image from "next/image";

const UploadItem = ({ uploadItem }: { uploadItem: UploadItemType }) => {
  const { cancelUpload } = useFileUploaderContext();
  return (
    <div
      key={uploadItem.fileKey}
      className="animate-in fade-in zoom-in-95 relative flex w-full max-w-sm flex-col gap-3 duration-300"
    >
      <div className="bg-muted relative grid aspect-video w-full place-content-center overflow-hidden rounded-lg border shadow-sm">
        {uploadItem.file.type.startsWith("image/") && uploadItem.previewURL ? (
          <Image
            src={uploadItem.previewURL}
            alt={uploadItem.file.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        ) : (
          <FileIcon className="text-muted-foreground size-12" />
        )}

        <div
          className={cn(
            "bg-background/60 text-foreground absolute inset-0 grid place-content-center backdrop-blur-xs transition-all",
            uploadItem.status === "uploading"
              ? "opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          <span className="text-muted-foreground text-sm">
            {((uploadItem.progress || 0) * 100).toFixed(0)}%
          </span>
        </div>

        <div
          className={cn(
            "bg-destructive/60 text-destructive-foreground absolute inset-0 grid place-content-center backdrop-blur-xs transition-all",
            uploadItem.status === "error"
              ? "opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          <span className="text-sm">{"Upload failed"}</span>
        </div>
      </div>

      <div className="flex w-full flex-col text-left">
        <p className="truncate text-sm font-medium">{uploadItem.file.name}</p>
        <p className="text-muted-foreground text-xs">
          {formatBytes(uploadItem.file.size)}
        </p>
      </div>

      <Button
        size="icon"
        variant="destructive"
        className="absolute top-0 right-0 z-10 size-[1.5em] translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full shadow-md transition-transform hover:scale-110"
        type="button"
        onClick={() => {
          cancelUpload(uploadItem.fileKey);
        }}
      >
        <X strokeWidth={3} className="size-3" />
      </Button>
    </div>
  );
};

export default UploadItem;
