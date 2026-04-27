import { motion } from "framer-motion";
import { Globe, BarChart3, Lock, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Global Commerce",
    desc: "Gain a 360-degree view of your wholesale ecosystem with real-time Nginx telemetry.",
    icon: Globe,
    color: "text-brand-hpe",
    bg: "bg-brand-hpe/5"
  },
  {
    title: "Infrastructure",
    desc: "Implement automated Docker policies to control cloud spend without slowing innovation.",
    icon: BarChart3,
    color: "text-brand-hpe",
    bg: "bg-brand-hpe/5"
  },
  {
    title: "VPC Networking",
    desc: "Proactively identify and mitigate third-party risks with automated compliance monitoring.",
    icon: Lock,
    color: "text-brand-hpe",
    bg: "bg-brand-hpe/5"
  },
  {
    title: "AI Customizer",
    desc: "Optimize your GPU and AI compute resources with intelligent scheduling and workload balancing.",
    icon: Cpu,
    color: "text-brand-hpe",
    bg: "bg-brand-hpe/5"
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-32 bg-enterprise-bg relative border-t border-white/5">
      {/* Decorative side rail */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-px bg-white/10" />
          <span className="writing-mode-vertical text-[10px] uppercase tracking-[0.6em] text-muted-foreground/30 rotate-180">Node Protocols</span>
          <div className="h-20 w-px bg-white/10" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-brand-hpe" />
                <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-brand-hpe">Strategic Infrastructure</h2>
              </div>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground leading-[0.9]">
                Architected for the <br /> <span className="italic font-serif font-light text-muted-foreground/50">Modern Enterprise.</span>
              </h3>
            </div>
            
            <div className="flex flex-col gap-6">
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-medium">
                Our ecosystem provides domain-specific intelligence to meet the unique challenges of hybrid-cloud B2B logistics.
              </p>
              <Button variant="ghost" className="group rounded-none border border-white/10 uppercase text-[10px] font-bold tracking-[0.3em] px-10 h-14 w-fit hover:bg-brand-hpe hover:text-white transition-all duration-500">
                Full Systems Spec
                <ArrowRight className="ml-4 w-3.5 h-3.5 transition-transform group-hover:translate-x-2" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-white/5 border border-white/5 technical-grid">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-enterprise-bg/80 hover:bg-white/[0.02] transition-colors group relative"
              >
                <div className="mb-16 flex justify-between items-start">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-brand-hpe transition-colors duration-500">
                    <item.icon className="w-5 h-5 text-brand-hpe" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/30">0{i+1}</span>
                </div>
                
                <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-brand-hpe transition-colors">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed mb-12 min-h-[48px]">
                  {item.desc}
                </p>
                
                <a href="#" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-brand-hpe transition-all group/link">
                  Learn More 
                  <div className="h-px w-6 bg-brand-hpe/30 group-hover/link:w-10 group-hover/link:bg-brand-hpe transition-all duration-500" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
