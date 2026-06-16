import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Materials', path: '/materials' },
    { name: 'Construction', path: '/construction' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0A0A0A] backdrop-blur-xl border-b border-[#C9A24B]/15 ${
        isScrolled ? 'py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" data-testid="logo-link" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className={`relative font-medium text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#C9A24B] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#C9A24B] after:transition-all after:duration-300 ${
                  isActive(link.path)
                    ? 'text-[#C9A24B] after:w-full'
                    : 'text-gray-200 after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+916301241568"
              data-testid="call-btn"
              className="flex items-center gap-2 font-medium text-sm text-gray-200 hover:text-[#C9A24B] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono-accent text-xs tracking-wide">+91 6301241568</span>
            </a>
            <Link to="/contact">
              <Button
                data-testid="get-quote-btn"
                className="bg-transparent text-[#C9A24B] border border-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#0A0A0A] font-medium uppercase tracking-[0.15em] text-xs rounded-none px-6 transition-all duration-300"
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-[#C9A24B]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-t border-[#C9A24B]/15 shadow-2xl animate-fade-in"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                  className={`px-6 py-3 font-medium text-sm uppercase tracking-[0.2em] transition-colors hover:bg-white/5 ${
                    isActive(link.path) ? 'text-[#C9A24B] bg-white/5' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-white/10 mt-2 pt-4 px-6">
                <a
                  href="tel:+916301241568"
                  className="flex items-center gap-2 text-gray-200 font-medium mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 6301241568</span>
                </a>
                <Link to="/contact" className="block">
                  <Button className="w-full bg-[#C9A24B] text-[#0A0A0A] hover:bg-[#A68233] font-medium uppercase tracking-[0.15em] text-xs rounded-none">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
