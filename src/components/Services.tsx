import React from 'react';
import { LayoutTemplate, Search, ShoppingBag, Cpu, Server, Palette, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutTemplate: LayoutTemplate,
  Search: Search,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Server: Server,
  Palette: Palette,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/60 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Premium Core Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none font-sans mb-5">
            Everything You Need <br />
            To <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Dominate Locally &amp; Transact Fast</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-sans leading-relaxed">
            We replaced old, slow, and bloated Web 2.0 builders with optimized custom React stacks, secure WordPress integrations, lightweight managed cloud containers, and conversion audit workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-cards-grid">
          {SERVICES.map((service: Service) => {
            const IconComponent = IconMap[service.iconName] || Zap;
            return (
              <div
                key={service.id}
                className="group relative bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                id={`service-card-${service.id}`}
              >
                {/* Glow impact */}
                <div className="absolute inset-x-0 -bottom-2 h-1/2 bg-gradient-to-t from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl -z-10" />

                <div>
                  {/* Icon Panel */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50/50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100/30">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight font-sans mb-3 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <hr className="border-gray-50 mb-6" />

                  {/* Benefit points checklist */}
                  <ul className="flex flex-col gap-2.5 mb-8" id={`service-benefits-${service.id}`}>
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-left">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-600 leading-tight font-sans font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Trigger */}
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 text-xs font-bold tracking-wide transition-all border border-gray-100/50 hover:border-emerald-200 cursor-pointer"
                  id={`cta-select-${service.id}`}
                >
                  <span>Select &amp; Quote Instantly</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
