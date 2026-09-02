import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "md" | "lg";
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "lg",
      children,
      iconLeft,
      iconRight,
      disabled,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] disabled:cursor-not-allowed text-sm rounded-[12px] select-none";

    const sizeStyles =
      size === "lg" ? "h-[44px] px-4 gap-2" : "h-[36px] px-3 gap-1.5";

    const variantStyles = {
      primary: disabled
        ? "bg-[#FFEEE5] text-[#FDBA74]"
        : "bg-[#F97316] text-white hover:bg-[#FB923C] active:bg-[#EA580C]",
      secondary: disabled
        ? "border border-[#E2E8F0] bg-[#FAFAFC] text-[#CBD5E1]"
        : "border border-[#E2E8F0] bg-white text-[#F97316] hover:bg-[#FFEEE5]/50 hover:border-[#FDBA74]",
      tertiary: disabled
        ? "border border-[#E2E8F0] bg-white text-[#CBD5E1]"
        : "border border-[#E2E8F0] bg-white text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0F172A]",
      text: disabled
        ? "text-[#CBD5E1]"
        : "text-[#F97316] hover:text-[#EA580C] bg-transparent hover:bg-[#FFEEE5]/40",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
