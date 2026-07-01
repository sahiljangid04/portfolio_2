import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names safely.
 * Used across all components for conditional styling.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats an ISO date string for display (e.g. "Jan 2024").
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/**
 * Formats a date range for timelines.
 */
export function formatDateRange(start: string, end: string): string {
  return `${formatDate(start)} — ${formatDate(end)}`;
}
