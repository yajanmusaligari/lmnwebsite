import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[#0A0A0A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src="/brand/lmn-primary.png"
              alt="LMN — Leading Materials Network"
              className="h-24 w-auto mix-blend-lighten select-none"
              draggable="false"
            />
            <p className="text-gray-400 leading-relaxed">
              Leading Materials Network. Premium construction materials, delivered nationwide — your trusted partner for materials and end-to-end building services in Hyderabad.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/lmn.infra" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="instagram-infra"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#C9A24B] hover:text-[#0A0A0A] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-[#C9A24B]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Material Delivery', path: '/materials' },
                { name: 'Construction', path: '/construction' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-[#C9A24B] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-[#C9A24B]">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>4-6 Hour Material Delivery</li>
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Bulk Material Supply</li>
              <li>Project Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-[#C9A24B]">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+916301241568" 
                  data-testid="footer-phone-naveen"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#C9A24B] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <span className="block text-sm text-gray-400">Naveen</span>
                    +91 6301241568
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+916305009371" 
                  data-testid="footer-phone-parvez"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#C9A24B] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <span className="block text-sm text-gray-400">Parvez</span>
                    +91 6305009371
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} LMN. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Build Smarter with <span className="text-[#C9A24B]">LMN</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
