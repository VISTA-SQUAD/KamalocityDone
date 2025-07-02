import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const IntroStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-gradient-to-b from-kamalo-dark to-black tribal-pattern" style={{ marginTop: '40px' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            The Kamalo City Journey: From <span className="text-kamalo-red">Rebirth to Renown</span>
          </h2>
          <div className="congo-pattern-divider"></div>
          
          {/* Updated About Preview - Always visible with increased height */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`} style={{ minHeight: '300px' }}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8" style={{ fontSize: '16px' }}>
              Since 2023, Kamalo City has been more than just a restaurant — it's a cultural landmark in Cape Town. We serve soul-warming African dishes, host vibrant events, and bring people together through food, music, and tradition.
            </p>
            
            {/* Video Embed Section - Improved layout */}
            <div className="mb-8">
              <div className="relative w-full max-w-3xl mx-auto" style={{ paddingBottom: '56.25%', minHeight: '300px' }}>
                <div className="absolute inset-0 bg-black/50 rounded-lg border border-gray-800 flex items-center justify-center shadow-lg">
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 bg-kamalo-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontSize: '18px' }}>Experience Our Story</h3>
                    <p className="text-gray-300" style={{ fontSize: '16px' }}>Video content showcasing our journey and vibrant atmosphere</p>
                    <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/about">
              <Button className="btn-ghost-slim px-6 py-3 text-base rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroStory;