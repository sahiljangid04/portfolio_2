"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { spring } from "@/lib/motion";
import type { Skill } from "@/types";

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <Card hover={false} variant="light" className="p-4">
      <div className="flex items-center justify-between">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted">{skill.proficiency}%</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-primary/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ ...spring.smooth, delay: index * 0.04 }}
        />
      </div>
    </Card>
  );
}
