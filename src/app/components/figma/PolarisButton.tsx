import React from "react";
import { cn } from "@/lib/utils";

interface PolarisButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function PolarisButton({ 
  variant = "secondary", 
  className, 
  children, 
  ...props 
}: PolarisButtonProps) {
  
  if (variant === "primary") {
    return (
      <button 
        className={cn(
          "group relative flex items-center justify-center px-[12px] py-[6px] rounded-[8px]",
          "bg-[#303030] dark:bg-[#303030]", // Using specific color from import, could map to bg-foreground
          "text-white text-[12px] font-semibold leading-[16px]",
          "transition-all active:scale-[0.98]",
          className
        )}
        style={{ fontFamily: "var(--font-family-primary)" }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        
        {/* Shine / Bevel Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-[8px] overflow-hidden">
           {/* Gradient overlay mimicking the Figma 'shine' layer */}
           <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.07)] from-[82.137%] to-[rgba(255,255,255,0.15)] to-[94.444%]" />
           
           {/* Inner Shadows for bevel effect */}
           <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.2),inset_2px_0px_0px_0px_rgba(255,255,255,0.2),inset_-2px_0px_0px_0px_rgba(255,255,255,0.2),inset_0px_-1px_0px_1px_black,inset_0px_1px_0px_0px_black]" />
        </div>
      </button>
    );
  }

  // Secondary Variant (mimicking standard Polaris secondary button but cleaner)
  return (
    <button 
      className={cn(
        "flex items-center justify-center px-[12px] py-[6px] rounded-[8px]",
        "bg-white border border-[#e3e3e3] text-[#303030]", // Standard Polaris colors roughly
        "shadow-sm hover:bg-[#fcfcfc] active:bg-[#f6f6f6]",
        "text-[12px] font-medium leading-[16px]",
        "transition-all active:scale-[0.98]",
        className
      )}
      style={{ fontFamily: "var(--font-family-primary)" }}
      {...props}
    >
      {children}
    </button>
  );
}
