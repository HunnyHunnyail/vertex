import React from "react";
import { Badge } from "./badge";
import { PlayCircle, ExternalLink, FileText, Clock, Layers, Signal } from "lucide-react";

// 1. Course Card
export interface CourseCardProps {
  logo?: React.ReactNode;
  title: string;
  description: string;
  level?: string;
  duration?: string;
  modulesCount?: string;
  onClick?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  logo,
  title,
  description,
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = "12 modules",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col justify-between rounded-[20px] border border-[#E2E8F0] bg-white p-7 shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all cursor-pointer"
    >
      <div>
        <div className="mb-5 flex items-center">{logo}</div>
        <h3 className="font-serif text-[20px] leading-[28px] text-[#0F172A] font-semibold mb-3 group-hover:text-[#EA580C] transition-colors">
          {title}
        </h3>
        <p className="text-[14px] leading-[22px] text-[#64748B] mb-8 font-normal">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between text-[12px] text-[#64748B] border-t border-[#F1F5F9] pt-4 font-medium gap-2">
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          <Signal className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
          {level}
        </span>
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          <Clock className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
          {duration}
        </span>
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          <Layers className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
          {modulesCount}
        </span>
      </div>
    </div>
  );
};

// 2. Lesson Card (Video)
export interface VideoLessonCardProps {
  title: string;
  summary: string;
  lessonLabel?: string;
  timestamp?: string;
  onClick?: () => void;
}

export const VideoLessonCard: React.FC<VideoLessonCardProps> = ({
  title,
  summary,
  lessonLabel = "Lesson 5.1",
  timestamp = "12:45",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col justify-between rounded-[16px] border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#CBD5E1] cursor-pointer"
    >
      <div>
        <div className="mb-3">
          <Badge variant="video">VIDEO</Badge>
        </div>
        <h3 className="text-heading-3 text-[#0F172A] font-semibold mb-2 group-hover:text-[#F97316] transition-colors">
          {title}
        </h3>
        <p className="text-body text-[#64748B] line-clamp-2 mb-6">{summary}</p>
      </div>

      <div className="flex items-center justify-between border-t border-[#F1F5F9] pt-4 text-xs text-[#64748B]">
        <span>
          {lessonLabel} · {timestamp}
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-[#F97316] group-hover:text-[#EA580C]">
          <PlayCircle className="w-4 h-4 fill-[#F97316] text-white" />
          Watch from {timestamp}
        </span>
      </div>
    </div>
  );
};

// 3. Lesson Card (Lesson)
export interface TextLessonCardProps {
  title: string;
  summary: string;
  moduleLabel?: string;
  onClick?: () => void;
}

export const TextLessonCard: React.FC<TextLessonCardProps> = ({
  title,
  summary,
  moduleLabel = "Module 5",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col justify-between rounded-[16px] border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#CBD5E1] cursor-pointer"
    >
      <div>
        <div className="mb-3">
          <Badge variant="lesson">LESSON</Badge>
        </div>
        <h3 className="text-heading-3 text-[#0F172A] font-semibold mb-2 group-hover:text-[#F97316] transition-colors">
          {title}
        </h3>
        <p className="text-body text-[#64748B] line-clamp-2 mb-6">{summary}</p>
      </div>

      <div className="flex items-center justify-between border-t border-[#F1F5F9] pt-4 text-xs text-[#64748B]">
        <span>{moduleLabel}</span>
        <span className="inline-flex items-center gap-1 font-medium text-[#F97316] group-hover:text-[#EA580C]">
          View lesson
          <ExternalLink className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};

// 4. Resource Card
export interface ResourceCardProps {
  title: string;
  description: string;
  fileType?: string;
  fileSize?: string;
  onClick?: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  fileType = "PDF",
  fileSize = "1.2 MB",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col justify-between rounded-[16px] border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#CBD5E1] cursor-pointer"
    >
      <div>
        <div className="mb-4 inline-flex items-center justify-center p-2 rounded-lg bg-[#F1F5F9] text-[#334155]">
          <FileText className="w-6 h-6 text-[#334155]" />
        </div>
        <h3 className="text-heading-3 text-[#0F172A] font-semibold mb-2 group-hover:text-[#F97316] transition-colors">
          {title}
        </h3>
        <p className="text-body text-[#64748B] line-clamp-2 mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-[#F1F5F9] pt-4 text-xs text-[#64748B]">
        <span>
          {fileType} · {fileSize}
        </span>
        <ExternalLink className="w-4 h-4 text-[#F97316] group-hover:text-[#EA580C]" />
      </div>
    </div>
  );
};
