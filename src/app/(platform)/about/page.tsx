"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Users,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary-900/20 to-transparent" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary-600 text-white text-[12px] font-black uppercase tracking-widest rounded-full mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Revolutionizing the way you{" "}
              <span className="text-primary-500">shop</span> online.
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10 max-w-2xl">
              FreshCart was created with a simple mission: to bring premium
              products closer to everyone, anytime, anywhere, while offering a
              smooth, enjoyable, and trustworthy shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="-mt-12 relative z-20 pb-24">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Active Users", value: "500k+", icon: Users },
              { label: "Partner Brands", value: "1,200+", icon: Award },
              { label: "Daily Orders", value: "15k+", icon: Leaf },
              { label: "Global Presence", value: "45+", icon: Globe },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[32px] shadow-md shadow-slate-200/50 border border-slate-100 group hover:border-primary-200 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <stat.icon size={24} />
                </div>
                <p className="text-4xl font-black text-slate-900 tracking-tighter mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[60px] overflow-hidden shadow-md shadow-primary-900/10">
                <Image
                  src="https://images.pexels.com/photos/9705821/pexels-photo-9705821.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Our Mission"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-600 rounded-[40px] flex items-center justify-center text-white p-8 shadow-md">
                <p className="text-lg font-black leading-tight italic">
                  "Picked for quality, delivered with care."
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-1 bg-primary-600 rounded-full" />
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  To provide a curated selection of premium products that
                  enhance the daily lives of our customers, supported by
                  world-class technology and customer service.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-1 bg-slate-300 rounded-full" />
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  To become the world's most trusted and sustainable e-commerce
                  platform, leading the industry in innovation, transparency,
                  and social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="bg-primary-600 rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all duration-700" />

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-8">
              Join our community of <br /> happy shoppers today.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/products"
                className="btn bg-white text-primary-600 px-10 py-5 text-lg font-black rounded-2xl hover:bg-slate-50 shadow-xl active:scale-95 transition-all"
              >
                Start Shopping Now
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-white font-black hover:gap-4 transition-all"
              >
                Contact Our Support <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}