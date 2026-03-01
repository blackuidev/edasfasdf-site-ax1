import { GlowingCards, GlowingCardsItem, GlowingCardsRoot } from "@/components/lightswind/glowing-cards";
import { features } from "@/lib/data";
import { cn } from "@/lib/utils";

const colors: Record<string, string> = {
  purple: "[--glow-color:theme(colors.purple.500)]",
  blue: "[--glow-color:theme(colors.blue.500)]",
  green: "[--glow-color:theme(colors.green.500)]",
  yellow: "[--glow-color:theme(colors.yellow.500)]",
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto p-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Next-Gen Web Engineering
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg mx-auto">
            Build production-grade, modern, high-performance web applications with the power of AI.
          </p>
        </div>
        
        <GlowingCardsRoot>
          {features.map((feature, index) => (
            <GlowingCards
              key={index}
              className={cn(colors[feature.color] || colors.purple)}
            >
              <GlowingCardsItem>
                <div className="flex flex-col items-start gap-4 h-full">
                   <div className="flex-shrink-0">
                    <feature.icon className="w-10 h-10 text-neutral-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </GlowingCardsItem>
            </GlowingCards>
          ))}
        </GlowingCardsRoot>
      </div>
    </div>
  );
}
