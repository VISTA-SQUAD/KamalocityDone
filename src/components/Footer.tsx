import { Clock, Phone, MapPin, Instagram, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#1D1D1D] text-white overflow-hidden">
      {/* Wave/Angled Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-12" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-kamalo-dark"
          ></path>
        </svg>
      </div>

      {/* African Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 215, 0, 0.1) 10px,
              rgba(255, 215, 0, 0.1) 20px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 10px,
              rgba(139, 0, 0, 0.1) 10px,
              rgba(139, 0, 0, 0.1) 20px
            ),
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 0, 0, 0.05) 0%, transparent 50%)
          `,
          backgroundSize: '40px 40px, 40px 40px, 200px 200px, 200px 200px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* 3-Column Layout - Mobile responsive stacking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 footer-mobile-stack">
          
          {/* Column 1: Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-kamalo-gold font-serif">
              Kamalo City
            </h3>
            <p className="text-lg text-gray-300 mb-6 italic">
              "Serving soul since 2023"
            </p>
            <p className="text-gray-400 leading-relaxed">
              Where Africa eats, sings, and thrives. Experience authentic cuisine, vibrant culture, and unforgettable moments in the heart of Cape Town.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-kamalo-red font-serif">Contact & Hours</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-kamalo-gold flex-shrink-0" />
                <a href="tel:+27736911461" className="hover:text-kamalo-gold transition-colors font-semibold touch-manipulation">
                  +27 73 691 1461
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-kamalo-gold flex-shrink-0" />
                <a href="mailto:kamalocity@outlook.com" className="hover:text-kamalo-gold transition-colors touch-manipulation">
                  kamalocity@outlook.com
                </a>
              </div>
              
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-kamalo-gold mt-1 flex-shrink-0" />
                <div>
                  <p>90 Voortrekker Road</p>
                  <p>Goodwood, Cape Town</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="w-5 h-5 text-kamalo-gold flex-shrink-0" />
                <div>
                  <p className="font-semibold text-kamalo-gold">Open 7 Days</p>
                  <p className="text-sm">11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Social Links & CTA */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-kamalo-red font-serif">Connect With Us</h4>
            
            {/* Social Media Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <a
                href="tel:+27736911461"
                className="flex items-center gap-2 bg-kamalo-red hover:bg-red-700 p-3 rounded-lg transition-all duration-300 hover:scale-105 touch-manipulation"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-semibold">Call</span>
              </a>
              
              <a
                href="mailto:kamalocity@outlook.com"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all duration-300 hover:scale-105 touch-manipulation"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm font-semibold">Email</span>
              </a>
              
              <a
                href="https://instagram.com/kamalo_city"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 p-3 rounded-lg transition-all duration-300 hover:scale-105 touch-manipulation"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-semibold">Follow</span>
              </a>
              
              <a
                href="https://wa.me/+27736911461"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 p-3 rounded-lg transition-all duration-300 hover:scale-105 touch-manipulation"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Chat</span>
              </a>
            </div>

            {/* Final CTA Button */}
            <Link 
              to="/reservations" 
              className="block w-full bg-gradient-to-r from-kamalo-red to-kamalo-gold text-white px-6 py-4 rounded-full hover:from-red-700 hover:to-yellow-500 transition-all duration-300 font-bold text-lg hover:scale-105 hover:shadow-lg text-center touch-manipulation"
            >
              Book Your Table
            </Link>
          </div>
        </div>

        {/* Tribal Divider */}
        <div className="congo-pattern-divider mb-8"></div>

        {/* Footer Tagline */}
        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-6 italic font-serif leading-relaxed">
            "Thank you for visiting Kamalo City. We serve more than food — we serve home."
          </p>
          
          {/* Full-width CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Link 
              to="/reservations" 
              className="flex-1 bg-kamalo-red hover:bg-red-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-bold text-lg hover:scale-105 hover:shadow-lg text-center touch-manipulation"
            >
              Book a Table
            </Link>
            <a 
              href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-bold text-lg hover:scale-105 hover:shadow-lg text-center touch-manipulation"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2025 Kamalo City. All rights reserved. | Authentic African cuisine in Cape Town
          </p>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Kamalo City",
          "description": "Authentic African cuisine and entertainment venue in Cape Town",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "90 Voortrekker Road",
            "addressLocality": "Goodwood",
            "addressRegion": "Western Cape",
            "addressCountry": "South Africa"
          },
          "telephone": "+27736911461",
          "email": "kamalocity@outlook.com",
          "openingHours": "Mo-Su 11:00-23:00",
          "servesCuisine": "African",
          "priceRange": "$$",
          "url": "https://kamalocity.co.za"
        })}
      </script>
    </footer>
  );
};

export default Footer;