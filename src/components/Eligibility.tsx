import { MapPin, BadgeCheck, Ban, Coins, CheckCircle2 } from 'lucide-react';
import { eligibility } from '@/data/content';

const iconMap: Record<string, typeof MapPin> = {
  MapPin,
  BadgeCheck,
  Ban,
};

export function Eligibility() {
  return (
    <section id="eligibility" className="relative py-24 bg-white overflow-hidden">
      <img
        src="/community-health-waiting.webp"
        alt=""
        className="absolute top-0 right-0 w-2/3 h-full object-cover object-center opacity-[0.06]"
        loading="lazy"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: requirements */}
          <div className="reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide mb-5">
              WHO QUALIFIES?
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
              Basic eligibility requirements
            </h2>
            <p className="mt-5 text-lg text-ink-600 leading-relaxed">
              To enroll in a Marketplace plan, you must meet three basic
              requirements. If you meet them, you can shop for coverage and may
              qualify for financial assistance.
            </p>

            <div className="mt-8 space-y-4">
              {eligibility.map((item, i) => {
                const Icon = iconMap[item.icon] ?? MapPin;
                return (
                  <div
                    key={item.title}
                    className="reveal flex items-center gap-4 p-5 rounded-xl bg-ink-50 border border-ink-200/60 hover:border-primary-200 transition-colors"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink-900">
                        {item.title}
                      </h3>
                      <p className="text-ink-500 text-sm mt-0.5">
                        {item.requirement}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: subsidies */}
          <div className="reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold tracking-wide mb-5">
              FINANCIAL HELP
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
              Subsidies that lower your costs
            </h2>
            <p className="mt-5 text-lg text-ink-600 leading-relaxed">
              Individuals and families meeting specific income thresholds may
              qualify for financial assistance to make coverage more
              affordable.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-accent-50 to-white border border-accent-100">
                <div className="flex items-center gap-3 mb-3">
                  <Coins className="w-6 h-6 text-accent-600" />
                  <h3 className="font-display font-semibold text-lg text-ink-900">
                    Premium Tax Credits
                  </h3>
                </div>
                <p className="text-ink-600 text-sm leading-relaxed">
                  Reduce your monthly premium payment. The credit amount is
                  based on your income and family size, and can be applied
                  directly to your premium each month.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-600" />
                  <h3 className="font-display font-semibold text-lg text-ink-900">
                    Cost-Sharing Reductions
                  </h3>
                </div>
                <p className="text-ink-600 text-sm leading-relaxed">
                  Lower your out-of-pocket costs—like deductibles,
                  copayments, and coinsurance—when you enroll in a Silver
                  plan and meet income requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
