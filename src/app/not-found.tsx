import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="glass-strong rounded-[28px] px-12 py-14">
        <h1 className="text-6xl font-bold text-highlight">404</h1>
        <p className="mt-4 text-muted">Page not found.</p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </div>
    </PageContainer>
  );
}
