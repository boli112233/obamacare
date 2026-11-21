import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, CalendarClock, Copy, Check, Bitcoin } from 'lucide-react';

const CONTRACT_ADDRESS = '8eAuu9WtPWAecAbV7gybm36YhcDRprSzRt6P8uPipump';
const SOLANA_WALLET = '6FDs8bvvaCX58fN8ptFagUrmHf9q23sVbhr3Yvq3yEL9';

const footerLinks = [
  {
    heading: 'Learn',
    links: [
      { label: 'Overview', to: '/about' },
      { label: 'Protections', to: '/protections' },
      { label: 'Eligibility', to: '/eligibility' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    heading: 'Act',
    links: [
      { label: 'Enrollment', to: '/enrollment' },
      { label: 'Subsidy Estimator', to: '/subsidy' },
      { label: 'Donate', to: '/donate' },
    ],
  },
  {
    heading: 'News',
    links: [
      { label: 'Latest ACA News', to: '/news' },
      { label: 'Blog', to: '/blog' },
    ],
  },
];

const externalLinks = [
  { label: 'HealthCare.gov', href: 'https://www.healthcare.gov' },
  { label: 'KFF', href: 'https://www.kff.org/affordable-care-act/' },
  { label: 'ACA Signups', href: 'https://acasignups.net' },
  { label: 'Find Local Help', href: 'https://localhelp.healthcare.gov' },
];

function CopyRow({
  label,
  value,
  id,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  id: string;
  copied: string | null;
  onCopy: (id: string, value: string) => void;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3.5">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-300 mb-1.5">
        {label}
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-xs text-ink-200 break-all leading-relaxed min-w-0">
          {value}
        </div>
        <button
          type="button"
          onClick={() => onCopy(id, value)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-white/15 text-[10px] uppercase tracking-wider font-bold text-white hover:border-primary-400 hover:text-primary-300 transition-colors flex-shrink-0"
          aria-label={`Copy ${label}`}
        >
          {copied === id ? (
            <>
              <Check className="w-3 h-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" /> Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyAddress = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(() => setCopied(null), 2500);
    } catch {
      setCopied(null);
    }
  };

  return (
    <footer className="bg-ink-950 text-ink-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden shadow-sm ring-1 ring-white/20">
                <img src="/Obamacare copy.jpg" alt="Obamacare logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Obamacare<span className="text-primary-400">.vote</span>
              </span>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              An informational guide to the Affordable Care Act (Obamacare):
              your protections, benefits, enrollment options, and the latest ACA news.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-500/15 border border-warm-400/20">
              <CalendarClock className="w-4 h-4 text-warm-400" />
              <span className="text-warm-300 text-sm font-medium">
                Deadline: December 15
              </span>
            </div>
          </div>

          {/* Internal link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wide mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-ink-400 hover:text-primary-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* External links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CA + Solana wallet block */}
        <div className="py-10 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <CopyRow
              label="Contract Address (CA)"
              value={CONTRACT_ADDRESS}
              id="ca"
              copied={copied}
              onCopy={copyAddress}
            />
            <CopyRow
              label="Solana Wallet"
              value={SOLANA_WALLET}
              id="sol"
              copied={copied}
              onCopy={copyAddress}
            />
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ink-500">
            <Bitcoin className="w-3.5 h-3.5 text-primary-400" />
            <span>Always double-check addresses before sending · Solana network</span>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
