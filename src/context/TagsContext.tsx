"use client";
import { TagsContextType } from "@/types/types";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

const TagsContext = createContext<TagsContextType | undefined>(undefined);

export const TagsProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
  const stored = localStorage.getItem("selectedTags");
  if (stored) setSelected(JSON.parse(stored));
}, []);

useEffect(() => {
  localStorage.setItem("selectedTags", JSON.stringify(selected));
}, [selected]);

  const toggleTag = (cat: string) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearTags = () => setSelected([]);

  return (
    <TagsContext.Provider value={{ selected, toggleTag, clearTags }}>
      {children}
    </TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);
  if (!context) throw new Error("useTags must be used within TagsProvider");
  return context;
};
