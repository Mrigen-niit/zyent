import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight, ChevronRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: "blue" | "green";
  tagline: string;
}

export default function ProductCard({ title, description, icon: Icon, features, color, tagline }: ProductCardProps) {
  const brandColor = color === 'blue' ? 'text-brand-hpe' : 'text-brand-oracle';
  const dotColor = color === 'blue' ? 'bg-brand-hpe' : 'bg-brand-oracle';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="h-full group relative"
    >
      {/* Structural Brackets */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-brand-hpe/20 group-hover:border-brand-hpe/60 transition-colors duration-500 z-10" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-brand-hpe/20 group-hover:border-brand-hpe/60 transition-colors duration-500 z-10" />

      <div className="relative overflow-hidden border border-white/5 bg-enterprise-card h-full flex flex-col p-10 transition-all duration-500 group-hover:border-brand-hpe/30 shadow-2xl technical-grid">
        <div className="flex justify-between items-start mb-16">
          <div className="w-12 h-12 border border-white/10 flex items-center justify-center relative group-hover:border-brand-hpe transition-colors duration-500">
             <div className={`absolute -top-1 -left-1 w-1.5 h-1.5 ${dotColor}`} />
             <Icon className={`w-5 h-5 ${brandColor}`} />
          </div>
          <span className="text-[9px] font-mono font-bold font-medium uppercase tracking-[0.4em] text-muted-foreground/40 group-hover:text-brand-hpe transition-colors">
            {tagline}
          </span>
        </div>
        
        <div className="mb-12">
          <h4 className="text-2xl font-bold tracking-tighter mb-4 text-foreground group-hover:translate-x-1 transition-transform duration-500">
            {title}<span className="text-brand-hpe">.</span>
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed font-medium">
            {description}
          </p>
        </div>
        
        <div className="flex-grow pt-4">
          <div className="h-px w-full bg-white/5 mb-8" />
          <ul className="space-y-5 mb-12">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground group/item">
                <div className={`w-1 h-1 rounded-full ${dotColor} opacity-20 group-hover/item:opacity-100 transition-opacity`} />
                <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-between h-14 border border-white/5 rounded-none px-6 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-hpe hover:text-white transition-all duration-700">
            Initialization_Matrix
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-current opacity-20 group-hover:w-12 group-hover:opacity-100 transition-all duration-700" />
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
