import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import SEOSection from './components/SEOSection';
import Hosting from './components/Hosting';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { MessageSquare, PhoneCall, Check, X, ShieldAlert } from 'lucide-react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);
  const [preselectedHosting, setPreselectedHosting] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceId: string) => {
    setPreselectedService(serviceId);
    setPreselectedHosting(null); // clear hosting mutual selection
    
    // Set nice quick confirmation toast feedback
    setNotificationMsg('Service captured! Scroll down and see it pre-selected inside your live quote estimator.');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  const handleSelectHosting = (planId: string) => {
    setPreselectedHosting(planId);
    setPreselectedService(null);

    setNotificationMsg('Hosting plan selected! Scroll down to see full bundle custom options.');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white relative">
      {/* Scroll indicator bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
        id="scroll-indicator-bar"
      />

      {/* Floating toast notification for selections */}
      {showNotification && (
        <div 
          className="fixed bottom-6 left-6 z-50 p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-2xl max-w-sm flex items-start gap-3 text-left animate-slide-up"
          id="toast-notification"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold font-sans">Asset Captured Successfully</p>
            <p className="text-[10px] text-slate-300 mt-0.5 leading-snug">{notificationMsg}</p>
          </div>
          <button 
            onClick={() => setShowNotification(false)}
            className="text-slate-400 hover:text-white p-0.5 focus:outline-none"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Persistent global header */}
      <Navbar />

      {/* Interactive visual sections */}
      <main id="main-content-layout">
        <Hero />
        <Services onSelectService={handleSelectService} />
        <WhyChooseUs />
        <Portfolio />
        <SEOSection />
        <Hosting onSelectHosting={handleSelectHosting} />
        <QuoteForm 
          preselectedServiceId={preselectedService} 
          preselectedHostingPlanId={preselectedHosting} 
        />
        <Testimonials />
        <FAQ />
      </main>

      {/* Premium responsive footer */}
      <Footer />

      {/* FLOATING WHATSAPP CTA WIDGET (CRITICAL SOUTH AFRICAN CRO CRITERION) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end" id="floating-interaction-rails">
        
        {/* Helper pulse label for desktop */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-800 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg border border-gray-150 animate-bounce">
          <PhoneCall className="w-3 h-3 text-emerald-500" />
          <span>Speak to a Strategist Live</span>
        </div>

        {/* Action button */}
        <a
          href="https://wa.me/27820000000?text=Hi%20NextG%20Web%20Design%2C%20I%20just%20visited%20your%20modern%20agency%20website%20and%20I%20would%20like%20to%2520request%2520a%2520direct%2520quote%2520for%2520my%2520business."
          target="_blank"
          referrerPolicy="no-referrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-600/35 transition-all transform hover:scale-105 group relative"
          aria-label="Chat direct via WhatsApp"
          id="floating-whatsapp-widget"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-teal-400 border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-teal-400 border-2 border-white" />
        </a>
      </div>
    </div>
  );
}
