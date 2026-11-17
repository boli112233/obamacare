import { Link } from 'react-router-dom';
import { ArrowUp, CalendarClock } from 'lucide-react';

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

export function Footer() {
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
