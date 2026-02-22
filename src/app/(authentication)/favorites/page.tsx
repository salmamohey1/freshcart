"use client";

import React from "react";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function FavoritesPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-2">
          My Favorites
        </h1>
        <p className="text-[#666666] font-medium">
          Quickly access the products you love the most.
        </p>
      </div>

      {/* Empty State Card */}
      <div className="p-20 text-center bg-white border border-[#F2F2F2] rounded-[32px] shadow-sm">
        <div className="w-20 h-20 bg-[#F3E8FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Heart size={38} className="text-[#7c1aff]" />
        </div>

        <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-4 tracking-tight">
          No favorites yet
        </h2>

        <p className="text-[#777777] mb-8 max-w-sm mx-auto font-medium">
          Save products you love and they’ll appear here for quick access anytime.
        </p>

        <Link
          href="/products"
          className="px-10 py-4 bg-[#7c1aff] text-white rounded-2xl font-bold shadow-md hover:bg-[#6d14e6] transition-all active:scale-95 inline-block"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}