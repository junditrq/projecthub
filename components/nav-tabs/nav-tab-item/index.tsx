"use client";
import HoverNavLink, {
    HoverNavLinkProps,
} from "@/components/common/hover-nav-link";
import { usePathname } from "next/navigation";

const NavTabItem = ({ href, ...props }: HoverNavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <HoverNavLink isActive={isActive} href={href} {...props}>
      {props.children}
    </HoverNavLink>
  );
};

export default NavTabItem;
