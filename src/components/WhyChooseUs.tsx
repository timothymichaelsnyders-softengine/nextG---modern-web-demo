import { Zap, Check, X, Shield, Smartphone, HeartHandshake, Eye, BarChart, ChevronRight } from 'lucide-react';

export default function WhyChooseUs() {
  const checkablePoints = [
    {
      title: 'Sub-second mobile speed',
      desc: 'Mobile users on unstable telco signals need lightning loads. We write bespoke optimized code so your site opens in less than 1s.',
      icon: Zap
    },
    {
      title: 'Conversion-Rate Optimization (CRO)',
      desc: 'Most sites are just static online brochures. We design high-persuasion visual pathways, multi-step hooks, and floating CTAs.',
      icon: Eye
    },
    {
      title: 'South African SEO dominance',
      desc: 'Built-in semantic schemas, local citation architectures, and Google Map triggers to ensure Sandton, PTA, and national prominence.',
      icon: BarChart
    },
    {
      title: 'Johannesburg Teraco Cloud Hosting',
      desc: 'Local servers for minimal ping delay. Your site loads faster, scores higher on Google, and remains ultra-secure.',
      icon: Shield
    },
    {
      title: 'Genuine mobile-first standards',
      desc: 'Designs carefully crafted on and for real cellphones first, then expanded for desktop. Accessible, gorgeous, touch-target optimal.',
      icon: Smartphone
    },
    {
      title: 'Long-term dedicated partnerships',
      desc: 'No ghosting. Enjoy direct WhatsApp and Slack support with experienced local South African engineers who know your business setup.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="why-us-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Check className="w-3.5 h-3.5 text-teal-600" />
            <span>Outcomes Over Buzzwords</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-5 font-sans">
            How We Are Re-engineering <br />
            The <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">South African Web Space</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-sans leading-relaxed">
            Old templates are bloated, hard to crawl, and convert poorly. NextG creates high-contrast, lightning-speed, conversion-certified architectures built to generate cashflow.
          </p>
        </div>

        {/* Showcase Core Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16" id="why-us-content-grid">
          {/* Key Checklist Features (Left) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6" id="why-us-points">
            {checkablePoints.map((point, index) => {
              const PointIcon = point.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-50/50 hover:bg-slate-50 border border-gray-100/70 hover:border-emerald-500/10 transition-all duration-300"
                  id={`why-point-${index}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100/50">
                    <PointIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 font-sans tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] font-sans leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Comparison table (Right) - Elite proof of value */}
          <div className="lg:col-span-5" id="why-us-comparison-box">
            <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-850 shadow-xl relative overflow-hidden" id="performance-audit-comparison">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <h3 className="text-base font-bold font-sans tracking-tight mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>NextG vs Outdated Agency Models</span>
              </h3>

              <div className="flex flex-col gap-4">
                {/* Metric row 1 */}
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-850">
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">DEVELOPMENT APPROACH</span>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="border-r border-slate-800 pr-2">
                      <span className="text-[10px] text-red-400 font-sans font-bold block mb-1 flex items-center gap-1">
                        <X className="w-3 h-3" /> Classic Agency
                      </span>
                      <span className="text-xs text-slate-300 leading-tight block">Page builders, heavy templates, unoptimized plugins</span>
                    </div>
                    <div className="pl-2">
                      <span className="text-[10px] text-emerald-400 font-sans font-bold block mb-1 flex items-center gap-1">
                        <Check className="w-3 h-3" /> NextG 2026
                      </span>
                      <span className="text-xs text-emerald-100 font-medium leading-tight block">Bespoke semantic grids, high optimization ratios</span>
                    </div>
                  </div>
                </div>

                {/* Metric row 2 */}
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-850">
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">SERVER infrastructure</span>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="border-r border-slate-800 pr-2">
                      <span className="text-[10px] text-red-400 font-sans font-bold block mb-1 flex items-center gap-1">
                        <X className="w-3 h-3" /> Cheap Overseas
                      </span>
                      <span className="text-xs text-slate-300 leading-tight block">Shared servers, 240ms+ pings, congestion crashes</span>
                    </div>
                    <div className="pl-2">
                      <span className="text-[10px] text-emerald-400 font-sans font-bold block mb-1 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Teraco JHB Cloud
                      </span>
                      <span className="text-xs text-emerald-100 font-medium leading-tight block">Local lightning NVMe, 12ms ultra response, free SSL</span>
                    </div>
                  </div>
                </div>

                {/* Metric row 3 */}
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-850">
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">SEO PERSPECTIVE</span>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="border-r border-slate-800 pr-2">
                      <span className="text-[10px] text-red-400 font-sans font-bold block mb-1 flex items-center gap-1">
                        <X className="w-3 h-3" /> Outdated Buzzwords
                      </span>
                      <span className="text-xs text-slate-300 leading-tight block">&quot;Web 2.0 tag lists&quot; and slow-crawl sites</span>
                    </div>
                    <div className="pl-2">
                      <span className="text-[10px] text-emerald-400 font-sans font-bold block mb-1 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Modern Citation
                      </span>
                      <span className="text-xs text-emerald-100 font-medium leading-tight block">Google Maps 3-Pack sync, schema markup, 100% crawl pass</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic conversion calculator call */}
              <div className="mt-6 flex justify-between items-center bg-emerald-950/30 p-3 rounded-xl border border-emerald-900">
                <span className="text-xs text-emerald-200">Test your potential website speed?</span>
                <a
                  href="#quote-calculator"
                  className="text-xs font-bold text-emerald-400 flex items-center gap-1 hover:text-emerald-300 transition-colors"
                >
                  <span>Build Quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
