import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'services', 'why-us', 'portfolio', 'seo-section', 'hosting-section', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why NextG', href: '#why-us', id: 'why-us' },
    { label: 'Our Work', href: '#portfolio', id: 'portfolio' },
    { label: 'South Africa SEO', href: '#seo-section', id: 'seo-section' },
    { label: 'Managed Hosting', href: '#hosting-section', id: 'hosting-section' },
    { label: 'FAQs', href: '#faq', id: 'faq' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
        id="navbar-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2 group"
              id="navbar-logo-link"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-extrabold shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform">
                <span className="text-xl font-sans tracking-tighter">N</span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-300 animate-ping" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 tracking-tight font-sans leading-none flex items-center gap-1">
                  NextG <span className="text-emerald-500 font-extrabold">.</span>
                </span>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase leading-none mt-0.5">
                  DIGITAL AGENCY
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      isActive ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-emerald-500/5 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3" id="desktop-cta-container">
              <a
                href="#quote-calculator"
                onClick={(e) => scrollToSection(e, '#quote-calculator')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-slate-950/20 transition-all transform hover:-translate-y-0.5 group"
                id="cta-navbar-quote"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" key="close" />
                ) : (
                  <Menu className="w-6 h-6" key="menu" />
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] bg-white border-b border-gray-100 shadow-xl z-40 lg:hidden py-6 px-4 flex flex-col gap-4"
            id="mobile-drawer-portal"
          >
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-transparent'}`} />
                  </a>
                );
              })}
            </div>

            <hr className="border-gray-150" />

            <div className="flex flex-col gap-3">
              <a
                href="#quote-calculator"
                onClick={(e) => scrollToSection(e, '#quote-calculator')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-md shadow-emerald-500/10 hover:shadow-lg transition-all"
                id="cta-mobile-quote"
              >
                <Sparkles className="w-5 h-5 text-teal-100" />
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>

              <a
                href="https://wa.me/27820000000?text=Hi%20NextG,%20I'd%20like%20to%20get%20a%20modern%20web%20design%20quote."
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold transition-all border border-emerald-100"
                id="cta-mobile-whatsapp-header"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
