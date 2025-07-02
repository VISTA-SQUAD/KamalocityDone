import { Instagram, Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black/95 backdrop-blur-sm'
    } border-b border-gray-800 navbar-pattern`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Mobile Menu - Left aligned */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <button className="text-white p-2 hover:text-kamalo-gold transition-colors touch-manipulation">
                <Menu className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-kamalo-dark border-gray-800 max-h-[85vh] tribal-pattern">
              <DrawerHeader className="flex justify-between items-center border-b border-gray-700 pb-4">
                <DrawerTitle className="text-white text-xl font-serif">Menu</DrawerTitle>
                <DrawerClose asChild>
                  <button className="text-white p-2 hover:text-kamalo-gold transition-colors touch-manipulation">
                    <X className="w-6 h-6" />
                  </button>
                </DrawerClose>
              </DrawerHeader>
              <div className="p-4 space-y-2 flex flex-col h-full overflow-y-auto">
                <div className="flex-1 space-y-2 overflow-y-auto">
                  <Link to="/" className={`block py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold transition-colors ${isActiveLink('/') ? 'text-kamalo-gold' : 'text-white hover:text-kamalo-gold'}`} onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  
                  <Link to="/menu" className={`block py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold transition-colors ${isActiveLink('/menu') ? 'text-kamalo-gold' : 'text-white hover:text-kamalo-gold'}`} onClick={() => setIsOpen(false)}>
                    Menu
                  </Link>
                  
                  <Link to="/gallery" className={`block py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold transition-colors ${isActiveLink('/gallery') ? 'text-kamalo-gold' : 'text-white hover:text-kamalo-gold'}`} onClick={() => setIsOpen(false)}>
                    Gallery
                  </Link>

                  <Link to="/about" className={`block py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold transition-colors ${isActiveLink('/about') ? 'text-kamalo-gold' : 'text-white hover:text-kamalo-gold'}`} onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  
                  <Link to="/services" className={`block py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold transition-colors ${isActiveLink('/services') ? 'text-kamalo-gold' : 'text-white hover:text-kamalo-gold'}`} onClick={() => setIsOpen(false)}>
                    Services
                  </Link>
                  
                  <Link to="/contact" className={`block py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold transition-colors ${isActiveLink('/contact') ? 'text-kamalo-gold' : 'text-white hover:text-kamalo-gold'}`} onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                  
                  {/* Social Media Icons */}
                  <div className="flex gap-6 py-4 border-b border-gray-700 justify-center">
                    <a href="https://wa.me/+27736911461" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors touch-manipulation" onClick={() => setIsOpen(false)}>
                      <MessageCircle className="w-8 h-8" />
                    </a>
                    <a href="https://instagram.com/kamalo_city" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors touch-manipulation" onClick={() => setIsOpen(false)}>
                      <Instagram className="w-8 h-8" />
                    </a>
                  </div>
                </div>
                
                {/* Make Reservation Button at Bottom */}
                <div className="pt-4 border-t border-gray-700">
                  <Link 
                    to="/reservations" 
                    className="block w-full bg-kamalo-red text-white px-6 py-4 rounded-full hover:bg-red-700 transition-colors font-semibold text-center hover:scale-105 hover:shadow-lg transition duration-300 text-lg touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Brand - Perfectly Centered on mobile */}
        <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start">
          <Link to="/" className="mobile-nav-center md:relative md:left-auto md:transform-none text-xl md:text-2xl font-bold text-kamalo-gold hover:text-white transition-colors duration-300 font-serif">
            Kamalo City
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/" className={`px-3 py-2 hover:scale-105 transition-all duration-300 text-sm font-semibold ${isActiveLink('/') ? 'nav-link-active' : 'text-white hover:text-kamalo-gold'}`}>
            Home
          </Link>
          
          <Link to="/menu" className={`px-3 py-2 hover:scale-105 transition-all duration-300 text-sm font-semibold ${isActiveLink('/menu') ? 'nav-link-active' : 'text-white hover:text-kamalo-gold'}`}>
            Menu
          </Link>
          
          <Link to="/gallery" className={`px-3 py-2 hover:scale-105 transition-all duration-300 text-sm font-semibold ${isActiveLink('/gallery') ? 'nav-link-active' : 'text-white hover:text-kamalo-gold'}`}>
            Gallery
          </Link>

          <Link to="/about" className={`px-3 py-2 hover:scale-105 transition-all duration-300 text-sm font-semibold ${isActiveLink('/about') ? 'nav-link-active' : 'text-white hover:text-kamalo-gold'}`}>
            About
          </Link>
          
          <Link to="/services" className={`px-3 py-2 hover:scale-105 transition-all duration-300 text-sm font-semibold ${isActiveLink('/services') ? 'nav-link-active' : 'text-white hover:text-kamalo-gold'}`}>
            Services
          </Link>
          
          <Link to="/contact" className={`px-3 py-2 hover:scale-105 transition-all duration-300 text-sm font-semibold ${isActiveLink('/contact') ? 'nav-link-active' : 'text-white hover:text-kamalo-gold'}`}>
            Contact
          </Link>

          <a href="https://wa.me/+27736911461" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300 p-2 hover:scale-110">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="https://instagram.com/kamalo_city" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-300 p-2 hover:scale-110">
            <Instagram className="w-4 h-4" />
          </a>

          {/* Reservation Pill Button */}
          <Link 
            to="/reservations" 
            className="bg-kamalo-red text-white px-5 py-2 rounded-full hover:bg-red-700 transition-all duration-300 font-semibold text-sm hover:scale-105 hover:shadow-lg ml-4"
          >
            Reserve
          </Link>
        </div>

        {/* Empty div for mobile layout balance */}
        <div className="md:hidden w-10"></div>
      </div>
    </nav>
  );
};

export default Navbar;