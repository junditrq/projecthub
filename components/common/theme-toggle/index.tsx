"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({
  variants,
  className,
}: {
  variants?: React.ComponentProps<typeof Button>["variant"];
  className?: React.ComponentProps<"button">["className"];
}) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={variants || "ghost"}
      size="icon"
      className={cn("size-7", className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
