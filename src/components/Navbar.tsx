import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Cloud, BarChart3, Lock, Globe, Cpu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { title: "Vendor Lens", href: "#", description: "Full visibility into your vendor ecosystem.", icon: Shield },
  { title: "CloudSaver", href: "#", description: "AI-driven cloud cost optimization.", icon: Cloud },
  { title: "AI Custom", href: "#", description: "B2B eCommerce customizer & accessories.", icon: Cpu },
];

const solutions = [
  { title: "B2B eCommerce", href: "#", icon: Globe },
  { title: "Cost Governance", href: "#", icon: BarChart3 },
  { title: "Secure Infrastructure", href: "#", icon: Lock },
  { title: "AI Integration", href: "#", icon: Cpu },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* System Status Bar */}
      <div className="bg-brand-hpe/[0.05] border-b border-white/5 py-1.5 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="mono-label !opacity-30">Node: TYO-021</span>
            <span className="mono-label !opacity-30">Protocol: 0x4F2A</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-hpe animate-pulse" />
              <span className="mono-label !text-brand-hpe">Network_Nominal</span>
            </div>
            <div className="h-3 w-px bg-white/10" />
            <span className="mono-label !opacity-30">v4.1.2-build</span>
          </div>
        </div>
      </div>

      <div className="bg-background/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
        <div className="container mx-auto px-6 flex items-center justify-between w-full">
          <div className="flex items-center gap-5 group">
            <div className="w-9 h-9 bg-brand-hpe flex items-center justify-center relative">
              <Shield className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-hpe border-2 border-background rounded-full z-10" />
              <div className="absolute inset-0 border border-brand-hpe scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[-0.05em] leading-none text-foreground uppercase group-hover:text-brand-hpe transition-colors">Zyent<span className="text-brand-hpe">.</span></span>
              <span className="text-[9px] font-mono tracking-[0.4em] text-muted-foreground uppercase mt-1 opacity-50 group-hover:opacity-100 transition-all">Systems_Group</span>
            </div>
          </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="relative group flex items-center h-20">
            <button 
              className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-300"
              onMouseEnter={() => setActiveDropdown('products')}
            >
              Hardware <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", activeDropdown === 'products' ? 'rotate-180 text-brand-hpe' : '')} />
            </button>
            {activeDropdown === 'products' && (
              <div 
                className="absolute top-20 left-1/2 -translate-x-1/2 w-[480px] p-6 bg-enterprise-card border border-enterprise-border shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-2 duration-300"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="grid grid-cols-1 gap-6">
                  {products.map((item) => (
                    <a key={item.title} href={item.href} className="flex items-start gap-4 group/item">
                      <div className="w-10 h-10 border border-white/5 flex items-center justify-center group-hover/item:border-brand-hpe transition-colors">
                        <item.icon className="w-4 h-4 text-brand-hpe" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest">{item.title}</div>
                        <p className="text-[10px] text-muted-foreground mt-1 max-w-[280px]">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative group flex items-center h-20">
            <button 
              className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-300"
              onMouseEnter={() => setActiveDropdown('solutions')}
            >
              Enterprise <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", activeDropdown === 'solutions' ? 'rotate-180 text-brand-hpe' : '')} />
            </button>
            {activeDropdown === 'solutions' && (
              <div 
                className="absolute top-20 left-1/2 -translate-x-1/2 w-[320px] p-6 bg-enterprise-card border border-enterprise-border shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-2 duration-300"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="grid grid-cols-1 gap-4">
                  {solutions.map((item) => (
                    <a key={item.title} href={item.href} className="flex items-center gap-3 p-2 border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all text-[10px] font-bold uppercase tracking-widest">
                      <item.icon className="w-3.5 h-3.5 text-brand-hpe" />
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#industries" className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-300">Verticles</a>
          <a href="#case-studies" className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-300">Spec</a>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">Access</button>
          <Button className="bg-brand-hpe hover:bg-emerald-600 h-10 px-6 rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300">
            Initialization
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-all" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-3xl border-b border-white/5 h-[calc(100vh-80px)] p-8 flex flex-col gap-10 overflow-y-auto"
          >
            <div className="space-y-8">
              <motion.p variants={itemVariants} className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-hpe">Protocol_Solutions</motion.p>
              <div className="flex flex-col gap-6">
                {products.map(p => (
                  <motion.a 
                    key={p.title} 
                    variants={itemVariants}
                    href={p.href} 
                    className="flex items-center gap-5 group" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-brand-hpe transition-colors">
                      <p.icon className="w-5 h-5 text-brand-hpe" /> 
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest">{p.title}</div>
                      <p className="text-[10px] text-muted-foreground mt-1">{p.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-4">
              <Button variant="outline" className="w-full h-14 rounded-none text-xs font-bold uppercase tracking-widest border-white/10">Enterprise Login</Button>
              <Button className="w-full bg-brand-hpe hover:bg-emerald-600 h-14 rounded-none text-xs font-bold uppercase tracking-widest">Connect Node</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
