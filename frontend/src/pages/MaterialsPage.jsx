import { useState } from 'react';
import { Truck, Clock, Shield, MessageCircle, Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const MaterialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quoteItem, setQuoteItem] = useState(null);
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', quantity: '', message: '' });

  const categories = [
    { id: 'all', name: 'All Materials' },
    { id: 'civil', name: 'Civil' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'finishing', name: 'Finishing' },
  ];

  const materials = [
    // Civil
    { id: 1, name: 'UltraTech Cement (OPC 53)', category: 'civil', unit: 'Bag (50kg)', brand: 'UltraTech', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/dhh703io_image.png' },
    { id: 2, name: 'ACC Cement (PPC)', category: 'civil', unit: 'Bag (50kg)', brand: 'ACC', image: 'https://customer-assets.emergentagent.com/job_buildwith-lmn/artifacts/bvj3rhud_image.png' },
    { id: 3, name: 'TMT Steel Bars (Fe 500D)', category: 'civil', unit: 'Ton', brand: 'TATA Tiscon', image: 'https://images.unsplash.com/photo-1763771420303-0f11ccf613d1?w=400' },
    { id: 4, name: 'JSW TMT Bars (Fe 550)', category: 'civil', unit: 'Ton', brand: 'JSW', image: 'https://images.unsplash.com/photo-1763926026024-2b294669e255?w=400' },
    { id: 5, name: 'Red Bricks (Standard)', category: 'civil', unit: '1000 pcs', brand: 'Local', image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?w=400' },
    { id: 6, name: 'Fly Ash Bricks', category: 'civil', unit: '1000 pcs', brand: 'Local', image: 'https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?w=400' },
    { id: 7, name: 'M-Sand (Manufactured Sand)', category: 'civil', unit: 'Unit (40 cft)', brand: 'Local', image: 'https://images.pexels.com/photos/6890415/pexels-photo-6890415.jpeg?w=400' },
    { id: 8, name: 'River Sand', category: 'civil', unit: 'Unit (40 cft)', brand: 'Local', image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?w=400' },
    // Electrical
    { id: 9, name: 'Havells Wires (1.5 sq mm)', category: 'electrical', unit: 'Coil (90m)', brand: 'Havells', image: 'https://images.unsplash.com/photo-1648020265916-7d1d3a183a4c?w=400' },
    { id: 10, name: 'Polycab Cables (4 sq mm)', category: 'electrical', unit: 'Coil (90m)', brand: 'Polycab', image: 'https://images.unsplash.com/photo-1678295630775-f5b1587cdfef?w=400' },
    { id: 11, name: 'Anchor Switches & Sockets', category: 'electrical', unit: 'Set', brand: 'Anchor', image: 'https://images.unsplash.com/photo-1760886801783-e2d0522dd2c3?w=400' },
    { id: 12, name: 'Legrand Modular Switches', category: 'electrical', unit: 'Set', brand: 'Legrand', image: 'https://images.unsplash.com/photo-1761479373576-ad4c1c5bb9af?w=400' },
    // Plumbing
    { id: 13, name: 'Astral CPVC Pipes (1 inch)', category: 'plumbing', unit: 'Pipe (3m)', brand: 'Astral', image: 'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=400' },
    { id: 14, name: 'Supreme PVC Pipes (4 inch)', category: 'plumbing', unit: 'Pipe (6m)', brand: 'Supreme', image: 'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?w=400' },
    { id: 15, name: 'Jaquar Bathroom Fittings', category: 'plumbing', unit: 'Set', brand: 'Jaquar', image: 'https://images.unsplash.com/photo-1644916925497-109cbd92087d?w=400' },
    { id: 16, name: 'Parryware Sanitary Ware', category: 'plumbing', unit: 'Set', brand: 'Parryware', image: 'https://images.unsplash.com/photo-1595428774862-a79ab68dbabb?w=400' },
    // Finishing
    { id: 17, name: 'Asian Paints Royale (20L)', category: 'finishing', unit: 'Bucket', brand: 'Asian Paints', image: 'https://images.pexels.com/photos/6474340/pexels-photo-6474340.jpeg?w=400' },
    { id: 18, name: 'Berger Weathercoat (20L)', category: 'finishing', unit: 'Bucket', brand: 'Berger', image: 'https://images.pexels.com/photos/6474196/pexels-photo-6474196.jpeg?w=400' },
    { id: 19, name: 'Johnson Floor Tiles (2x2)', category: 'finishing', unit: 'Box (4 pcs)', brand: 'Johnson', image: 'https://images.pexels.com/photos/9423038/pexels-photo-9423038.jpeg?w=400' },
    { id: 20, name: 'Kajaria Wall Tiles (1x2)', category: 'finishing', unit: 'Box (6 pcs)', brand: 'Kajaria', image: 'https://images.pexels.com/photos/5146920/pexels-photo-5146920.jpeg?w=400' },
  ];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleWhatsAppQuote = (material) => {
    const message = encodeURIComponent(
      `Hi! I want to request a quote for:\n\n` +
      `*Material:* ${material.name}\n` +
      `*Brand:* ${material.brand}\n` +
      `*Unit:* ${material.unit}\n\n` +
      `Please provide pricing and availability.`
    );
    window.open(`https://wa.me/916301241568?text=${message}`, '_blank');
  };

  const handleQuoteSubmit = () => {
    if (!quoteForm.name || !quoteForm.phone || !quoteForm.quantity) {
      toast.error('Please fill all required fields');
      return;
    }
    
    const message = encodeURIComponent(
      `*Quote Request*\n\n` +
      `*Name:* ${quoteForm.name}\n` +
      `*Phone:* ${quoteForm.phone}\n` +
      `*Material:* ${quoteItem.name}\n` +
      `*Quantity:* ${quoteForm.quantity} ${quoteItem.unit}\n` +
      `*Message:* ${quoteForm.message || 'N/A'}`
    );
    window.open(`https://wa.me/916301241568?text=${message}`, '_blank');
    toast.success('Redirecting to WhatsApp...');
    setQuoteForm({ name: '', phone: '', quantity: '', message: '' });
    setQuoteItem(null);
  };

  return (
    <div data-testid="materials-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#FFD700] text-[#001F3F] font-bold text-sm uppercase tracking-widest rounded-full mb-6">
              LMN.INFRA
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Construction Materials<br />
              <span className="text-[#FFD700]">Delivered in 4-6 Hours</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Direct material delivery to builders and contractors with best quality. 
              We tie up with big brands and deliver at low cost without losing quality.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Clock className="w-10 h-10 text-[#FFD700] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white">4-6 Hour Delivery</h3>
              <p className="text-gray-300 mt-2">Zone-based fast delivery across Hyderabad</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Shield className="w-10 h-10 text-[#FFD700] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white">Quality Assured</h3>
              <p className="text-gray-300 mt-2">Tie-ups with premium brands only</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Truck className="w-10 h-10 text-[#FFD700] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white">Bulk Orders</h3>
              <p className="text-gray-300 mt-2">Special pricing for contractors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Catalog */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                data-testid="material-search"
                placeholder="Search materials or brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList data-testid="category-tabs" className="flex flex-wrap gap-2 bg-transparent h-auto mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  data-testid={`tab-${category.id}`}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-[#001F3F] data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMaterials.map((material) => (
                <Card 
                  key={material.id}
                  data-testid={`material-card-${material.id}`}
                  className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    <img 
                      src={material.image} 
                      alt={material.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#001F3F] text-white text-xs font-bold uppercase rounded-full">
                      {material.category}
                    </span>
                  </div>
                  <CardContent className="p-4">
                    <span className="text-[#FFD700] font-bold text-xs uppercase tracking-wider">{material.brand}</span>
                    <h3 className="font-heading text-lg font-bold text-[#001F3F] mt-1 line-clamp-2">{material.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">Unit: {material.unit}</p>
                    
                    <div className="flex gap-2 mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            data-testid={`quote-btn-${material.id}`}
                            className="flex-1 bg-[#001F3F] hover:bg-[#003366] text-white font-bold text-xs uppercase"
                            onClick={() => setQuoteItem(material)}
                          >
                            Request Quote
                          </Button>
                        </DialogTrigger>
                        <DialogContent data-testid="quote-dialog" className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle className="font-heading text-2xl text-[#001F3F]">Request Quote</DialogTitle>
                          </DialogHeader>
                          {quoteItem && (
                            <div className="space-y-4 mt-4">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <span className="text-[#FFD700] font-bold text-xs uppercase">{quoteItem.brand}</span>
                                <p className="font-bold text-[#001F3F]">{quoteItem.name}</p>
                                <p className="text-gray-500 text-sm">Unit: {quoteItem.unit}</p>
                              </div>
                              <div>
                                <Label>Your Name *</Label>
                                <Input 
                                  data-testid="quote-name"
                                  value={quoteForm.name}
                                  onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                                  placeholder="Enter your name"
                                />
                              </div>
                              <div>
                                <Label>Phone Number *</Label>
                                <Input 
                                  data-testid="quote-phone"
                                  value={quoteForm.phone}
                                  onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                                  placeholder="Enter phone number"
                                />
                              </div>
                              <div>
                                <Label>Quantity *</Label>
                                <Input 
                                  data-testid="quote-quantity"
                                  value={quoteForm.quantity}
                                  onChange={(e) => setQuoteForm({...quoteForm, quantity: e.target.value})}
                                  placeholder={`Enter quantity in ${quoteItem?.unit || 'units'}`}
                                />
                              </div>
                              <div>
                                <Label>Additional Message</Label>
                                <Textarea 
                                  data-testid="quote-message"
                                  value={quoteForm.message}
                                  onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}
                                  placeholder="Any specific requirements..."
                                />
                              </div>
                              <Button 
                                data-testid="submit-quote-btn"
                                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold"
                                onClick={handleQuoteSubmit}
                              >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Submit via WhatsApp
                              </Button>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        data-testid={`whatsapp-btn-${material.id}`}
                        size="icon"
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                        onClick={() => handleWhatsAppQuote(material)}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMaterials.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No materials found matching your search.</p>
              </div>
            )}
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Need Bulk Materials?
          </h2>
          <p className="text-gray-300 mb-8">
            Upload your Bill of Materials (BOM) and get custom pricing for high-volume orders.
          </p>
          <a 
            href="https://wa.me/916301241568?text=Hi!%20I%20need%20bulk%20materials%20for%20my%20construction%20project.%20Please%20assist."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              data-testid="bulk-order-btn"
              size="lg"
              className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFC000] font-bold uppercase tracking-wider rounded-full px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Request Bulk Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default MaterialsPage;
