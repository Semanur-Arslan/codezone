"use client";
import React, { useEffect, useRef, useState } from "react";
import PreviewPost from "../PreviewPost";
import { ColumnVariant, PreviewVariant, TrendItem } from "@/types/types";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import Footer from "../Footer";
import { useTags } from "@/context/TagsContext";
import { Header } from "../Header";
import Tags from "./Tags";

export default function Discovery({ items }: { items: TrendItem[] }) {
    const { selected: selectedTags } = useTags();
    const [visibleCount, setVisibleCount] = useState(5);
    const [view, setView] = useState<ColumnVariant>(ColumnVariant.SINGLE);
    const [searchQuery, setSearchQuery] = useState("");

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const filteredItems = items.filter((item) => {
        const matchesSearch = item?.attributes?.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag =
            selectedTags.length === 0 ||
            item?.attributes?.tags.some((cat) => selectedTags.includes(cat));

        return matchesSearch && matchesTag;
    });

    const displayedItems = filteredItems.slice(0, visibleCount);


    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

            if (scrollTop + clientHeight >= scrollHeight - 10) {
                setVisibleCount((prev) =>
                    prev + 5 > items.length ? items.length : prev + 5
                );
            }
        };

        const container = scrollRef.current;
        container?.addEventListener("scroll", handleScroll);

        return () => {
            container?.removeEventListener("scroll", handleScroll);
        };
    }, [items.length]);

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 py-16 px-6 my-16 w-full">
            <div className="text-white">

                <Header
                    title="KEŞFET"
                    icon={faCompass}
                    containerClass="mb-12"
                    currentView={view}
                    onViewToggle={(v) => setView(v)}
                    onSearch={(query) => setSearchQuery(query)}
                />
                <div className="block md:hidden w-full mb-8">
                    <Header
                        title="NELER GÖRMEK İSTERSİN?"
                        titleTextSize="text-2xl"
                        containerClass="mb-4 justify-start"
                    />
                    <Tags />
                </div>
                <div ref={scrollRef}
                    className={`grid order-3 md:order-3 ${view === ColumnVariant.SINGLE ? "md:grid-cols-1" : "md:grid-cols-2"} gap-12 md:max-h-[500px]  max-h-[900px] overflow-y-auto px-4 scrollbar-none`} >
                    <PreviewPost displayedItems={displayedItems} variant={PreviewVariant.IMAGE_LEFT} />
                </div>
            </div>
            <div className="flex flex-col gap-24 md:px-8 px-2">
                <div className="hidden md:block">
                    <Header
                        title="NELER GÖRMEK İSTERSİN?"
                        titleTextSize="text-2xl"
                        containerClass="mb-4 justify-start"
                    />
                    <Tags />
                </div>
                <div>
                    <Header
                        title="GELİŞMELERDEN İLK SEN HABERDAR OL!"
                        titleTextSize="text-2xl"
                        containerClass="mb-4 justify-start"
                    />
                    <Footer />
                </div>

            </div>
        </section >
    );
}
