import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Certifications",
  description:
    "Professional certifications in data science, machine learning, deep learning, and more.",
  path: "/certifications",
});

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
