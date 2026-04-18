import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Fingerprint, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Scanner', path: '/scanner' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6',
        scrolled ? 'py-4' : 'py-8'
      )}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto transition-all duration-500 rounded-[2rem]",
          scrolled ? "glass premium-shadow px-6 py-3" : "bg-transparent py-0"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-32 h-12 flex items-center justify-center transition-all duration-500 hover:scale-105 bg-white/50 rounded-lg p-1">
              <img src="/website logo.jpeg" alt="Logo" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-[13px] font-bold transition-all duration-300 hover:text-brand-500 relative py-2 tracking-tighter uppercase',
                    location.pathname === link.path ? 'text-foreground' : 'text-muted-foreground/80'
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-border mx-2" />

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Access Lab <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-secondary hover:bg-muted transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-24 left-6 right-6 glass premium-shadow rounded-[2rem] overflow-hidden lg:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-2xl font-black py-2 tracking-tighter uppercase flex justify-between items-center group',
                    location.pathname === link.path ? 'text-brand-500' : 'text-foreground'
                  )}
                >
                  {link.name}
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground p-5 rounded-2xl font-bold text-center flex items-center justify-center gap-2"
              >
                Launch Lab <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

