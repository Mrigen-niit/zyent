import { Shield, Cloud, Zap, BarChart3, Lock, Globe, Cpu } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-blue-500 mb-4">The B2B Suite</h2>
          <p className="text-3xl md:text-4xl font-bold mb-6">Revolutionizing Digital Commerce</p>
          <p className="text-muted-foreground text-lg">
            A comprehensive ecosystem designed specifically for the unique complexities of B2B e-commerce infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ProductCard
            title="Vendor Lens"
            tagline="Visibility"
            description="Total visibility for your B2B supplier network. Track global performance and compliance instantly."
            icon={Shield}
            color="blue"
            features={[
              "Automated supplier tracking",
              "Compliance scorecards",
              "Risk mitigation",
              "Contract management"
            ]}
          />
          <ProductCard
            title="CloudSaver"
            tagline="Optimization"
            description="Deep-tech cost optimization for high-traffic commerce sites. Reduce infra spend by 40%."
            icon={Cloud}
            color="green"
            features={[
              "AI cost forecasting",
              "Docker cluster rightsizing",
              "Unused cache detection",
              "Multi-cloud spend dashboard"
            ]}
          />
          <ProductCard
            title="AI Custom"
            tagline="Experience"
            description="B2B Product Customizer & Accessory Engine. Leverages AI for personalized bulk ordering logic."
            icon={Cpu}
            color="blue"
            features={[
              "Dynamic part accessories",
              "Bulk variant generator",
              "Smart pricing logic",
              "3D model integration"
            ]}
          />
          <ProductCard
            title="OrderFlow"
            tagline="Logistics"
            description="High-performance order orchestration designed for complex B2B supply chains."
            icon={Zap}
            color="green"
            features={[
              "Automated split shipping",
              "Real-time inventory sync",
              "Custom tax engines",
              "Wholesale ledgering"
            ]}
          />
          <ProductCard
            title="AssetVault"
            tagline="Storage"
            description="Secure digital asset management for enterprise product catalogs and CAD data."
            icon={Lock}
            color="blue"
            features={[
              "Encrypted CAD hosting",
              "Role-based image access",
              "Global CDN distribution",
              "Version controlled assets"
            ]}
          />
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-16">
           {[
             { icon: Zap, label: "Real-time Processing", desc: "Sub-second data ingestion" },
             { icon: BarChart3, label: "Advanced Analytics", desc: "Custom reporting engine" },
             { icon: Lock, label: "Bank-grade Security", desc: "SOC2 Type II Compliant" },
             { icon: Globe, label: "Global Infrastructure", desc: "Deployed in 20+ regions" }
           ].map((item, i) => (
             <div key={i} className="text-center">
               <div className="inline-flex p-3 rounded-full bg-white/5 mb-4">
                 <item.icon className="w-5 h-5 text-zinc-400" />
               </div>
               <h3 className="font-semibold mb-1">{item.label}</h3>
               <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
