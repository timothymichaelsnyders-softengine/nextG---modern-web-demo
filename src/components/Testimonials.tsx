import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="testimonials-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>South African Case Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-5 font-sans">
            Trusted By Businesses <br />
            Who Demand <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text font-extrabold">Factual Sales Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-sans leading-relaxed">
            We help local SMEs and retail companies scale up their digital operations. Read how our modern performance stacks helped clients achieve peak lead metrics.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
              id={`testimonial-card-${test.id}`}
            >
              {/* Quote visual element right */}
              <div className="absolute top-6 right-6 text-gray-100 group-hover:text-emerald-50 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Score rating Stars */}
                <div className="flex items-center gap-1 mb-5" id={`stars-box-${test.id}`}>
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 stroke-transparent" />
                  ))}
                </div>

                {/* Feedback content */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  &quot;{test.feedback}&quot;
                </p>
              </div>

              {/* Client Profile panel */}
              <div className="flex items-center gap-3.5 border-t border-gray-50 pt-5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border border-gray-150 object-cover flex-shrink-0"
                />
                <div className="text-left font-sans">
                  <h4 className="text-sm font-bold text-slate-900 leading-none">
                    {test.name}
                  </h4>
                  <span className="text-[10px] text-gray-500 block mt-0.5 font-medium">
                    {test.role}, {test.company}
                  </span>
                  <span className="text-[9px] text-emerald-600 font-bold block mt-0.5">
                    📍 {test.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
