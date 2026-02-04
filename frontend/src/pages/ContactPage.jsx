import { useState } from 'react';
import { Phone, MapPin, MessageCircle, Clock, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error('Please fill all required fields');
      return;
    }
    const message = encodeURIComponent(
      `*New Contact Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Service:* ${formData.service}\n*Message:* ${formData.message || 'N/A'}`
    );
    window.open(`https://wa.me/916301241568?text=${message}`, '_blank');
    toast.success('Redirecting to WhatsApp...');
  };

  return (
    <div data-testid="contact-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#FFD700] text-[#001F3F] font-bold text-sm uppercase tracking-widest rounded-full mb-6">Contact Us</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">Let's Build<br /><span className="text-[#FFD700]">Together</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Have questions about materials, construction, or properties? We're here to help.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-[#001F3F] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input data-testid="contact-name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Enter your name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input data-testid="contact-phone" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="Enter phone number" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input data-testid="contact-email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="Enter email (optional)" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Required *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger data-testid="contact-service" className="mt-1"><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="materials">Material Delivery</SelectItem>
                        <SelectItem value="construction">Construction Services</SelectItem>
                        <SelectItem value="properties">Property Inquiry</SelectItem>
                        <SelectItem value="bulk">Bulk Order Quote</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea data-testid="contact-message" value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Tell us about your requirements..." rows={4} className="mt-1" />
                  </div>
                  <Button data-testid="contact-submit-btn" type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-wider rounded-full py-6">
                    <MessageCircle className="w-5 h-5 mr-2" />Submit via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-6">
              <ContactInfoCard icon={Phone} title="Call Us" items={[{ label: 'Naveen', value: '+91 6301241568', href: 'tel:+916301241568' }, { label: 'Parvez', value: '+91 6305009371', href: 'tel:+916305009371' }]} />
              <ContactInfoCard icon={MapPin} title="Visit Us" items={[{ label: 'Location', value: 'Hyderabad, Telangana, India' }]} />
              <ContactInfoCard icon={Clock} title="Working Hours" items={[{ label: 'Mon - Sat', value: '9:00 AM - 7:00 PM' }, { label: 'Sunday', value: 'By Appointment' }]} />
              
              <Card className="border-none shadow-md bg-[#001F3F]">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/lmn.infra" target="_blank" rel="noopener noreferrer" data-testid="instagram-link-infra" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] text-white transition-all">
                      <Instagram className="w-5 h-5" /><span>@lmn.infra</span>
                    </a>
                    <a href="https://instagram.com/lmn.properties" target="_blank" rel="noopener noreferrer" data-testid="instagram-link-properties" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-[#FFD700] hover:text-[#001F3F] text-white transition-all">
                      <Instagram className="w-5 h-5" /><span>@lmn.properties</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#25D366] shadow-md">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-[#25D366] mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-[#001F3F]">Quick WhatsApp</h3>
                  <p className="text-gray-600 mt-2 mb-4">Get instant response</p>
                  <a href="https://wa.me/916301241568?text=Hi!%20I%20want%20to%20know%20more%20about%20LMN%20Infra%20services." target="_blank" rel="noopener noreferrer">
                    <Button data-testid="quick-whatsapp-btn" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-full px-8">
                      <MessageCircle className="w-5 h-5 mr-2" />Chat Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-[#001F3F]/80">
          <div className="text-center text-white">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-[#FFD700]" />
            <h3 className="font-heading text-2xl font-bold">Hyderabad, Telangana</h3>
            <p className="text-gray-300 mt-2">Serving all areas across the city</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfoCard = ({ icon: Icon, title, items }) => (
  <Card className="border-none shadow-md">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#001F3F] flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-[#FFD700]" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-[#001F3F]">{title}</h3>
          <div className="mt-2 space-y-2">
            {items.map((item, idx) => (
              <div key={idx}>
                <span className="text-gray-500 text-sm">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="block text-[#001F3F] font-medium hover:text-[#FFD700] transition-colors">{item.value}</a>
                ) : (
                  <p className="text-[#001F3F] font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ContactPage;
