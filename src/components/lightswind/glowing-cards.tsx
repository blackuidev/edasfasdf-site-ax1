import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

// This is the main container, which provides a grid layout.
export const GlowingCardsRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", className)}>
      {children}
    </div>
  );
};

// This is the individual card which manages its own hover state for the glow effect.
export const GlowingCards = ({
  children,
  className,
  glowClassName,
}: {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
}) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
      className={cn(
        "relative h-full w-full rounded-xl border border-neutral-800 bg-neutral-950 p-6",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px z-0 h-[calc(100%+8px)] w-[calc(100%+8px)] rounded-2xl opacity-0 blur-xl transition-opacity duration-300",
          "bg-[radial-gradient(circle_at_center,var(--glow-color),transparent_70%)]",
          isMouseEntered && "opacity-70",
          glowClassName
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// This component is a content wrapper inside GlowingCards.
// It's exported to satisfy the import statement that caused the error.
export const GlowingCardsItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("h-full w-full", className)}>{children}</div>;
};
