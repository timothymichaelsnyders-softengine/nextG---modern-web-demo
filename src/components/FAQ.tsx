import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14" id="faq-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Factual Answers Only</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none mb-4 font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500 font-sans leading-relaxed">
            Everything you need to know about our modern design transition, Gauteng local SSD server pings, South Africa currency gateway setups, and priority CRO conversions.
          </p>
        </div>

        {/* FAQs Accordion Block */}
        <div className="flex flex-col gap-4 text-left" id="faq-accordions">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50/50 rounded-2xl border border-gray-100 overflow-hidden"
                id={`faq-item-${idx}`}
              >
                {/* Trigger Row Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans focus:outline-none cursor-pointer"
                  id={`faq-trigger-${idx}`}
                >
                  <span className="text-sm font-bold text-slate-900 tracking-tight pr-6">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-gray-150 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-slate-900 border-slate-900 text-amber-300' : 'text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Node */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-5 text-slate-600 text-xs leading-relaxed font-sans bg-white/40">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
