import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data';
import { PortfolioProject } from '../types';
import { Check, Sparkles, MoveRight, ExternalLink, RefreshCw, BarChart4, Zap, Smartphone } from 'lucide-react';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Lead Generation' | 'E-commerce' | 'Corporate' | 'Industrial'>('All');
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeCompareProject, setActiveCompareProject] = useState<string>('joburg-solar');

  const filters: ('All' | 'Lead Generation' | 'E-commerce' | 'Corporate' | 'Industrial')[] = [
    'All',
    'Lead Generation',
    'E-commerce',
    'Corporate',
    'Industrial'
  ];

  const filteredProjects = selectedFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category.includes(selectedFilter) || p.category === selectedFilter);

  // Before/After Mock Assets depending on selected project in comparison tool
  const currentCompareProj = PORTFOLIO_PROJECTS.find(p => p.id === activeCompareProject) || PORTFOLIO_PROJECTS[1];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="portfolio-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>CRO Showcase &amp; Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-5 font-sans">
            Our Digital Renovations<br />
            Built On <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text font-extrabold">Verifiable Business Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-sans leading-relaxed">
            We don’t just build templates—we fix leakages. Browse our South African client transformations and check out the interactive before/after speed audit below.
          </p>
        </div>

        {/* INTERACTIVE BEFORE/AFTER SLIDER BOX (ELITE LEVEL GIMMICK) */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-gray-100 shadow-xl mb-16" id="before-after-interactive-panel">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Explainer / Control column (Left) */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4" id="slider-content-panel">
              <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold uppercase uppercase bg-emerald-50 px-2 py-1 rounded">
                Live Interactive Comparison
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                Drag the slider to witness our optimization power
              </h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">
                We take bloated, slow, and unoptimized page structures and transition them into highly refined, high-retention experiences.
              </p>

              {/* Selector project chips */}
              <div className="flex flex-wrap gap-2 mt-2 w-full" id="slider-project-choices">
                {PORTFOLIO_PROJECTS.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveCompareProject(proj.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border text-left flex items-center justify-between w-full lg:w-auto ${
                      activeCompareProject === proj.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-slate-50 text-slate-600 border-gray-100 hover:bg-slate-100'
                    }`}
                  >
                    <span>{proj.title}</span>
                    {activeCompareProject === proj.id && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 ml-2 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              {/* Stats card matching comparison */}
              <div className="w-full bg-slate-50 rounded-2xl p-4 border border-gray-100 mt-2" id="slider-stat-card">
                <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">REAL IMPACT OUTCOME</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-black text-slate-950 font-sans tracking-tight">
                    {currentCompareProj.metrics.value}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold font-sans">
                    {currentCompareProj.metrics.label}
                  </span>
                </div>
                <div className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  Before: <span className="font-semibold line-through text-red-500">{currentCompareProj.metrics.before}</span> | Client location: <strong className="text-slate-800">{currentCompareProj.location}</strong>
                </div>
              </div>
            </div>

            {/* Slider visual stage (Right) */}
            <div className="lg:col-span-7" id="slider-graphic-wrapper">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-slate-100 select-none">
                
                {/* AFTER VISUAL (RIGHT SIDE UNDER) */}
                <div className={`absolute inset-0 ${currentCompareProj.afterImage} p-6 flex flex-col justify-between`} id="slider-layer-after">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-emerald-300 uppercase border border-emerald-500/20">
                      AFTER (NextG Optimized)
                    </span>
                    <div className="flex items-center gap-1 bg-emerald-950/40 p-1.5 rounded-xl border border-emerald-500/20">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] font-mono text-emerald-200">0.3s Load</span>
                    </div>
                  </div>

                  <div className="max-w-md">
                    <h4 className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight mb-2">
                      {currentCompareProj.client}
                    </h4>
                    <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed opacity-90">
                      {currentCompareProj.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {currentCompareProj.tags.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="bg-white/10 text-white px-2 py-0.5 rounded text-[9px] font-medium backdrop-blur-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BEFORE VISUAL (LEFT SIDE OVER - CLIPPED) */}
                <div
                  className={`absolute inset-0 ${currentCompareProj.beforeImage} p-6 flex flex-col justify-between`}
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                  id="slider-layer-before"
                >
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-gray-500/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-gray-700 uppercase border border-gray-400/20">
                      BEFORE (Legacy Layout)
                    </span>
                    <div className="flex items-center gap-1 bg-gray-200/90 p-1.5 rounded-xl border border-gray-300">
                      <RefreshCw className="w-3.5 h-3.5 text-gray-500 animate-spin-slow" />
                      <span className="text-[10px] font-mono text-gray-600">5.8s Latency</span>
                    </div>
                  </div>

                  <div className="max-w-md filter grayscale opacity-45">
                    <h4 className="text-lg sm:text-xl font-bold tracking-tight leading-tight mb-2">
                      {currentCompareProj.client} (OLD)
                    </h4>
                    <p className="text-xs text-gray-700 line-clamp-2">
                      Outdated static framework, failed mobile structures, cluttered design.
                    </p>
                  </div>
                </div>

                {/* Vertical Divider Divider */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-2xl cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                  id="slider-divider-line"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white text-white flex items-center justify-center shadow-lg -space-x-0.5 font-bold text-xs">
                    <span>‹</span><span>›</span>
                  </div>
                </div>

                {/* Actual Range input overlay spanning the area */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={handleSliderChange}
                  className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
                  aria-label="Before after slider"
                  id="before-after-slider-range"
                />

              </div>
              <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono px-1 mt-2">
                <span>◀ OUTDATED WEB 2.0</span>
                <span>DRAG TO ROTATE DECO</span>
                <span>MODERN PERFORMANCE ENGINE ▶</span>
              </div>
            </div>

          </div>
        </div>

        {/* PORTFOLIO GRID SHOWCASE */}
        <div className="mb-10 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-4" id="portfolio-grid-controls">
          <div className="flex flex-wrap gap-1.5" id="portfolio-filter-buttons">
            {filters.map((filt) => (
              <button
                key={filt}
                type="button"
                onClick={() => setSelectedFilter(filt)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedFilter === filt
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/10'
                    : 'bg-white text-slate-600 border border-gray-150 hover:bg-slate-50'
                }`}
                id={`filter-${filt.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {filt}
              </button>
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-400 font-sans tracking-tight">
            Showing {filteredProjects.length} Verified Solutions
          </span>
        </div>

        {/* Output Projects */}
        <div className="grid md:grid-cols-2 gap-8" id="portfolio-items-grid">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              id={`portfolio-item-${proj.id}`}
            >
              <div>
                {/* Simulated visual thumbnail */}
                <div className={`relative aspect-video w-full ${proj.afterImage} p-6 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="flex justify-between items-start z-10">
                    <span className="px-3 py-1.5 bg-slate-900/40 backdrop-blur-sm rounded-xl text-[9px] font-bold tracking-wider text-emerald-300 uppercase border border-white/10">
                      {proj.category}
                    </span>
                    <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-xl text-[9px] font-bold text-white max-w-[120px] truncate">
                      📍 {proj.location}
                    </span>
                  </div>

                  {/* Growth Badge metric container inside image */}
                  <div className="bg-slate-900/70 p-4 rounded-2xl border border-white/10 backdrop-blur-md self-start z-10" id={`portfolio-metric-${proj.id}`}>
                    <span className="text-[9px] text-gray-300 font-mono tracking-widest uppercase block mb-0.5">{proj.metrics.label}</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-emerald-400 tracking-tight leading-none">{proj.metrics.value}</span>
                      <span className="text-[10px] text-gray-400 line-through leading-none">was {proj.metrics.before}</span>
                    </div>
                  </div>
                </div>

                {/* Meta details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight mb-2 flex items-center justify-between">
                    <span>{proj.title}</span>
                    <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors" />
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans mb-6">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Tags panel bottom */}
              <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5" id={`portfolio-tags-${proj.id}`}>
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-slate-50 text-[10px] font-bold text-gray-500 rounded-lg border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
