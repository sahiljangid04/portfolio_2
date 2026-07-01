"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { spring } from "@/lib/motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={spring.smooth}
      className="group relative"
    >
      <div className="absolute -inset-1 rounded-[22px] bg-secondary/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-secondary/25 group-hover:opacity-100" />

      <div className="glass-strong glass-reflection relative overflow-hidden rounded-[22px] border border-primary/25 transition-shadow duration-500 group-hover:border-primary/45 group-hover:shadow-[0_24px_56px_rgba(186,106,76,0.18)]">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-video overflow-hidden bg-background-alt">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-50" />
          </div>

          <div className="relative p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Badge className="mb-2">{project.category}</Badge>
                <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
              </div>
              <motion.div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-muted transition-colors duration-300 group-hover:bg-secondary-light group-hover:text-secondary"
                whileHover={{ rotate: 45 }}
                transition={spring.snappy}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </div>

            <p className="mt-2 line-clamp-2 text-sm text-muted">
              {project.shortDescription}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="tech">
                  {tech}
                </Badge>
              ))}
            </div>

            <span className="mt-4 inline-block text-sm font-medium text-primary transition-colors duration-300 group-hover:text-secondary">
              View Details →
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
