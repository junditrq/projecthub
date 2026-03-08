import { cn } from "@/lib/utils";
import ProjectsSearchInput from "./projects-search-input";
import ProjectsToolbarActions from "./projects-toolbar-actions";

type ProjectsToolbarProps = {
  className?: HTMLDivElement["className"];
};

const ProjectsToolbar = ({ className }: ProjectsToolbarProps) => {
  return (
    <div
      className={cn(
        "mb-4 flex flex-col justify-between gap-4 px-4 py-4 md:px-8 lg:flex-row",
        className,
      )}
    >
      <ProjectsSearchInput />
      <ProjectsToolbarActions />
    </div>
  );
};

export default ProjectsToolbar;
