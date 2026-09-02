"use client";

import React, { useState } from "react";
import { VertexLogoIcon, HeaderNav, Breadcrumbs, Pagination } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { CourseCard, VideoLessonCard, TextLessonCard, ResourceCard } from "@/components/ui/card";
import {
  Bell,
  Search,
  Play,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  ExternalLink,
  Eye,
  LayoutGrid,
  Target,
  Accessibility,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"courses" | "my-learning">("courses");
  const [currentPage, setCurrentPage] = useState(1);
  const [progressVal, setProgressVal] = useState(35);

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] pb-24">
      {/* Top Header Nav Demo */}
      <HeaderNav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-6xl mx-auto px-6 pt-10 space-y-16">
        {/* Title Header Block */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#E2E8F0] pb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <VertexLogoIcon className="w-8 h-8" />
              <span className="font-serif text-2xl font-bold tracking-tight">Vertex</span>
            </div>
            <h1 className="font-serif text-display-1 text-[#0F172A] tracking-tight mb-4">
              Design System
            </h1>
            <p className="text-body-lg text-[#64748B] max-w-xl">
              A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences.
            </p>
          </div>
          <div className="self-start md:self-auto px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-xs font-semibold tracking-wider text-[#64748B] uppercase">
            VERSION 1.0 · MAY 2025
          </div>
        </header>

        {/* 01 COLORS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">01</span>
            <h2 className="text-heading-2 text-[#0F172A]">COLORS</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-3">Primary</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <ColorSwatch name="Primary 500" hex="#F97316" bg="bg-[#F97316]" />
                <ColorSwatch name="Primary 400" hex="#FB923C" bg="bg-[#FB923C]" />
                <ColorSwatch name="Primary 300" hex="#FDBA74" bg="bg-[#FDBA74]" />
                <ColorSwatch name="Primary 200" hex="#FED7AA" bg="bg-[#FED7AA]" />
                <ColorSwatch name="Primary 100" hex="#FFEEE5" bg="bg-[#FFEEE5]" border />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-3">Neutral</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                <ColorSwatch name="Neutral 900" hex="#0F172A" bg="bg-[#0F172A]" />
                <ColorSwatch name="Neutral 700" hex="#334155" bg="bg-[#334155]" />
                <ColorSwatch name="Neutral 500" hex="#64748B" bg="bg-[#64748B]" />
                <ColorSwatch name="Neutral 300" hex="#CBD5E1" bg="bg-[#CBD5E1]" />
                <ColorSwatch name="Neutral 200" hex="#E2E8F0" bg="bg-[#E2E8F0]" />
                <ColorSwatch name="Neutral 100" hex="#F1F5F9" bg="bg-[#F1F5F9]" />
                <ColorSwatch name="Neutral 50" hex="#FAFAFC" bg="bg-[#FAFAFC]" border />
                <ColorSwatch name="White" hex="#FFFFFF" bg="bg-white" border />
              </div>
            </div>
          </div>
        </section>

        {/* 02 & 03 TYPOGRAPHY & TYPE SCALE */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 02 Typography */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">02</span>
                <h2 className="text-heading-2 text-[#0F172A]">TYPOGRAPHY</h2>
              </div>

              <div className="space-y-6 bg-white p-6 rounded-[16px] border border-[#E2E8F0]">
                <div className="flex items-baseline justify-between border-b border-[#F1F5F9] pb-4">
                  <div>
                    <span className="font-serif text-4xl font-bold">Ag</span>
                    <h3 className="font-serif text-xl font-bold mt-1">Playfair Display</h3>
                    <p className="text-xs text-[#64748B]">Elegant · Readable · Timeless</p>
                  </div>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-sans text-4xl font-bold">Ag</span>
                    <h3 className="font-sans text-xl font-bold mt-1">Inter</h3>
                    <p className="text-xs text-[#64748B]">Clean · Modern · Highly legible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 Type Scale */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">03</span>
                <h2 className="text-heading-2 text-[#0F172A]">TYPE SCALE</h2>
              </div>

              <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] overflow-x-auto">
                <table className="w-full text-left text-xs text-[#64748B]">
                  <thead>
                    <tr className="border-b border-[#E2E8F0] text-[#0F172A] font-semibold">
                      <th className="pb-3">Style</th>
                      <th className="pb-3">Font</th>
                      <th className="pb-3">Size / Line Height</th>
                      <th className="pb-3">Weight</th>
                      <th className="pb-3">Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F1F5F9]">
                    <tr>
                      <td className="py-2.5 font-bold font-serif text-[#0F172A]">Display 1</td>
                      <td>Playfair Display</td>
                      <td>48 / 56</td>
                      <td>Bold</td>
                      <td>Page titles</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold font-serif text-[#0F172A]">Display 2</td>
                      <td>Playfair Display</td>
                      <td>36 / 44</td>
                      <td>Bold</td>
                      <td>Section titles</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-semibold text-[#0F172A]">Heading 1</td>
                      <td>Inter</td>
                      <td>28 / 36</td>
                      <td>Semi Bold</td>
                      <td>Card titles</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-semibold text-[#0F172A]">Heading 2</td>
                      <td>Inter</td>
                      <td>22 / 30</td>
                      <td>Semi Bold</td>
                      <td>Sub section</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-medium text-[#0F172A]">Heading 3</td>
                      <td>Inter</td>
                      <td>18 / 26</td>
                      <td>Medium</td>
                      <td>Small titles</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-[#0F172A]">Body Large</td>
                      <td>Inter</td>
                      <td>16 / 24</td>
                      <td>Regular</td>
                      <td>Body copy</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-[#0F172A]">Body</td>
                      <td>Inter</td>
                      <td>14 / 20</td>
                      <td>Regular</td>
                      <td>Supporting text</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-[#0F172A]">Small</td>
                      <td>Inter</td>
                      <td>12 / 16</td>
                      <td>Regular</td>
                      <td>Captions, meta</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 04 SPACING & 05 RADIUS & SHADOWS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 04 Spacing System */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">04</span>
              <h2 className="text-heading-2 text-[#0F172A]">SPACING SYSTEM</h2>
            </div>
            <p className="text-xs text-[#64748B]">Base unit: 4px</p>

            <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] flex flex-wrap items-end gap-4">
              <SpacingItem px={4} rem="0.25rem" width="w-1" />
              <SpacingItem px={8} rem="0.5rem" width="w-2" />
              <SpacingItem px={12} rem="0.75rem" width="w-3" />
              <SpacingItem px={16} rem="1rem" width="w-4" />
              <SpacingItem px={24} rem="1.5rem" width="w-6" />
              <SpacingItem px={32} rem="2rem" width="w-8" />
              <SpacingItem px={40} rem="2.5rem" width="w-10" />
              <SpacingItem px={48} rem="3rem" width="w-12" />
              <SpacingItem px={64} rem="4rem" width="w-16" />
            </div>
          </div>

          {/* 05 Radius & Shadows */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">05</span>
              <h2 className="text-heading-2 text-[#0F172A]">RADIUS & SHADOWS</h2>
            </div>

            <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Radius</h3>
                <div className="flex flex-wrap gap-4 text-center text-xs">
                  <div>
                    <div className="w-12 h-12 bg-[#FFEEE5] border border-[#FDBA74] rounded-xs mb-1 mx-auto" />
                    <span>4px (xs)</span>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-[#FFEEE5] border border-[#FDBA74] rounded-sm mb-1 mx-auto" />
                    <span>8px (sm)</span>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-[#FFEEE5] border border-[#FDBA74] rounded-md mb-1 mx-auto" />
                    <span>12px (md)</span>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-[#FFEEE5] border border-[#FDBA74] rounded-lg mb-1 mx-auto" />
                    <span>16px (lg)</span>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-[#FFEEE5] border border-[#FDBA74] rounded-xl mb-1 mx-auto" />
                    <span>24px (xl)</span>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-[#FFEEE5] border border-[#FDBA74] rounded-full mb-1 mx-auto" />
                    <span>Full (circle)</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#F1F5F9] pt-4">
                <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Shadows</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-white rounded-md shadow-sm border border-[#E2E8F0] text-center">
                    <span className="font-semibold block">Sm</span>
                    <span className="text-[10px] text-[#64748B]">0 1px 2px</span>
                  </div>
                  <div className="p-3 bg-white rounded-md shadow-md border border-[#E2E8F0] text-center">
                    <span className="font-semibold block">Md</span>
                    <span className="text-[10px] text-[#64748B]">0 4px 12px</span>
                  </div>
                  <div className="p-3 bg-white rounded-md shadow-lg border border-[#E2E8F0] text-center">
                    <span className="font-semibold block">Lg</span>
                    <span className="text-[10px] text-[#64748B]">0 12px 24px</span>
                  </div>
                  <div className="p-3 bg-white rounded-md shadow-xl border border-[#E2E8F0] text-center">
                    <span className="font-semibold block">Xl</span>
                    <span className="text-[10px] text-[#64748B]">0 20px 40px</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 ICONS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">06</span>
            <h2 className="text-heading-2 text-[#0F172A]">ICONS</h2>
          </div>

          <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Outline Style</h3>
                <div className="flex flex-wrap gap-4 text-[#0F172A]">
                  <Bell className="w-6 h-6 stroke-[2px]" />
                  <Search className="w-6 h-6 stroke-[2px]" />
                  <Play className="w-6 h-6 stroke-[2px]" />
                  <FileText className="w-6 h-6 stroke-[2px]" />
                  <Bookmark className="w-6 h-6 stroke-[2px]" />
                  <BarChart2 className="w-6 h-6 stroke-[2px]" />
                  <Clock className="w-6 h-6 stroke-[2px]" />
                  <User className="w-6 h-6 stroke-[2px]" />
                  <ChevronRight className="w-6 h-6 stroke-[2px]" />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Filled Style</h3>
                <div className="flex flex-wrap gap-4 text-[#0F172A]">
                  <Bell className="w-6 h-6 fill-[#0F172A]" />
                  <Search className="w-6 h-6 fill-[#0F172A]" />
                  <Play className="w-6 h-6 fill-[#0F172A]" />
                  <FileText className="w-6 h-6 fill-[#0F172A]" />
                  <Bookmark className="w-6 h-6 fill-[#0F172A]" />
                  <BarChart2 className="w-6 h-6 fill-[#0F172A]" />
                  <Clock className="w-6 h-6 fill-[#0F172A]" />
                  <User className="w-6 h-6 fill-[#0F172A]" />
                  <ChevronRight className="w-6 h-6 stroke-[2px]" />
                </div>
              </div>
            </div>

            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-[#F1F5F9] pt-4 md:pt-0 md:pl-6 text-xs text-[#64748B] space-y-1.5">
              <h3 className="font-semibold text-[#0F172A] mb-2">Icon Specs</h3>
              <p>· 24x24px grid</p>
              <p>· 2px stroke width (outline)</p>
              <p>· Rounded line caps</p>
              <p>· Consistent optical balance</p>
            </div>
          </div>
        </section>

        {/* 07 BUTTONS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">07</span>
            <h2 className="text-heading-2 text-[#0F172A]">BUTTONS</h2>
          </div>

          <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] overflow-x-auto space-y-6">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-[#64748B] font-semibold">
                  <th className="pb-3">State</th>
                  <th className="pb-3">Primary</th>
                  <th className="pb-3">Secondary</th>
                  <th className="pb-3">Tertiary</th>
                  <th className="pb-3">Text</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                <tr>
                  <td className="py-4 font-semibold text-[#0F172A]">Default</td>
                  <td className="py-4">
                    <Button variant="primary">Get Started</Button>
                  </td>
                  <td className="py-4">
                    <Button variant="secondary">Explore Courses</Button>
                  </td>
                  <td className="py-4">
                    <Button variant="tertiary" iconRight={<ExternalLink className="w-4 h-4" />}>
                      View Lesson
                    </Button>
                  </td>
                  <td className="py-4">
                    <Button variant="text" iconRight={<Play className="w-4 h-4 fill-current" />}>
                      Watch Video
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-[#0F172A]">Hover (Simulated)</td>
                  <td className="py-4">
                    <Button variant="primary" className="bg-[#FB923C]">
                      Get Started
                    </Button>
                  </td>
                  <td className="py-4">
                    <Button variant="secondary" className="bg-[#FFEEE5]/50 border-[#FDBA74]">
                      Explore Courses
                    </Button>
                  </td>
                  <td className="py-4">
                    <Button variant="tertiary" className="bg-[#F1F5F9] text-[#0F172A]" iconRight={<ExternalLink className="w-4 h-4" />}>
                      View Lesson
                    </Button>
                  </td>
                  <td className="py-4">
                    <Button variant="text" className="bg-[#FFEEE5]/40 text-[#EA580C]" iconRight={<Play className="w-4 h-4 fill-current" />}>
                      Watch Video
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-[#0F172A]">Disabled</td>
                  <td className="py-4">
                    <Button variant="primary" disabled>
                      Get Started
                    </Button>
                  </td>
                  <td className="py-4">
                    <Button variant="secondary" disabled>
                      Explore Courses
                    </Button>
                  </td>
                  <td className="py-4">
                    <Button variant="tertiary" disabled iconRight={<ExternalLink className="w-4 h-4" />}>
                      View Lesson
                    </Button>
                  </td>
                  <td className="py-4">
                    <Button variant="text" disabled iconRight={<Play className="w-4 h-4 fill-current" />}>
                      Watch Video
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="border-t border-[#F1F5F9] pt-4 text-xs text-[#64748B] flex flex-wrap gap-6">
              <span><strong>Button Specs:</strong></span>
              <span>Height: 44px (default)</span>
              <span>Padding: 0 16px (lg), 0 12px (md)</span>
              <span>Radius: 12px</span>
              <span>Font: Inter Medium (14-16px)</span>
            </div>
          </div>
        </section>

        {/* 08 INPUTS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">08</span>
            <h2 className="text-heading-2 text-[#0F172A]">INPUTS</h2>
          </div>

          <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                  Search / Text Input
                </label>
                <Input placeholder="Search anything..." />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                  Select
                </label>
                <Select
                  options={[
                    { label: "Most Relevant", value: "relevant" },
                    { label: "Newest First", value: "newest" },
                    { label: "Popular", value: "popular" },
                  ]}
                />
              </div>
            </div>

            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-[#F1F5F9] pt-4 md:pt-0 md:pl-6 text-xs text-[#64748B] space-y-1.5">
              <h3 className="font-semibold text-[#0F172A] mb-2">Field Specs</h3>
              <p>· Height: 44px</p>
              <p>· Radius: 12px</p>
              <p>· Border: 1px solid #E2E8F0</p>
              <p>· Padding: 0 16px</p>
              <p>· Focus: Border color #FB923C</p>
            </div>
          </div>
        </section>

        {/* 09 BADGES / TAGS & 10 STATUS & 11 PROGRESS BAR */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 09 Badges */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">09</span>
              <h2 className="text-heading-2 text-[#0F172A]">BADGES / TAGS</h2>
            </div>
            <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] flex items-center justify-around">
              <div className="text-center space-y-2">
                <span className="block text-xs text-[#64748B]">Video</span>
                <Badge variant="video">VIDEO</Badge>
              </div>
              <div className="text-center space-y-2">
                <span className="block text-xs text-[#64748B]">Lesson</span>
                <Badge variant="lesson">LESSON</Badge>
              </div>
              <div className="text-center space-y-2">
                <span className="block text-xs text-[#64748B]">Popular</span>
                <Badge variant="popular">POPULAR</Badge>
              </div>
            </div>
          </div>

          {/* 10 Status */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">10</span>
              <h2 className="text-heading-2 text-[#0F172A]">STATUS / INDICATORS</h2>
            </div>
            <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] flex flex-wrap items-center gap-4 justify-around">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now-playing" />
              <StatusIndicator status="locked" />
            </div>
          </div>

          {/* 11 Progress Bar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">11</span>
              <h2 className="text-heading-2 text-[#0F172A]">PROGRESS BAR</h2>
            </div>
            <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] space-y-4">
              <ProgressBar value={progressVal} />
              <div className="flex items-center justify-between text-xs text-[#64748B]">
                <span>Interactive Demo:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setProgressVal(Math.max(0, progressVal - 15))}
                    className="px-2 py-0.5 rounded border border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  >
                    -15%
                  </button>
                  <button
                    onClick={() => setProgressVal(Math.min(100, progressVal + 15))}
                    className="px-2 py-0.5 rounded border border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  >
                    +15%
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 CARDS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">12</span>
            <h2 className="text-heading-2 text-[#0F172A]">CARDS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CourseCard
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              level="Intermediate"
              duration="18h 24m"
              modulesCount="12 modules"
            />

            <VideoLessonCard
              title="Data Fetching in Server Components"
              summary="Learn how to fetch data on the server using async/await and Next.js best practices."
              lessonLabel="Lesson 5.1"
              timestamp="12:45"
            />

            <TextLessonCard
              title="Data Fetching & Caching"
              summary="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
              moduleLabel="Module 5"
            />

            <ResourceCard
              title="Caching and Revalidation Guide"
              description="Deep dive into Next.js caching strategies."
              fileType="PDF"
              fileSize="1.2 MB"
            />
          </div>
        </section>

        {/* 13 NAVIGATION */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">13</span>
            <h2 className="text-heading-2 text-[#0F172A]">NAVIGATION</h2>
          </div>

          <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] space-y-8">
            <div>
              <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Breadcrumbs</h3>
              <Breadcrumbs
                items={[
                  { label: "All Courses", href: "#" },
                  { label: "Next.js for Production", href: "#" },
                  { label: "Data Fetching & Caching" },
                ]}
              />
            </div>

            <div className="border-t border-[#F1F5F9] pt-6">
              <h3 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Pagination</h3>
              <Pagination
                currentPage={currentPage}
                totalPages={8}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </section>

        {/* 14 PRINCIPLES */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">14</span>
            <h2 className="text-heading-2 text-[#0F172A]">PRINCIPLES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PrincipleCard
              icon={<Eye className="w-6 h-6 text-[#F97316]" />}
              title="Clarity First"
              description="Every element should communicate clearly."
            />
            <PrincipleCard
              icon={<LayoutGrid className="w-6 h-6 text-[#F97316]" />}
              title="Consistency"
              description="Use components and patterns consistently across the platform."
            />
            <PrincipleCard
              icon={<Target className="w-6 h-6 text-[#F97316]" />}
              title="Focus & Calm"
              description="Remove noise and help learners focus on what matters."
            />
            <PrincipleCard
              icon={<Accessibility className="w-6 h-6 text-[#F97316]" />}
              title="Accessible"
              description="Design with accessibility and inclusivity in mind."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function ColorSwatch({
  name,
  hex,
  bg,
  border = false,
}: {
  name: string;
  hex: string;
  bg: string;
  border?: boolean;
}) {
  return (
    <div className="rounded-[12px] border border-[#E2E8F0] bg-white overflow-hidden shadow-sm">
      <div className={`h-16 w-full ${bg} ${border ? "border-b border-[#E2E8F0]" : ""}`} />
      <div className="p-3">
        <h4 className="text-xs font-semibold text-[#0F172A]">{name}</h4>
        <p className="text-[11px] text-[#64748B] font-mono uppercase">{hex}</p>
      </div>
    </div>
  );
}

function SpacingItem({
  px,
  rem,
  width,
}: {
  px: number;
  rem: string;
  width: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`h-12 bg-[#FFEEE5] border border-[#FDBA74] rounded-sm ${width}`} />
      <div className="text-center text-[11px]">
        <span className="font-semibold block text-[#0F172A]">{px}</span>
        <span className="text-[#64748B]">{rem}</span>
      </div>
    </div>
  );
}

function PrincipleCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-[16px] border border-[#E2E8F0] bg-white space-y-3 shadow-sm">
      <div className="p-2.5 rounded-lg bg-[#FFEEE5] w-fit">{icon}</div>
      <h3 className="text-heading-3 font-semibold text-[#0F172A]">{title}</h3>
      <p className="text-body text-[#64748B]">{description}</p>
    </div>
  );
}
