import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Building2, Clock, Users, Target, Heart, ArrowRight, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Reveal, staggerContainer, staggerItem } from '../components/Reveal';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'K. Naveen Kumar',
      role: 'Managing Director & Founder',
      description: 'Visionary leader driving LMN\'s mission to redefine the construction supply network across Hyderabad.',
      phone: '+91 6301241568',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/bcibnbxy_image.png',
    },
    {
      name: 'Arla Rajesh',
      role: 'Co-Founder & Operations',
      description: 'Driving operational excellence and on-time delivery across every order and project.',
      phone: '+91 7730992040',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/7m8gzohh_image.png',
    },
    {
      name: 'Md. Parvez',
      role: 'Co-Founder & Sales Director',
      description: 'Building strong client relationships and growing the network across Telangana.',
      phone: '+91 6305009371',
      image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/flht7pzl_image.png',
    },
  ];

  const verticals = [
    {
      icon: Truck,
      name: 'Material Delivery',
      description: 'Premium materials delivered to builders and contractors within 4-6 hours from 200+ trusted brands.',
      link: '/materials',
    },
    {
      icon: Building2,
      name: 'Construction',
      description: 'Full end-to-end residential and commercial construction backed by 300+ quality checks.',
      link: '/construction',
    },
  ];

  const values = [
    { icon: Target, title: 'Quality First', description: 'We never compromise on quality. Every material and build meets the highest standards.' },
    { icon: Clock, title: 'Time is Money', description: 'We respect construction timelines. Our 4-6 hour delivery keeps your project on track.' },
    { icon: Heart, title: 'Customer Trust', description: 'Lasting relationships built on transparency, reliability and exceptional service.' },
    { icon: Users, title: 'Expert Network', description: 'A team of seasoned professionals ensuring every order is executed with precision.' },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '300+', label: 'Quality Checks' },
    { value: '4-6', label: 'Hour Delivery' },
    { value: '200+', label: 'Trusted Brands' },
  ];

  return (
    <div data-testid="about-page" className="min-h-screen bg-[#FBFBF9]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1631171992385-784ae02b1acb?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          <Reveal className="text-center">
            <div className="flex items-center justify-center gap-3 mb-7">
              <span className="h-px w-10 bg-[#C9A24B]" />
              <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">About Us</span>
              <span className="h-px w-10 bg-[#C9A24B]" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-tight">
              Building Trust,<br />
              <span className="italic text-gold-gradient">One Order at a Time</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mt-8 font-light">
              LMN — Leading Materials Network — is Hyderabad's trusted partner for premium construction materials and end-to-end building services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-white/5"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={staggerItem} className="text-center px-4">
                <p className="font-display text-5xl md:text-6xl font-light text-gold-gradient">{stat.value}</p>
                <p className="text-gray-400 mt-2 text-xs uppercase tracking-[0.2em] font-mono-accent">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section data-testid="our-story" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">Our Story</span>
              <h2 className="font-display text-4xl md:text-6xl font-light text-[#0A0A0A] mt-4 leading-tight">
                From Vision to Network
              </h2>
              <div className="mt-7 space-y-5 text-gray-600 leading-relaxed font-light">
                <p>
                  LMN was founded on a simple yet powerful vision: to transform the construction supply
                  industry in Hyderabad through quality, speed and trust.
                </p>
                <p>
                  We saw builders and contractors struggle with unreliable delivery, inconsistent quality
                  and a lack of transparency. The Leading Materials Network was born to solve exactly that.
                </p>
                <p>
                  Today we operate across two verticals — material delivery and construction — serving
                  hundreds of satisfied clients across Telangana.
                </p>
              </div>
              <div className="mt-9">
                <Link to="/contact">
                  <Button
                    data-testid="get-in-touch-btn"
                    className="bg-[#0A0A0A] text-white hover:bg-[#C9A24B] hover:text-[#0A0A0A] font-medium uppercase tracking-[0.15em] text-xs rounded-none px-8 py-6 transition-all duration-300"
                  >
                    Get In Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="relative">
              <img
                src="https://images.unsplash.com/photo-1768158988512-ad31657fe5b8?crop=entropy&cs=srgb&fm=jpg&q=80&w=1000"
                alt="LMN Network"
                className="w-full"
              />
              <div className="absolute -bottom-8 -right-6 bg-[#0A0A0A] p-6 border border-[#C9A24B]/40">
                <img src="/brand/lmn-wordmark.png" alt="LMN" className="h-12 w-auto mix-blend-lighten" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Verticals */}
      <section data-testid="verticals" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">What We Do</span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-[#0A0A0A] mt-4">
              Our Two Verticals
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {verticals.map((vertical, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card
                  data-testid={`vertical-${index}`}
                  className="group border border-gray-200 hover:border-[#C9A24B] rounded-none shadow-none hover:shadow-hard transition-all duration-500 h-full bg-[#FBFBF9]"
                >
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 bg-[#0A0A0A] flex items-center justify-center mx-auto mb-7 group-hover:bg-[#C9A24B] transition-colors duration-300">
                      <vertical.icon className="w-7 h-7 text-[#C9A24B] group-hover:text-[#0A0A0A] transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-3xl font-medium text-[#0A0A0A]">{vertical.name}</h3>
                    <p className="text-gray-600 mt-4 font-light">{vertical.description}</p>
                    <Link
                      to={vertical.link}
                      className="inline-flex items-center gap-2 mt-7 text-[#0A0A0A] font-medium uppercase text-xs tracking-[0.2em] hover:text-[#C9A24B] transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section data-testid="team" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">Leadership</span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-white mt-4">
              Meet the Network
            </h2>
            <p className="text-gray-400 mt-5 max-w-2xl mx-auto font-light">
              The passionate leaders behind LMN, committed to delivering excellence in every order.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                data-testid={`team-member-${index}`}
                className="group overflow-hidden border border-white/10 hover:border-[#C9A24B]/60 transition-colors duration-500 bg-[#141414]"
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-medium text-white">{member.name}</h3>
                    <p className="text-[#C9A24B] mt-2 font-mono-accent text-xs uppercase tracking-[0.2em]">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{member.description}</p>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 mt-5 text-white font-medium hover:text-[#C9A24B] transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {member.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section data-testid="values" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">Our Values</span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-[#0A0A0A] mt-4">
              What Drives Us
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white border border-gray-200 p-8 hover:border-[#C9A24B] transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-[#C9A24B]/40 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-[#C9A24B]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-medium text-[#0A0A0A]">{value.title}</h3>
                <p className="text-gray-600 mt-3 text-sm font-light">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A0A0A]">
        <Reveal className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-5">
            Ready to Work with Us?
          </h2>
          <p className="text-gray-400 mb-9 font-light">
            Whether you need materials or construction services — the Network is here to help you build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-testid="contact-cta-btn"
                size="lg"
                className="bg-[#C9A24B] text-[#0A0A0A] hover:bg-[#E6C878] font-medium uppercase tracking-[0.15em] text-sm rounded-none px-9 py-6 transition-all"
              >
                Contact Us
              </Button>
            </Link>
            <a href="tel:+916301241568">
              <Button
                data-testid="call-cta-btn"
                size="lg"
                variant="outline"
                className="border border-white/40 text-white bg-transparent hover:border-[#C9A24B] hover:text-[#C9A24B] font-medium uppercase tracking-[0.15em] text-sm rounded-none px-9 py-6"
              >
                Call: +91 6301241568
              </Button>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default AboutPage;
