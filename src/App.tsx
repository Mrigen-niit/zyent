/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Solutions from "./components/Solutions";
import Infrastructure from "./components/Infrastructure";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import { useEffect } from "react";
import { Shield, CheckCircle2, Award, Zap, Lock } from "lucide-react";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-hpe/30 font-sans antialiased relative">
      <div className="grain-overlay" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        
        {/* Trust Bar */}
        <section className="py-12 bg-background border-y border-white/5 overflow-hidden technical-grid">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-hpe font-bold">Commerce Partnerships</p>
                <h4 className="text-lg font-semibold tracking-tighter uppercase">Powering Global Wholesale</h4>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="text-xl font-black tracking-tighter">GLOBALUX</div>
                 <div className="text-xl font-black tracking-tighter">MERCHANT</div>
                 <div className="text-xl font-black tracking-tighter">OMNICOMM</div>
                 <div className="text-xl font-black tracking-tighter">DISTRO</div>
                 <div className="text-xl font-black tracking-tighter">WHOLESALE</div>
              </div>
            </div>
          </div>
        </section>

        <ProductShowcase />
        <Infrastructure />
        <Solutions />
        
        {/* Interactive Demo Section Placeholder */}
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent" />
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-blue-500 mb-6 font-bold">Interactive Experience</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">See the impact in <br /> <span className="text-blue-500">Real-Time</span></h3>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Our unified dashboard provides a single pane of glass for your entire infrastructure. Experience the power of automated cost governance and vendor risk assessment.
                </p>
                <div className="space-y-4">
                  {[
                    "Real-time spend anomaly detection",
                    "Automated vendor compliance scorecards",
                    "Multi-cloud resource mapping",
                    "Predictive cost forecasting"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-500/20 opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative h-full w-full rounded-2xl border border-white/10 bg-zinc-900 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-blue-500 mb-4 mx-auto animate-pulse" />
                      <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Live Demo Interface</p>
                      <button className="mt-6 px-6 py-2 rounded-full border border-blue-500/50 text-blue-400 text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
                        Launch Sandbox
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Industries />
        <Testimonials />

        {/* Certifications & Research */}
        <section className="py-20 bg-background border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "SOC2 Type II", desc: "Certified Security", icon: Shield },
                { label: "ISO 27001", desc: "Information Security", icon: Award },
                { label: "GDPR Ready", desc: "Data Privacy", icon: Lock },
                { label: "Gartner Cool Vendor", desc: "2025 Recognition", icon: Award }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="font-bold mb-1">{item.label}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden bg-zinc-950">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Scale with <span className="text-blue-500">Confidence</span></h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the elite enterprises optimizing their cloud and vendor ecosystems with Zyent Systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-lg transition-all shadow-xl shadow-blue-600/20">
                Request Proposal
              </button>
              <button className="w-full sm:w-auto px-10 py-4 rounded-xl border border-white/10 hover:bg-white/5 font-bold text-lg transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}

