"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTrends } from "@/api";
import PreviewPost from "../PreviewPost";
import { PreviewVariant, TrendItem } from "@/types/types";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../Header";

export default function Trends({ items }: { items: TrendItem[] }) {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? items : items.slice(0, 6);

  return (
    <section className="text-white md:py-16 md:px-6 px-12 my-8">
      <Header
        title="TRENDLER"
        icon={faArrowTrendUp}
        containerClass="mb-12"
      />
      <div className="grid md:grid-cols-3 gap-12">
        <PreviewPost displayedItems={displayedItems} variant={PreviewVariant.NUMBERED} />
      </div>
      {items.length > 6 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white text-primary font-bold px-6 py-3 transform -rotate-2 relative"
          >
            <span className="relative z-10 text-white">
              {showAll ? "Gizle" : "Tümünü Gör"}
            </span>
            <span className="absolute top-1 left-1 w-full h-full bg-primary -z-10"></span>
          </button>
        </div>
      )}
    </section>
  );
}
