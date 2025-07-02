import { Music, Users, Utensils, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const ServicesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Music nights, DJs, and cultural showcases every Friday and Saturday",
      link: "/services",
      image: "https://live.staticflickr.com/65535/54623833912_78cffedfe2_c.jpg",
      serviceIcon: "🎉"
    },
    {
      icon: Users,
      title: "Private Bookings",
      description: "Full venue hire for birthdays, corporate events, and celebrations up to 80 guests",
      link: "/services",
      image: "https://live.staticflickr.com/65535/54624923824_0590af3293_c.jpg",
      serviceIcon: "🎲"
    },
    {
      icon: Utensils,
      title: "Pre-Orders & Catering",
      description: "Order ahead for pickup or enjoy our full dining experience with catering options",
      link: "/services",
      image: "https://live.staticflickr.com/65535/54575452741_3649c67820_c.jpg",
      serviceIcon: "📦"
    },
    {
      icon: Sparkles,
      title: "Lifestyle Services",
      description: "Premium hookah lounge, professional barbershop, and curated perfume collection",
      link: "/services",
      image: "https://live.staticflickr.com/65535/54575640309_71435470de_c.jpg",
      serviceIcon: "✨"
    }
  ];

  return (
    <section ref={sectionRef} className="section-spacing bg-gradient-to-b from-kamalo-dark to-black tribal-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              Explore Our <span className="text-kamalo-red">African-Inspired Offerings</span>
            </h2>
            <div className="tribal-divider max-w-md mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the complete Kamalo City experience with entertainment, events, and lifestyle services
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 equal-height-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="service-card bg-black/50 text-white border-gray-800 hover:border-kamalo-red min-h-[420px]">
                  <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                    <img 
                      src={service.image}
                      alt={`Kamalo City - ${service.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                    <div className="absolute top-4 left-4 text-3xl service-icon">
                      {service.serviceIcon}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <h3 className="service-title text-white">{service.title}</h3>
                    <p className="service-description text-gray-300 flex-grow">{service.description}</p>
                    <Link
                      to={service.link}
                      className="inline-block bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg mt-auto text-center min-h-[44px] flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-ghost"
            >
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesPreview;