import { PageContainer } from "@/components/layout/PageContainer";
import { LoadingSpinner } from "@/components/layout/LoadingSpinner";
import { Skeleton } from "@/components/ui/Skeleton";

/**
 * Skeleton loader for project detail page while content loads.
 */
export default function ProjectLoading() {
  return (
    <PageContainer>
      <Skeleton className="mb-8 h-4 w-32" />
      <Skeleton className="mb-4 h-8 w-3/4" />
      <Skeleton className="mb-2 h-5 w-full max-w-2xl" />
      <Skeleton className="aspect-video w-full rounded-xl" />
      <div className="mt-12 space-y-8">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
      <LoadingSpinner className="mt-8" />
    </PageContainer>
  );
}
