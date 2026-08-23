import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const avatarFallback = (name?: string, numOfLetters: 1 | 2 = 1) => {
  if (!name || name.trim().length === 0) return '';
  const words = name.trim().split(' ');
  const wordsToUse = numOfLetters === 1 ? [words[0]] : words;
  return wordsToUse
    .filter((_, i) => i === 0 || i === words.length - 1)
    .map((w) => w[0].toUpperCase())
    .join('');
};

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
};
