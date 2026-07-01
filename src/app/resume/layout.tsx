import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resume",
  description: "View and download resume.",
  path: "/resume",
});

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
