"use client";
import { TAGS } from "@/constants/constants";
import { useTags } from "@/context/TagsContext";
import React from "react";

export default function Tags() {
  const { selected, toggleTag } = useTags();

  return (
    <div
      className="flex w-full flex-nowrap md:flex-wrap gap-3 px-2 py-2
                 md:overflow-x-visible overflow-x-auto scrollbar-none whitespace-nowrap"
    >
      {TAGS.map((cat) => (
        <button
          key={cat}
          onClick={() => toggleTag(cat)}
          className={`inline-block px-4 py-2 text-sm font-md font-saira transition ${
            selected.includes(cat)
              ? "bg-secondary text-primary border border-secondary"
              : "text-white hover:bg-secondary hover:text-primary border border-white hover:border-secondary"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
