import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 12;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Ride', path: '/ride' },
    { name: 'Services', path: '/services' },
    { name: 'Drive with WOLET', path: '/drive' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 lg:sticky lg:top-0 z-50 transition-[background-color,box-shadow] duration-200 border-b border-white/10 pt-[env(safe-area-inset-top)] lg:pt-0 ${
          scrolled
            ? 'bg-[#08264A]/98 backdrop-blur-md shadow-xl lg:py-2.5'
            : 'bg-[#08264A] lg:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="h-14 sm:h-16 lg:h-auto flex items-center justify-between gap-2 sm:gap-6">
            {/* Brand Logo */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex flex-col justify-center min-h-[44px] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F] rounded-lg shrink-0"
            >
              <span className="text-lg sm:text-3xl lg:text-[2rem] font-extrabold tracking-wider text-[#FFD21F] leading-none group-hover:opacity-95 transition-opacity whitespace-nowrap">
                WOLET
              </span>
              <span className="text-[7.5px] sm:text-[10px] uppercase tracking-widest font-bold text-white/85 mt-0.5 whitespace-nowrap">
                Your Smart Transit Partner
              </span>
            </Link>

            {/* Desktop Navigation (1024px+) */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center space-x-1 xl:space-x-2"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-2.5 xl:px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F] ${
                      isActive ? 'text-[#FFD21F]' : 'text-white/95 hover:text-[#FFD21F]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFD21F] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                to="/ride"
                className="inline-flex items-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-5 py-2.5 rounded-xl shadow-md transition-transform hover:-translate-y-0.5 text-sm whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore WOLET</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>

            {/* Mobile & Tablet Controls (< 1024px) */}
            <div className="lg:hidden flex items-center gap-1.5 sm:gap-3 shrink-0">
              <Link
                to="/ride"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-3 sm:px-4 min-h-[40px] sm:min-h-[44px] min-w-[44px] rounded-lg sm:rounded-xl text-xs sm:text-sm shadow-sm whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore
              </Link>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-xl text-white hover:text-[#FFD21F] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F]"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed Header Spacer on Mobile & Tablet (< 1024px) so page headings are never hidden */}
      <div
        aria-hidden="true"
        className="lg:hidden h-[calc(3.5rem+1px)] sm:h-[calc(4rem+1px)] shrink-0"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      />

      {/* Mobile & Tablet Backdrop Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 top-[calc(3.5rem+1px+env(safe-area-inset-top))] sm:top-[calc(4rem+1px+env(safe-area-inset-top))] bg-black/50 backdrop-blur-[2px] z-[45] transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile & Tablet Navigation Drawer */}
      <nav
        id="mobile-navigation-drawer"
        aria-label="Mobile Navigation"
        aria-hidden={!isOpen}
        className={`lg:hidden fixed left-0 right-0 top-[calc(3.5rem+1px+env(safe-area-inset-top))] sm:top-[calc(4rem+1px+env(safe-area-inset-top))] bg-[#08264A] border-t border-white/15 shadow-2xl z-[48] max-h-[calc(100dvh-3.5rem-1px-env(safe-area-inset-top))] sm:max-h-[calc(100dvh-4rem-1px-env(safe-area-inset-top))] overflow-y-auto overscroll-contain transition-[opacity,transform,visibility] duration-200 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-2 pointer-events-none invisible'
        }`}
      >
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between min-h-[46px] sm:min-h-[48px] px-4 py-2.5 sm:py-3 rounded-xl text-[15px] sm:text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F] ${
                    isActive
                      ? 'bg-white/15 text-[#FFD21F] font-semibold border border-[#FFD21F]/30'
                      : 'text-white hover:bg-white/10 hover:text-[#FFD21F]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#FFD21F] shrink-0" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/ride"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className="w-full min-h-[48px] flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/15 text-white border border-white/25 font-bold py-3 px-4 rounded-xl text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F]"
            >
              <span>Plan a Ride</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              to="/drive"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className="w-full min-h-[48px] flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold py-3 px-4 rounded-xl shadow-lg text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
