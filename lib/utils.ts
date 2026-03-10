import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const avatarFallback = (name?: string) => {
  if (!name || name.trim().length === 0) return "";
  const words = name.trim().split(" ");
  return words
    .filter((_, i) => i === 0 || i === words.length - 1)
    .map((w) => w[0].toUpperCase())
    .join("");
};
