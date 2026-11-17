import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/content';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold tracking-wide mb-5">
            FAQ
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Quick answers to the most common questions about the Affordable
            Care Act.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="reveal rounded-xl border border-ink-200/70 bg-white overflow-hidden transition-all"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-ink-50/50 transition-colors"
                >
                  <HelpCircle
                    className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-primary-600' : 'text-ink-300'
                    }`}
                  />
                  <span className="flex-1 font-semibold text-ink-800 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 flex-shrink-0 text-ink-400" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0 text-ink-400" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-14 text-ink-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
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
