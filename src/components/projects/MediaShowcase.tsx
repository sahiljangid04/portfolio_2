"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ZoomIn, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";
import type { ProjectMedia } from "@/types";

interface MediaShowcaseProps {
  media: ProjectMedia[];
}

export function MediaShowcase({ media }: MediaShowcaseProps) {
  const [activeMedia, setActiveMedia] = useState<ProjectMedia>(media[0]);
  const [zoomOpen, setZoomOpen] = useState(false);

  if (!media.length) return null;

  const renderMainMedia = (item: ProjectMedia) => {
    if (item.type === "youtube" && item.youtubeId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=${item.autoplay ? 1 : 0}`}
          title={item.alt}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (item.type === "video") {
      return (
        <video
          key={item.id}
          src={item.src}
          controls
          autoPlay={item.autoplay}
          muted={item.autoplay}
          loop
          className="h-full w-full object-contain bg-foreground/5"
        >
          <track kind="captions" />
        </video>
      );
    }

    return (
      <button
        type="button"
        onClick={() => setZoomOpen(true)}
        className="group relative h-full w-full"
        aria-label="Zoom image"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 900px"
          priority
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-[12px] border border-primary/20 bg-background/80 px-3 py-1.5 text-xs text-muted opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIn className="h-3.5 w-3.5" />
          Zoom
        </div>
      </button>
    );
  };

  return (
    <div className="space-y-4">
      <div className="glass-strong relative aspect-video overflow-hidden rounded-[24px] border border-primary/15">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMedia.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            {renderMainMedia(activeMedia)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2.5 overflow-x-auto pb-1">
        {media.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setActiveMedia(item)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={spring.snappy}
            className={cn(
              "relative h-16 w-28 shrink-0 overflow-hidden rounded-[14px] border transition-all duration-300 sm:h-20 sm:w-36",
              activeMedia.id === item.id
                ? "border-secondary ring-2 ring-secondary/30 shadow-[0_4px_16px_rgba(186,106,76,0.2)]"
                : "border-[var(--border)] opacity-70 hover:border-primary/40 hover:opacity-100"
            )}
            aria-label={item.alt}
            aria-pressed={activeMedia.id === item.id}
          >
            {item.type === "youtube" || item.type === "video" ? (
              <div className="flex h-full w-full items-center justify-center bg-primary/10">
                <Play className="h-5 w-5 text-secondary" />
              </div>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="144px"
              />
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {zoomOpen && activeMedia.type === "image" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-md"
            onClick={() => setZoomOpen(false)}
          >
            <button
              type="button"
              className="glass absolute top-4 right-4 rounded-full p-2.5 text-foreground"
              onClick={() => setZoomOpen(false)}
              aria-label="Close zoom"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeMedia.src}
                alt={activeMedia.alt}
                width={1200}
                height={675}
                className="max-h-[90vh] w-auto rounded-[16px] object-contain shadow-[0_24px_60px_rgba(44,36,24,0.3)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
