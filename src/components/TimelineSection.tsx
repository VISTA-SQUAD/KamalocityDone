import { useEffect, useRef, useState } from "react";
import { Utensils, Home, Music, Sparkles } from "lucide-react";

const TimelineSection = () => {
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

  const timelineEvents = [
    {
      icon: Home,
      title: "Rebuilt and Opened",
      description: "From abandoned space to cultural hotspot — Kamalo City opened its doors with a vision of authentic African dining.",
      year: "2023"
    },
    {
      icon: Music,
      title: "Launched Events and Live Entertainment",
      description: "Expanded with weekend entertainment, private event hosting, and additional lifestyle services including barbershop and hookah.",
      year: "2024"
    },
    {
      icon: Sparkles,
      title: "Became Top Destination",
      description: "Established as Cape Town's premier African dining and entertainment venue, beloved by locals and visitors alike.",
      year: "2025"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Our <span className="text-kamalo-red">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From vision to reality, discover the milestones that shaped Kamalo City.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-kamalo-red to-kamalo-gold"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                >
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="timeline-item">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <IconComponent className="w-6 h-6 text-kamalo-red" />
                        <span className="text-kamalo-gold font-bold text-lg timeline-year">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-kamalo-red rounded-full border-4 border-kamalo-dark z-10"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              
              return (
                <div 
                  key={index} 
                  className={`timeline-item transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-6 h-6 text-kamalo-red" />
                    <span className="text-kamalo-gold font-bold text-lg timeline-year">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;