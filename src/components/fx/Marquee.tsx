import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

/** Infinite horizontal marquee. Content is duplicated for a seamless loop. */
export function Marquee({
  children,
  className,
  duration = 34,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee items-center",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export default Marquee;
