import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { to: '/about', label: 'About Obamacare' },
  { to: '/protections', label: 'Your Protections' },
  { to: '/enrollment', label: 'Enrollment' },
  { to: '/news', label: 'News' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'Help Center' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On sub-pages, always show the scrolled (light) style since content is at top
  const isHome = location.pathname === '/';
  const useScrolledStyle = scrolled || !isHome;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${useScrolledStyle ? 'shadow-lg' : ''}`}>
      <div className="hidden md:block bg-primary-950 text-primary-100 text-[11px] tracking-wide">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-8 flex items-center justify-between">
          <span>OBAMACARE.VOTE · YOUR GUIDE TO THE AFFORDABLE CARE ACT</span>
          <span className="text-primary-300">G71iRHbh9FYPqVF5zDy3Zb4HRZkJV31Sg2MHpm3tpump</span>
        </div>
      </div>

      <nav className={`border-b transition-all duration-300 ${useScrolledStyle ? 'bg-white/95 backdrop-blur-md border-ink-200' : 'bg-primary-900/95 border-white/10 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[68px]">
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden transition-colors ${useScrolledStyle ? 'bg-primary-700' : 'bg-white/10'}`}>
                <img src="/Obamacare copy.jpg" alt="Obamacare logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className={`block font-display font-extrabold text-lg tracking-tight transition-colors ${useScrolledStyle ? 'text-ink-900' : 'text-white'}`}>
                  Obamacare<span className="text-primary-400">.vote</span>
                </span>
                <span className={`hidden sm:block text-[9px] uppercase tracking-[0.18em] transition-colors ${useScrolledStyle ? 'text-ink-400' : 'text-primary-200'}`}>
                  Know your coverage
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className={`px-3 py-2 rounded-md text-sm font-semibold transition-all ${useScrolledStyle ? 'text-ink-600 hover:text-primary-700 hover:bg-primary-50' : 'text-white/85 hover:text-white hover:bg-white/10'}`}>
                  {link.label}
                </Link>
              ))}
            </div>

            <Link to="/donate#donate" className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-warm-500 text-white text-sm font-bold hover:bg-warm-600 transition-all shadow-sm">
              Support the work
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button className={`lg:hidden p-2 rounded-lg transition-colors ${useScrolledStyle ? 'text-ink-700 hover:bg-ink-100' : 'text-white hover:bg-white/10'}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-b border-ink-200 shadow-xl">
          <div className="px-5 py-4 space-y-1">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 pb-4 mb-2 border-b border-ink-100">
              <img src="/Obamacare copy.jpg" alt="Obamacare logo" className="w-9 h-9 rounded-lg object-cover" />
              <span className="font-display font-extrabold text-lg tracking-tight text-ink-900">
                Obamacare<span className="text-primary-600">.vote</span>
              </span>
            </Link>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-ink-700 hover:bg-primary-50 hover:text-primary-700 font-semibold transition-colors">
                {link.label}
              </Link>
            ))}
            <Link to="/donate#donate" onClick={() => setOpen(false)} className="block mt-2 px-4 py-3 rounded-lg bg-warm-500 text-white text-center font-bold">
              Support the work
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
