import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { navLinks } from "@/data/site";
import { socialLinks } from "@/data/social";
import { siteConfig } from "@/data/site";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  portfolio: Globe,
  twitter: Globe,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-alt border-t border-[var(--border)]">
      <div className="glass-light mx-4 mb-4 rounded-[24px] sm:mx-6">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-foreground">{siteConfig.name}</p>
              <p className="mt-2 text-sm text-muted">{siteConfig.title}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Quick Links</p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Connect</p>
              <div className="mt-4 flex gap-2">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass flex h-10 w-10 items-center justify-center rounded-[12px] text-muted transition-all duration-300 hover:bg-secondary-light hover:text-secondary"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--border)] pt-8 text-center text-sm text-subtle">
            © {year} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
