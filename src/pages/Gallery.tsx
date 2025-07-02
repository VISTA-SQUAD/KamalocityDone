import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Lightbox from "@/components/Lightbox";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("food");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    document.title = "Gallery - Kamalo City | Photos of Food, Events & Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our gallery showcasing authentic African cuisine, live events, and premium services at Kamalo City in Cape Town.');
    }

    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = "https://live.staticflickr.com/65535/54575640309_71435470de_c.jpg";
    }
  }, []);

  const galleryItems = [
    // Food Category
    { 
      id: 1, 
      category: "food", 
      image: "https://live.staticflickr.com/65535/54628348818_226ac07dcf_c.jpg", 
      alt: "Gallery Food 1 – African Cuisine at Kamalo City Restaurant" 
    },
    { 
      id: 2, 
      category: "food", 
      image: "https://live.staticflickr.com/65535/54628137221_dac8fd3276_c.jpg", 
      alt: "Gallery Food 2 – African Cuisine at Kamalo City Restaurant" 
    },
    { 
      id: 3, 
      category: "food", 
      image: "https://live.staticflickr.com/65535/54628335184_b54f6a5f69_c.jpg", 
      alt: "Gallery Food 3 – African Cuisine at Kamalo City Restaurant" 
    },
    { 
      id: 4, 
      category: "food", 
      image: "https://live.staticflickr.com/65535/54628136671_49952e5a26_c.jpg", 
      alt: "Gallery Food 4 – African Cuisine at Kamalo City Restaurant" 
    },
    { 
      id: 5, 
      category: "food", 
      image: "https://live.staticflickr.com/65535/54627256147_6f627b5984_c.jpg", 
      alt: "Gallery Food 5 – African Cuisine at Kamalo City Restaurant" 
    },
    { 
      id: 6, 
      category: "food", 
      image: "https://live.staticflickr.com/65535/54597424173_c799427945_c.jpg", 
      alt: "Kebab Stick – African Cuisine at Kamalo City Restaurant" 
    },
    { 
      id: 7, 
      category: "food", 
      image: "https://live.staticflickr.com/65535/54597205206_c6c31c08fe_c.jpg", 
      alt: "Tarky Dendon – African Cuisine at Kamalo City Restaurant" 
    },
    { 
      id: 8, 
      category: "food", 
      image: "https://live.staticflickr.com/65535/54597424853_b3f22d7e04_c.jpg", 
      alt: "Triple Trouble Dish – African Cuisine at Kamalo City Restaurant" 
    },

    // Events Category
    { 
      id: 9, 
      category: "events", 
      image: "https://live.staticflickr.com/65535/54623833912_78cffedfe2_c.jpg", 
      alt: "Past Event 1 – Live Event at Kamalo City" 
    },
    { 
      id: 10, 
      category: "events", 
      image: "https://live.staticflickr.com/65535/54574585527_c4e3fb753f_c.jpg", 
      alt: "Restaurant 1 – Event Space at Kamalo City" 
    },
    { 
      id: 11, 
      category: "events", 
      image: "https://live.staticflickr.com/65535/54626189545_5a6e12b316_c.jpg", 
      alt: "Hero Image 3 – Event at Kamalo City" 
    },

    // Services Category
    { 
      id: 12, 
      category: "services", 
      image: "https://live.staticflickr.com/65535/54575789460_fcb466083e_c.jpg", 
      alt: "Barbershop 2 – Grooming Service at Kamalo City" 
    },
    { 
      id: 13, 
      category: "services", 
      image: "https://live.staticflickr.com/65535/54574585882_a293c9a873_c.jpg", 
      alt: "Hookah 2 – Relaxation Service at Kamalo City" 
    },
    { 
      id: 14, 
      category: "services", 
      image: "https://live.staticflickr.com/65535/54575639694_9a16f68006_c.jpg", 
      alt: "Hookah 1 – Premium Hookah Service at Kamalo City" 
    },
    { 
      id: 15, 
      category: "services", 
      image: "https://live.staticflickr.com/65535/54575640044_867793b363_c.jpg", 
      alt: "Perfumes 1 – Fragrance Service at Kamalo City" 
    },
    { 
      id: 16, 
      category: "services", 
      image: "https://live.staticflickr.com/65535/54624923824_0590af3293_c.jpg", 
      alt: "Venue Hire – Private Function Service at Kamalo City" 
    }
  ];

  const filteredItems = galleryItems.filter(item => item.category === activeFilter);

  const lightboxItems = filteredItems.map(item => ({
    type: 'image' as const,
    src: item.image,
    alt: item.alt,
    title: item.alt
  }));

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "food": return "Food";
      case "events": return "Events";
      case "services": return "Services";
      default: return category;
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12 tribal-pattern">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif">
              Moments from Kamalo City — <span className="text-kamalo-red">Food, Culture & Community</span>
            </h1>
            <div className="congo-pattern-divider"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Explore the vibrant world of Kamalo City through our collection of moments, 
              from delicious cuisine to exciting events and premium services.
            </p>
          </div>

          {/* Filter Toggle Buttons - 3 toggles: Food, Events, Services */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter("food")}
              className={`px-8 py-4 rounded-full transition-all duration-500 font-semibold text-lg relative overflow-hidden ${
                activeFilter === "food" 
                  ? "bg-kamalo-red text-white shadow-lg transform scale-105" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
              }`}
            >
              <span className="relative z-10">Food</span>
            </Button>
            <Button
              onClick={() => setActiveFilter("events")}
              className={`px-8 py-4 rounded-full transition-all duration-500 font-semibold text-lg relative overflow-hidden ${
                activeFilter === "events" 
                  ? "bg-kamalo-red text-white shadow-lg transform scale-105" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
              }`}
            >
              <span className="relative z-10">Events</span>
            </Button>
            <Button
              onClick={() => setActiveFilter("services")}
              className={`px-8 py-4 rounded-full transition-all duration-500 font-semibold text-lg relative overflow-hidden ${
                activeFilter === "services" 
                  ? "bg-kamalo-red text-white shadow-lg transform scale-105" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
              }`}
            >
              <span className="relative z-10">Services</span>
            </Button>
          </div>

          {/* Category Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              {getCategoryDisplayName(activeFilter)}
            </h2>
            <div className="congo-pattern-divider"></div>
          </div>

          {/* Gallery Grid - 3 columns desktop, 2 columns mobile with proper image display */}
          <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 hover:border-kamalo-red transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                <div className="relative overflow-hidden" style={{ minHeight: '200px' }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto object-contain group-hover:scale-110 transition duration-700 cursor-pointer"
                    style={{ minHeight: '200px', maxHeight: '300px' }}
                    onClick={() => openLightbox(index)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg italic">More images coming soon...</p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
                Experience <span className="text-kamalo-red">Kamalo City</span> Today
              </h2>
              <div className="congo-pattern-divider"></div>
              <p className="text-gray-300 mb-6 text-lg">
                Ready to create your own memories? Visit us for authentic African cuisine and entertainment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary-slim">
                  <a href="/reservations">Book Your Table</a>
                </Button>
                <Button className="btn-ghost-slim">
                  <a href="/contact">Visit Us Today</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
};

export default Gallery;