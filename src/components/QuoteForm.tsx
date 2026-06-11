import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, Sparkles, Send, MessageSquare, ShieldCheck, Mail, Clock } from 'lucide-react';
import { LeadFormData } from '../types';

interface QuoteFormProps {
  preselectedServiceId: string | null;
  preselectedHostingPlanId: string | null;
}

export default function QuoteForm({ preselectedServiceId, preselectedHostingPlanId }: QuoteFormProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<LeadFormData>({
    businessType: '',
    goals: [],
    services: [],
    budget: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Monitor pre-selections
  useEffect(() => {
    if (preselectedServiceId) {
      let serviceLabel = '';
      if (preselectedServiceId === 'web-design') serviceLabel = 'Website Design & CRO';
      if (preselectedServiceId === 'seo-optimization') serviceLabel = 'Technical & Local SEO';
      if (preselectedServiceId === 'ecommerce') serviceLabel = 'E-commerce Development';
      if (preselectedServiceId === 'wordpress-headless') serviceLabel = 'WordPress & CMS';
      if (preselectedServiceId === 'hosting') serviceLabel = 'Managed SSD Hosting';
      if (preselectedServiceId === 'branding-logo') serviceLabel = 'Branding & Logo Design';
      if (preselectedServiceId === 'maintenance') serviceLabel = 'Website Maintenance';
      if (preselectedServiceId === 'performance') serviceLabel = 'Performance Speedup';

      if (serviceLabel) {
        setFormData((prev) => ({
          ...prev,
          services: prev.services.includes(serviceLabel) ? prev.services : [...prev.services, serviceLabel]
        }));
        // Scroll to container and target Step 3 directly!
        setStep(3);
        const el = document.getElementById('quote-calculator');
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 85,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedHostingPlanId) {
      let planLabel = 'Managed SSD Hosting';
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(planLabel) ? prev.services : [...prev.services, planLabel],
        goals: prev.goals.includes('Improve Mobile Speed') ? prev.goals : [...prev.goals, 'Improve Mobile Speed']
      }));
      setStep(3);
      const el = document.getElementById('quote-calculator');
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 85,
          behavior: 'smooth'
        });
      }
    }
  }, [preselectedHostingPlanId]);

  const businessTypes = [
    'Local Small Business (SME)',
    'E-commerce / Retail Shop',
    'Startup / Tech Venture',
    'Corporate Agency / Firm',
    'Professional Practice (Attorney, Doctor, etc.)'
  ];

  const businessGoals = [
    'Get More Client Leads & Calls',
    'Sell Products & Process Payments Online',
    'Completely Redesign & Modernize Brand',
    'Rank Higher on Google South Africa',
    'Improve Mobile Load Times & Conversions'
  ];

  const availableServices = [
    'Website Design & CRO',
    'Technical & Local SEO',
    'E-commerce Development',
    'WordPress & CMS',
    'Managed SSD Hosting',
    'Branding & Logo Design',
    'Website Maintenance',
    'Performance Speedup'
  ];

  const budgetRanges = [
    'Basic Setup (R5,000 - R10,000)',
    'Commercial Stack (R10,000 - R25,000)',
    'Premium Growth Engine (R25,000 - R50,000)',
    'Enterprise Headless Stack (R50,000+)'
  ];

  const nextStep = () => {
    // Basic validation per step
    const currentErrors: Record<string, string> = {};
    
    if (step === 1 && !formData.businessType) {
      currentErrors.businessType = 'Please select your business structure';
    }
    if (step === 2 && formData.goals.length === 0) {
      currentErrors.goals = 'Please select at least one core motivation goal';
    }
    if (step === 3 && formData.services.length === 0) {
      currentErrors.services = 'Please check at least one optimization service';
    }
    if (step === 4 && !formData.budget) {
      currentErrors.budget = 'Please select your target range';
    }

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors({});
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setErrors({});
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBusinessTypeChange = (bType: string) => {
    setFormData((prev) => ({ ...prev, businessType: bType }));
    setErrors({});
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.goals.includes(goal);
      return {
        ...prev,
        goals: alreadySelected
          ? prev.goals.filter((g) => g !== goal)
          : [...prev.goals, goal]
      };
    });
    setErrors({});
  };

  const handleServiceToggle = (srv: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(srv);
      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((s) => s !== srv)
          : [...prev.services, srv]
      };
    });
    setErrors({});
  };

  const handleBudgetChange = (bRange: string) => {
    setFormData((prev) => ({ ...prev, budget: bRange }));
    setErrors({});
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const currentErrors: Record<string, string> = {};

    if (!formData.name.trim()) currentErrors.name = 'Please provide contact name';
    if (!formData.email.trim() || !validateEmail(formData.email)) currentErrors.email = 'Provide valid email address';
    if (!formData.phone.trim()) currentErrors.phone = 'Provide South African cellphone number';
    if (!formData.company.trim()) currentErrors.company = 'Provide company registration/trading name';

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  // ZAR Pricing Calculation approximation (elite visual feedback)
  const calculateEstimate = () => {
    let base = 0;
    if (formData.businessType === 'Local Small Business (SME)') base += 5500;
    if (formData.businessType === 'E-commerce / Retail Shop') base += 11500;
    if (formData.businessType === 'Startup / Tech Venture') base += 8500;
    if (formData.businessType === 'Corporate Agency / Firm') base += 14500;
    if (formData.businessType === 'Professional Practice (Attorney, Doctor, etc.)') base += 7500;

    formData.services.forEach((srv) => {
      if (srv === 'Website Design & CRO') base += 2500;
      if (srv === 'Technical & Local SEO') base += 3500;
      if (srv === 'E-commerce Development') base += 6000;
      if (srv === 'WordPress & CMS') base += 2200;
      if (srv === 'Managed SSD Hosting') base += 149; // representation base
      if (srv === 'Branding & Logo Design') base += 1800;
      if (srv === 'Website Maintenance') base += 1200;
      if (srv === 'Performance Speedup') base += 1500;
    });

    return base === 0 ? 0 : base;
  };

  const getWhatsAppMessage = () => {
    const spaceChar = '%20';
    const breakChar = '%0A';
    const head = `Hi%20NextG%20Web%2520Design%21%20I%20just%20built%20a%20modern%20quote%20proposal%20outline%20online.${breakChar}${breakChar}`;
    const nameStr = `*Name:*${spaceChar}${encodeURIComponent(formData.name)}${breakChar}`;
    const companyStr = `*Company:*${spaceChar}${encodeURIComponent(formData.company)}${breakChar}`;
    const budgetStr = `*Budget%20Class:*${spaceChar}${encodeURIComponent(formData.budget)}${breakChar}`;
    const servicesStr = `*Services%20Needed:*${spaceChar}${encodeURIComponent(formData.services.join(', '))}${breakChar}`;
    const goalsStr = `*Primary%20Goals:*${spaceChar}${encodeURIComponent(formData.goals.join(', '))}${breakChar}`;
    const pricingStr = `*Calculated%20Rough%20Estimate:*${spaceChar}R${calculateEstimate()}${breakChar}`;
    
    return `https://wa.me/27820000000?text=${head}${nameStr}${companyStr}${budgetStr}${servicesStr}${goalsStr}${pricingStr}`;
  };

  return (
    <section id="quote-calculator" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" id="calculator-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>2-Minute Lead Onboarder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-5 font-sans">
            Build Your Interactive <br />
            <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text font-extrabold">Modern Proposal Quote</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-sans leading-relaxed">
            Specify your requirements, business goals, and budget. Get an instant visual price appraisal. Secure a custom strategist audit response in 24 hours.
          </p>
        </div>

        {/* Form Grid Area */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto" id="quote-form-grid">
          
          {/* Main Interactive Multi-Step container */}
          <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm" id="form-interactive-stage">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-flow"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  id="form-steps-content"
                >
                  {/* Step Indicators */}
                  <div className="flex items-center justify-between gap-2 mb-8" id="steps-indicator-strip">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="flex-1 flex flex-col gap-2">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            s <= step ? 'bg-emerald-500' : 'bg-gray-200'
                          }`}
                        />
                        <span className={`text-[10px] hidden sm:block font-bold uppercase tracking-wider ${
                          s === step ? 'text-emerald-600' : 'text-gray-400'
                        }`}>
                          {s === 1 && 'Structure'}
                          {s === 2 && 'Goals'}
                          {s === 3 && 'Services'}
                          {s === 4 && 'Funding'}
                          {s === 5 && 'Contact'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Error Indicator Box */}
                  {Object.keys(errors).length > 0 && (
                    <div className="mb-6 p-4 bg-red-50 text-red-700 text-xs rounded-2xl border border-red-100 font-medium">
                      ⚠️ Please solve validation alerts before making transition steps.
                    </div>
                  )}

                  {/* Form Questions */}
                  <div className="min-h-[300px]">
                    {/* STEP 1: BUSINESS STRUCTURE */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4 text-left"
                      >
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                          1. Select your target business structure:
                        </h3>
                        {errors.businessType && <p className="text-xs text-red-500 -mt-1">{errors.businessType}</p>}
                        <div className="grid gap-3 select-none">
                          {businessTypes.map((bType) => (
                            <button
                              key={bType}
                              type="button"
                              onClick={() => handleBusinessTypeChange(bType)}
                              className={`flex items-center justify-between p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                formData.businessType === bType
                                  ? 'bg-slate-900 text-white border-slate-900'
                                  : 'bg-white text-slate-700 border-gray-150 hover:bg-slate-100'
                              }`}
                            >
                              <span>{bType}</span>
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                formData.businessType === bType ? 'border-emerald-400 bg-emerald-500 text-white' : 'border-gray-300 bg-gray-50'
                              }`}>
                                {formData.businessType === bType && <Check className="w-3 h-3" />}
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: GOALS */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4 text-left"
                      >
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                          2. What are your primary website goals? (Select multiple)
                        </h3>
                        {errors.goals && <p className="text-xs text-red-500 -mt-1">{errors.goals}</p>}
                        <div className="grid gap-3 select-none">
                          {businessGoals.map((goal) => {
                            const isChosen = formData.goals.includes(goal);
                            return (
                              <button
                                key={goal}
                                type="button"
                                onClick={() => handleGoalToggle(goal)}
                                className={`flex items-center justify-between p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                  isChosen
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                                    : 'bg-white text-slate-700 border-gray-150 hover:bg-slate-100'
                                }`}
                              >
                                <span>{goal}</span>
                                <div className={`w-5 h-5 rounded-xl border flex items-center justify-center ${
                                  isChosen ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-gray-300 bg-gray-50'
                                }`}>
                                  {isChosen && <Check className="w-3 h-3" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: SERVICES */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4 text-left"
                      >
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                          3. Choose modern digital assets needed: (Select multiple)
                        </h3>
                        {errors.services && <p className="text-xs text-red-500 -mt-1">{errors.services}</p>}
                        <div className="grid sm:grid-cols-2 gap-3 select-none">
                          {availableServices.map((srv) => {
                            const isChosen = formData.services.includes(srv);
                            return (
                              <button
                                key={srv}
                                type="button"
                                onClick={() => handleServiceToggle(srv)}
                                className={`flex items-center justify-between p-4 rounded-2xl border text-xs font-bold tracking-tight transition-all text-left cursor-pointer ${
                                  isChosen
                                    ? 'bg-emerald-50 border-emerald-350 text-emerald-950'
                                    : 'bg-white text-slate-700 border-gray-150 hover:bg-slate-100'
                                }`}
                              >
                                <span>{srv}</span>
                                <div className={`w-5 h-5 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                                  isChosen ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-gray-300 bg-gray-50'
                                }`}>
                                  {isChosen && <Check className="w-3 h-3" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4: BUDGETS */}
                    {step === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4 text-left"
                      >
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                          4. What is your estimated funding allocation?
                        </h3>
                        {errors.budget && <p className="text-xs text-red-500 -mt-1">{errors.budget}</p>}
                        <div className="grid gap-3 select-none">
                          {budgetRanges.map((bRange) => (
                            <button
                              key={bRange}
                              type="button"
                              onClick={() => handleBudgetChange(bRange)}
                              className={`flex items-center justify-between p-4 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
                                formData.budget === bRange
                                  ? 'bg-slate-900 text-white border-slate-900'
                                  : 'bg-white text-slate-700 border-gray-150 hover:bg-slate-100'
                              }`}
                            >
                              <span>{bRange}</span>
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                formData.budget === bRange ? 'border-emerald-400 bg-emerald-500 text-white' : 'border-gray-300 bg-gray-50'
                              }`}>
                                {formData.budget === bRange && <Check className="w-3 h-3" />}
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 5: CONTACT INFORMATION */}
                    {step === 5 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4 text-left"
                      >
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 flex items-center gap-1.5">
                          <ShieldCheck className="text-emerald-500 w-5 h-5" />
                          <span>5. Enter final callback contact details:</span>
                        </h3>
                        <p className="text-gray-400 text-xs font-medium -mt-2">
                          We promise 100% database privacy. No digital spam. Callback scheduled in hours.
                        </p>

                        <form onSubmit={submitForm} className="grid sm:grid-cols-2 gap-4 mt-2">
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1">Company Registered Name</label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleTextChange}
                              placeholder="e.g. Durban Trading Pty Ltd"
                              className="w-full px-4 py-3 rounded-xl border border-gray-150 bg-white text-slate-900 text-sm focus:outline-emerald-500"
                            />
                            {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1">Contact Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleTextChange}
                              placeholder="e.g. Sindi Ndlovu"
                              className="w-full px-4 py-3 rounded-xl border border-gray-150 bg-white text-slate-900 text-sm focus:outline-emerald-500"
                            />
                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1">Business Email Address</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleTextChange}
                              placeholder="e.g. manager@yourdomain.co.za"
                              className="w-full px-4 py-3 rounded-xl border border-gray-150 bg-white text-slate-900 text-sm focus:outline-emerald-500"
                            />
                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1">Cellphone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleTextChange}
                              placeholder="e.g. 082 123 4567"
                              className="w-full px-4 py-3 rounded-xl border border-gray-150 bg-white text-slate-900 text-sm focus:outline-emerald-500"
                            />
                            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                          </div>

                          <div className="sm:col-span-2 mt-4">
                            <button
                              type="submit"
                              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-950 hover:bg-slate-850 text-white font-bold text-sm tracking-wide shadow-lg transition-all cursor-pointer"
                              id="btn-submit-proposal"
                            >
                              <Send className="w-4 h-4 text-emerald-400" />
                              <span>Finish &amp; Generate Instant Outline Proposal</span>
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </div>

                  {/* Flow buttons footer */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-8" id="form-foot-triggers">
                    {step > 1 ? (
                      <button
                        onClick={prevStep}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-slate-700 text-xs font-bold border border-gray-150 transition-colors cursor-pointer"
                        id="btn-step-prev"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous Step</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 5 && (
                      <button
                        onClick={nextStep}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                        id="btn-step-next"
                      >
                        <span>Analyze Next Step</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ) : (
                /* SUCCESS SCREEN: HIGHEST LEVEL CONVERSION */
                <motion.div
                  key="success-summary"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col text-left gap-6"
                  id="form-success-container"
                >
                  <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg animate-bounce">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-900 tracking-tight leading-none mb-1">
                        Proposal Appraisal Compiled!
                      </h3>
                      <p className="text-emerald-700 text-xs font-semibold">
                        A strategist email summary was dispatched to <strong className="font-bold text-slate-900">{formData.email}</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Dynamic checklist suggestions based on choices */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm" id="proposed-dynamic-strategy">
                    <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase block mb-3">
                      🔬 STRATEGIC RECOMMENDATION FOR {formData.company.toUpperCase()}
                    </span>

                    <ul className="flex flex-col gap-3 text-xs text-slate-700" id="success-checklist">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Performance Priority:</strong> We recommend building your new asset on absolute custom React/Tailwind instead of sluggish builders to guarantee under 0.8s mobile response on local Vodacom/MTN devices.</span>
                      </li>
                      {formData.goals.includes('Sell Products & Process Payments Online') && (
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span><strong>E-commerce recommendation:</strong> Secure integration of Yoco checkout redirect triggers combined with SMS confirmation nodes is recommended for higher security scores.</span>
                        </li>
                      )}
                      {formData.goals.includes('Rank Higher on Google South Africa') && (
                        <li className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Local Search Indexing:</strong> Setting up a structural Gauteng/Local micro-site schema linked directly to your Google Business Node is paramount to trigger Map 3-Pack highlights.</span>
                        </li>
                      )}
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Johannesburg Cluster Hosting:</strong> Direct Teraco managed server instance selected. This cuts mobile response latency by up to 220ms, securing better Google Core Web Vitals rankings.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Next Action conversion triggers */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-2" id="success-next-actions">
                    <a
                      href={getWhatsAppMessage()}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                      id="whatsapp-success-trigger"
                    >
                      <MessageSquare className="w-5 h-5 text-white" />
                      <span>Speed Up: Send Quote via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                        setFormData({
                          businessType: '',
                          goals: [],
                          services: [],
                          budget: '',
                          name: '',
                          email: '',
                          phone: '',
                          company: ''
                        });
                      }}
                      className="flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
                      id="reset-form-btn"
                    >
                      <span>Build Another Appraisal</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right estimate sidebar card */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-left" id="calculator-sidebar">
            <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-850 shadow-xl relative overflow-hidden" id="estimated-costing-console">
              {/* background effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl" />
              
              <h3 className="text-sm font-sans font-black tracking-wider text-slate-400 uppercase mb-4 flex items-center justify-between">
                <span>Estimated Valuation</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded uppercase font-mono tracking-widest font-black">
                  LIVE APPRAISAL
                </span>
              </h3>

              {/* Live counter */}
              <div className="flex items-baseline mb-6 border-b border-slate-800 pb-6" id="quote-price-appraisal">
                <span className="text-xl font-bold text-emerald-400 mr-1">R</span>
                <span className="text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
                  {calculateEstimate().toLocaleString('en-ZA')}
                </span>
                <span className="text-xs text-slate-400 font-semibold ml-1">Setup Base</span>
              </div>

              {/* Dynamic list items */}
              <div className="flex flex-col gap-3 text-xs" id="quote-line-items">
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">LINE BREAKDOWN</span>
                
                {formData.businessType ? (
                  <div className="flex justify-between text-slate-200">
                    <span className="text-slate-400 truncate max-w-[170px]">{formData.businessType}</span>
                    <span className="font-mono text-emerald-400">Included</span>
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-500 italic">Select business type to compile...</p>
                )}

                {formData.services.map((srv) => (
                  <div key={srv} className="flex justify-between text-slate-200">
                    <span className="text-slate-400 truncate max-w-[170px]">{srv}</span>
                    <span className="font-mono text-emerald-400">Included</span>
                  </div>
                ))}

                {formData.services.length === 0 && !formData.businessType && (
                  <div className="text-[11px] text-slate-500 italic">No assets or structure selected yet. Values update automatically above.</div>
                )}
              </div>

              {/* CTA button placeholder */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col gap-2 text-[10px] text-slate-400">
                <div className="flex justify-between">
                  <span>Datacenter Node Connection</span>
                  <span className="text-emerald-400 font-mono">12ms latency</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>SSL Security Certificate</span>
                  <span className="text-emerald-400 font-mono">FREE / SECURE</span>
                </div>
              </div>
            </div>

            {/* Response speed trust card */}
            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 flex items-start gap-3" id="trust-onboard-info">
              <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-emerald-900 tracking-tight leading-none mb-1">
                  Average Callback: Under 2 Hours
                </h4>
                <p className="text-[11px] text-emerald-700 leading-normal font-medium">
                  We review your exact digital questionnaire parameters against current Sandton/Gauteng SEO statistics and call back within 2 business hours.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
