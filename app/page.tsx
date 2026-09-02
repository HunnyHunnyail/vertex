"use client";

import React, { useState } from "react";
import { HeaderNav } from "@/components/ui/navigation";
import { CourseCard } from "@/components/ui/card";
import { Search, ArrowRight, Star } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"courses" | "my-learning">("courses");

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] relative flex flex-col justify-between overflow-hidden">
      {/* Background Subtle Hatch / Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 10px)`
        }}
      />

      {/* Top Sticky Navigation Bar */}
      <HeaderNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-20 pb-20 w-full flex-1 space-y-20">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF4EE] border border-[#FDBA74]/50 shadow-2xs">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#EA580C]">
              INTELLIGENT LEARNING
            </span>
          </div>

          {/* Main Title Heading */}
          <h1 className="font-serif text-[44px] sm:text-[54px] md:text-[62px] leading-[1.1] font-bold text-[#0F172A] tracking-tight">
            Search your learning <br className="hidden sm:inline" />
            in plain English.
          </h1>

          {/* Subtitle Description */}
          <p className="text-[16px] sm:text-[18px] leading-[26px] text-[#64748B] max-w-xl">
            Vertex understands what you want to learn and finds the exact lessons across all your courses.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="bg-[#E05627] hover:bg-[#C8491D] active:scale-[0.98] text-white font-medium text-[15px] px-6 py-3 rounded-xl shadow-xs inline-flex items-center gap-2.5 transition-all cursor-pointer">
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar Input Container */}
          <div className="pt-4 w-full max-w-2xl">
            <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-4 flex items-center justify-between gap-3 hover:border-[#CBD5E1] transition-all cursor-text group">
              <div className="flex items-center gap-3.5 flex-1">
                <Search className="w-5 h-5 text-[#94A3B8] group-hover:text-[#64748B] transition-colors stroke-[2]" />
                <input
                  type="text"
                  placeholder="Ask anything about your learning..."
                  className="w-full bg-transparent text-[15px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none font-sans"
                />
              </div>
              <div className="hidden sm:inline-flex items-center gap-1 border border-[#E2E8F0] rounded-md px-2.5 py-1 text-xs font-semibold text-[#64748B] bg-[#F8FAFC]">
                <span>⌘</span>
                <span>K</span>
              </div>
            </div>
          </div>
        </section>

        {/* ALL COURSES SECTION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-t border-[#E2E8F0]/80 pt-10">
            <h2 className="font-serif text-[26px] font-bold text-[#0F172A]">
              All Courses
            </h2>
            <a
              href="#all-courses"
              className="text-[#EA580C] hover:text-[#C2410C] font-medium text-[14px] inline-flex items-center gap-1.5 transition-colors"
            >
              View all courses
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3 Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Next.js for Production */}
            <CourseCard
              logo={
                <div className="w-14 h-14 rounded-xl bg-[#0F172A] text-white flex items-center justify-center shadow-xs">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 180 180">
                    <path fill="currentColor" d="M117 122.5L62.7 52H52v76h12.8V74.8l47.2 60.9c1.7-1 3.3-2.1 5-3.2z" />
                    <path fill="currentColor" d="M127.5 52h-12.8v76h12.8z" />
                  </svg>
                </div>
              }
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              level="Intermediate"
              duration="18h 24m"
              modulesCount="12 modules"
            />

            {/* Card 2: Docker Essentials */}
            <CourseCard
              logo={
                <div className="w-14 h-14 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shadow-xs">
                  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.185.185 0 00.186-.186V3.575a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m0 2.716h2.118a.186.186 0 00.186-.186V6.291a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m0 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-2.714h2.119a.185.185 0 00.185-.186V6.291a.185.185 0 00-.185-.185H8.075a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m0 2.714h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H8.075a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.12a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185m0-2.714h2.119a.186.186 0 00.185-.186V6.291a.186.186 0 00-.185-.185H5.12a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.954 2.714h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H2.166a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185m-.05 1.547a8.552 8.552 0 00-1.849 5.378c0 4.195 3.864 5.313 7.848 5.313 4.887 0 9.076-2.105 11.233-6.521.849.07 2.196-.464 2.62-1.32-.472-.323-1.42-.486-2.222-.163-.448-1.543-1.854-2.883-3.642-2.883H.066z"/>
                  </svg>
                </div>
              }
              title="Docker Essentials"
              description="Containerize applications and streamline your development workflow."
              level="Beginner"
              duration="10h 12m"
              modulesCount="8 modules"
            />

            {/* Card 3: TypeScript Deep Dive */}
            <CourseCard
              logo={
                <div className="w-14 h-14 rounded-xl bg-[#3178C6] text-white flex items-center justify-center font-bold text-2xl tracking-tighter shadow-xs">
                  TS
                </div>
              }
              title="TypeScript Deep Dive"
              description="Go beyond the basics and write safer, more expressive code."
              level="Intermediate"
              duration="14h 36m"
              modulesCount="10 modules"
            />

          </div>
        </section>

        {/* SUB-FOOTER DIVIDER & MESSAGE */}
        <section className="pt-6">
          <div className="flex items-center gap-4 max-w-xl mx-auto text-center">
            <div className="h-[1px] bg-[#E2E8F0] flex-1" />
            <div className="flex items-center gap-2 text-[13px] text-[#64748B]">
              <Star className="w-4 h-4 text-[#EA580C] stroke-[2]" />
              <span>New courses and lessons added every week.</span>
            </div>
            <div className="h-[1px] bg-[#E2E8F0] flex-1" />
          </div>
        </section>

      </main>

      {/* FOOTER WARM GRADIENT BAR GRAPHIC */}
      <footer className="relative w-full h-44 overflow-hidden pointer-events-none mt-auto">
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-end gap-3 sm:gap-6 px-4">
          <div className="w-12 sm:w-20 h-28 bg-gradient-to-t from-[#EA580C]/25 via-[#F97316]/10 to-transparent rounded-t-lg opacity-40" />
          <div className="w-14 sm:w-24 h-36 bg-gradient-to-t from-[#EA580C]/35 via-[#F97316]/15 to-transparent rounded-t-lg opacity-60" />
          <div className="w-16 sm:w-28 h-44 bg-gradient-to-t from-[#EA580C]/45 via-[#F97316]/20 to-transparent rounded-t-lg opacity-80" />
          <div className="w-20 sm:w-32 h-32 bg-gradient-to-t from-[#EA580C]/30 via-[#F97316]/10 to-transparent rounded-t-lg opacity-50" />
          <div className="w-14 sm:w-24 h-40 bg-gradient-to-t from-[#EA580C]/40 via-[#F97316]/15 to-transparent rounded-t-lg opacity-70" />
          <div className="w-12 sm:w-20 h-24 bg-gradient-to-t from-[#EA580C]/20 via-[#F97316]/5 to-transparent rounded-t-lg opacity-30" />
        </div>
      </footer>
    </div>
  );
}
