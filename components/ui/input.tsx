import React from "react";
import { Search, ChevronDown } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  shortcut?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon = <Search className="w-5 h-5 text-[#64748B]" />, shortcut = "⌘ K", className = "", ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full max-w-md">
        {icon && (
          <div className="absolute left-4 pointer-events-none flex items-center justify-center text-[#64748B]">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={`h-[44px] w-full rounded-[12px] border border-[#E2E8F0] bg-white pl-11 pr-12 text-sm text-[#0F172A] placeholder:text-[#64748B] outline-none transition-colors focus:border-[#FB923C] focus:ring-1 focus:ring-[#FB923C] ${className}`}
          {...props}
        />
        {shortcut && (
          <div className="absolute right-3.5 pointer-events-none flex items-center justify-center rounded-md border border-[#E2E8F0] bg-[#F1F5F9] px-1.5 py-0.5 text-[11px] font-medium text-[#64748B]">
            {shortcut}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className = "", ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full max-w-xs">
        <select
          ref={ref}
          className={`h-[44px] w-full appearance-none rounded-[12px] border border-[#E2E8F0] bg-white pl-4 pr-10 text-sm font-medium text-[#0F172A] outline-none transition-colors focus:border-[#FB923C] focus:ring-1 focus:ring-[#FB923C] cursor-pointer ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3.5 pointer-events-none flex items-center justify-center text-[#64748B]">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
