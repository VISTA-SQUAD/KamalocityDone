import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  useEffect(() => {
    document.title = "About Us - Kamalo City | Our Story & Mission";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Kamalo City founders Pitchou Ntumba and his wife, our mission to bring authentic African culture and cuisine to Cape Town.');
    }

    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = "https://live.staticflickr.com/65535/54575640309_71435470de_c.jpg";
    }
  }, []);

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main className="pt-20 pb-16 px-4 tribal-pattern">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif">
              The Kamalo City Journey — <span className="text-kamalo-red">From Rebirth to Renown</span>
            </h1>
            <div className="congo-pattern-divider"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamalo City was rebuilt from ruins in 2023. Today, we are Cape Town's vibrant meeting point for African heritage, cuisine, and connection. From mouthwatering kapenta to rhythm-filled nights, Kamalo City is a true cultural revival.
            </p>
          </div>
          
          {/* Our Story Section - Collapsed with toggle */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6 font-serif">Our Story</h2>
              <div className="congo-pattern-divider"></div>
              
              {/* Preview - 3-4 lines */}
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Kamalo City was born from the rubble of an abandoned space and reborn in 2023 with rhythm, flavor, and purpose. Today, we are a hub for African celebration, cuisine, and connection in the heart of Cape Town.
                </p>
                
                {/* Expandable content */}
                {showFullStory && (
                  <div className="space-y-6 mt-6">
                    <p>
                      Founded by Pitchou Ntumba and his wife, Kamalo City grew from a dream into one of Cape Town's hidden gems. Their combined vision and expertise have transformed this space into a vibrant celebration of African cuisine and culture.
                    </p>
                    <p>
                      What started as an abandoned building has become a thriving restaurant and venue — powered by love for food, music, and community. We serve as a cultural bridge, bringing authentic African experiences to locals and visitors alike.
                    </p>
                  </div>
                )}
                
                <button
                  onClick={() => setShowFullStory(!showFullStory)}
                  className="text-kamalo-gold hover:text-kamalo-red transition-colors font-semibold underline"
                >
                  {showFullStory ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </section>

          {/* Meet Kamalo City Video Section */}
          <section className="mb-20 tribal-pattern bg-black/30 rounded-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6 font-serif">
                Meet Kamalo City
              </h2>
              <div className="congo-pattern-divider"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Watch how Kamalo City came to life through food, music, and community.
              </p>
            </div>
            
            {/* Video Container */}
            <div className="max-w-4xl mx-auto">
              <div className="video-responsive">
                <div className="absolute inset-0 bg-black/50 rounded-lg border border-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-kamalo-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                    <p className="text-gray-300">Video content showcasing our journey and vibrant atmosphere</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section - Updated events */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Our <span className="text-kamalo-red">Journey</span>
              </h2>
              <div className="congo-pattern-divider"></div>
            </div>

            {/* Desktop Timeline - Horizontal */}
            <div className="hidden lg:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-kamalo-red to-kamalo-gold"></div>
              
              <div className="space-y-16">
                {[
                  {
                    year: "2023",
                    title: "Kamalo City opens, transforming rubble into rhythm",
                    description: "From abandoned space to cultural hotspot — Kamalo City opened its doors with a vision of authentic African dining.",
                    isLeft: true
                  },
                  {
                    year: "2024", 
                    title: "Event services & entertainment launched",
                    description: "Expanded with weekend entertainment, private event hosting, and additional lifestyle services including barbershop and hookah.",
                    isLeft: false
                  },
                  {
                    year: "2025",
                    title: "Recognized as one of Cape Town's top African food destinations", 
                    description: "Established as Cape Town's premier African dining and entertainment venue, beloved by locals and visitors alike.",
                    isLeft: true
                  }
                ].map((event, index) => (
                  <div key={index} className={`relative flex items-center ${event.isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${event.isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="timeline-item">
                        <div className="timeline-year">{event.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Center dot with tribal texture */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-kamalo-red rounded-full border-4 border-kamalo-dark z-10"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline - Vertical */}
            <div className="lg:hidden space-y-8">
              {[
                {
                  year: "2023",
                  title: "Kamalo City opens, transforming rubble into rhythm",
                  description: "From abandoned space to cultural hotspot — Kamalo City opened its doors with a vision of authentic African dining."
                },
                {
                  year: "2024",
                  title: "Event services & entertainment launched", 
                  description: "Expanded with weekend entertainment, private event hosting, and additional lifestyle services including barbershop and hookah."
                },
                {
                  year: "2025",
                  title: "Recognized as one of Cape Town's top African food destinations",
                  description: "Established as Cape Town's premier African dining and entertainment venue, beloved by locals and visitors alike."
                }
              ].map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{event.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Updated Founder Quote */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-8 border border-kamalo-red/30 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic font-serif">
                "I remember in 2023 this place was just abandoned, so I just remodeled it and turned it into what it is today."
              </blockquote>
              <cite className="text-kamalo-gold font-semibold text-lg">— Pitchou Ntumba, Founder</cite>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              Come Join the <span className="text-kamalo-red">Experience</span>
            </h2>
            <div className="congo-pattern-divider"></div>
            <p className="text-gray-300 mb-6 text-lg">
              Ready to be part of the Kamalo City experience? Visit us and taste the passion in every dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations" className="btn-primary-slim">
                Reserve a Table
              </Link>
              <Link to="/contact" className="btn-ghost-slim">
                Visit Us Today
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;