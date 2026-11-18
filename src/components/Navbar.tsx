import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

const navLinks = [
  { to: '/about', label: 'The Act' },
  { to: '/protections', label: 'Protections' },
  { to: '/enrollment', label: 'Access' },
  { to: '/news', label: 'Updates' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? 'bg-ink-950/95 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-ink-950/80 backdrop-blur-sm'}`}>
      <div className="hidden md:block h-7 bg-primary-500 text-ink-950 text-[10px] font-bold uppercase tracking-[0.2em]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
          <span>Care Obamacare · Independent launch preview</span>
          <span>Act 01 / Access for everyone</span>
        </div>
      </div>
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 border border-primary-400/70 bg-primary-500/10 flex items-center justify-center transition-colors group-hover:bg-primary-500/20">
                <ShieldCheck className="w-5 h-5 text-primary-300" />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg tracking-tight text-white uppercase">Care <span className="text-primary-400">Obamacare</span></span>
                <span className="hidden sm:block text-[9px] uppercase tracking-[0.2em] text-ink-400">The care-first act</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-ink-300 hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>

            <Link to="/enrollment" className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 bg-primary-500 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-primary-400 transition-colors">
              Get access <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden bg-ink-950 border-b border-white/10 shadow-xl">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-bold uppercase tracking-wide text-ink-300 hover:text-white hover:bg-white/5">{link.label}</Link>)}
            <Link to="/enrollment" onClick={() => setOpen(false)} className="block mt-2 px-4 py-3 bg-primary-500 text-center text-white text-sm font-bold uppercase tracking-wide">Get access</Link>
          </div>
        </div>
      )}
    </header>
  );
}
