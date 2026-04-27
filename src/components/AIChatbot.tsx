import { MessageSquare, X, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Protocol initialized. How can I assist with your enterprise optimization requirements?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'Analyzing B2B infrastructure... Our Docker kernel optimizations currently favor scaling the AI Custom engine. Would you like a system spec report?' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 w-[350px] h-[450px] bg-enterprise-card border border-enterprise-border shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="p-4 border-b border-white/5 bg-brand-hpe flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white opacity-80 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white">Zyent OS Control</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-sm text-xs font-medium leading-relaxed ${m.role === 'user' ? 'bg-brand-hpe text-white' : 'bg-white/5 text-zinc-300 border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/5 flex gap-2 bg-black/20">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Enter system query..."
              className="flex-grow bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-xs font-mono focus:outline-none focus:border-brand-hpe transition-colors"
            />
            <Button size="icon" onClick={handleSend} className="bg-brand-hpe hover:bg-emerald-600 rounded-sm w-9 h-9">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-sm bg-brand-hpe hover:bg-emerald-600 shadow-xl shadow-brand-hpe/20 transition-all active:scale-95 group"
      >
        <div className="relative">
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
          {!isOpen && <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full border-2 border-brand-hpe" />}
        </div>
      </Button>
    </div>
  );
}
