import { motion } from "framer-motion";
import { Landmark, HeartPulse, ShoppingBag, Terminal } from "lucide-react";

const industries = [
  { name: "Financial Services", icon: Landmark, desc: "Secure, compliant cloud governance for global banking." },
  { name: "Healthcare", icon: HeartPulse, desc: "HIPAA-compliant vendor management and data protection." },
  { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Scaling infrastructure for peak demand and global reach." },
  { name: "Technology", icon: Terminal, desc: "Optimizing the stack for high-growth SaaS and AI startups." }
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 bg-enterprise-bg relative">
      <div className="container mx-auto px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-16 mb-24">
            <div className="shrink-0">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-1.5 h-1.5 bg-brand-hpe" />
                 <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-brand-hpe">Vertical Protocols</h2>
               </div>
               <h3 className="text-5xl font-bold tracking-tighter text-foreground">
                 Industry <span className="italic font-serif font-light text-muted-foreground/50">Focus.</span>
               </h3>
            </div>
            <div className="h-px flex-grow bg-white/5" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 technical-grid">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                className="p-12 bg-enterprise-bg/80 hover:bg-white/[0.02] transition-all group cursor-pointer"
              >
                <div className="mb-12 flex justify-between items-start">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-brand-hpe transition-colors duration-500">
                    <item.icon className="w-5 h-5 text-muted-foreground/50 group-hover:text-brand-hpe transition-colors duration-500" />
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground/20">NODE_0{i+1}</span>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 group-hover:text-brand-hpe transition-colors">{item.name}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
