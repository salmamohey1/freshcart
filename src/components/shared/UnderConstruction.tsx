"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Rocket } from "lucide-react";

interface UnderConstructionProps {
  title: string;
  description?: string;
}

export default function UnderConstruction({
  title,
  description,
}: UnderConstructionProps) {
  return (
    <div className="bg-white min-h-[75vh] flex flex-col">
      {/* Breadcrumb */}
      <div className="border-b border-[#F2F2F2] py-4">
        <div className="container px-4">
          <nav className="flex items-center gap-2 text-[14px]">
            <Link
              href="/"
              className="text-[#808080] hover:text-[#7c1aff] transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-[#B3B3B3]" />
            <span className="text-[#7c1aff] font-semibold">{title}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="w-24 h-24 bg-[#F3E8FF] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
          <Rocket size={38} className="text-[#7c1aff]" />
        </div>

        {/* Title */}
        <h1 className="text-[34px] md:text-[46px] font-extrabold text-[#1A1A1A] mb-4 tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-[#666666] text-lg mb-10 leading-relaxed font-medium">
          {description ||
            "Something fresh is launching soon. We're preparing an enhanced shopping experience filled with premium products and exciting new features just for you."}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="px-10 py-4 bg-[#7c1aff] text-white rounded-2xl font-bold shadow-md hover:bg-[#6d14e6] transition-all active:scale-95 flex items-center justify-center gap-2 group"
          >
            Back to Home
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/products"
            className="px-10 py-4 border border-[#E5E5E5] text-[#1A1A1A] rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
}