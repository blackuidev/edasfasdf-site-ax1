import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  [key: string]: any;
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      reverse,
      pauseOnHover = false,
      children,
      vertical = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
          {
            'flex-row': !vertical,
            'flex-col': vertical,
          },
          className
        )}
      >
        {React.Children.map(children, (child) => (
          <div
            className={cn('flex-shrink-0 flex items-center justify-center', {
              'animate-marquee-horizontal group-hover:[animation-play-state:paused]':
                pauseOnHover && !vertical,
              'animate-marquee-horizontal': !pauseOnHover && !vertical,
              'animate-marquee-vertical group-hover:[animation-play-state:paused]':
                pauseOnHover && vertical,
              'animate-marquee-vertical': !pauseOnHover && vertical,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {child}
          </div>
        ))}
         {React.Children.map(children, (child) => (
          <div
            className={cn('flex-shrink-0 flex items-center justify-center', {
              'animate-marquee-horizontal group-hover:[animation-play-state:paused]':
                pauseOnHover && !vertical,
              'animate-marquee-horizontal': !pauseOnHover && !vertical,
              'animate-marquee-vertical group-hover:[animation-play-state:paused]':
                pauseOnHover && vertical,
              'animate-marquee-vertical': !pauseOnHover && vertical,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
);

Marquee.displayName = 'Marquee';

export const ThreeDMarquee = Marquee;
