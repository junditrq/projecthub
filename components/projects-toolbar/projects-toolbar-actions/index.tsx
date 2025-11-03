"use client";
import UploadYourProjectButton from "@/components/buttons/upload-your-project-button";
import { cn } from "@/lib/utils";
import FiltersSheet from "./filters-sheet";

type FiltersActionsProps = {
  className?: HTMLDivElement["className"];
};

const ProjectsToolbarActions = ({ className }: FiltersActionsProps) => {
  return (
    <div className={cn("grid grid-cols-[1fr_2fr] gap-2", className)}>
      <FiltersSheet />
      {/* <SignInAlert> */}
      <UploadYourProjectButton />
      {/* </SignInAlert> */}
    </div>
  );
};

export default ProjectsToolbarActions;
