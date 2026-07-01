import { Mail, Globe } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { Card } from "@/components/ui/Card";
import { socialLinks } from "@/data/social";
import { siteConfig } from "@/data/site";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  portfolio: Globe,
  twitter: Globe,
};

export function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.id}
            href={link.url}
            target={link.icon === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="flex items-center gap-4 p-5 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_12px_36px_rgba(96,116,86,0.12)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-primary-light text-primary transition-colors duration-300 group-hover:bg-secondary-light group-hover:text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-subtle">{link.label}</p>
                <p className="font-medium text-foreground">
                  {link.icon === "email" ? siteConfig.email : link.label}
                </p>
              </div>
            </Card>
          </a>
        );
      })}
    </div>
  );
}
