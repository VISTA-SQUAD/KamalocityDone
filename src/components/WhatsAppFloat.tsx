import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detect scroll up
      if (currentScrollY < lastScrollY && currentScrollY > 300) {
        setHasScrolledUp(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (hasScrolledUp) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 1000);

      const hideTimer = setTimeout(() => {
        setShowPrompt(false);
      }, 8000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [hasScrolledUp]);

  return (
    <>
      {/* Animated chat prompt */}
      <div className={`whatsapp-prompt ${showPrompt ? 'show' : ''}`}>
        <div className="flex items-center justify-between gap-2">
          <span>Need help? Chat with us!</span>
          <button 
            onClick={() => setShowPrompt(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* WhatsApp float button */}
      <a
        href="https://wa.me/+27736911461"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </>
  );
};

export default WhatsAppFloat;