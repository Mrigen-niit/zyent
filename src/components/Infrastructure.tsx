import { Box, Server, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Infrastructure() {
  const specs = [
    {
      icon: Server,
      title: "In-House Nginx",
      desc: "Architected for high-concurrency B2B flow and zero-trust edge protection."
    },
    {
      icon: Box,
      title: "Docker Kernels",
      desc: "Sandboxed micro-environments delivering 99.999% availability."
    },
    {
      icon: Zap,
      title: "Edge Acceleration",
      desc: "Global PoP saturation for sub-200ms catalog delivery."
    },
    {
      icon: ShieldCheck,
      title: "Hardened VPC",
      desc: "Isolated private clouds for sensitive ERP transactions."
    }
  ];

  return (
    <section className="py-32 bg-enterprise-bg overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-hpe" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-brand-hpe">The Infrastructure Protocol</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold mb-10 leading-[0.9] text-foreground tracking-tighter">
                Sub-second performance. <br /> 
                <span className="italic font-serif font-light text-muted-foreground/50">Engineered by Design.</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-xl font-medium">
                Precision-engineered systems that outperform generic cloud solutions. We prioritize absolute reliability for mission-critical commerce.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-12 gap-x-12">
                {specs.map((spec, i) => (
                  <div key={i} className="group">
                    <div className="flex flex-col gap-5">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center transition-all group-hover:border-brand-hpe group-hover:bg-brand-hpe/5">
                        <spec.icon className="w-4 h-4 text-brand-hpe" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-widest mb-3">{spec.title}</h4>
                        <p className="text-[11px] text-muted-foreground leading-relaxed pr-4">{spec.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
               <div className="absolute -inset-4 bg-brand-hpe/5 blur-[100px] rounded-full pointer-events-none" />
               <div className="border border-white/5 bg-black/40 backdrop-blur-sm p-1 relative overflow-hidden group shadow-2xl technical-grid">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute h-1/2 w-full bg-gradient-to-b from-brand-hpe/5 to-transparent animate-scan z-20" />
                  </div>
                  {/* Oracle Dashboard style header */}
                  <div className="bg-zinc-900/80 px-6 py-3 flex items-center justify-between border-b border-white/5 font-mono text-[9px] text-muted-foreground/60 uppercase tracking-[0.3em]">
                    <div className="flex gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <span>Kernel_Init_Sequence_v.4.1</span>
                  </div>
                  
                  <div className="p-8 font-mono text-[11px] text-brand-hpe/80 leading-relaxed">
                    <div className="mb-4 text-zinc-500">$ fetch --origin "zyent-primary-node"</div>
                    <div className="text-emerald-500 mb-6 flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                      SYSTEM_STATUS: NOMINAL
                    </div>
                    
                    <div className="space-y-3 mb-10">
                      {[
                        { label: 'Latency_Metrics', val: '0.12ms' },
                        { label: 'Throughput', val: '4.2 TB/s' },
                        { label: 'Encryption_Key', val: 'AES_256_GCM' }
                      ].map(row => (
                        <div key={row.label} className="flex justify-between items-end border-b border-white/5 pb-2 group/row">
                          <span className="text-[9px] text-zinc-600 uppercase tracking-widest">{row.label}</span>
                          <span className="text-white font-bold group-hover/row:text-brand-hpe transition-colors">{row.val}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-zinc-600 font-mono text-[10px]">
                      <span className="text-brand-hpe/40 block mb-2"># NETWORK_VPC_MAPPING</span>
                      [ 200.12.01 ] -&gt; ROUTE_INIT<br />
                      [ READY ] CONNECTION STABLE
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
               </div>

               {/* Decorative floating badge */}
               <div className="absolute -bottom-10 -right-6 h-20 w-40 bg-zinc-900 border border-white/10 hidden lg:flex flex-col justify-center px-6 shadow-2xl">
                  <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-[0.4em]">Node_Load</span>
                  <div className="flex items-end gap-1 mt-2">
                    {[3, 1, 4, 1, 5, 9, 2, 6].map((h, i) => (
                      <div key={i} className="w-1 bg-brand-hpe/40" style={{ height: `${h * 4}px` }} />
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
