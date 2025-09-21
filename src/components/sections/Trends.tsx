"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTrends } from "@/api";
import PreviewPost from "../PreviewPost";
import { PreviewVariant, TrendItem } from "@/types/types";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../Header";
import AsymmetricButton from "../AsymmetricButton";

export default function Trends({ items }: { items: TrendItem[] }) {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? items : items.slice(0, 6);

  return (
    <section className="text-white md:py-16 md:px-6 px-6 my-8">
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
          <AsymmetricButton
            text={showAll ? "Gizle" : "Tümünü Gör"}
            bgColor="bg-white"
            textColor="text-primary font-saira"
            offsetColor="bg-primary"
            offsetX="translate-x-1"
            offsetY="translate-y-1"
            onClick={() => setShowAll(!showAll)}
          />
        </div>

      )}
    </section>
  );
}
