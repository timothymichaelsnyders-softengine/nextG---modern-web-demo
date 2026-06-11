import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap, CheckCircle2, AlertTriangle, Play, Sparkles, MonitorSmartphone } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'legacy' | 'nextg'>('nextg');
  const [speedProgress, setSpeedProgress] = useState(100);
  const [loadingStep, setLoadingStep] = useState(0); // for simulating page loads

  useEffect(() => {
    // Simulate scoring scale
    if (activeTab === 'nextg') {
      const interval = setInterval(() => {
        setSpeedProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + 4;
        });
      }, 20);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setSpeedProgress((prev) => {
          if (prev <= 28) return 28;
          return prev - 6;
        });
      }, 15);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 85,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-white"
    >
      {/* Background radial gradient decoration */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center" id="hero-layout-grid">
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6" id="hero-left-content">
            {/* South African Tag badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/80 text-emerald-700 text-xs font-semibold tracking-wide"
              id="south-africa-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>South Africa’s Modern Web & Growth Agency</span>
            </motion.div>

            {/* Giant Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-sans text-left"
              id="hero-main-title"
            >
              Modern Websites <br />
              That <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">Grow Your Business.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl text-left leading-relaxed font-sans"
              id="hero-subtitle"
            >
              We design ultra-fast, mobile-optimized, and conversion-focused websites for South African SMEs and corporate brands. No outdated Web 2.0 clutter—just premium design and results-oriented local SEO.
            </motion.p>

            {/* Bullet points trust hooks */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-3 w-full max-w-xl text-left mt-1"
              id="hero-bullet-points"
            >
              <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>95+ Google Lighthouse Scores</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Local Payfast / Yoco e-Commerce</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Gauteng & Nationwide Local SEO</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Lightning Johannesburg SSD Servers</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4"
              id="hero-cta-buttons"
            >
              <button
                onClick={() => scrollToSection('quote-calculator')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 group cursor-pointer"
                id="hero-primary-cta"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base transition-all cursor-pointer"
                id="hero-secondary-cta"
              >
                <span>View Our Work</span>
              </button>
            </motion.div>

            {/* Quick social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 mt-6 border-t border-gray-100 pt-6 w-full max-w-lg"
              id="hero-trust-metrics"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900 leading-none">12+ Years</span>
                <span className="text-xs text-gray-500 mt-1 font-mono tracking-wider uppercase">LOCAL PRESENCE</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900 leading-none">350+</span>
                <span className="text-xs text-gray-500 mt-1 font-mono tracking-wider uppercase">CLIENTS LAUNCHED</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900 leading-none">99.9%</span>
                <span className="text-xs text-gray-500 mt-1 font-mono tracking-wider uppercase">CLIENT RETENTION</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Live Web Audit Simulator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
            className="lg:col-span-5 relative w-full max-w-md mx-auto"
            id="hero-interactive-audit-container"
          >
            {/* Background glowing frame */}
            <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-15 transition-all duration-700 -z-10 ${
              activeTab === 'nextg' 
                ? 'bg-gradient-to-tr from-emerald-500 to-teal-400' 
                : 'bg-red-500'
            }`} />

            <div className="bg-slate-950 text-white rounded-3xl shadow-2xl border border-slate-850 overflow-hidden w-full" id="speed-audit-card">
              {/* Header bar */}
              <div className="bg-slate-900 px-5 py-4 border-b border-slate-850 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-400 font-mono ml-2">SOUTH AFRICA WEBSPEED AUDIT</span>
                </div>
                <div className="inline-flex items-center gap-1 text-[10px] bg-slate-800 text-teal-400 px-2 py-0.5 rounded font-mono">
                  <MonitorSmartphone className="w-3 h-3" />
                  <span>MOBILE-FIRST</span>
                </div>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-2 p-2 bg-slate-900/60 border-b border-slate-850">
                <button
                  type="button"
                  onClick={() => setActiveTab('legacy')}
                  className={`py-2 rounded-xl text-center text-xs font-bold transition-all relative ${
                    activeTab === 'legacy' ? 'text-red-400 bg-red-500/10' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  id="tab-legacy-audit"
                >
                  Outdated &quot;Web 2.0&quot; Site
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('nextg')}
                  className={`py-2 rounded-xl text-center text-xs font-bold transition-all relative ${
                    activeTab === 'nextg' ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  id="tab-nextg-audit"
                >
                  NextG 2026 Engine
                </button>
              </div>

              {/* Main Gauge Body */}
              <div className="p-6 flex flex-col items-center justify-center gap-4 text-center">
                
                {/* Speed Score Circle */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  {/* Gauge Ring */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="65"
                      className="stroke-slate-800 fill-transparent"
                      strokeWidth="10"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="65"
                      className={`fill-transparent transition-all duration-300 ${
                        activeTab === 'nextg' ? 'stroke-emerald-500' : 'stroke-red-500'
                      }`}
                      strokeWidth="10"
                      strokeDasharray="408.4"
                      strokeDashoffset={408.4 - (408.4 * speedProgress) / 100}
                    />
                  </svg>

                  {/* Inner Text Score */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-4xl font-black font-sans leading-none ${
                      activeTab === 'nextg' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {speedProgress}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-widest mt-1">
                      PERFORMANCE
                    </span>
                  </div>
                </div>

                {/* Audit Insights */}
                <div className="w-full bg-slate-900/40 rounded-2xl p-4 border border-slate-900 text-left min-h-[148px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'nextg' ? (
                      <motion.div
                        key="nextg-metrics"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex flex-col gap-2.5 text-xs text-slate-200"
                        id="audit-nextg-features"
                      >
                        <div className="flex justify-between items-center text-emerald-400 font-bold border-b border-emerald-950 pb-1.5 mb-1">
                          <span>NextG Performance Suite</span>
                          <span className="flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                            <Zap className="w-3 h-3 text-emerald-400 animate-pulse" /> PASS
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">First Contentful Paint (FCP)</span>
                          <span className="font-mono text-emerald-400">0.3s (Excellent)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Local Latency (JHB Teraco)</span>
                          <span className="font-mono text-emerald-400">~12ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Conversion System</span>
                          <span className="font-mono text-emerald-400">+215% Uplift</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">SEO Structure Indexing</span>
                          <span className="font-mono text-emerald-400">Instant</span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="legacy-metrics"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex flex-col gap-2.5 text-xs text-slate-200"
                        id="audit-legacy-warnings"
                      >
                        <div className="flex justify-between items-center text-red-400 font-bold border-b border-red-950 pb-1.5 mb-1">
                          <span>Legacy Outdated Pitfalls</span>
                          <span className="flex items-center gap-1 bg-red-500/10 px-2 py-0.5 rounded text-[10px]">
                            <AlertTriangle className="w-3 h-3 text-red-400" /> SLOW
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Load Time &amp; FCP</span>
                          <span className="font-mono text-red-400">5.8s (Poor Mobile)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">SEO Keyword Philosophy</span>
                          <span className="font-mono text-red-400">Outdated (Web 2.0 list)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Conversion Layout</span>
                          <span className="font-mono text-red-300">Static (1.1% Lead Rate)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Framework Infrastructure</span>
                          <span className="font-mono text-red-300">Bloated Templates</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Simulated Growth Conversion Result Hook */}
                <div className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-colors text-center ${
                  activeTab === 'nextg'
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    : 'bg-red-500/10 text-red-300 border border-red-500/20'
                }`}>
                  {activeTab === 'nextg' ? (
                    <span>🚀 Maximize business bookings for Sandton, JHB, PTA, Cape Town</span>
                  ) : (
                    <span>⚠️ Bleeding leads on cellphone connections &amp; slow hosting</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
