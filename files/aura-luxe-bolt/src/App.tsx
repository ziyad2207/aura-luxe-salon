import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { CartProvider } from '@/contexts/CartContext';
import { useLenis } from '@/hooks/useLenis';

import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';

import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Experts from '@/sections/Experts';
import Packages from '@/sections/Packages';
import Gallery from '@/sections/Gallery';
import VideoGallery from '@/sections/VideoGallery';
import Reviews from '@/sections/Reviews';
import AiRecommendation from '@/sections/AiRecommendation';
import Booking from '@/sections/Booking';
import InstagramFeed from '@/sections/InstagramFeed';
import Products from '@/sections/Products';
import GiftCards from '@/sections/GiftCards';
import Membership from '@/sections/Membership';
import Faq from '@/sections/Faq';
import Location from '@/sections/Location';
import Contact from '@/sections/Contact';

function ScrollExperience() {
  useLenis();
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <CartProvider>
          <ScrollExperience />
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Experts />
            <Packages />
            <Gallery />
            <VideoGallery />
            <Reviews />
            <AiRecommendation />
            <Booking />
            <InstagramFeed />
            <Products />
            <GiftCards />
            <Membership />
            <Faq />
            <Location />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </CartProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
