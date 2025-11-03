"use client";
import TagsFilter from "@/components/common/tags-filter";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@radix-ui/react-label";
import { Filter } from "lucide-react";

const FiltersSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="flex cursor-pointer gap-2">
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
        <ScrollArea className="max-h-[calc(100vh-6rem)]">
          <section className="p-4">
            <h3 className="mb-6 text-lg font-semibold">Categories</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Checkbox id="web" className="h-5 w-5 border-2" />
                <Label
                  htmlFor="web"
                  className="text-md w-full cursor-pointer font-normal"
                >
                  Web
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="mobile" className="h-5 w-5 border-2" />
                <Label
                  htmlFor="mobile"
                  className="text-md w-full cursor-pointer font-normal"
                >
                  Mobile
                </Label>
              </div>
            </div>
          </section>

          <Separator />

          <section className="p-4">
            <h3 className="mb-6 text-lg font-semibold">Tags</h3>

            <TagsFilter tags={[]} />
          </section>

          <Separator className="mb-24" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
export default FiltersSheet;
