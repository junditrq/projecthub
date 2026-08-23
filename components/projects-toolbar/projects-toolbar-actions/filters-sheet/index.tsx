'use client';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';

const FiltersSheet = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'} className="flex cursor-pointer gap-2">
          <Filter />
          <span>Filter</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="gap-0 pt-4"
        id="filters-sheet"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle className="text-2xl">Filters</SheetTitle>
        </SheetHeader>

        <Separator />
        <ScrollArea className="max-h-[calc(100vh-6rem)]">{children}</ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
export default FiltersSheet;
