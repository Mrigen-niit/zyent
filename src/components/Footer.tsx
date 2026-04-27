import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 relative overflow-hidden technical-grid">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-brand-hpe flex items-center justify-center relative shadow-[0_0_20px_rgba(1,169,130,0.3)]">
                <Shield className="w-5 h-5 text-white" />
                <div className="absolute inset-0 border border-brand-hpe animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-[-0.05em] leading-none uppercase">Zyent<span className="text-brand-hpe">.</span></span>
                <span className="text-[9px] font-mono tracking-[0.4em] opacity-40 uppercase mt-1 italic">Enterprise_Grade</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-medium">
              Architecting the next-generation of B2B commerce infrastructure. High-concurrency scalability meets zero-trust security.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-brand-hpe">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <li><a href="#" className="hover:text-brand-hpe transition-colors">Vendor Lens</a></li>
              <li><a href="#" className="hover:text-brand-hpe transition-colors">CloudSaver</a></li>
              <li><a href="#" className="hover:text-brand-hpe transition-colors">System Stack</a></li>
              <li><a href="#" className="hover:text-brand-hpe transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-brand-hpe">Consulate</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <li><a href="#" className="hover:text-brand-hpe transition-colors">Company</a></li>
              <li><a href="#" className="hover:text-brand-hpe transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-hpe transition-colors">Foundry</a></li>
              <li><a href="#" className="hover:text-brand-hpe transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-brand-hpe">Compliance</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <li><a href="#" className="hover:text-brand-hpe transition-colors">Privacy_v4</a></li>
              <li><a href="#" className="hover:text-brand-hpe transition-colors">Terms_v19</a></li>
              <li><a href="#" className="hover:text-brand-hpe transition-colors">ISO_SEC_27</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <span className="mono-label !opacity-30">© 2026 ZYENT_SYS_CORP</span>
              <div className="h-4 w-px bg-white/5" />
              <span className="mono-label !opacity-30">ENC_TYPE: AES_256</span>
           </div>
          <div className="flex gap-8">
            {['X', 'LinkedIn', 'GitHub'].map(media => (
               <a key={media} href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-brand-hpe transition-colors italic">
                 {media}
               </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
