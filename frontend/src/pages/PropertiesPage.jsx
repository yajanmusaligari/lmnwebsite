import { useState } from 'react';
import { MapPin, Home, Maximize, Phone, MessageCircle, CheckCircle, Building2, Trees, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';

const PropertiesPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleWhatsAppInquiry = (property) => {
    const message = encodeURIComponent(
      `*Property Inquiry*\n\nI'm interested in:\n*${property.name}*\nLocation: ${property.location}\nPrice: ${property.price}\n\nPlease share more details.`
    );
    window.open(`https://wa.me/916301241568?text=${message}`, '_blank');
  };

  return (
    <div data-testid="properties-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1670915199061-ad437b2790aa?w=1200')` }} />
        <div className="absolute inset-0 bg-[#001F3F]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#FFD700] text-[#001F3F] font-bold text-sm uppercase tracking-widest rounded-full mb-6">LMN.Properties</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">Premium Real Estate<br /><span className="text-[#FFD700]">in Hyderabad</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Discover luxury apartments and premium properties in prime Hyderabad locations.</p>
        </div>
      </section>

      {/* Properties */}
      <section data-testid="properties-listing" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Featured Projects</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">Our Property Listings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              property={{ id: 1, name: 'Shivantha Gardenia', type: '2 BHK Mega Community', location: 'Isnapur - Pashamylaram Road, Patancheru', price: '₹4,999/sq.ft', possession: 'March 2026', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/z0lahcs6_image.png', badge: 'RERA Approved', highlights: '18 Acres | 25+ Towers | ~1,100 Flats | 100% Vastu' }}
              onSelect={setSelectedProperty}
              onWhatsApp={handleWhatsAppInquiry}
            />
            <PropertyCard
              property={{ id: 2, name: 'Casagrand Evon', type: '3 & 4 BHK Apartments', location: 'Kompally, Hyderabad', price: '₹1.59 Cr - ₹2.32 Cr', possession: 'Price Hike Feb 1st', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/lh291ur6_image.png', badge: 'Last Chance!', badgeColor: 'bg-red-500', highlights: '₹6,999/sft | 5 mins Suchitra | 15 mins Bowenpally' }}
              onSelect={setSelectedProperty}
              onWhatsApp={handleWhatsAppInquiry}
            />
            <PropertyCard
              property={{ id: 3, name: "Krishna's Arena", type: 'Premium 4 BHK Green Edition', location: 'Kondapur, Hyderabad', price: 'Price on Request', possession: 'Under Construction', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/jmy9og7b_image.png', badge: 'Limited Edition', badgeColor: 'bg-emerald-600', highlights: '2995-3247 SFT | 64 Units | World Class Amenities' }}
              onSelect={setSelectedProperty}
              onWhatsApp={handleWhatsAppInquiry}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Why LMN Properties</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">Your Trusted Real Estate Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <WhyCard icon={Shield} title="RERA Approved" desc="All projects are RERA registered for safety and transparency." />
            <WhyCard icon={Building2} title="Prime Locations" desc="Strategic locations with excellent connectivity and appreciation." />
            <WhyCard icon={CheckCircle} title="Quality Assured" desc="Built with premium materials and LMN 300+ quality checks." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Looking for Your Dream Property?</h2>
          <p className="text-gray-300 mb-8">Schedule a site visit or get expert guidance on property investment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916301241568">
              <Button data-testid="schedule-visit-btn" size="lg" className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-8">
                <Phone className="w-5 h-5 mr-2" />Schedule Visit
              </Button>
            </a>
            <a href="https://wa.me/916301241568?text=Hi!%20I%20want%20to%20know%20more%20about%20LMN%20Properties." target="_blank" rel="noopener noreferrer">
              <Button data-testid="whatsapp-inquiry-btn" size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold uppercase tracking-wider rounded-full px-8">
                <MessageCircle className="w-5 h-5 mr-2" />WhatsApp Inquiry
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const PropertyCard = ({ property, onSelect, onWhatsApp }) => (
  <Card data-testid={`property-card-${property.id}`} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all">
    <div className="relative h-64 overflow-hidden">
      <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <Badge className={`absolute top-4 left-4 ${property.badgeColor || 'bg-[#FFD700] text-[#001F3F]'} font-bold`}>{property.badge}</Badge>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="font-heading text-2xl font-bold text-white">{property.name}</h3>
        <p className="text-gray-200 text-sm flex items-center gap-1 mt-1"><MapPin className="w-4 h-4" />{property.location}</p>
      </div>
    </div>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div><p className="text-[#FFD700] font-bold text-xl">{property.price}</p><p className="text-gray-500 text-sm">{property.type}</p></div>
        <div className="text-right"><p className="text-gray-500 text-xs uppercase">Possession</p><p className="font-bold text-[#001F3F]">{property.possession}</p></div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {property.highlights.split(' | ').map((h, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-600"><CheckCircle className="w-4 h-4 text-[#FFD700]" /><span className="text-xs">{h}</span></div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button data-testid={`view-details-${property.id}`} className="flex-1 bg-[#001F3F] hover:bg-[#003366] text-white font-bold" onClick={() => onSelect(property)}>View Details</Button>
        <Button data-testid={`whatsapp-property-${property.id}`} size="icon" className="bg-[#25D366] hover:bg-[#128C7E] text-white" onClick={() => onWhatsApp(property)}><MessageCircle className="w-5 h-5" /></Button>
      </div>
    </CardContent>
  </Card>
);

const WhyCard = ({ icon: Icon, title, desc }) => (
  <div className="text-center p-8 bg-gray-50 rounded-2xl">
    <div className="w-16 h-16 rounded-full bg-[#001F3F] flex items-center justify-center mx-auto mb-4"><Icon className="w-8 h-8 text-[#FFD700]" /></div>
    <h3 className="font-heading text-xl font-bold text-[#001F3F]">{title}</h3>
    <p className="text-gray-600 mt-2">{desc}</p>
  </div>
);

export default PropertiesPage;
