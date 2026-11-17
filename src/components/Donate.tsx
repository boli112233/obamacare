import { useState } from 'react';
import {
  Bitcoin,
  Copy,
  Check,
  Landmark,
  Heart,
  QrCode,
  Mail,
  Phone,
  MapPin,
  Building2,
  BadgeCheck,
  ExternalLink,
} from 'lucide-react';
import { cryptoOptions, bankInfo } from '@/data/content';

type TabId = 'crypto' | 'bank';

export function Donate() {
  const [tab, setTab] = useState<TabId>('bank');
  const [copied, setCopied] = useState<string | null>(null);

  const copyAddress = async (id: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(id);
      setTimeout(() => setCopied(null), 2500);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section id="donate" className="relative py-24 bg-ink-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-100 text-warm-700 text-sm font-semibold tracking-wide mb-5">
            <Heart className="w-4 h-4" />
            SUPPORT THE CAUSE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight tracking-tight">
            Donate to support Obamacare
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Your contribution helps us keep this resource free, fight for
            affordable healthcare, and spread awareness about ACA protections.
            Every dollar makes a difference.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="reveal mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-ink-200 shadow-sm">
            <button
              onClick={() => setTab('bank')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                tab === 'bank'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              <Landmark className="w-4 h-4" />
              Bank Transfer
            </button>
            <button
              onClick={() => setTab('crypto')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                tab === 'crypto'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              <Bitcoin className="w-4 h-4" />
              Cryptocurrency
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 reveal">
          {tab === 'bank' ? (
            <div className="max-w-2xl mx-auto">
              <div className="rounded-2xl bg-white border border-ink-200/70 p-7 sm:p-9 card-glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink-900">
                      Other Ways to Donate
                    </h3>
                    <p className="text-sm text-ink-400">
                      Partner organization: {bankInfo.organization}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-ink-600 leading-relaxed mb-6">
                  Obamacare.vote routes traditional donations to{' '}
                  <a
                    href={bankInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
                  >
                    {bankInfo.organization}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  , a registered {bankInfo.taxStatus}. Your gift inspires,
                  empowers, and connects the next generation of changemakers —
                  and builds the Obama Presidential Center on Chicago&rsquo;s
                  South Side.
                </p>

                <div className="space-y-3">
                  <InfoRow
                    icon={<Building2 className="w-4 h-4" />}
                    label="Organization"
                    value={bankInfo.organization}
                    copyId="org"
                    copied={copied}
                    onCopy={copyAddress}
                  />
                  <InfoRow
                    icon={<BadgeCheck className="w-4 h-4" />}
                    label="Tax ID (EIN)"
                    value={bankInfo.ein}
                    copyId="ein"
                    copied={copied}
                    onCopy={copyAddress}
                  />
                  <InfoRow
                    icon={<MapPin className="w-4 h-4" />}
                    label="Mailing Address"
                    value={bankInfo.mailingAddress}
                    copyId="mail"
                    copied={copied}
                    onCopy={copyAddress}
                  />
                  <InfoRow
                    icon={<Mail className="w-4 h-4" />}
                    label="Email"
                    value={bankInfo.email}
                    copyId="email"
                    copied={copied}
                    onCopy={copyAddress}
                    href={`mailto:${bankInfo.email}`}
                  />
                  <InfoRow
                    icon={<Phone className="w-4 h-4" />}
                    label="Donation Phone Line"
                    value={bankInfo.phone}
                    copyId="phone"
                    copied={copied}
                    onCopy={copyAddress}
                    href={`tel:${bankInfo.phone.replace(/[^0-9]/g, '')}`}
                  />
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <a
                    href={bankInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-all"
                  >
                    Donate online
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${bankInfo.email}`}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-ink-100 text-ink-700 text-sm font-semibold hover:bg-ink-200 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email for wire details
                  </a>
                </div>

                <p className="mt-6 text-xs text-ink-500 leading-relaxed bg-warm-50 border border-warm-100 rounded-lg p-4">
                  For electronic funds transfer, marketable securities, or
                  donor-advised fund gifts, contact {bankInfo.organization} at{' '}
                  <a
                    href={`mailto:${bankInfo.email}`}
                    className="font-semibold text-primary-600 hover:text-primary-700"
                  >
                    {bankInfo.email}
                  </a>{' '}
                  or{' '}
                  <a
                    href={`tel:${bankInfo.phone.replace(/[^0-9]/g, '')}`}
                    className="font-semibold text-primary-600 hover:text-primary-700"
                  >
                    {bankInfo.phone}
                  </a>{' '}
                  to request wire instructions. Donations to the Barack Obama
                  Foundation are tax-deductible under section 170 of the
                  Internal Revenue Code.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-5">
              {cryptoOptions.map((crypto) => (
                <div
                  key={crypto.id}
                  className="rounded-2xl bg-white border border-ink-200/70 p-6 card-glow transition-all duration-300"
                >
                  {/* Icon + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <CryptoIcon id={crypto.id} color={crypto.color} />
                    <div>
                      <div className="font-display font-bold text-ink-900">
                        {crypto.name}
                      </div>
                      <div className="text-xs text-ink-400 font-medium">
                        {crypto.symbol} · {crypto.network}
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="rounded-xl bg-ink-50 border border-ink-200 p-3.5 mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-ink-400 mb-1.5">
                      Wallet Address
                    </div>
                    <div className="font-mono text-xs text-ink-700 break-all leading-relaxed">
                      {crypto.address}
                    </div>
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={() => copyAddress(crypto.id, crypto.address)}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                      copied === crypto.id
                        ? 'bg-accent-500 text-white'
                        : 'bg-ink-100 text-ink-700 hover:bg-ink-200'
                    }`}
                  >
                    {copied === crypto.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Address
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust note */}
        <div className="reveal mt-10 flex items-center justify-center gap-2 text-sm text-ink-400">
          <QrCode className="w-4 h-4" />
          <span>
            Always double-check addresses before sending. Crypto transactions
            are irreversible.
          </span>
        </div>
      </div>
    </section>
  );
}

function CryptoIcon({ id, color }: { id: string; color: string }) {
  if (id === 'bitcoin') {
    return (
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color + '20' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill={color} />
          <path
            d="M15.8 10.2c.2-1.3-.8-2-2.2-2.5l.5-1.8-1.2-.3-.5 1.7-.9-.2.5-1.8-1.2-.3-.5 1.8c-.3-.1-.5-.1-.8-.2l-1.7-.4-.3 1.3s.9.2.9.2c.5.1.6.4.6.6l-.5 2.1.1.1-.1-.1-.7 2.8c-.1.2-.2.3-.5.2 0 0-.9-.2-.9-.2l-.6 1.4 1.6.4.9.2-.5 1.8 1.2.3.5-1.8.9.2-.5 1.8 1.2.3.5-1.8c1.8.3 3.2.2 3.8-1.5.5-1.3-.1-2.1-1-2.6.7-.2 1.2-.7 1.4-1.6zM13.7 14.5c-.4 1.4-2.7.6-3.5.4l.6-2.3c.7.2 3.2.5 2.9 1.9zm.2-3.5c-.3 1.3-2.2.6-2.8.5l.5-2.1c.6.2 2.6.4 2.3 1.6z"
            fill="#fff"
          />
        </svg>
      </div>
    );
  }

  if (id === 'ethereum') {
    return (
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color + '20' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill={color} />
          <path d="M12 4l-4.8 8 4.8 2.5L12 4z" fill="#fff" fillOpacity="0.9" />
          <path d="M12 4l4.8 8L12 9.5V4z" fill="#fff" fillOpacity="0.6" />
          <path d="M7.2 13l4.8 6v-3.5L7.2 13z" fill="#fff" fillOpacity="0.9" />
          <path d="M12 19l4.8-6L12 15.5V19z" fill="#fff" fillOpacity="0.6" />
        </svg>
      </div>
    );
  }

  if (id === 'solana') {
    return (
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: '#9945ff15' }}
      >
        <svg width="26" height="26" viewBox="0 0 397 397" fill="none">
          <defs>
            <linearGradient id="sol-grad" x1="0" y1="0" x2="397" y2="397" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9945ff" />
              <stop offset="1" stopColor="#14f195" />
            </linearGradient>
          </defs>
          <path
            d="M57.1 244c1.5-1.4 3.5-2.2 5.6-2.2h274.8c3.7 0 5.5 4.5 2.9 7.1l-54.3 54.3c-1.5 1.4-3.5 2.2-5.6 2.2H5.7c-3.7 0-5.5-4.5-2.9-7.1L57.1 244zM57.1 47.6c1.6-1.4 3.6-2.2 5.6-2.2h274.8c3.7 0 5.5 4.5 2.9 7.1l-54.3 54.3c-1.5 1.4-3.5 2.2-5.6 2.2H5.7c-3.7 0-5.5-4.5-2.9-7.1L57.1 47.6zM286.4 145.5c-1.5-1.4-3.5-2.2-5.6-2.2H6c-3.7 0-5.5 4.5-2.9 7.1l54.3 54.3c1.5 1.4 3.5 2.2 5.6 2.2h274.8c3.7 0 5.5-4.5 2.9-7.1l-54.3-54.3z"
            fill="url(#sol-grad)"
          />
        </svg>
      </div>
    );
  }

  return null;
}

function InfoRow({
  icon,
  label,
  value,
  copyId,
  copied,
  onCopy,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  copyId: string;
  copied: string | null;
  onCopy: (id: string, value: string) => void;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-ink-100 last:border-0">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-ink-400 flex-shrink-0">{icon}</span>
        <span className="text-sm font-semibold text-ink-400 uppercase tracking-wide">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-3 min-w-0">
        {href ? (
          <a
            href={href}
            className="font-mono text-sm text-primary-700 hover:text-primary-800 underline-offset-2 hover:underline truncate"
          >
            {value}
          </a>
        ) : (
          <span className="font-mono text-sm text-ink-800 truncate">{value}</span>
        )}
        <button
          onClick={() => onCopy(copyId, value)}
          className="text-ink-400 hover:text-primary-600 transition-colors flex-shrink-0"
          aria-label={`Copy ${label}`}
        >
          {copied === copyId ? (
            <Check className="w-4 h-4 text-accent-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
