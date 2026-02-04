import { useState } from 'react';
import { Check, Phone, MessageCircle, Calculator, Shield, Award, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const ConstructionPage = () => {
  const [sqft, setSqft] = useState(1500);
  const [selectedPackage, setSelectedPackage] = useState('classic');

  const getPackagePrice = (id) => {
    if (id === 'basic') return 1850;
    if (id === 'classic') return 1950;
    return 2150;
  };

  const calculateCost = () => sqft * getPackagePrice(selectedPackage);

  const handleWhatsAppQuote = () => {
    const pkgNames = { basic: 'Basic', classic: 'Classic', premium: 'Premium' };
    const message = encodeURIComponent(
      `*Construction Quote Request*\n\n` +
      `*Package:* ${pkgNames[selectedPackage]} (₹${getPackagePrice(selectedPackage)}/sq.ft)\n` +
      `*Plot Size:* ${sqft} sq.ft\n` +
      `*Estimated Cost:* ₹${calculateCost().toLocaleString()}\n\n` +
      `Please provide detailed quotation.`
    );
    window.open(`https://wa.me/916301241568?text=${message}`, '_blank');
  };

  return (
    <div data-testid="construction-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1631171992385-784ae02b1acb?w=1200')` }}
        />
        <div className="absolute inset-0 bg-[#001F3F]/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#FFD700] text-[#001F3F] font-bold text-sm uppercase tracking-widest rounded-full mb-6">
            LMN Constructions
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Premium Grade Materials<br />
            <span className="text-[#FFD700]">For Life-Long Durability</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Full end-to-end residential and commercial construction for Telangana 
            with 300+ quality checks covering foundation, brickwork, and finishing.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <TrustPillar icon={Calculator} label="Instant Cost Estimator" />
            <TrustPillar icon={Shield} label="300+ Quality Checks" />
            <TrustPillar icon={Clock} label="Project Tracking" />
            <TrustPillar icon={Award} label="Milestone Payments" />
          </div>
        </div>
      </section>

      {/* Cost Estimator */}
      <section data-testid="cost-estimator" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Instant Quote</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">Cost Estimator</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Get an instant estimate for your dream home. Select your package and enter your plot size.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 space-y-8">
                <div>
                  <Label className="text-lg font-bold text-[#001F3F]">Plot Size (sq.ft)</Label>
                  <Input
                    data-testid="sqft-input"
                    type="number"
                    value={sqft}
                    onChange={(e) => setSqft(parseInt(e.target.value) || 0)}
                    min={500}
                    max={10000}
                    className="text-2xl font-bold text-[#001F3F] h-14 mt-4"
                  />
                </div>

                <div>
                  <Label className="text-lg font-bold text-[#001F3F]">Select Package</Label>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <PackageBtn id="basic" name="Basic" price={1850} selected={selectedPackage} onSelect={setSelectedPackage} />
                    <PackageBtn id="classic" name="Classic" price={1950} selected={selectedPackage} onSelect={setSelectedPackage} />
                    <PackageBtn id="premium" name="Premium" price={2150} selected={selectedPackage} onSelect={setSelectedPackage} />
                  </div>
                </div>

                <div className="bg-[#001F3F] rounded-xl p-6 text-center">
                  <p className="text-gray-300 uppercase tracking-wider text-sm">Estimated Cost</p>
                  <p data-testid="estimated-cost" className="font-heading text-4xl md:text-5xl font-bold text-[#FFD700] mt-2">
                    ₹{calculateCost().toLocaleString()}
                  </p>
                  <p className="text-gray-400 mt-2">{sqft} sq.ft × ₹{getPackagePrice(selectedPackage)}/sq.ft</p>
                </div>

                <Button 
                  data-testid="get-detailed-quote-btn"
                  className="w-full bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full py-6 text-lg"
                  onClick={handleWhatsAppQuote}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Detailed Quote
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <PackageCard 
                id="basic" name="Basic" price={1850} focus="Best for Rental / Budget" badge=""
                highlights="Premium cement & steel | Standard elevation | Basic finishing | Vastu compliant | 100+ quality checks | 5-year warranty"
                selected={selectedPackage} onSelect={setSelectedPackage}
              />
              <PackageCard 
                id="classic" name="Classic" price={1950} focus="Value for Money" badge="Most Popular"
                highlights="Custom elevation | TMT bars (Fe 500D) | Semi-furnished | Daily updates | Digital certificates | 200+ checks | 7-year warranty"
                selected={selectedPackage} onSelect={setSelectedPackage}
              />
              <PackageCard 
                id="premium" name="Premium" price={2150} focus="Luxury & Durability" badge="Premium"
                highlights="Architect design | Imported materials | Full interior | 300+ checks | Dedicated manager | 10-year warranty | Post-construction support"
                selected={selectedPackage} onSelect={setSelectedPackage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">Transparent Pricing</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">Pay Only for Completed Work</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto mb-12">
            Our milestone-based payment structure ensures you only pay for work that's been completed and verified.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <MilestoneItem num={1} name="Excavation" pct={10} />
            <MilestoneItem num={2} name="Plinth" pct={15} />
            <MilestoneItem num={3} name="Slab Work" pct={25} />
            <MilestoneItem num={4} name="Brickwork" pct={20} />
            <MilestoneItem num={5} name="Plastering" pct={15} />
            <MilestoneItem num={6} name="Finishing" pct={15} />
          </div>
        </div>
      </section>

      {/* Quality Checks */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">LMN-QAS</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#001F3F] mt-3">300+ Quality Checks</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Our proprietary LMN Quality Assurance System ensures every aspect of your construction 
                meets the highest standards. From foundation to finishing, we check it all.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <QualityItem text="Foundation depth verification" />
                <QualityItem text="Soil bearing capacity test" />
                <QualityItem text="Concrete mix ratio check" />
                <QualityItem text="Steel grade certification" />
                <QualityItem text="Brick quality inspection" />
                <QualityItem text="Plumbing pressure test" />
                <QualityItem text="Electrical load test" />
                <QualityItem text="Wall alignment check" />
                <QualityItem text="Plastering thickness" />
                <QualityItem text="Paint quality inspection" />
                <QualityItem text="Waterproofing test" />
                <QualityItem text="Final structure audit" />
              </div>
              <p className="text-gray-500 mt-6 text-sm">+ 288 more checks across all construction phases</p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1768677903496-becc4be07258?w=800" alt="Quality Construction" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-[#FFD700] rounded-xl p-6 shadow-lg">
                <p className="font-heading text-4xl font-bold text-[#001F3F]">300+</p>
                <p className="text-[#001F3F] font-medium">Quality Checks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Dream Home?</h2>
          <p className="text-gray-300 mb-8">Get a free consultation and detailed quotation. Our experts are ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916301241568">
              <Button data-testid="call-expert-btn" size="lg" className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-8">
                <Phone className="w-5 h-5 mr-2" />Call Expert
              </Button>
            </a>
            <a href="https://wa.me/916301241568?text=Hi!%20I%20want%20to%20discuss%20my%20construction%20project." target="_blank" rel="noopener noreferrer">
              <Button data-testid="whatsapp-consult-btn" size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#001F3F] font-bold uppercase tracking-wider rounded-full px-8">
                <MessageCircle className="w-5 h-5 mr-2" />WhatsApp Consult
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const TrustPillar = ({ icon: Icon, label }) => (
  <div className="text-center">
    <div className="w-14 h-14 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto mb-3">
      <Icon className="w-7 h-7 text-[#001F3F]" />
    </div>
    <p className="text-white font-medium">{label}</p>
  </div>
);

const PackageBtn = ({ id, name, price, selected, onSelect }) => (
  <button
    data-testid={`package-${id}`}
    onClick={() => onSelect(id)}
    className={`p-4 rounded-xl border-2 transition-all ${selected === id ? 'border-[#FFD700] bg-[#FFD700]/10' : 'border-gray-200 hover:border-gray-300'}`}
  >
    <p className="font-heading font-bold text-[#001F3F]">{name}</p>
    <p className="text-[#FFD700] font-bold mt-1">₹{price}</p>
    <p className="text-gray-500 text-xs">per sq.ft</p>
  </button>
);

const PackageCard = ({ id, name, price, focus, badge, highlights, selected, onSelect }) => (
  <Card 
    data-testid={`package-card-${id}`}
    className={`border-2 ${id === 'classic' ? 'border-[#FFD700]' : id === 'premium' ? 'border-[#001F3F]' : 'border-gray-300'} ${selected === id ? 'shadow-xl' : 'shadow-md'} cursor-pointer transition-all`}
    onClick={() => onSelect(id)}
  >
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="font-heading text-2xl text-[#001F3F]">{name}</CardTitle>
          <p className="text-gray-500">{focus}</p>
        </div>
        <div className="text-right">
          {badge && <span className="inline-block px-3 py-1 bg-[#FFD700] text-[#001F3F] text-xs font-bold uppercase rounded-full mb-1">{badge}</span>}
          <p className="font-heading text-3xl font-bold text-[#001F3F]">₹{price}</p>
          <p className="text-gray-500 text-sm">per sq.ft</p>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {highlights.split(' | ').map((h, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700">
            <Check className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
            <span className="text-sm">{h}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const MilestoneItem = ({ num, name, pct }) => (
  <div className="bg-gray-50 rounded-xl p-6 text-center group hover:bg-[#001F3F] transition-colors">
    <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto mb-4">
      <span className="font-bold text-[#001F3F]">{num}</span>
    </div>
    <h4 className="font-heading font-bold text-[#001F3F] group-hover:text-white transition-colors">{name}</h4>
    <p className="text-[#FFD700] font-bold mt-2">{pct}%</p>
  </div>
);

const QualityItem = ({ text }) => (
  <div className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
    <span className="text-gray-700 text-sm">{text}</span>
  </div>
);

export default ConstructionPage;
