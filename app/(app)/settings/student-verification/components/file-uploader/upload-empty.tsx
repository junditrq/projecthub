import { Button } from '@/components/ui/button';
import { FieldDescription } from '@/components/ui/field';
import { formatBytes } from '@/lib/utils';
import { useFileUploaderContext } from '@/providers/file-uploader-provider';
import { UploadCloud } from 'lucide-react';

const UploaderEmpty = () => {
  const {
    open,
    restrictions: { maxFileSize = Infinity, maxNumberOfFiles = 1 },
    allowedFormats,
  } = useFileUploaderContext();
  return (
    <>
      <div className="animate-in fade-in-0 flex flex-col items-center justify-center gap-2">
        <span className="bg-input text-muted-foreground rounded-full p-2">
          <UploadCloud className="size-8 text-center" />
        </span>
        <p className="text-sm">
          Drop files here or{' '}
          <Button
            variant={'link'}
            className="cursor-pointer px-0 text-base"
            onClick={open}
            type="button"
          >
            browse files
          </Button>
        </p>
      </div>

      <FieldDescription className="absolute bottom-0 w-full text-xs">
        {allowedFormats.length > 0 && allowedFormats}
        {maxNumberOfFiles > 1 && `, ${maxNumberOfFiles} files only`}
        {Number.isInteger(maxFileSize) && `, up to ${formatBytes(maxFileSize)}`}
      </FieldDescription>
    </>
  );
};

export default UploaderEmpty;
