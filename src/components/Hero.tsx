import { Link } from 'react-router-dom';
import { ArrowRight, Check, Copy, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

const CONTRACT_ADDRESS = '8eAuu9WtPWAecAbV7gybm36YhcDRprSzRt6P8uPipump';

export function Hero() {
  return (
    <section id="top" className="launch-hero relative overflow-hidden bg-ink-950 text-white">
      <div className="launch-grid absolute inset-0" />
      <div className="launch-glow launch-glow-one absolute" />
      <div className="launch-glow launch-glow-two absolute" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-primary-300 text-[11px] font-bold uppercase tracking-[0.24em] animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary-400 shadow-[0_0_12px_rgba(50,128,255,0.9)]" />
              Independent launch preview
            </div>

            <h1 className="mt-6 font-display font-extrabold uppercase leading-[0.86] tracking-[-0.06em] animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <span className="block text-6xl sm:text-8xl lg:text-[8.5rem] text-white">Care</span>
              <span className="block text-6xl sm:text-8xl lg:text-[8.5rem] text-outline-gold">Obamacare</span>
            </h1>

            <p className="mt-8 max-w-xl text-base sm:text-lg text-ink-300 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              The care-first act for the next wave of internet culture. A bold Obamacare identity built to make coverage, protection, and community impossible to ignore.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <Link to="/about" className="launch-button inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-500 text-white font-bold uppercase tracking-wide text-sm hover:bg-primary-400 transition-all">
                Explore the act
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/enrollment" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-bold uppercase tracking-wide text-sm hover:bg-white/10 transition-all">
                Find coverage
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-0 max-w-2xl border border-white/10 bg-white/[0.02] animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              {[
                { value: '2010', label: 'Act signed' },
                { value: '10', label: 'Essential benefits' },
                { value: '26', label: 'Age coverage' },
                { value: '∞', label: 'No lifetime caps' },
              ].map((stat) => (
                <div key={stat.label} className="px-4 py-4 border-r last:border-r-0 border-white/10">
                  <div className="font-display font-bold text-xl text-white">{stat.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-ink-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
            <div className="absolute -top-5 -left-5 z-10 flex items-center gap-2 px-3 py-2 bg-primary-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary-500/20">
              <Zap className="w-3.5 h-3.5" /> Care is live
            </div>
            <div className="launch-card-frame relative p-2 border border-primary-500/60 bg-ink-900 shadow-2xl shadow-primary-950/70">
              <div className="aspect-square w-full flex items-center justify-center bg-ink-950 p-16 sm:p-24"><img src="/obamacare-mark.svg" alt="Obamacare mark" className="w-full max-w-[220px]" /></div>
              <div className="absolute inset-2 bg-gradient-to-t from-ink-950/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-primary-300">Identity series · 01</div>
                  <div className="mt-1 font-display text-xl font-bold uppercase">Care over noise</div>
                </div>
                <ShieldCheck className="w-7 h-7 text-primary-300" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-ink-500">
              <span>Preview active</span>
              <span className="flex items-center gap-1.5 text-primary-400"><span className="w-1.5 h-1.5 rounded-full bg-primary-400" /> Verified concept</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1fr_1fr] border border-white/10 bg-white/[0.02] animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <div className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary-300">Mission</div>
                <div className="mt-2 text-sm font-semibold text-white">Make healthcare information move at internet speed.</div>
              </div>
              <Check className="w-5 h-5 text-primary-400 flex-shrink-0" />
            </div>
          </div>
          <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary-300">Launch details</div>
              <div className="mt-2 font-mono text-sm text-primary-300">{CONTRACT_ADDRESS}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-ink-500">Live contract address · Solana</div>
            </div>
            <button type="button" className="inline-flex items-center gap-2 px-3 py-2 border border-white/15 text-[10px] uppercase tracking-wider font-bold text-white hover:border-primary-400 hover:text-primary-300 transition-colors flex-shrink-0" onClick={() => navigator.clipboard?.writeText(CONTRACT_ADDRESS)}>
              <Copy className="w-3.5 h-3.5" /> Copy CA
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-ink-500">
          <span>Contract verified live</span><span className="text-primary-500">•</span><span>24/7 digital access</span><span className="text-primary-500">•</span><span>Protection for everyone</span><a href="#overview" className="ml-auto inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300"><ExternalLink className="w-3 h-3" /> Read the act</a>
        </div>
      </div>
    </section>
  );
}
