import { LoadingSpinner } from "@/components/layout/LoadingSpinner";

/** Global loading state for route transitions */
export default function Loading() {
  return <LoadingSpinner className="min-h-[50vh]" />;
}
