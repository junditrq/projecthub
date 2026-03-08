import UploadYourProjectButton from "@/components/buttons/upload-your-project-button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import FiltersSheet from "./filters-sheet";
import { CategoriesSection } from "./filters-sheet/categories-section";
import { TagsSection } from "./filters-sheet/tags-section";

type FiltersActionsProps = {
  className?: HTMLDivElement["className"];
};

const ProjectsToolbarActions = ({ className }: FiltersActionsProps) => {
  return (
    <div className={cn("grid grid-cols-[1fr_2fr] gap-2", className)}>
      <FiltersSheet>
        <Suspense
          fallback={
            <Skeleton className="mx-auto my-4 h-32 w-[calc(100%-2rem)]" />
          }
        >
          <CategoriesSection />
        </Suspense>

        <Separator />

        <Suspense
          fallback={
            <Skeleton className="mx-auto my-4 h-28 w-[calc(100%-2rem)]" />
          }
        >
          <TagsSection />
        </Suspense>

        <Separator className="mb-24" />
      </FiltersSheet>

      <UploadYourProjectButton />
    </div>
  );
};

export default ProjectsToolbarActions;
