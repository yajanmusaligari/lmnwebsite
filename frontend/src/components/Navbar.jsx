import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" data-testid="logo-link" className="flex items-center gap-2">
            <div className={`font-heading font-bold text-2xl md:text-3xl transition-colors ${
              isScrolled ? 'text-[#001F3F]' : 'text-white'
            }`}>
              <span>LMN</span>
              <span className="text-[#FFD700]"> INFRA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-[#FFD700] ${
                  isActive(link.path)
                    ? 'text-[#FFD700]'
                    : isScrolled
                    ? 'text-[#001F3F]'
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+916301241568"
              data-testid="call-btn"
              className={`flex items-center gap-2 font-medium text-sm transition-colors ${
                isScrolled ? 'text-[#001F3F]' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 6301241568</span>
            </a>
            <Link to="/contact">
              <Button 
                data-testid="get-quote-btn"
                className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-6"
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
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            data-testid="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                  className={`px-6 py-3 font-medium text-sm uppercase tracking-wider transition-colors hover:bg-gray-50 ${
                    isActive(link.path) ? 'text-[#FFD700] bg-gray-50' : 'text-[#001F3F]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t mt-2 pt-4 px-6">
                <a
                  href="tel:+916301241568"
                  className="flex items-center gap-2 text-[#001F3F] font-medium mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 6301241568</span>
                </a>
                <Link to="/contact" className="block">
                  <Button className="w-full bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full">
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
