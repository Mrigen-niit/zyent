import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Play, Cpu } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-enterprise-bg">
      {/* Cinematic Atmosphere (Recipe 7 inspiration) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-brand-hpe/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-brand-hpe/5 rounded-full blur-[160px]" />
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] technical-grid mask-radial-faded" />
        
        {/* Floating Metadata for Character */}
        <div className="absolute top-1/4 left-10 mono-label animate-float" style={{ animationDelay: '1s' }}>[ NODE_INIT: SUCCESS ]</div>
        <div className="absolute bottom-1/4 right-10 mono-label animate-float" style={{ animationDelay: '3s' }}>[ UPTIME: 99.999% ]</div>
        <div className="absolute top-1/2 right-[15%] mono-label opacity-20 hidden xl:block">0x4F2A_KERNEL_SECURE</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-brand-hpe">
                  Protocol_01 / Enterprise_Intelligence
                </span>
                <div className="h-px flex-grow bg-white/5" />
              </div>
              
              <h1 className="text-7xl md:text-8xl xl:text-[9.5rem] font-bold tracking-[-0.05em] mb-12 leading-[0.85] text-foreground relative">
                <span className="block italic font-serif font-light text-muted-foreground/40 mb-2">Unifying the</span>
                <span className="relative inline-block">
                  <div className="absolute -top-4 -left-4 w-6 h-6 border-l-2 border-t-2 border-brand-hpe/30" />
                  B2B Core<span className="text-brand-hpe">.</span>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 border-r-2 border-b-2 border-brand-hpe/30" />
                </span>
              </h1>
              
              <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="max-w-md">
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    Sub-second commerce execution powered by our hardened <span className="text-foreground">In-House Nginx</span> architecture and Docker-orchestrated micro-kernels.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button size="lg" className="h-14 rounded-none bg-brand-hpe hover:bg-emerald-600 px-10 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_10px_30px_rgba(1,169,130,0.2)]">
                      Connect Node
                    </Button>
                    <Button size="lg" variant="ghost" className="h-14 rounded-none border border-white/10 px-8 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all duration-300">
                      System Spec
                    </Button>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col gap-8 pt-2">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    System Active
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-hpe" />
                    Global 200 Regions
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Encrypted VPC
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <div className="relative group">
                {/* Floating Architectural Element */}
                <div className="aspect-[4/5] bg-enterprise-card border border-enterprise-border relative overflow-hidden flex flex-col p-8 transition-transform duration-700 group-hover:translate-y-[-10px] technical-grid">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute h-[2px] w-full bg-brand-hpe/20 animate-scan z-20" />
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-brand-hpe opacity-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-brand-hpe opacity-20" />
                  
                  <div className="flex justify-between items-start mb-auto">
                    <span className="text-[9px] font-mono text-brand-hpe uppercase tracking-[0.4em]">Arch_Node_01</span>
                    <Cpu className="w-6 h-6 text-brand-hpe animate-pulse" />
                  </div>

                  <div className="relative flex-grow flex items-center justify-center">
                    <div className="w-56 h-56 border border-white/5 rotate-45 animate-[spin_30s_linear_infinite]" />
                    <div className="absolute w-40 h-40 border-l border-brand-hpe/20 rotate-[-12deg]" />
                    <div className="absolute w-24 h-24 bg-brand-hpe/5 blur-2xl rounded-full" />
                    <div className="text-[40px] font-bold tracking-tighter text-foreground opacity-20 select-none">B2B</div>
                  </div>

                  <div className="mt-auto">
                    <div className="h-px w-full bg-white/5 mb-6" />
                    <div className="flex justify-between items-end">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">
                        Hybrid Cloud <br /> Optimization
                      </div>
                      <ChevronRight className="w-4 h-4 text-brand-hpe" />
                    </div>
                  </div>
                </div>

                {/* Depth shadow effect */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-brand-hpe/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
