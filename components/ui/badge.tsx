import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "video" | "lesson" | "popular";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "video",
  children,
  className = "",
  ...props
}) => {
  const variantStyles = {
    video: "bg-[#FFEEE5] text-[#F97316]",
    lesson: "bg-[#EFF6FF] text-[#2563EB]",
    popular: "bg-[#FFEEE5] text-[#F97316]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
