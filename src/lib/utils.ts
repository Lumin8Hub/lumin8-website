import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves a public/ asset path against the build's base URL, so assets load
 * both on the custom domain (base "/") and on the github.io project page
 * (base "/lumin8-website/").
 */
export function publicAsset(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
