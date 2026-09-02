import React from "react";

export interface ProgressBarProps {
  value: number; // 0 - 100
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  showLabel = true,
  className = "",
}) => {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={`flex items-center gap-4 w-full ${className}`}>
      <div className="relative h-2 flex-1 w-full rounded-full bg-[#E2E8F0] overflow-hidden">
        <div
          className="h-full bg-[#F97316] transition-all duration-300 rounded-full"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-[#64748B] shrink-0">
          <strong className="text-[#0F172A]">{clamped}%</strong> complete
        </span>
      )}
    </div>
  );
};
