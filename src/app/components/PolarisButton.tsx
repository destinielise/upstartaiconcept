import React from "react";
import { cn } from "./ui/utils";

interface PolarisButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "sm";
}

export function PolarisButton({ 
  variant = "primary", 
  size = "sm", // Default to sm to match the Figma import's compact look
  className, 
  children, 
  ...props 
}: PolarisButtonProps) {
  
  const isPrimary = variant === "primary";
  
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        
        // Sizes
        size === "sm" ? "px-3 py-1.5 text-xs h-7 rounded-[8px]" : "px-4 py-2 text-sm h-9 rounded-[8px]",
        
        // Variants
        isPrimary 
          ? "bg-[#303030] text-white hover:bg-[#2a2a2a] shadow-sm" 
          : "bg-white text-[#303030] border border-[#e3e3e3] hover:bg-[#f9f9f9] shadow-sm",
          
        className
      )}
      {...props}
    >
      {/* Content */}
      <span className={cn(
        "relative z-10 flex items-center gap-2", 
        isPrimary ? "font-semibold" : "font-medium"
      )}>
        {children}
      </span>

      {/* Shine Effect - Only for Primary (replicating Figma import) */}
      {isPrimary && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-[8px]">
             {/* The shine element is fixed height 28px in the import, centered */}
             <div className="-scale-y-100 flex-none h-[28px] rotate-180 w-[57px] opacity-100">
                <div className="relative size-full">
                    <div className="absolute bg-gradient-to-b from-[82.137%] from-[rgba(255,255,255,0.07)] inset-0 rounded-[8px] to-[94.444%] to-[rgba(255,255,255,0.15)]">
                        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.2),inset_2px_0px_0px_0px_rgba(255,255,255,0.2),inset_-2px_0px_0px_0px_rgba(255,255,255,0.2),inset_0px_-1px_0px_1px_black,inset_0px_1px_0px_0px_black]" />
                    </div>
                </div>
            </div>
        </div>
      )}
    </button>
  );
}
