import { FileText, Scale, Store } from 'lucide-react';
import { stats } from '@/data/content';

const heroImage = '/family-health-consultation.webp';

export function Overview() {
  return (
    <section id="overview" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide mb-5">
              WHAT IS OBAMACARE?
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
              The law that transformed American health insurance
            </h2>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              The Affordable Care Act (ACA)—formally the{' '}
              <strong className="text-ink-800">
                Patient Protection and Affordable Care Act
              </strong>
              —was signed into law on March 23, 2010. Its core purpose is to
              reform the U.S. health insurance market to expand coverage,
              protect consumers, and regulate private insurance plans.
            </p>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              Consumers buy ACA-compliant private health insurance through state
              or federal exchanges like{' '}
              <strong className="text-ink-800">HealthCare.gov</strong>.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Scale,
                  title: 'Reforms the insurance market',
                  desc: 'Establishes rules that protect consumers from insurance industry abuses.',
                },
                {
                  icon: Store,
                  title: 'Creates the Marketplace',
                  desc: 'A centralized exchange where consumers can compare and buy plans.',
                },
                {
                  icon: FileText,
                  title: 'Sets essential standards',
                  desc: 'Every plan must meet minimum coverage and consumer-protection requirements.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{item.title}</h3>
                    <p className="text-ink-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="A family discussing health insurance with an advisor"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -left-5 sm:left-5 bg-white rounded-xl shadow-lg p-4 border border-ink-100 max-w-[200px]">
              <div className="font-display font-extrabold text-2xl gradient-text">19.2M</div>
              <div className="text-xs text-ink-500 mt-0.5 leading-tight">Americans enrolled in ACA Marketplace plans as of Feb 2026</div>
            </div>
          </div>
        </div>

        {/* Stat cards full width */}
        <div className="reveal mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-glow rounded-2xl p-6 border border-ink-200/70 bg-white transition-all duration-300"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl gradient-text">
                {stat.value}
              </div>
              <div className="mt-2 font-semibold text-ink-800 text-sm">
                {stat.label}
              </div>
              <p className="mt-1 text-ink-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
