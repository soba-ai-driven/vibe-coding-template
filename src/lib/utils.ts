import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * shadcn/ui の標準ユーティリティ。
 * Tailwind のクラス名を統合する。
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
