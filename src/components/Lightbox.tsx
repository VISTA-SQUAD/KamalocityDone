import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{
    type: 'image' | 'video';
    src: string;
    alt?: string;
    title?: string;
  }>;
  currentIndex: number;
  onNavigate?: (index: number) => void;
}

const Lightbox = ({ isOpen, onClose, items, currentIndex, onNavigate }: LightboxProps) => {
  const [currentItem, setCurrentItem] = useState(currentIndex);

  useEffect(() => {
    setCurrentItem(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentItem]);

  const handlePrevious = () => {
    const newIndex = currentItem > 0 ? currentItem - 1 : items.length - 1;
    setCurrentItem(newIndex);
    onNavigate?.(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentItem < items.length - 1 ? currentItem + 1 : 0;
    setCurrentItem(newIndex);
    onNavigate?.(newIndex);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !items[currentItem]) return null;

  const item = items[currentItem];

  return (
    <div 
      className={`lightbox-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="lightbox-close"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation buttons (only show if multiple items) - Small red circles at bottom */}
      {items.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="lightbox-nav prev"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleNext}
            className="lightbox-nav next"
            aria-label="Next item"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative">
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.alt || item.title || 'Lightbox image'}
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div className="lightbox-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={item.src}
              title={item.title || 'Lightbox video'}
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        )}
        
        {/* Item counter */}
        {items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            {currentItem + 1} / {items.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;