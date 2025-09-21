"use client";
import React from "react";
import Image from "next/image";
import { PreviewPostProps, PreviewVariant } from "@/types/types";


export default function PreviewPost({ displayedItems, variant = PreviewVariant.NUMBERED }: PreviewPostProps) {
  return (
    <>
      {displayedItems.map((item, index) => {
        
        return (
          item?.attributes ? (
            <div
              key={item._id}
              className={`flex ${variant === PreviewVariant.IMAGE_TOP ? "flex-col" : "flex-col md:flex-row"
                } gap-6`}
            >
              {variant === PreviewVariant.NUMBERED && (
                <div className="text-6xl font-sairaCondensed font-extrabold text-white/10 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>
              )}

              {(variant === PreviewVariant.IMAGE_LEFT || variant === PreviewVariant.IMAGE_TOP) && (
                <Image
                  src={item.attributes.img}
                  alt={item.attributes.title}
                  width={120}
                  height={80}
                  className="rounded-md object-cover md:w-32 md:h-24 w-full h-auto shrink-0"
                />
              )}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 overflow-hidden rounded-lg flex items-center justify-center bg-gray-800">
                    <Image
                      src="/avatar_placeholder.png"
                      alt={item.attributes.title}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-sm font-saira">Jonathan Stewart</span>
                </div>
                <p
                  className={`font-bold font-sairaCondensed leading-snug ${variant === PreviewVariant.IMAGE_LEFT ? "text-base line-clamp-2" : "text-lg line-clamp-3"
                    }`}
                >
                  {item.attributes.content}
                </p>

                <hr className="my-3 border-white/20" />
                <button className="text-sm font-medium font-saira hover:underline">
                  Daha Fazla Oku
                </button>
              </div>

            </div>
          ) : <p className="text-white text-center py-4">No items</p>);
      })}
    </>
  );
}
