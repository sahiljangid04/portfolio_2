"use client";

import { Search } from "lucide-react";
import type { ProjectSortOption } from "@/types";

interface ProjectFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  sort: ProjectSortOption;
  onSortChange: (value: ProjectSortOption) => void;
  categories: string[];
}

export function ProjectFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
  categories,
}: ProjectFiltersProps) {
  return (
    <div className="glass rounded-[20px] p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
          <input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="input-warm w-full rounded-[14px] py-2.5 pl-10 pr-4 text-sm"
            aria-label="Search projects"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="input-warm rounded-[14px] px-4 py-2.5 text-sm"
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as ProjectSortOption)}
            className="input-warm rounded-[14px] px-4 py-2.5 text-sm"
            aria-label="Sort projects"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">A–Z</option>
          </select>
        </div>
      </div>
    </div>
  );
}
