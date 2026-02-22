"use client";

import Link from "next/link";
import Image from "next/image";
import errorImg from "../assets/images/404.svg.png";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      {/* Image */}
      <div className="relative w-full max-w-[480px] mb-10">
        <Image
          src={errorImg}
          alt="Page not found illustration"
          width={480}
          height={320}
          className="mx-auto"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#1A1A1A] mb-4 tracking-tight">
        404 — Page Not Found
      </h1>

      {/* Description */}
      <p className="max-w-lg text-[#666666] text-lg mb-10 leading-relaxed font-medium">
        The page you’re looking for doesn’t exist or may have been moved.
        Let’s take you back to something fresh and exciting.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="px-10 py-4 bg-[#7c1aff] text-white rounded-2xl font-bold shadow-md hover:bg-[#6d14e6] transition-all active:scale-95"
      >
        Back to Home
      </Link>
    </main>
  );
}