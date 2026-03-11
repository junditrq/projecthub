import HoverNavLink from "../common/hover-nav-link";

const ProjectCategory = ({ name, id }: { name: string; id: string }) => {
  return (
    <HoverNavLink href="#" isActive key={id}>
      {name}
    </HoverNavLink>
  );
};
export default ProjectCategory;
