import { Link } from 'react-router-dom';
import { Truck, Building2, Home, Clock, Shield, Award, Users, Target, Heart, ArrowRight, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'K. Naveen Kumar',
      role: 'Managing Director & Founder',
      description: 'Visionary leader driving LMN Infra\'s mission to revolutionize the construction industry in Hyderabad.',
      phone: '+91 6301241568',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/bcibnbxy_image.png',
    },
    {
      name: 'Arla Rajesh',
      role: 'Co-Founder & Designer',
      description: 'Creative force behind LMN\'s brand identity and architectural design excellence.',
      phone: '+91 7730992040',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/7m8gzohh_image.png',
    },
    {
      name: 'Md. Parvez',
      role: 'Co-Founder & Sales Director',
      description: 'Building strong client relationships and driving business growth across Telangana.',
      phone: '+91 6305009371',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/flht7pzl_image.png',
    },
  ];

  const verticals = [
    {
      icon: Truck,
      name: 'LMN.INFRA',
      description: 'Direct material delivery to builders and contractors with best quality within 4-6 hours.',
      link: '/materials',
    },
    {
      icon: Building2,
      name: 'LMN Constructions',
      description: 'Full end-to-end residential and commercial construction with 300+ quality checks.',
      link: '/construction',
    },
    {
      icon: Home,
      name: 'LMN.Properties',
      description: 'Premium real estate including land development, flats, and villas.',
      link: '/properties',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality. Every material and construction meets the highest standards.',
    },
    {
      icon: Clock,
      title: 'Time is Money',
      description: 'We understand construction timelines. Our 4-6 hour delivery ensures your project stays on track.',
    },
    {
      icon: Heart,
      title: 'Customer Trust',
      description: 'Building lasting relationships through transparency, reliability, and exceptional service.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of experienced professionals ensures every project is executed with precision.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '300+', label: 'Quality Checks' },
    { value: '4-6', label: 'Hour Delivery' },
    { value: '10', label: 'Year Warranty' },
  ];

  return (
    <div data-testid="about-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMGhlbG1ldCUyMGJsdWVwcmludHxlbnwwfHx8fDE3Njk5NzEwMzF8MA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-[#001F3F]/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#FFD700] text-[#001F3F] font-bold text-sm uppercase tracking-widest rounded-full mb-6">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Building Trust,<br />
              <span className="text-[#FFD700]">One Project at a Time</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              LMN Infra Projects Pvt Ltd, part of the LMN Group, is Hyderabad's trusted partner 
              for construction materials, building services, and premium real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-bold text-[#001F3F]">{stat.value}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section data-testid="our-story" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
                From Vision to Reality
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  LMN Infra Projects was founded with a simple yet powerful vision: to transform 
                  the construction industry in Hyderabad by delivering quality, speed, and trust.
                </p>
                <p>
                  We noticed that builders and contractors struggled with unreliable material 
                  delivery, inconsistent quality, and lack of transparency. LMN was born to 
                  solve these problems.
                </p>
                <p>
                  Today, we operate across three verticals — material delivery, construction, 
                  and real estate — serving hundreds of satisfied clients across Telangana.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button 
                    data-testid="get-in-touch-btn"
                    className="bg-[#001F3F] text-white hover:bg-[#003366] font-bold uppercase tracking-wider rounded-full px-8"
                  >
                    Get In Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMGhlbG1ldCUyMGJsdWVwcmludHxlbnwwfHx8fDE3Njk5NzEwMzF8MA&ixlib=rb-4.1.0&q=85"
                alt="LMN Team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FFD700] rounded-xl p-6 shadow-lg">
                <p className="font-heading text-4xl font-bold text-[#001F3F]">LMN</p>
                <p className="text-[#001F3F] font-medium">Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Verticals */}
      <section data-testid="verticals" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
              Our Three Verticals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {verticals.map((vertical, index) => (
              <Card 
                key={index}
                data-testid={`vertical-${index}`}
                className="group border-2 border-gray-100 hover:border-[#FFD700] transition-all"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#001F3F] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFD700] transition-colors">
                    <vertical.icon className="w-8 h-8 text-[#FFD700] group-hover:text-[#001F3F] transition-colors" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#001F3F]">{vertical.name}</h3>
                  <p className="text-gray-600 mt-3">{vertical.description}</p>
                  <Link 
                    to={vertical.link}
                    className="inline-flex items-center gap-2 mt-6 text-[#001F3F] font-bold hover:text-[#FFD700] transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section data-testid="team" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Leadership</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
              Meet Our Team
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The passionate leaders behind LMN Infra Projects, committed to delivering excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                data-testid={`team-member-${index}`}
                className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#FFD700] font-medium mt-1">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  <a 
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 mt-4 text-[#001F3F] font-bold hover:text-[#FFD700] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {member.phone}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section data-testid="values" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Our Values</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFD700]/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#001F3F]">{value.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-gray-300 mb-8">
            Whether you need materials, construction services, or looking for properties — 
            we're here to help you build your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                data-testid="contact-cta-btn"
                size="lg"
                className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-8"
              >
                Contact Us
              </Button>
            </Link>
            <a href="tel:+916301241568">
              <Button 
                data-testid="call-cta-btn"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold uppercase tracking-wider rounded-full px-8"
              >
                Call: +91 6301241568
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
