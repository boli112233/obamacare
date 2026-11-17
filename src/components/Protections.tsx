import { useState } from 'react';
import {
  ShieldCheck,
  Users,
  HeartPulse,
  Infinity,
  Plus,
  Minus,
} from 'lucide-react';
import { protections } from '@/data/content';

const iconMap: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Users,
  HeartPulse,
  Infinity,
};

export function Protections() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="protections" className="relative py-24 bg-ink-50 overflow-hidden">
      <img
        src="/stethoscope-care.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.08]"
        loading="lazy"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold tracking-wide mb-5">
            KEY PROTECTIONS & BENEFITS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
            Your rights under the ACA
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            The ACA established fundamental consumer protections that every
            Marketplace plan must follow—so you can get the care you need
            without fear of being denied or dropped.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {protections.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            const isOpen = expanded === i;
            return (
              <div
                key={item.title}
                className="reveal card-glow rounded-2xl bg-white border border-ink-200/70 overflow-hidden transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full flex items-start gap-4 p-6 text-left"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-lg text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-ink-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1 text-ink-400">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[5.5rem]">
                      <p className="text-ink-600 text-sm leading-relaxed border-l-2 border-primary-200 pl-4">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
