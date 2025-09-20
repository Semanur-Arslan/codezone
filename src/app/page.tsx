"use client";
import { useEffect, useState } from "react";
import Slider from "@/components/sections/Slider";
import { TrendItem } from "@/types/types";
import { getTrends } from "@/api";
import Discovery from "@/components/sections/Discovery";
import Promotion from "@/components/sections/Promotion";
import Trends from "@/components/sections/Trends";
import Favorites from "@/components/sections/Favorites";


export default function Home() {
  const [items, setItems] = useState<TrendItem[]>([]);
  useEffect(() => {
    const fetchTrends = async () => {
      const list = await getTrends();
      setItems(list);
    };
    fetchTrends();
  }, []);
  return (
    <div className="bg-primary">
      <Slider />
      <Promotion />
        <Trends items={items} />
        <Favorites />
        <Discovery items={items} />

    </div>
  );
}
