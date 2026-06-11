import { MapPin, Search, ChevronRight, TrendingUp, Cpu, ServerCrash, CheckSquare } from 'lucide-react';
import { SOUTH_AFRICA_REGIONS_SEO } from '../data';

export default function SEOSection() {
  const seoModules = [
    {
      title: 'Technical Web SEO Auditing',
      desc: 'Google ranks fast sites. We rewrite your robots files, build clean XML sitemaps, compress headers, and maximize crawl depth to guarantee 100% core sitemap efficiency.',
      bullet: 'Crawl budget optimization'
    },
    {
      title: 'Local SEO Multi-Pack Domination',
      desc: 'Target ready-to-buy customers in Google Maps. We synchronize local address triggers, match citation signals, and claim Gauteng, Western Cape, and national queries.',
      bullet: 'Google Map 3-Pack placement'
    },
    {
      title: 'Optimized Schema & Semantics',
      desc: 'We structure JSON-LD code schemas on every node. Google understands the exact service, pricing range, and South African local indicators immediately.',
      bullet: 'Structured rich snippet indexing'
    },
    {
      title: 'Performance & Speed SEO',
      desc: 'We eliminate bloated legacy template render blockers. Slow loading times cause high mobile bounces. We guarantee rapid loads that please search crawlers.',
      bullet: 'Google Core Web Vitals Pass'
    },
    {
      title: 'Conversion Keyword Strategy',
      desc: 'We compile and match high-intent organic terms specific to South Africa. Reach clients who are searching for solutions with high purchasing power.',
      bullet: 'High-intent search target profiles'
    }
  ];

  return (
    <section id="seo-section" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center" id="seo-layout-grid-custom">
          
          {/* SEO descriptive text (left) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4" id="seo-text-column">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-2 py-1 rounded">
              Organic Reach Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none font-sans">
              No Tricks. Just <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">South African SEO Dominance.</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed">
              We eliminated the outdated &quot;100+ Web 2.0 list&quot; and replaced it with core search engineering. Our websites are built with clean semantic HTML, local South African schemas, and lightning speed indexation pipelines.
            </p>

            {/* Geographical chips with South African cities */}
            <div className="mt-4 w-full" id="seo-local-regions-card">
              <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase block mb-3">📍 TARGET REGIONS COVERED NATIONWIDE</span>
              <div className="flex flex-wrap gap-1.5" id="regions-chips flex">
                {SOUTH_AFRICA_REGIONS_SEO.slice(0, 4).map((region, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 text-[10px] font-semibold text-slate-700 rounded-xl border border-gray-100"
                  >
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    <span>{region.split(' (')[0]}</span>
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-2 font-medium italic">
                Optimized landing pages for Sandton, Pretoria East, Brooklyn, Milnerton, Umhlanga, and more.
              </p>
            </div>
          </div>

          {/* Interactive roadmap cards (right) */}
          <div className="lg:col-span-7 flex flex-col gap-4" id="seo-modules-stack">
            {seoModules.map((mod, index) => (
              <div
                key={index}
                className="bg-slate-50/50 hover:bg-slate-50 p-5 rounded-2xl border border-gray-100 hover:border-emerald-500/10 transition-all duration-300 flex items-start sm:items-center justify-between gap-4 group"
                id={`seo-mod-${index}`}
              >
                <div className="flex items-start gap-4">
                  {/* Step counter */}
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 tracking-tight font-sans">
                      {mod.title}
                    </h3>
                    <p className="text-gray-500 text-[11px] font-sans leading-relaxed mt-1">
                      {mod.desc}
                    </p>
                  </div>
                </div>

                {/* Micro bullet check badge */}
                <div className="hidden sm:flex items-center gap-1.5 bg-white border border-gray-150 px-2.5 py-1 rounded-xl text-[9px] font-bold text-slate-600 flex-shrink-0">
                  <CheckSquare className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{mod.bullet}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
