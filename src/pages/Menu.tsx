import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Lightbox from "@/components/Lightbox";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("main");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    document.title = "Kamalo City | Authentic African Cuisine in Cape Town";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kamalo City is a top African restaurant offering unforgettable cuisine, hookah, events, and a cultural experience in Cape Town.');
    }

    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = "https://live.staticflickr.com/65535/54575640309_71435470de_c.jpg";
    }
  }, []);

  // Complete menu items with authentic Flickr images
  const menuItems = [
    // Main Dishes
    {
      id: 1,
      category: "main",
      name: "Grilled Thomson",
      description: "Well-seasoned grilled fish served with pap or rice and a side of traditional vegetables.",
      image: "https://live.staticflickr.com/65535/54597433763_939cd52ca4_c.jpg",
      alt: "Grilled Thomson – Main Dish at Kamalo City Restaurant",
      tag: "⭐ Customer Favorite"
    },
    {
      id: 2,
      category: "main",
      name: "Fried Thomson",
      description: "Crispy fried Thomson fish with pap or rice and traditional vegetables.",
      image: "https://live.staticflickr.com/65535/54597212616_2955cf45d8_c.jpg",
      alt: "Fried Thomson – Main Dish at Kamalo City Restaurant"
    },
    {
      id: 3,
      category: "main",
      name: "Beef Stew",
      description: "Classic African-style beef in a rich tomato and brinjal sauce.",
      image: "https://live.staticflickr.com/65535/54628479323_833151957d.jpg",
      alt: "Beef Stew – Main Dish at Kamalo City Restaurant",
      tag: "🔥 Chef's Pick"
    },
    {
      id: 4,
      category: "main",
      name: "Grilled Pork Chops",
      description: "Succulent pork grilled to perfection and paired with your choice of side.",
      image: "https://live.staticflickr.com/65535/54597531350_4a42d68b4b_c.jpg",
      alt: "Grilled Pork Chops – Main Dish at Kamalo City Restaurant"
    },
    {
      id: 5,
      category: "main",
      name: "Grilled Chicken Quarter Leg",
      description: "Juicy quarter chicken grilled and served with pap or rice.",
      image: "https://live.staticflickr.com/65535/54628324771_256ca324ca.jpg",
      alt: "Grilled Chicken Quarter Leg – Main Dish at Kamalo City Restaurant",
      tag: "🔥 Most Popular"
    },

    // Sides
    {
      id: 6,
      category: "sides",
      name: "Portion Pap",
      description: "Traditional pap served in a hearty portion, perfect with any dish.",
      image: "https://live.staticflickr.com/65535/54575491336_19b4c1f9b5_c.jpg",
      alt: "Portion Pap – Traditional Side at Kamalo City Restaurant"
    },
    {
      id: 7,
      category: "sides",
      name: "Shikwanga (Sour Pap)",
      description: "Fermented cassava for an authentic traditional taste experience.",
      image: "https://live.staticflickr.com/65535/54575695344_661a80be0d_c.jpg",
      alt: "Shikwanga Sour Pap – Traditional Side at Kamalo City Restaurant"
    },
    {
      id: 8,
      category: "sides",
      name: "Portion Rice",
      description: "Soft, fluffy rice that's perfect with any of our main dishes.",
      image: "https://live.staticflickr.com/65535/54628560355_03b225aeae.jpg",
      alt: "Portion Rice – Traditional Side at Kamalo City Restaurant"
    },

    // Vegetable Sides
    {
      id: 9,
      category: "vegetable-sides",
      name: "Cassava Leaves (Pondu)",
      description: "Stewed cassava leaves with traditional spices and seasonings.",
      image: "https://live.staticflickr.com/65535/54628646690_27b04bc894.jpg",
      alt: "Cassava Leaves – Traditional African Vegetable Side at Kamalo City"
    },
    {
      id: 10,
      category: "vegetable-sides",
      name: "Sweet Potato Leaves (Matembele)",
      description: "Tender sweet potato leaves sautéed in traditional African style.",
      image: "https://live.staticflickr.com/65535/54628502859_8d0d46621f.jpg",
      alt: "Sweet Potato Leaves – Traditional African Vegetable Side at Kamalo City"
    },
    {
      id: 11,
      category: "vegetable-sides",
      name: "Ngayi Ngayi (Roselle Leaves)",
      description: "Slightly sour greens packed with nutrients and bold flavor.",
      image: "https://live.staticflickr.com/65535/54597520795_d4a6f5d152_c.jpg",
      alt: "Ngayi Ngayi Roselle Leaves – Traditional African Vegetable Side at Kamalo City"
    },
    {
      id: 12,
      category: "vegetable-sides",
      name: "Ndunda (Wild Spinach)",
      description: "Bold-flavoured wild spinach, steamed to perfection.",
      image: "https://live.staticflickr.com/65535/54628573995_96ef7409f1.jpg",
      alt: "Ndunda Wild Spinach – Traditional African Vegetable Side at Kamalo City"
    },
    {
      id: 13,
      category: "vegetable-sides",
      name: "Repu",
      description: "Earthy green vegetable — a local favourite with unique taste.",
      image: "https://live.staticflickr.com/65535/54575640309_71435470de_c.jpg",
      alt: "Repu – Traditional African Vegetable Side at Kamalo City"
    },
    {
      id: 14,
      category: "vegetable-sides",
      name: "Green Spinach Sauce",
      description: "Smooth, rich spinach-based traditional sauce.",
      image: "https://live.staticflickr.com/65535/54574632582_07c0a392a4_c.jpg",
      alt: "Green Spinach Sauce – Traditional African Vegetable Side at Kamalo City"
    }
  ];

  // Daily specials data with updated names
  const dailySpecials = [
    // Monday
    {
      id: 15,
      category: "daily-specials",
      name: "Fried Kapenta (Matemba)",
      description: "Traditional small fish cooked in light tomato sauce, served with vegetables.",
      day: "Monday",
      image: "https://live.staticflickr.com/65535/54628466124_6feb772231.jpg",
      alt: "Kapenta Stew – Main Dish at Kamalo City Restaurant",
      tag: "✅ Chef's Recommendation"
    },
    {
      id: 16,
      category: "daily-specials",
      name: "Cooked Ngolo",
      description: "Catfish cooked with light green pepper sauce, served with vegetables.",
      day: "Monday",
      image: "https://live.staticflickr.com/65535/54575880180_28fbf65f2c_c.jpg",
      alt: "Cooked Ngolo Catfish – Monday Special at Kamalo City Restaurant"
    },

    // Tuesday
    {
      id: 17,
      category: "daily-specials",
      name: "Cooked Pork Trotters (Makoso)",
      description: "Traditional pork trotters cooked to perfection, served with vegetables.",
      day: "Tuesday",
      image: "https://live.staticflickr.com/65535/54597413089_88b023dfa0_c.jpg",
      alt: "Pork Trotters – Tuesday Special at Kamalo City Restaurant"
    },
    {
      id: 18,
      category: "daily-specials",
      name: "Fried Mabundu",
      description: "Traditional preparation of organ meat with authentic seasonings.",
      day: "Tuesday",
      image: "https://live.staticflickr.com/65535/54597434488_9510779afe_c.jpg",
      alt: "Fried Mabundu – Tuesday Special at Kamalo City Restaurant"
    },
    {
      id: 19,
      category: "daily-specials",
      name: "Cooked Beans (Madesu)",
      description: "Traditional Congolese beans cooked in rich, flavorful sauce.",
      day: "Tuesday",
      image: "https://live.staticflickr.com/65535/54597514875_cea4fd204a_c.jpg",
      alt: "Cooked Beans Madesu – Tuesday Special at Kamalo City Restaurant"
    },

    // Wednesday
    {
      id: 20,
      category: "daily-specials",
      name: "Fried Makayabu",
      description: "Fried salt fish with green pepper onion relish.",
      day: "Wednesday",
      image: "https://live.staticflickr.com/65535/54597207941_a8b95026e0_c.jpg",
      alt: "Fried Makayabu – Wednesday Special at Kamalo City Restaurant"
    },
    {
      id: 21,
      category: "daily-specials",
      name: "Fried Tilapia",
      description: "Lightly seasoned tilapia, crispy fried to golden perfection.",
      day: "Wednesday",
      image: "https://live.staticflickr.com/65535/54597519455_cd8dd45ce7_c.jpg",
      alt: "Fried Tilapia – Wednesday Special at Kamalo City Restaurant",
      tag: "⭐ Customer Favorite"
    },
    {
      id: 22,
      category: "daily-specials",
      name: "Fumbwa with Dry Fish",
      description: "Wild spinach in peanut sauce with dry fish, a traditional favorite.",
      day: "Wednesday",
      image: "https://live.staticflickr.com/65535/54627387222_2821f1f2a2.jpg",
      alt: "Fumbwa with Dry Fish – Wednesday Special at Kamalo City Restaurant"
    },

    // Thursday
    {
      id: 23,
      category: "daily-specials",
      name: "Light Fried Pork Smock Ribs",
      description: "Lightly fried smoky pork ribs, crispy outside and tender inside.",
      day: "Thursday",
      image: "https://live.staticflickr.com/65535/54628266556_0fbdc28716.jpg",
      alt: "Pork Smock Ribs – Thursday Special at Kamalo City Restaurant"
    },
    {
      id: 24,
      category: "daily-specials",
      name: "Mupanda Worms",
      description: "Traditional protein-rich delicacy prepared with care.",
      day: "Thursday",
      image: "https://live.staticflickr.com/65535/54597424033_290a663f5e_c.jpg",
      alt: "Mupanda Worms – Thursday Special at Kamalo City Restaurant"
    },
    {
      id: 25,
      category: "daily-specials",
      name: "Nsaka Madesu",
      description: "Beans and cassava leaves, rich in flavor and tradition.",
      day: "Thursday",
      image: "https://live.staticflickr.com/65535/54597519365_372da75c04_c.jpg",
      alt: "Nsaka Madesu – Thursday Special at Kamalo City Restaurant"
    },

    // Friday
    {
      id: 26,
      category: "daily-specials",
      name: "Cooked Mukebuka Sauce",
      description: "Mukebuka fish in a light tomato sauce with traditional spices.",
      day: "Friday",
      image: "https://live.staticflickr.com/65535/54597406624_68bd42a048_c.jpg",
      alt: "Mukebuka Sauce – Friday Special at Kamalo City Restaurant"
    },
    {
      id: 27,
      category: "daily-specials",
      name: "Cooked Beef Trips (Mabumu)",
      description: "Richly spiced beef tripe stew with traditional flavors.",
      day: "Friday",
      image: "https://live.staticflickr.com/65535/54597204611_0dd8a2055a_c.jpg",
      alt: "Beef Trips Mabumu – Friday Special at Kamalo City Restaurant"
    },

    // Saturday
    {
      id: 28,
      category: "daily-specials",
      name: "Egusi Soup",
      description: "Ground melon seed soup cooked with beef, a weekend favorite.",
      day: "Saturday",
      image: "https://live.staticflickr.com/65535/54597416804_c3e1b0acc7_c.jpg",
      alt: "Egusi Soup – Saturday Special at Kamalo City Restaurant",
      tag: "🔥 Most Popular"
    },

    // Sunday
    {
      id: 30,
      category: "daily-specials",
      name: "Liboke Ya Ngolo (Cat Fish)",
      description: "Steamed catfish wrapped in banana leaves with traditional spices.",
      day: "Sunday",
      image: "https://live.staticflickr.com/65535/54575880180_28fbf65f2c_c.jpg",
      alt: "Liboke Ya Ngolo – Sunday Special at Kamalo City Restaurant"
    },
    {
      id: 31,
      category: "daily-specials",
      name: "Mutu Ya Ntaba (Goat Head in Hot Sauce)",
      description: "Spicy goat head stew served the traditional way.",
      day: "Sunday",
      image: "https://live.staticflickr.com/65535/54597519075_6f375072a1_c.jpg",
      alt: "Mutu Ya Ntaba – Sunday Special at Kamalo City Restaurant",
      tag: "⭐ Customer Favorite"
    }
  ];

  // Filter items based on active filter
  const filteredItems = activeFilter === "daily-specials" 
    ? dailySpecials 
    : menuItems.filter(item => item.category === activeFilter);

  const lightboxItems = filteredItems.map(item => ({
    type: 'image' as const,
    src: item.image,
    alt: item.alt,
    title: item.name
  }));

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "main": return "Main Dishes";
      case "vegetable-sides": return "Traditional African Vegetable Sides";
      case "sides": return "Sides";
      case "daily-specials": return "African Daily Specials";
      default: return category;
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3EB' }}>
      <Navbar />
      <main className="pt-24 px-4 pb-12" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="max-w-7xl mx-auto">
          {/* Pricing Info Block - Top of Page */}
          <div className="bg-white rounded-lg p-6 text-center mb-12 max-w-4xl mx-auto border-2 border-kamalo-gold shadow-lg">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#4B1E1E' }}>Menu Pricing Information</h2>
            <div className="congo-pattern-divider"></div>
            <p className="text-lg font-semibold mb-2" style={{ color: '#2C2C2C' }}>
              <strong>All Daily Specials are R80 with pap or R90 with rice. All Vegetable Sides are R40.</strong>
            </p>
            <p className="text-sm text-gray-600 mt-4">
              *Note: In-restaurant prices differ from Uber Eats pricing.
            </p>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif" style={{ color: '#4B1E1E' }}>
              Explore Our <span className="text-kamalo-red">Menu</span>
            </h1>
            <div className="congo-pattern-divider"></div>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#2C2C2C' }}>
              Authentic African cuisine crafted with traditional recipes and bold flavors
            </p>
          </div>

          {/* Filter Buttons - Fixed highlight persistence */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter("main")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold text-base ${
                activeFilter === "main" 
                  ? "bg-kamalo-red text-white shadow-lg transform scale-105" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
              }`}
            >
              Main Dishes
            </Button>
            <Button
              onClick={() => setActiveFilter("sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold text-base ${
                activeFilter === "sides" 
                  ? "bg-kamalo-red text-white shadow-lg transform scale-105" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
              }`}
            >
              Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("vegetable-sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold text-base ${
                activeFilter === "vegetable-sides" 
                  ? "bg-kamalo-red text-white shadow-lg transform scale-105" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
              }`}
            >
              Vegetable Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("daily-specials")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold text-base ${
                activeFilter === "daily-specials" 
                  ? "bg-kamalo-red text-white shadow-lg transform scale-105" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
              }`}
            >
              Daily Specials
            </Button>
          </div>

          {/* Category Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: '#4B1E1E' }}>
              {getCategoryDisplayName(activeFilter)}
            </h2>
            <div className="congo-pattern-divider"></div>
            
            {/* Daily Specials specific header */}
            {activeFilter === "daily-specials" && (
              <div className="mb-8">
                <p className="text-lg mb-4" style={{ color: '#2C2C2C' }}>
                  <em>(Note: Uber Eats prices are higher than in-restaurant prices.)</em>
                </p>
                <div className="bg-white rounded-lg p-4 text-center mb-8 max-w-2xl mx-auto border-2 border-kamalo-gold">
                  <p className="font-bold text-lg" style={{ color: '#4B1E1E' }}>All Daily Specials are R80 with pap or R90 with rice.</p>
                </div>
              </div>
            )}
          </div>

          {/* Menu Items - Grid Layout with proper spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" style={{ gap: '32px' }}>
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
                style={{ 
                  padding: '24px',
                  border: '1px solid #E5E7EB',
                  minHeight: '320px'
                }}
              >
                {/* Day label for daily specials */}
                {activeFilter === "daily-specials" && 'day' in item && (
                  <div 
                    className="absolute top-3 right-3 z-10"
                    style={{
                      backgroundColor: '#E36414',
                      color: 'white',
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontWeight: '600'
                    }}
                  >
                    {item.day}
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover cursor-pointer hover:scale-110 transition duration-500"
                    style={{ 
                      objectFit: 'cover',
                      maxWidth: '100%',
                      height: '192px'
                    }}
                    loading="lazy"
                    onClick={() => openLightbox(filteredItems.indexOf(item))}
                  />
                </div>
                
                <div style={{ padding: '0 8px' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 
                      className="text-xl font-bold leading-tight"
                      style={{ 
                        color: '#4B1E1E',
                        fontSize: '1.25rem',
                        lineHeight: '1.4'
                      }}
                    >
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold border"
                        style={{
                          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                          color: '#2C2C2C',
                          borderColor: '#E6C200',
                          boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p 
                    className="leading-relaxed"
                    style={{ 
                      color: '#374151',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section - SIMPLIFIED BUTTON */}
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 border-2 border-gray-300 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif" style={{ color: '#4B1E1E' }}>
                Ready to <span className="text-kamalo-red">Try It for Yourself</span>?
              </h2>
              <div className="congo-pattern-divider"></div>
              <p className="mb-6 text-lg" style={{ color: '#374151' }}>
                Experience authentic African cuisine and traditional flavors at Kamalo City in Cape Town.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <Link 
                  to="/reservations" 
                  className="btn-primary-slim px-6 py-3 text-base rounded-full text-center"
                >
                  Book a Table
                </Link>
                <a 
                  href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-uber-eats-slim px-6 py-3 text-base rounded-full"
                >
                  Order on Uber Eats
                </a>
                <a 
                  href="https://wa.me/+27736911461" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ghost-slim px-6 py-3 text-base rounded-full"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 italic text-sm">
              *Note: In-restaurant prices differ from Uber Eats pricing.
            </p>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />

      <Footer />
    </div>
  );
};

export default Menu;