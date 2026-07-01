import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Certification } from "@/types";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className="overflow-hidden border-primary/15 transition-all duration-300 hover:border-secondary/30 hover:shadow-[0_16px_40px_rgba(186,106,76,0.1)]">
      <div className="relative aspect-[10/7] bg-background-alt">
        <Image
          src={certification.image}
          alt={certification.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <Badge className="mb-2">{certification.category}</Badge>
        <h3 className="font-semibold text-foreground">{certification.title}</h3>
        <p className="mt-1 text-sm text-muted">{certification.provider}</p>
        <p className="mt-2 text-xs text-subtle">
          Completed {formatDate(certification.completionDate)}
        </p>
        <Link
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary transition-colors duration-300 hover:text-secondary"
        >
          View Credential
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  );
}
