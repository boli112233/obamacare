import { Link } from 'react-router-dom';
import { CalendarClock, CalendarCheck, LifeBuoy, ArrowRight } from 'lucide-react';
import { enrollmentInfo } from '@/data/content';

const iconMap: Record<string, typeof CalendarClock> = {
  CalendarClock,
  CalendarCheck,
  LifeBuoy,
};

export function Enrollment() {
  return (
    <section id="enrollment" className="relative py-24 bg-ink-900 overflow-hidden">
      {/* Photo background */}
      <img
        src="/community-health-waiting.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-ink-950/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/80 to-ink-950/90" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-warm-500/20 text-warm-300 text-sm font-semibold tracking-wide mb-5">
            ELIGIBILITY & ENROLLMENT
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight tracking-tight">
            Know your enrollment windows
          </h2>
          <p className="mt-5 text-lg text-ink-300 leading-relaxed">
            Timing matters. Enroll during open enrollment for January 1
            coverage, or use a Special Enrollment Period if you experience a
            qualifying life event.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {enrollmentInfo.map((item, i) => {
            const Icon = iconMap[item.icon] ?? CalendarClock;
            return (
              <div
                key={item.label}
                className="reveal rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 hover:bg-white/8 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-warm-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-warm-400" />
                  </div>
                  <span className="text-ink-400 text-sm font-medium">
                    {item.label}
                  </span>
                </div>
                <div className="font-display font-bold text-2xl text-white mb-3">
                  {item.value}
                </div>
                <p className="text-ink-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="reveal mt-14 relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <img
            src="/enrollment-form.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Ready to enroll in 2027 coverage?
            </h3>
            <p className="mt-2 text-primary-100 text-sm sm:text-base">
              Apply on HealthCare.gov to check your savings and manage your
              plan.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.healthcare.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-primary-700 font-semibold hover:bg-primary-50 transition-all shadow-lg whitespace-nowrap"
            >
              Visit HealthCare.gov
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 backdrop-blur text-white font-semibold border border-white/20 hover:bg-white/20 transition-all whitespace-nowrap"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
