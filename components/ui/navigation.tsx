import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// 1. Vertex Logo Icon
export const VertexLogoIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.5L3 6H8.5L12 12.5L15.5 6H21L12 21.5Z"
        fill="#F97316"
      />
    </svg>
  );
};

// 2. Brand Header / Navbar
export interface HeaderNavProps {
  activeTab?: "courses" | "my-learning";
  onTabChange?: (tab: "courses" | "my-learning") => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab = "courses",
  onTabChange,
}) => {
  return (
    <header className="w-full bg-white border-b border-[#E2E8F0] px-6 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <VertexLogoIcon className="w-6 h-6" />
          <span className="font-serif text-xl font-bold tracking-tight text-[#0F172A]">
            Vertex
          </span>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => onTabChange?.("courses")}
            className={`transition-colors ${
              activeTab === "courses"
                ? "text-[#F97316]"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => onTabChange?.("my-learning")}
            className={`transition-colors ${
              activeTab === "my-learning"
                ? "text-[#F97316]"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            My Learning
          </button>
        </nav>
      </div>
    </header>
  );
};

// 3. Breadcrumbs
export interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-xs text-[#64748B]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />}
            {isLast ? (
              <span className="font-medium text-[#0F172A]">{item.label}</span>
            ) : (
              <a
                href={item.href || "#"}
                className="hover:text-[#0F172A] transition-colors"
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

// 4. Pagination
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
}) => {
  const pages = [1, 2, 3, "...", totalPages];

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F1F5F9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p, i) => {
        if (typeof p === "string") {
          return (
            <span key={i} className="px-2 text-sm text-[#64748B]">
              {p}
            </span>
          );
        }
        const isActive = p === currentPage;
        return (
          <button
            key={i}
            onClick={() => onPageChange?.(p)}
            className={`w-9 h-9 flex items-center justify-center rounded-[8px] text-sm font-medium transition-colors ${
              isActive
                ? "border-2 border-[#F97316] text-[#F97316] bg-white font-semibold"
                : "border border-[#E2E8F0] bg-white text-[#334155] hover:bg-[#F1F5F9]"
            }`}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F1F5F9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
