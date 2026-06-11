import { MapPin, Mail, Phone, ArrowUp, Send, Heart } from 'lucide-react';
import { SOUTH_AFRICA_REGIONS_SEO } from '../data';

export default function Footer() {
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900" id="agency-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid rows */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-900" id="footer-main-rows">
          
          {/* Column 1: Brand statement */}
          <div className="md:col-span-5 flex flex-col items-start gap-4" id="footer-col-brand">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-extrabold text-white text-base">
                <span>N</span>
              </div>
              <span className="text-base font-bold text-white tracking-tight">NextG <span className="text-emerald-500 font-extrabold">.</span></span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm text-left">
              South Africa’s premier performance-driven web agency. We engineer ultra-fast, search-dominant, and conversion-certified websites that turn traffic into reliable cashflow. Out with legacy Web 2.0 list templates, in with modern code.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-slate-400 text-left mt-2">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold">+27 82 000 0000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold">strategy@nextgweb.co.za</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Johannesburg & Pretoria East, South Africa</span>
              </div>
            </div>
          </div>

          {/* Column 2: Digital Quick Links */}
          <div className="md:col-span-3 text-left" id="footer-col-links">
            <h4 className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-4 font-bold">
              Agency Solutions
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Website Design &amp; CRO</a></li>
              <li><a href="#seo-section" className="hover:text-emerald-400 transition-colors">Technical &amp; Local SEO</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">E-commerce Development</a></li>
              <li><a href="#hosting-section" className="hover:text-emerald-400 transition-colors">Managed SSD Hosting</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Website Maintenance</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Speed optimization</a></li>
            </ul>
          </div>

          {/* Column 3: Local South Africa SEO Indicator keywords (Crucial CRO and local relevance) */}
          <div className="md:col-span-4 text-left" id="footer-col-keyword-schema">
            <h4 className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-4 font-bold">
              Targeted Localized Coverage
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
              We serve professional practices, retail brands, and service SMEs with Google Map 3-Pack rank optimizations and local schema triggers across all nine provinces.
            </p>
            <div className="flex flex-wrap gap-1" id="local-coverage-microtags">
              {SOUTH_AFRICA_REGIONS_SEO.slice(0, 6).map((region, idx) => (
                <span
                  key={idx}
                  className="bg-slate-900 border border-slate-800 text-[9px] text-slate-400 py-1 px-2 rounded font-medium"
                >
                  {region.split(' (')[0]}
                </span>
              ))}
              <span className="bg-slate-900 border border-slate-800 text-[9px] text-slate-400 py-1 px-2 rounded font-medium">
                Soweto
              </span>
              <span className="bg-slate-900 border border-slate-800 text-[9px] text-slate-400 py-1 px-2 rounded font-medium">
                Durban North
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 mt-1 text-xs text-slate-400" id="footer-bottom-bar">
          <div className="flex flex-col items-start gap-1 text-left">
            <span>&copy; {currentYear} NextG Web Design (Pty) Ltd. Registered South African Entity. All Rights Reserved.</span>
            <span className="text-[10px] text-slate-500 flex items-center gap-1">
              Crafted in Sandton with <Heart className="w-3 h-3 text-red-500 animate-pulse fill-red-500" /> for South African business transformation.
            </span>
          </div>

          {/* Back to top scroll button */}
          <button
            onClick={scrollBackToTop}
            className="p-3 bg-slate-900 hover:bg-emerald-500 text-white rounded-xl shadow-lg border border-slate-800 hover:border-emerald-600 transition-all flex items-center justify-center gap-1 px-4 cursor-pointer"
            id="back-to-top-btn"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
