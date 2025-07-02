import { useState, useEffect } from "react";
import { Calendar, Clock, Users, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const Reservations = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Make a Reservation - Kamalo City | Book Your Table";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book your table at Kamalo City for authentic African cuisine and entertainment. Easy online reservations for dining, events, and private bookings in Cape Town.');
    }

    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = "https://live.staticflickr.com/65535/54575640309_71435470de_c.jpg";
    }
  }, []);

  const generateGuestNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const timeSlots = [
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", 
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Show success message for 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
    }, 3000);

    const message = `Hello! I would like to make a reservation:
    
Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Special Requests: ${formData.specialRequests || 'None'}`;
    
    const whatsappUrl = `https://wa.me/+27736911461?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqs = [
    {
      question: "How many people can I book for?",
      answer: "We can accommodate groups from 1 to 80 people. For larger private events, please call us directly."
    },
    {
      question: "Do I need to pay upfront?",
      answer: "No upfront payment required for regular dining reservations. Private events may require a deposit."
    },
    {
      question: "Can I decorate the space?",
      answer: "Yes! For private bookings, we allow decorations with some terms and conditions. Contact us to discuss your needs."
    },
    {
      question: "What's included in a private booking?",
      answer: "Private bookings include the venue, sound system, DJ booth, and full catering options. Contact us for detailed packages."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main className="pt-20 pb-20 px-4 tribal-pattern">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kamalo-gold mb-6 font-serif">
                Reserve Your <span className="text-kamalo-red">Experience</span>
              </h1>
              <div className="congo-pattern-divider"></div>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  Looking for the perfect venue in Cape Town? Kamalo City offers intimate dinners, birthday parties, corporate events, and more. Enjoy authentic cuisine, vibrant ambiance, and excellent service.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Two-Column Layout: Form + Sidebar */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column: Reservation Form - Fields: Name, Phone, Date, Time, Guests only */}
              <div className="bg-black/50 rounded-lg p-8 border border-gray-700">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center font-serif">Book Your Table</h2>
                <p className="text-gray-300 mb-8 text-lg text-center">Open: 11:00 AM to 11:00 PM, 7 days a week</p>
                
                {/* Success Message */}
                {isSubmitted && (
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center mb-6 animate-fade-up">
                    <p className="text-green-400 font-semibold text-lg">Reservation request sent! We'll confirm within 2 hours.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field with Icon */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-[#1A1F2C] text-white rounded-full text-lg focus:border-kamalo-red transition-colors touch-manipulation border-0 focus:ring-2 focus:ring-kamalo-red"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  {/* Phone Field with Icon */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-[#1A1F2C] text-white rounded-full text-lg focus:border-kamalo-red transition-colors touch-manipulation border-0 focus:ring-2 focus:ring-kamalo-red"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  {/* Date Picker with Icon */}
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-[#1A1F2C] text-white rounded-full text-lg focus:border-kamalo-red transition-colors touch-manipulation border-0 focus:ring-2 focus:ring-kamalo-red"
                      required
                    />
                  </div>

                  {/* Time Dropdown with Icon */}
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <Select onValueChange={(value) => setFormData({...formData, time: value})}>
                      <SelectTrigger className="w-full pl-12 pr-4 py-4 bg-[#1A1F2C] text-white rounded-full border-0 focus:ring-2 focus:ring-kamalo-red text-lg">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1F2C] text-white border-gray-700 rounded-lg">
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time} className="hover:bg-gray-700 rounded-md">
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Guests Dropdown with Icon */}
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <Select onValueChange={(value) => setFormData({...formData, guests: value})}>
                      <SelectTrigger className="w-full pl-12 pr-4 py-4 bg-[#1A1F2C] text-white rounded-full border-0 focus:ring-2 focus:ring-kamalo-red text-lg">
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1F2C] text-white border-gray-700 rounded-lg max-h-60">
                        {generateGuestNumbers().slice(0, 20).map((num) => (
                          <SelectItem key={num} value={num.toString()} className="hover:bg-gray-700 rounded-md">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-[#1A1F2C] text-white rounded-lg h-32 text-lg focus:border-kamalo-red transition-colors resize-none touch-manipulation border-0 focus:ring-2 focus:ring-kamalo-red"
                      placeholder="Special requests or dietary requirements"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-primary-slim py-4 text-lg font-semibold rounded-full touch-manipulation"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? 'Sending...' : 'Reserve Now'}
                  </Button>
                </form>

                {/* Alternative Contact Link */}
                <div className="text-center mt-6">
                  <p className="text-gray-400 mb-4">Or contact us directly:</p>
                  <a 
                    href="https://wa.me/+27736911461"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 transition-colors font-semibold"
                  >
                    WhatsApp: +27 73 691 1461
                  </a>
                </div>
              </div>

              {/* Right Column: Sidebar with Social Proof/Testimonial + Info */}
              <div className="space-y-6">
                {/* Social Proof/Testimonial Block */}
                <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-kamalo-gold mb-4 font-serif">What Our Guests Say</h3>
                  <blockquote className="text-gray-300 italic mb-4">
                    "Amazing African restaurant. I love to be there again and again for their lovely food, clean environments, live music and great service."
                  </blockquote>
                  <cite className="text-kamalo-red font-semibold">— HM Baloji, Verified Guest</cite>
                </div>

                {/* Main Image - Updated with Venue Hire image */}
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-black/50 border border-gray-800">
                  <img 
                    src="https://live.staticflickr.com/65535/54624923824_0590af3293_c.jpg"
                    alt="Kamalo City - Restaurant venue for events and dining"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 font-serif">Experience Kamalo City</h3>
                      <p className="text-lg">Authentic cuisine, vibrant atmosphere, unforgettable moments</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                    <h4 className="text-lg font-bold text-kamalo-gold mb-2">Capacity</h4>
                    <p className="text-gray-300">Up to 80 guests for private events</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                    <h4 className="text-lg font-bold text-kamalo-gold mb-2">Hours</h4>
                    <p className="text-gray-300">11:00 AM - 11:00 PM daily</p>
                  </div>
                </div>

                {/* Map Container - Prepared for future embed */}
                <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                  <h4 className="text-lg font-bold text-kamalo-gold mb-4">Find Us</h4>
                  <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">📍 90 Voortrekker Road, Goodwood, Cape Town</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ Section */}
          <ScrollReveal delay={400}>
            <div className="max-w-4xl mx-auto mb-12">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem 
                  value="faqs" 
                  className="bg-black/50 rounded-lg border border-gray-800 data-[state=open]:border-kamalo-red transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6 px-6 text-xl font-bold font-serif">
                    ❓ Frequently Asked Questions
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                          <h4 className="text-white font-semibold mb-2 text-lg">{faq.question}</h4>
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ScrollReveal>

          {/* Final CTA */}
          <ScrollReveal delay={500}>
            <div className="text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">Ready to Reserve?</h2>
                <p className="text-gray-300 mb-6 text-lg">Contact us now to secure your table or discuss private event options.</p>
                <p className="text-gray-400 text-lg">
                  For special requirements or large groups, please call{" "}
                  <a href="tel:+27736911461" className="text-kamalo-gold hover:text-kamalo-red transition-colors font-semibold">
                    +27 73 691 1461
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reservations;