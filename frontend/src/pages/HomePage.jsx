import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { ArrowRight, Truck, Building2, Clock, Shield, Award, CheckCircle, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Reveal, staggerContainer, staggerItem } from '../components/Reveal';
import { brands } from '../data/materialsData';

const EASE = [0.22, 1, 0.36, 1];

const HomePage = () => {
  const trustIndicators = [
    { icon: Clock, value: '4-6', label: 'Hour Delivery' },
    { icon: Shield, value: '300+', label: 'Quality Checks' },
    { icon: Award, value: '200+', label: 'Trusted Brands' },
    { icon: CheckCircle, value: '500+', label: 'Happy Clients' },
  ];

  const verticals = [
    {
      icon: Truck,
      title: 'Material Delivery',
      subtitle: 'The Network',
      description: 'Premium-grade materials delivered to builders and contractors within 4-6 hours. We partner with 200+ leading brands and deliver at the most competitive prices.',
      link: '/materials',
      cta: 'Browse Catalog',
      image: 'https://images.unsplash.com/photo-1631719606912-e90abc91683b?crop=entropy&cs=srgb&fm=jpg&q=80&w=1000',
    },
    {
      icon: Building2,
      title: 'Construction',
      subtitle: 'End-to-End Builds',
      description: 'Complete residential and commercial construction backed by 300+ quality checks and premium materials, engineered for life-long durability.',
      link: '/construction',
      cta: 'Get Estimate',
      image: 'https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&q=80&w=1000',
    },
  ];

  const deliveryZones = [
    { zone: 'Zone 1', areas: 'Kondapur, Madhapur', time: '~3 hours' },
    { zone: 'Zone 2', areas: 'Gachibowli, Financial District', time: '~4 hours' },
    { zone: 'Zone 3', areas: 'LB Nagar, Uppal', time: '~5 hours' },
    { zone: 'Zone 4', areas: 'Bachupally, Sangareddy', time: '~6 hours' },
  ];

  const founders = [
    { name: 'K. Naveen Kumar', role: 'Managing Director & Founder', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/bcibnbxy_image.png' },
    { name: 'Arla Rajesh', role: 'Co-Founder', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/7m8gzohh_image.png' },
    { name: 'Md. Parvez', role: 'Co-Founder', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/flht7pzl_image.png' },
  ];

  const brandNames = brands.map((b) => b.name);

  return (
    <div data-testid="home-page" className="bg-[#FBFBF9]">
      {/* Hero Section */}
      <section data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-[#C9A24B]" />
            <span className="text-[#C9A24B] font-mono-accent text-xs md:text-sm uppercase tracking-[0.35em]">
              Leading Materials Network
            </span>
            <span className="h-px w-10 bg-[#C9A24B]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight"
          >
            Premium Materials,<br />
            Delivered with <span className="italic text-gold-gradient">Distinction</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-8 font-light leading-relaxed"
          >
            From construction materials delivered in 4-6 hours to complete end-to-end
            building services — all under one trusted name.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link to="/materials">
              <Button
                data-testid="hero-order-materials-btn"
                size="lg"
                className="bg-[#C9A24B] text-[#0A0A0A] hover:bg-[#E6C878] font-medium uppercase tracking-[0.15em] text-sm px-9 py-6 rounded-none transition-all duration-300 hover:-translate-y-0.5"
              >
                Order Materials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/construction">
              <Button
                data-testid="hero-construction-btn"
                size="lg"
                variant="outline"
                className="border border-white/40 text-white bg-transparent hover:border-[#C9A24B] hover:text-[#C9A24B] font-medium uppercase tracking-[0.15em] text-sm px-9 py-6 rounded-none transition-all duration-300"
              >
                Start Construction
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border border-[#C9A24B]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-[#C9A24B] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section data-testid="brand-marquee" className="bg-[#0A0A0A] py-5 border-y border-[#C9A24B]/15">
        <Marquee gradient={false} speed={40} pauseOnHover>
          {brandNames.map((name, i) => (
            <span key={i} className="mx-7 text-sm font-light uppercase tracking-[0.25em] text-gray-400 font-mono-accent">
              {name} <span className="text-[#C9A24B] ml-7">◆</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* Trust Indicators */}
      <section data-testid="trust-indicators" className="bg-[#0A0A0A] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-white/5"
          >
            {trustIndicators.map((item, index) => (
              <motion.div key={index} variants={staggerItem} className="text-center px-4">
                <item.icon className="w-7 h-7 text-[#C9A24B] mx-auto mb-4" strokeWidth={1.4} />
                <div className="font-display text-5xl md:text-6xl font-light text-gold-gradient">{item.value}</div>
                <p className="text-gray-400 mt-2 text-xs uppercase tracking-[0.2em] font-mono-accent">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Verticals Section */}
      <section data-testid="verticals-section" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">What We Offer</span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-[#0A0A0A] mt-4 leading-tight">
              Two Pillars of Excellence
            </h2>
            <div className="section-divider mt-6" />
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {verticals.map((vertical, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card
                  data-testid={`vertical-card-${index}`}
                  className="group overflow-hidden border border-gray-200 hover:border-[#C9A24B] rounded-none shadow-none hover:shadow-hard transition-all duration-500 h-full bg-white"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                    />
                    <div className="absolute inset-0 bg-[#0A0A0A]/50 group-hover:bg-[#0A0A0A]/30 transition-colors duration-500" />
                    <div className="absolute top-6 left-6 w-14 h-14 bg-[#C9A24B] flex items-center justify-center">
                      <vertical.icon className="w-6 h-6 text-[#0A0A0A]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.25em]">{vertical.subtitle}</span>
                    <h3 className="font-display font-medium text-3xl md:text-4xl mt-3 text-[#0A0A0A]">{vertical.title}</h3>
                    <p className="text-gray-600 mt-4 leading-relaxed font-light">{vertical.description}</p>
                    <Link
                      to={vertical.link}
                      data-testid={`vertical-link-${index}`}
                      className="inline-flex items-center gap-2 mt-7 text-[#0A0A0A] font-medium uppercase text-xs tracking-[0.2em] hover:text-[#C9A24B] transition-colors group/link"
                    >
                      {vertical.cta}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section data-testid="delivery-zones" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">Swift Delivery</span>
              <h2 className="font-display text-4xl md:text-6xl font-light text-[#0A0A0A] mt-4 leading-tight">
                4-6 Hour Delivery<br />Across Hyderabad
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed font-light">
                Our zone-based logistics network ensures your construction materials arrive within
                the promised window. Strategically located warehouses keep your project moving.
              </p>
              <Link to="/materials" className="mt-9 inline-block">
                <Button
                  data-testid="order-now-btn"
                  className="bg-[#0A0A0A] text-white hover:bg-[#C9A24B] hover:text-[#0A0A0A] font-medium uppercase tracking-[0.15em] text-xs rounded-none px-8 py-6 transition-all duration-300"
                >
                  Order Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Reveal>

            <div className="space-y-4">
              {deliveryZones.map((zone, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <div className="bg-[#FBFBF9] border border-gray-200 p-6 flex items-center justify-between hover:border-[#C9A24B] transition-colors duration-300 group">
                    <div>
                      <span className="font-display font-medium text-2xl text-[#0A0A0A]">{zone.zone}</span>
                      <p className="text-gray-500 text-sm mt-1 font-light">{zone.areas}</p>
                    </div>
                    <div className="text-[#C9A24B] font-mono-accent text-sm border border-[#C9A24B]/40 px-4 py-2 group-hover:bg-[#C9A24B] group-hover:text-[#0A0A0A] transition-colors">{zone.time}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section data-testid="founders-section" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">The Network</span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-white mt-4">
              Built by People You Trust
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {founders.map((f, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                data-testid={`founder-${index}`}
                className="group relative overflow-hidden border border-white/10 hover:border-[#C9A24B]/60 transition-colors duration-500"
              >
                <div className="relative h-96 overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-medium text-white">{f.name}</h3>
                    <p className="text-[#C9A24B] text-xs font-mono-accent uppercase tracking-[0.2em] mt-2">{f.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/92" />

        <Reveal className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
          <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">Let's Build</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-white mt-4 mb-8 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10 font-light">
            Whether you need materials delivered fast or want to build your dream home — the Network is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916301241568">
              <Button
                data-testid="cta-call-btn"
                size="lg"
                className="bg-[#C9A24B] text-[#0A0A0A] hover:bg-[#E6C878] font-medium uppercase tracking-[0.15em] text-sm rounded-none px-9 py-6 transition-all"
              >
                <Phone className="mr-2 w-4 h-4" />
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button
                data-testid="cta-quote-btn"
                size="lg"
                variant="outline"
                className="border border-white/40 text-white bg-transparent hover:border-[#C9A24B] hover:text-[#C9A24B] font-medium uppercase tracking-[0.15em] text-sm rounded-none px-9 py-6"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default HomePage;
