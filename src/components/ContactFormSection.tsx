import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, User, Calendar, Users } from "lucide-react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', date: '', time: '', guests: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form - Remove email field, add icons */}
          <div className="bg-black/50 rounded-lg p-6 md:p-8 border border-gray-800 reservation-form">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-serif">Send us a Message</h3>
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                <p className="text-green-400 font-semibold text-lg">Thank you! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="form-field-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-with-icon w-full p-4 md:p-5 text-base md:text-lg transition-colors touch-manipulation"
                    placeholder="👤 Your name"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="form-field-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-with-icon w-full p-4 md:p-5 text-base md:text-lg transition-colors touch-manipulation"
                    placeholder="📞 Your phone number"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Calendar className="form-field-icon" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-input-with-icon w-full p-4 md:p-5 text-base md:text-lg transition-colors touch-manipulation"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="form-field-icon" />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="form-input-with-icon w-full p-4 md:p-5 text-base md:text-lg transition-colors touch-manipulation"
                    />
                  </div>
                  <div className="relative">
                    <Users className="form-field-icon" />
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="form-input-with-icon w-full p-4 md:p-5 text-base md:text-lg transition-colors touch-manipulation"
                      placeholder="🗓️ 2"
                      min="1"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 md:p-5 bg-gray-800 rounded-lg text-white h-32 md:h-40 text-base md:text-lg border border-gray-700 focus:border-kamalo-green transition-colors resize-none touch-manipulation"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-kamalo-green hover:bg-kamalo-orange text-white py-4 md:py-5 hover:scale-105 hover:shadow-lg transition duration-300 text-base md:text-lg font-semibold touch-manipulation rounded-full"
                >
                  Get in Touch
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info and Map */}
          <div className="space-y-6">
            <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2 font-serif">
                <MapPin className="w-6 h-6 text-kamalo-green" />
                Visit Us
              </h3>
              <div className="space-y-4 text-gray-300 text-base md:text-lg">
                <div className="space-y-2">
                  <p className="font-semibold text-white">📍 Address:</p>
                  <p>90 Voortrekker Road, Goodwood, Cape Town</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-kamalo-green" />
                  <a href="tel:+27736911461" className="hover:text-kamalo-green transition-colors touch-manipulation font-semibold">
                    +27 73 691 1461
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-kamalo-green" />
                  <span className="font-semibold">Open 7 days: 11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="h-64 md:h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1055656329913!2d18.546104776047663!3d-33.912682521333636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0726596af5%3A0x651107464f9fc317!2sKamalo%20City!5e0!3m2!1sen!2sza!4v1748888283939!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kamalo City Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;