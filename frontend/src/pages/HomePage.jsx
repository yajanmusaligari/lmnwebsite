import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Building2, Home, Clock, Shield, Award, CheckCircle, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const trustIndicators = [
  { icon: Clock, value: '4-6', label: 'Hour Delivery', suffix: 'hrs' },
  { icon: Shield, value: '300+', label: 'Quality Checks', suffix: '' },
  { icon: Award, value: '10', label: 'Year Warranty', suffix: 'yrs' },
  { icon: CheckCircle, value: '500+', label: 'Happy Clients', suffix: '+' }];


  const verticals = [
  {
    icon: Truck,
    title: "LMN Infra",
    subtitle: 'Material Delivery',
    description: 'Direct material delivery to builders and contractors with best quality within 4-6 hours. We tie up with big brands and deliver at low cost.',
    link: '/materials',
    image: 'https://images.unsplash.com/photo-1631719606912-e90abc91683b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjBjZW1lbnQlMjBzdGVlbCUyMGJyaWNrcyUyMHBpbGV8ZW58MHx8fHwxNzY5OTcxMDM0fDA&ixlib=rb-4.1.0&q=85',
    color: 'from-blue-600 to-blue-800'
  },
  {
    icon: Building2,
    title: 'LMN Constructions',
    subtitle: 'Building Construction',
    description: 'Full end-to-end residential and commercial construction with 300+ quality checks. Premium grade materials for life-long durability.',
    link: '/construction',
    image: 'https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMGhlbG1ldCUyMGJsdWVwcmludHxlbnwwfHx8fDE3Njk5NzEwMzF8MA&ixlib=rb-4.1.0&q=85',
    color: 'from-amber-500 to-amber-700'
  },
  {
    icon: Home,
    title: "LMN Properties",
    subtitle: 'Real Estate',
    description: 'Premium residential projects in prime Hyderabad locations. From affordable 2 BHK to luxury 4 BHK apartments and villas.',
    link: '/properties',
    image: 'https://images.unsplash.com/photo-1670915199061-ad437b2790aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwaW5kaWF8ZW58MHx8fHwxNzY5OTcxMDMzfDA&ixlib=rb-4.1.0&q=85',
    color: 'from-emerald-600 to-emerald-800'
  }];


  const deliveryZones = [
  { zone: 'Zone 1', areas: 'Kondapur, Madhapur', time: '~3 hours' },
  { zone: 'Zone 2', areas: 'Gachibowli, Financial District', time: '~4 hours' },
  { zone: 'Zone 3', areas: 'LB Nagar, Uppal', time: '~5 hours' },
  { zone: 'Zone 4', areas: 'Bachupally, Sangareddy', time: '~6 hours' }];


  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMGhlbG1ldCUyMGJsdWVwcmludHxlbnwwfHx8fDE3Njk5NzEwMzF8MA&ixlib=rb-4.1.0&q=85')`
          }} />

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-[#FFD700] text-[#001F3F] font-bold text-sm uppercase tracking-widest rounded-full mb-6">
              Hyderabad's Trusted Construction Partner
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-100">
            Build Smarter.<br />
            Build Faster.<br />
            Build with <span className="text-[#FFD700]">LMN</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            High-quality material delivery within 4-6 hours, end-to-end construction services, 
            and premium real estate — all under one trusted name.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link to="/materials">
              <Button
                data-testid="hero-order-materials-btn"
                size="lg"
                className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-8 py-6 text-lg">

                Order Materials
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/properties">
              <Button
                data-testid="hero-view-properties-btn"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold uppercase tracking-wider rounded-full px-8 py-6 text-lg">

                View Properties
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section data-testid="trust-indicators" className="bg-[#001F3F] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((item, index) =>
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}>

                <item.icon className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                <div className="font-heading text-4xl md:text-5xl font-bold text-white">
                  {item.value}
                </div>
                <p className="text-gray-300 mt-1">{item.label}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section data-testid="verticals-section" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
              Three Pillars of Excellence
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From construction materials to premium properties, LMN Group delivers comprehensive solutions for all your building needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {verticals.map((vertical, index) =>
            <Card
              key={index}
              data-testid={`vertical-card-${index}`}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500">

                <div className="relative h-56 overflow-hidden">
                  <img
                  src={vertical.image}
                  alt={vertical.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  <div className={`absolute inset-0 bg-gradient-to-t ${vertical.color} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <vertical.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">{vertical.subtitle}</span>
                  <h3 className="font-heading !font-bold !text-2xl mt-2 text-[#001F3F]">{vertical.title}</h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">{vertical.description}</p>
                  <Link
                  to={vertical.link}
                  className="inline-flex items-center gap-2 mt-6 text-[#001F3F] font-bold hover:text-[#FFD700] transition-colors group/link">

                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section data-testid="delivery-zones" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Fast Delivery</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
                4-6 Hour Delivery<br />Across Hyderabad
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Our zone-based delivery system ensures your construction materials reach your site within the promised time window. 
                We have strategically located warehouses across Hyderabad to serve you faster.
              </p>
              <Link to="/materials" className="mt-8 inline-block">
                <Button
                  data-testid="order-now-btn"
                  className="bg-[#001F3F] text-white hover:bg-[#003366] font-bold uppercase tracking-wider rounded-full px-8">

                  Order Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {deliveryZones.map((zone, index) =>
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow">

                  <div>
                    <span className="font-heading font-bold text-lg text-[#001F3F]">{zone.zone}</span>
                    <p className="text-gray-600 text-sm mt-1">{zone.areas}</p>
                  </div>
                  <div className="bg-[#FFD700] text-[#001F3F] font-bold px-4 py-2 rounded-full text-sm">
                    {zone.time}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMGhlbG1ldCUyMGJsdWVwcmludHxlbnwwfHx8fDE3Njk5NzEwMzF8MA&ixlib=rb-4.1.0&q=85')`
          }} />

        <div className="absolute inset-0 bg-[#001F3F]/90" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Whether you need materials delivered fast, want to build your dream home, 
            or looking for premium properties — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916301241568">
              <Button
                data-testid="cta-call-btn"
                size="lg"
                className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-8">

                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button
                data-testid="cta-quote-btn"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold uppercase tracking-wider rounded-full px-8">

                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);

};

export default HomePage;