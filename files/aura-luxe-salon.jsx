import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// LUXURY SALON WEBSITE - AURA LUXE SALON
// ============================================

const AuraLuxeSalon = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="text-center"
            >
              <h1 className="text-4xl font-playfair text-gold mb-2">Aura</h1>
              <p className="text-gray-400 text-sm tracking-widest">LUXURY SALON</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor Glow */}
      <motion.div
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 500, damping: 100 }}
        className="fixed w-64 h-64 bg-gold rounded-full filter blur-3xl opacity-5 pointer-events-none z-0"
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Our Team */}
      <OurTeamSection />

      {/* Gallery */}
      <GallerySection />

      {/* Reviews */}
      <ReviewsSection />

      {/* Booking */}
      <BookingSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-playfair text-gold tracking-wider"
        >
          AURA
        </motion.div>

        <div className="hidden md:flex gap-8">
          {['Services', 'About', 'Team', 'Gallery', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#D4AF37' }}
              className="text-gray-300 hover:text-gold transition-colors text-sm font-inter"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold text-black px-6 py-2 rounded-sm font-inter text-sm font-semibold hover:bg-yellow-400 transition-colors"
        >
          Book Now
        </motion.button>
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            animate={{
              y: [0, -300, 0],
              x: [0, Math.random() * 200 - 100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl md:text-7xl font-playfair text-white mb-6 leading-tight">
            Luxury Begins
            <br />
            <span className="text-gold">With You</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl font-inter mb-12 max-w-2xl mx-auto"
        >
          Experience premium beauty services crafted for confidence, elegance, and self-care.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-black px-8 py-4 rounded-sm font-inter font-semibold text-lg hover:bg-yellow-400 transition-all"
          >
            Book Appointment
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-400 text-white px-8 py-4 rounded-sm font-inter font-semibold text-lg hover:border-gold transition-colors"
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden lg:block"
      >
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=900&fit=crop"
            alt="Luxury Salon"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
        </div>
      </motion.div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: 'Hair Styling',
      description: 'Expert cuts and styling',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1605497788044-f48b0fed4ef0?w=500&h=400&fit=crop',
    },
    {
      title: 'Hair Coloring',
      description: 'Premium color treatments',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1559599810-46d1c52494ee?w=500&h=400&fit=crop',
    },
    {
      title: 'Hair Spa',
      description: 'Intensive hair care',
      icon: '🌊',
      image: 'https://images.unsplash.com/photo-1552183612-b30feebc9e64?w=500&h=400&fit=crop',
    },
    {
      title: 'Keratin Treatment',
      description: 'Smooth, silky hair',
      icon: '💎',
      image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500&h=400&fit=crop',
    },
    {
      title: 'Makeup',
      description: 'Professional makeup services',
      icon: '💄',
      image: 'https://images.unsplash.com/photo-1487412992656-e0bf429d917d?w=500&h=400&fit=crop',
    },
    {
      title: 'Bridal Makeup',
      description: 'Your special day',
      icon: '👰',
      image: 'https://images.unsplash.com/photo-1588452199405-c088feeb4e13?w=500&h=400&fit=crop',
    },
    {
      title: 'Facial',
      description: 'Luxurious skincare',
      icon: '🌸',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=400&fit=crop',
    },
    {
      title: 'Spa Therapy',
      description: 'Complete relaxation',
      icon: '🧖',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop',
    },
  ];

  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair text-white mb-4">Our Services</h2>
          <p className="text-gray-400 font-inter text-lg">Curated experiences for your beauty journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold to-gold opacity-0 group-hover:opacity-30 blur transition duration-500" />

      <div className="relative bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-lg p-6 hover:border-gold transition-colors duration-300 h-full overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
            className="text-4xl mb-4"
          >
            {service.icon}
          </motion.div>

          <h3 className="text-xl font-playfair text-white mb-2">{service.title}</h3>
          <p className="text-gray-400 font-inter text-sm">{service.description}</p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            className="mt-4 pt-4 border-t border-gold"
          >
            <button className="text-gold hover:text-yellow-300 font-inter text-sm font-semibold">
              Learn More →
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10K+', label: 'Happy Clients' },
    { number: '50+', label: 'Award Winning' },
    { number: '100%', label: 'Premium Products' },
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-playfair text-white mb-6">Why Choose Aura</h2>
            <p className="text-gray-300 font-inter mb-8">
              We believe that luxury is not just about service—it's about experience. Our team of dedicated professionals
              is committed to making you feel extraordinary.
            </p>

            <ul className="space-y-4">
              {[
                'Expert stylists trained in luxury techniques',
                'Premium, imported hair and beauty products',
                'Personalized consultations for each client',
                'Luxurious, relaxing salon atmosphere',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-gold text-xl">✓</span>
                  <span className="font-inter">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-lg border border-gold/30 rounded-lg p-8 text-center hover:border-gold transition-colors"
              >
                <motion.div
                  className="text-4xl font-playfair text-gold mb-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-400 font-inter text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Our Team Section
const OurTeamSection = () => {
  const team = [
    {
      name: 'Sarah Elena',
      role: 'Lead Stylist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    },
    {
      name: 'Marcus Chen',
      role: 'Color Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    },
    {
      name: 'Victoria Ross',
      role: 'Makeup Artist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    },
    {
      name: 'James Patterson',
      role: 'Spa Therapist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    },
  ];

  return (
    <section id="team" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair text-white mb-4">Our Expert Team</h2>
          <p className="text-gray-400 font-inter">Masters of luxury and beauty</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-center"
    >
      <motion.div
        className="relative mb-6 inline-block"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
      >
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-gold to-gold rounded-full opacity-0 blur"
          animate={isHovered ? { opacity: 0.5 } : { opacity: 0 }}
        />

        <img
          src={member.image}
          alt={member.name}
          className="w-48 h-48 rounded-full object-cover border-2 border-gold/50 hover:border-gold"
        />
      </motion.div>

      <h3 className="text-2xl font-playfair text-white mb-1">{member.name}</h3>
      <p className="text-gold font-inter text-sm mb-4">{member.role}</p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        className="flex gap-4 justify-center"
      >
        {['Instagram', 'LinkedIn'].map((social) => (
          <motion.a
            key={social}
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-gold transition-colors text-sm font-inter"
          >
            {social}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Gallery Section
const GallerySection = () => {
  const images = [
    'https://images.unsplash.com/photo-1552183612-b30feebc9e64?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1605497788044-f48b0fed4ef0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487412992656-e0bf429d917d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559599810-46d1c52494ee?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop',
  ];

  return (
    <section id="gallery" className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair text-white mb-4">Our Gallery</h2>
          <p className="text-gray-400 font-inter">Moments of beauty and transformation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                i % 3 === 1 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Emma Williams',
      text: 'Absolutely transformed my hair! The team is incredibly professional and the atmosphere is pure luxury.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'James Mitchell',
      text: 'Best salon experience I\'ve ever had. The attention to detail is unmatched. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Sophia Laurent',
      text: 'The premium products and expert techniques make all the difference. Worth every penny!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair text-white mb-4">Client Reviews</h2>
          <p className="text-gray-400 font-inter">What our clients say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-lg p-8 hover:border-gold transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold"
                />
                <div>
                  <h4 className="text-white font-playfair">{review.name}</h4>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 font-inter italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Booking Section
const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-playfair text-white mb-4">Book Your Experience</h2>
          <p className="text-gray-400 font-inter">Reserve your appointment with us today</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900/30 backdrop-blur-lg border border-gray-800 rounded-lg p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <label className="block text-white font-inter mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block text-white font-inter mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-white font-inter mb-2">Date</label>
              <input
                type="date"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-white font-inter mb-2">Time</label>
              <input
                type="time"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <label className="block text-white font-inter mb-2">Service</label>
              <select className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors">
                <option>Select a service</option>
                <option>Hair Styling</option>
                <option>Hair Coloring</option>
                <option>Hair Spa</option>
                <option>Keratin Treatment</option>
                <option>Makeup</option>
                <option>Bridal Makeup</option>
                <option>Facial</option>
                <option>Spa Therapy</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <label className="block text-white font-inter mb-2">Message</label>
              <textarea
                placeholder="Tell us about your preferences..."
                rows="4"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gold text-black py-4 rounded-lg font-inter font-semibold text-lg hover:bg-yellow-400 transition-all"
          >
            Confirm Booking
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl font-playfair text-white mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-gold font-inter font-semibold mb-2">Address</h3>
                <p className="text-gray-300 font-inter">123 Luxury Lane, Fashion District</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-gold font-inter font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 font-inter">+1 (555) 123-4567</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-gold font-inter font-semibold mb-2">Email</h3>
                <p className="text-gray-300 font-inter">hello@auraluxe.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-gold font-inter font-semibold mb-4">Hours</h3>
                <p className="text-gray-300 font-inter">Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-300 font-inter">Saturday: 10:00 AM - 6:00 PM</p>
                <p className="text-gray-300 font-inter">Sunday: Closed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4 mt-8"
              >
                {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, color: '#D4AF37' }}
                    className="text-gray-400 hover:text-gold transition-colors font-inter text-sm"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-lg p-8 h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-gray-300 font-inter">Luxury Salon Location Map</p>
              <p className="text-gray-500 font-inter text-sm">Fashion District, City Center</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Section
const FooterSection = () => {
  return (
    <section className="relative py-12 px-6 border-t border-gray-800 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-playfair text-gold mb-2">AURA</h3>
            <p className="text-gray-400 font-inter text-sm">Luxury Salon</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-inter font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 font-inter text-sm">
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-gold transition-colors">Team</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-inter font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-gray-400 font-inter text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-inter font-semibold mb-4">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800/50 border border-gold/30 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gold text-black px-4 py-2 text-sm font-semibold hover:bg-yellow-400"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-500 font-inter text-sm">
            © 2024 Aura Luxe Salon. All rights reserved. | Crafted with luxury.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Export Component
export default AuraLuxeSalon;
