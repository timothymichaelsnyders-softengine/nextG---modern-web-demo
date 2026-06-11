import { useState } from 'react';
import { HOSTING_PLANS } from '../data';
import { HostingPlan } from '../types';
import { Check, ShieldCheck, Zap, Lock, Server, ArrowRight } from 'lucide-react';

interface HostingProps {
  onSelectHosting: (planId: string) => void;
}

export default function Hosting({ onSelectHosting }: HostingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section id="hosting-section" className="py-20 md:py-28 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="hosting-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/60 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Server className="w-3.5 h-3.5 text-emerald-600" />
            <span>High-Speed Local Nodes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-5 font-sans">
            Johannesburg SSD Managed Hosting <br />
            Built For <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text font-extrabold">Instant Site Response</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-sans leading-relaxed">
            Cheap hosting located overseas results in a massive 240ms+ latency before your page even begins loading. NextG hosts your site directly in Sandton/JHB Teraco cloud containers for lightning-fast sub-10ms response times.
          </p>

          {/* Monthly / Annual cycle Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8" id="billing-cycle-switch">
            <span className={`text-xs font-bold transition-all ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-gray-400'}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
              className="w-12 h-6 rounded-full bg-emerald-500 p-0.5 transition-all focus:outline-none flex relative cursor-pointer"
              aria-label="Toggle hosting billing cycle"
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-200 transform ${
                  billingCycle === 'annually' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-bold transition-all ${billingCycle === 'annually' ? 'text-emerald-700' : 'text-gray-400'}`}>
                Billed Annually
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                Get 2 Months Free
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch" id="hosting-plans-grid">
          {HOSTING_PLANS.map((plan: HostingPlan) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : Math.floor(plan.priceAnnually / 12);
            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between bg-white rounded-3xl p-6 lg:p-8 border transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'border-emerald-500 shadow-xl shadow-emerald-500/5 hover:translate-y-[-6px]'
                    : 'border-gray-100 hover:border-gray-300 shadow-sm hover:translate-y-[-3px]'
                }`}
                id={`hosting-card-${plan.id}`}
              >
                {/* Popular Ribbon badge */}
                {plan.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    ★ MOST POPULAR GROWTH CHROME
                  </span>
                )}

                <div>
                  {/* Name & description */}
                  <div className="mb-6">
                    <h3 className="text-sm font-sans font-black tracking-wider text-slate-900 uppercase">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-[10px] mt-1 font-sans font-medium">
                      Best for: {plan.targetAudience}
                    </p>
                  </div>

                  {/* Price display section */}
                  <div className="flex items-baseline mb-6 border-b border-gray-50 pb-6" id={`price-box-${plan.id}`}>
                    <span className="text-lg font-bold text-slate-400 mr-1">R</span>
                    <span className="text-4xl lg:text-5xl font-black text-slate-950 font-sans leading-none tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold ml-1">/ Month</span>
                  </div>

                  {/* Feature checklist */}
                  <ul className="flex flex-col gap-3 font-sans mb-8" id={`hosting-features-list-${plan.id}`}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct quote trigger link */}
                <button
                  onClick={() => onSelectHosting(plan.id)}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/15'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                  id={`cta-select-hosting-${plan.id}`}
                >
                  <span>Select Plan &amp; Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Security / Teraco hardware trust values banner (Bottom) */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-gray-100/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left" id="hosting-trust-badge-banner">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/50">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-1">
                99.99% Guaranteed High-Performance Cloud Architecture
              </h4>
              <p className="text-gray-500 text-[11px] leading-tight max-w-xl">
                We bundle free wildcard Let’s Encrypt SSL certificates, enforce strict CSF/LFD firewalls, and maintain cloud daily recovery back points with sub-second replication intervals.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 py-2.5 px-4 rounded-xl border border-gray-150">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] text-gray-500 font-mono font-bold tracking-wider uppercase">JHB TERACO LOCAL NODE POWERED</span>
          </div>
        </div>

      </div>
    </section>
  );
}
