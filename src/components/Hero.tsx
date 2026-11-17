import { Link } from 'react-router-dom';
import { CalendarClock, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] flex items-center overflow-hidden bg-primary-950">
      <img src="/P051209PS-0427.jpg" alt="President Barack Obama speaking about healthcare" className="absolute inset-0 w-full h-full object-cover object-center opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/85 to-primary-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-transparent to-primary-950/20" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-500/20 border border-warm-300/40 backdrop-blur-sm mb-7 animate-fade-up">
            <CalendarClock className="w-4 h-4 text-warm-300" />
            <span className="text-warm-100 text-sm font-bold">Enroll by December 15 for January 1 coverage</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.04] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            The healthcare law that changed America.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Understand your rights, compare your options, and find the support available through the Affordable Care Act.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <Link to="/enrollment" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-warm-500 text-white font-bold hover:bg-warm-600 transition-all shadow-lg hover:shadow-warm-500/30">
              Find coverage
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-white/10 backdrop-blur text-white font-bold border border-white/25 hover:bg-white/15 transition-all">
              Explore the guide
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            {[
              { value: '2010', label: 'Signed into law' },
              { value: 'Under 26', label: 'Stay on parents\u2019 plan' },
              { value: '10', label: 'Essential benefits' },
              { value: 'No caps', label: 'Lifetime limits banned' },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-primary-400/70 pl-3">
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">{stat.value}</div>
                <div className="text-sm text-primary-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
