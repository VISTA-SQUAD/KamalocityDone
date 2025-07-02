import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Lightbox from "./Lightbox";

const GalleryPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Updated gallery images - removed the ngayi ngayi dish
  const galleryImages = [
    {
      id: 1,
      title: "Our Food",
      image: "https://live.staticflickr.com/65535/54627256147_6f627b5984_c.jpg",
      alt: "Kamalo City - Our Food"
    },
    {
      id: 2,
      title: "Our Services",
      image: "https://live.staticflickr.com/65535/54575789460_fcb466083e_c.jpg",
      alt: "Kamalo City - Our Services"
    },
    {
      id: 3,
      title: "Our Food",
      image: "https://live.staticflickr.com/65535/54628348818_226ac07dcf_c.jpg",
      alt: "Kamalo City - Our Food"
    },
    {
      id: 4,
      title: "Our Hookah",
      image: "https://live.staticflickr.com/65535/54575639694_9a16f68006_c.jpg",
      alt: "Kamalo City - Our Hookah"
    },
    {
      id: 5,
      title: "Our Perfumes",
      image: "https://live.staticflickr.com/65535/54575640044_867793b363_c.jpg",
      alt: "Kamalo City - Our Perfumes"
    },
    {
      id: 6,
      title: "Our Kitchen",
      image: "https://live.staticflickr.com/65535/54575452741_3649c67820_c.jpg",
      alt: "Kamalo City - Our Kitchen"
    }
  ];

  const lightboxItems = galleryImages.map(item => ({
    type: 'image' as const,
    src: item.image,
    alt: item.alt,
    title: item.title
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % galleryImages.length;
      slides.push(galleryImages[index]);
    }
    return slides;
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section ref={sectionRef} className="section-spacing bg-gradient-to-b from-kamalo-dark to-black tribal-pattern">
      <div className="w-full max-w-none px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              Experience <span className="text-kamalo-red">Kamalo City</span>
            </h2>
            <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a glimpse of our vibrant atmosphere, delicious food, and premium services
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-7xl mx-auto">
          {/* Mobile: Show 1 slide */}
          <div className="md:hidden">
            <ScrollReveal>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={galleryImages[currentSlide].image}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover cursor-pointer"
                  loading="lazy"
                  onClick={() => openLightbox(currentSlide)}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">{galleryImages[currentSlide].title}</h3>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Desktop: Show 3 slides - full width */}
          <div className="hidden md:flex gap-6">
            {getVisibleSlides().map((item, index) => (
              <ScrollReveal key={`${currentSlide}-${index}`} delay={index * 200}>
                <div className="flex-1 relative h-64 rounded-lg overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-pointer"
                    loading="lazy"
                    onClick={() => openLightbox((currentSlide + index) % galleryImages.length)}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Navigation buttons - Desktop only, positioned outside */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation buttons - Below carousel with smaller size */}
          <div className="carousel-arrows md:hidden">
            <button
              onClick={prevSlide}
              className="w-8 h-8 bg-kamalo-red hover:bg-red-600 text-white transition-all duration-300 rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-8 h-8 bg-kamalo-red hover:bg-red-600 text-white transition-all duration-300 rounded-full flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-kamalo-red' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="btn-ghost"
            >
              View Full Gallery
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};

export default GalleryPreview;