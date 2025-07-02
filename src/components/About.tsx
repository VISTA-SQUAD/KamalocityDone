import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Kamalo City | Our Story & Mission";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Kamalo City founders Pitchou Ntumba and his wife, our mission to bring authentic African culture and cuisine to Cape Town.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main className="pt-20 pb-16 px-4 tribal-pattern">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header with Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-kamalo-gold mb-8 leading-relaxed">
              "Inspired by our ancestors, shared with the world."
            </blockquote>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif">
              A Legacy <span className="text-kamalo-red">Brought to Life</span>
            </h1>
            <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamalo City was born from rubble and rebuilt with purpose. Since 2023, we've grown into a destination for food, music, and community spirit.
            </p>
          </div>
          
          {/* 2-Column Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kamalo City - Restaurant founders and team"
                  className="w-full h-96 md:h-[500px] rounded-lg shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6 font-serif">Meet Our Founders</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Born from the passion to bring ancestral flavors to the heart of Cape Town, Kamalo City merges authentic African food with a modern social experience. We serve as a cultural hub — where people gather, relax, and enjoy life.
                  </p>
                  <p>
                    Kamalo City was founded by Pitchou Ntumba and his wife, who together have created Cape Town's premier African dining and entertainment destination. Their combined vision and expertise in hospitality have transformed this space into a vibrant celebration of African cuisine and culture.
                  </p>
                  <p>
                    Under their leadership, Kamalo City has evolved into more than just a restaurant – it's a cultural hub where people come together to enjoy authentic African cuisine, premium shisha experiences, professional grooming services, and entertainment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section - Simplified */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Our <span className="text-kamalo-red">Journey</span>
              </h2>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
            </div>

            <div className="space-y-8">
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <h3 className="text-xl font-bold text-white mb-2">Rebuilt and Opened</h3>
                <p className="text-gray-300">From abandoned space to cultural hotspot — Kamalo City opened its doors with a vision of authentic African dining.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h3 className="text-xl font-bold text-white mb-2">Launched Events and Live Entertainment</h3>
                <p className="text-gray-300">Expanded with weekend entertainment, private event hosting, and additional lifestyle services including barbershop and hookah.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h3 className="text-xl font-bold text-white mb-2">Became Top Destination</h3>
                <p className="text-gray-300">Established as Cape Town's premier African dining and entertainment venue, beloved by locals and visitors alike.</p>
              </div>
            </div>
          </section>

          {/* Founder Quote */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-8 border border-kamalo-red/30 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic font-serif">
                "From rubble to rhythm: revived in 2023, today Kamalo City beats with flavor, community and soul."
              </blockquote>
              <cite className="text-kamalo-gold font-semibold text-lg">— Pitchou Ntumba, Founder</cite>
            </div>
          </div>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-red mb-2">2+</div>
                <div className="text-gray-300">Years Active</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-2">1000+</div>
                <div className="text-gray-300">Happy Guests</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-red mb-2">7</div>
                <div className="text-gray-300">Days Open</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-2">80</div>
                <div className="text-gray-300">Max Capacity</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              Come Join the <span className="text-kamalo-red">Experience</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Ready to be part of the Kamalo City experience? Visit us and taste the passion in every dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations" className="btn-primary">
                Reserve a Table
              </Link>
              <Link to="/contact" className="btn-ghost">
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