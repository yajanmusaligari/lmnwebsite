import { useState, useMemo, useRef } from 'react';
import { Truck, Clock, Shield, MessageCircle, Search, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { categories, products, brands } from '../data/materialsData';
import { Reveal } from '../components/Reveal';

const WHATSAPP = '916301241568';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const MaterialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSub, setSelectedSub] = useState('all');
  const [quoteItem, setQuoteItem] = useState(null);
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', quantity: '', message: '' });
  const catalogRef = useRef(null);

  const activeCategory = categories.find((c) => c.id === selectedCategory);
  const subs = activeCategory?.subs || [];

  const filteredProducts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSub = selectedSub === 'all' || p.sub === selectedSub;
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
      return matchesCategory && matchesSub && matchesSearch;
    });
  }, [searchTerm, selectedCategory, selectedSub]);

  const groupedBrands = useMemo(() => {
    const groups = {};
    brands.forEach((b) => {
      const letter = b.name.charAt(0).toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(b);
    });
    return Object.keys(groups).sort().map((letter) => ({ letter, items: groups[letter] }));
  }, []);

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
    setSelectedSub('all');
  };

  const handleBrandClick = (name) => {
    setSearchTerm(name);
    setSelectedCategory('all');
    setSelectedSub('all');
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppQuote = (product) => {
    const message = encodeURIComponent(
      `Hi! I want to request a quote for:\n\n` +
      `*Material:* ${product.name}\n` +
      `*Brand:* ${product.brand}\n` +
      `*Indicative Price:* ${product.price} ${product.unit}\n\n` +
      `Please provide best pricing and availability.`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, '_blank');
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
      `*Brand:* ${quoteItem.brand}\n` +
      `*Quantity:* ${quoteForm.quantity}\n` +
      `*Message:* ${quoteForm.message || 'N/A'}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, '_blank');
    toast.success('Redirecting to WhatsApp...');
    setQuoteForm({ name: '', phone: '', quantity: '', message: '' });
    setQuoteItem(null);
  };

  return (
    <div data-testid="materials-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-7">
              <span className="h-px w-10 bg-[#C9A24B]" />
              <span className="text-[#C9A24B] font-mono-accent text-xs uppercase tracking-[0.3em]">The Catalog</span>
              <span className="h-px w-10 bg-[#C9A24B]" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Construction Materials<br />
              <span className="italic text-gold-gradient">Delivered in 4-6 Hours</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light">
              The full catalog of building materials from 200+ trusted brands. Browse by category,
              compare, and request a quote on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Clock className="w-10 h-10 text-[#C9A24B] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white">4-6 Hour Delivery</h3>
              <p className="text-gray-300 mt-2">Zone-based fast delivery across Hyderabad</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Shield className="w-10 h-10 text-[#C9A24B] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white">Quality Assured</h3>
              <p className="text-gray-300 mt-2">Tie-ups with premium brands only</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Truck className="w-10 h-10 text-[#C9A24B] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-white">Bulk Orders</h3>
              <p className="text-gray-300 mt-2">Special pricing for contractors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section ref={catalogRef} className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              data-testid="material-search"
              placeholder="Search products or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 h-12 rounded-full"
            />
            {searchTerm && (
              <button
                data-testid="clear-search-btn"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0A0A0A]"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category filters */}
          <div data-testid="category-filters" className="flex flex-wrap justify-center gap-2 mb-4">
            <button
              data-testid="cat-all"
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-colors ${
                selectedCategory === 'all' ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#0A0A0A] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Materials
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-testid={`cat-${cat.id}`}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-colors ${
                  selectedCategory === cat.id ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#0A0A0A] hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Subcategory sublinks */}
          {subs.length > 0 && (
            <div data-testid="subcategory-filters" className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                data-testid="sub-all"
                onClick={() => setSelectedSub('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedSub === 'all' ? 'bg-[#C9A24B] text-[#0A0A0A]' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All
              </button>
              {subs.map((sub) => (
                <button
                  key={sub.id}
                  data-testid={`sub-${sub.id}`}
                  onClick={() => setSelectedSub(sub.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedSub === sub.id ? 'bg-[#C9A24B] text-[#0A0A0A]' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )}

          <p data-testid="result-count" className="text-center text-gray-500 text-sm mb-8">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                data-testid={`material-card-${product.id}`}
                className="group overflow-hidden border border-gray-200 hover:border-[#C9A24B] shadow-none hover:shadow-hard rounded-none transition-all duration-200 flex flex-col bg-white"
              >
                <div className="relative h-40 overflow-hidden bg-white flex items-center justify-center p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 flex flex-col flex-1">
                  <span className="text-[#C9A24B] font-bold text-xs uppercase tracking-wider">{product.brand}</span>
                  <h3 className="font-heading text-sm md:text-base font-bold text-[#0A0A0A] mt-1 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                  <div className="mt-2 mb-3">
                    <span data-testid={`price-${product.id}`} className="text-lg font-bold text-[#0A0A0A]">{product.price}</span>
                    <span className="text-gray-500 text-xs ml-1">{product.unit}</span>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          data-testid={`quote-btn-${product.id}`}
                          className="flex-1 bg-[#0A0A0A] hover:bg-[#262626] text-white font-bold text-xs uppercase"
                          onClick={() => setQuoteItem(product)}
                        >
                          Request Quote
                        </Button>
                      </DialogTrigger>
                      <DialogContent data-testid="quote-dialog" className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="font-heading text-2xl text-[#0A0A0A]">Request Quote</DialogTitle>
                        </DialogHeader>
                        {quoteItem && (
                          <div className="space-y-4 mt-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                              <span className="text-[#C9A24B] font-bold text-xs uppercase">{quoteItem.brand}</span>
                              <p className="font-bold text-[#0A0A0A]">{quoteItem.name}</p>
                              <p className="text-gray-500 text-sm">{quoteItem.price} {quoteItem.unit}</p>
                            </div>
                            <div>
                              <Label>Your Name *</Label>
                              <Input data-testid="quote-name" value={quoteForm.name} onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })} placeholder="Enter your name" />
                            </div>
                            <div>
                              <Label>Phone Number *</Label>
                              <Input data-testid="quote-phone" value={quoteForm.phone} onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })} placeholder="Enter phone number" />
                            </div>
                            <div>
                              <Label>Quantity *</Label>
                              <Input data-testid="quote-quantity" value={quoteForm.quantity} onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })} placeholder={`Enter quantity (${quoteItem?.unit?.replace('per ', '') || 'units'})`} />
                            </div>
                            <div>
                              <Label>Additional Message</Label>
                              <Textarea data-testid="quote-message" value={quoteForm.message} onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })} placeholder="Any specific requirements..." />
                            </div>
                            <Button data-testid="submit-quote-btn" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold" onClick={handleQuoteSubmit}>
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Submit via WhatsApp
                            </Button>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Button
                      data-testid={`whatsapp-btn-${product.id}`}
                      size="icon"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white shrink-0"
                      onClick={() => handleWhatsAppQuote(product)}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found. Try a different category or search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Brands Directory */}
      <section data-testid="brands-directory" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-[#0A0A0A] text-[#C9A24B] font-bold text-xs uppercase tracking-widest mb-4">
              Shop by Brand
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#0A0A0A]">All Brands</h2>
            <p className="text-gray-500 mt-3 font-light">{brands.length}+ trusted brands. Tap a brand to filter products.</p>
          </Reveal>

          {/* A-Z jump bar */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-10">
            {ALPHABET.map((letter) => {
              const has = groupedBrands.some((g) => g.letter === letter);
              return (
                <a
                  key={letter}
                  href={has ? `#brand-${letter}` : undefined}
                  data-testid={`alpha-${letter}`}
                  className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-bold transition-colors ${
                    has ? 'bg-[#0A0A0A] text-white hover:bg-[#C9A24B] hover:text-[#0A0A0A]' : 'bg-gray-100 text-gray-300 cursor-default'
                  }`}
                >
                  {letter}
                </a>
              );
            })}
          </div>

          {groupedBrands.map((group) => {
            const items = group.items;
            return (
              <div key={group.letter} id={`brand-${group.letter}`} className="mb-10 scroll-mt-24">
                <h3 className="font-heading text-2xl font-bold text-[#C9A24B] border-b-2 border-[#0A0A0A] pb-2 mb-5">{group.letter}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {items.map((brand) => (
                    <button
                      key={brand.name}
                      data-testid={`brand-${brand.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      onClick={() => handleBrandClick(brand.name)}
                      title={`View ${brand.name} products`}
                      className="group bg-white border border-gray-200 p-3 h-20 flex items-center justify-center text-center hover:border-[#C9A24B] hover:bg-[#0A0A0A] transition-all duration-200"
                    >
                      <span className="text-xs font-bold text-[#0A0A0A] leading-tight line-clamp-3 group-hover:text-white uppercase tracking-tight">{brand.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">Need Bulk Materials?</h2>
          <p className="text-gray-300 mb-8 font-light">Upload your Bill of Materials (BOM) and get custom pricing for high-volume orders.</p>
          <a href={`https://wa.me/${WHATSAPP}?text=Hi!%20I%20need%20bulk%20materials%20for%20my%20construction%20project.%20Please%20assist.`} target="_blank" rel="noopener noreferrer">
            <Button data-testid="bulk-order-btn" size="lg" className="bg-[#C9A24B] text-[#0A0A0A] hover:bg-[#E6C878] font-medium uppercase tracking-[0.15em] text-sm rounded-none px-8 py-6">
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
