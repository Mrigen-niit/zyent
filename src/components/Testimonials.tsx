import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Zyent Systems transformed how we manage our multi-cloud environment. CloudSaver alone reduced our monthly spend by 35% within the first quarter.",
    author: "Sarah Chen",
    role: "CTO, TechCore Global",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The visibility provided by Vendor Lens is unparalleled. We finally have a single source of truth for our entire third-party ecosystem.",
    author: "Marcus Thorne",
    role: "Head of Infrastructure, Vantage Systems",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    quote: "Security and compliance used to be a bottleneck. With Zyent, it's automated, allowing our team to focus on building rather than auditing.",
    author: "Elena Rodriguez",
    role: "Director of Operations, Nexus AI",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-enterprise-bg border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-hpe/[0.02] -skew-x-12 transform origin-top translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col mb-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1.5 h-1.5 bg-brand-hpe" />
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-brand-hpe">Strategic_Validation</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground">
              Market <span className="italic font-serif font-light text-muted-foreground/50">Recognition.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 technical-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 md:p-16 bg-enterprise-bg/80 flex flex-col justify-between group hover:bg-white/[0.02] transition-all duration-700"
              >
                <div>
                  <div className="mb-12">
                    <span className="text-6xl font-serif text-brand-hpe/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700">“</span>
                    <p className="text-lg text-muted-foreground leading-relaxed -mt-6 font-medium italic font-serif">
                      {t.quote}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 mt-12">
                  <div className="w-12 h-12 border border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 p-0.5">
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight text-foreground uppercase tracking-widest">{t.author}</h4>
                    <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-[0.4em] mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
