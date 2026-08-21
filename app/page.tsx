'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandMarquee from '../components/BrandMarquee';
import ServiceMatrix from '../components/ServiceMatrix';
import FolioShowcase from '../components/FolioShowcase';
import CommissionDrawer from '../components/CommissionDrawer';
import Footer from '../components/Footer';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const isRtl = lang === 'ar';

  return (
    <main
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#070503] text-[#F4ECE1] selection:bg-[#C97B4A] selection:text-black overflow-x-hidden font-sans"
    >
      {/* Ambient Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[radial-gradient(ellipse_at_top,_rgba(201,123,74,0.13),transparent_70%)] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenDrawer={() => setDrawerOpen(true)} 
      />

      {/* Hero Section */}
      <Hero 
        lang={lang} 
        onOpenDrawer={() => setDrawerOpen(true)} 
      />

      {/* Brand Proof Strip */}
      <BrandMarquee 
        lang={lang} 
      />

      {/* Interactive Folio Showcase */}
      <FolioShowcase 
        lang={lang} 
        onSelectWork={() => setDrawerOpen(true)} 
      />

      {/* 4 Pillars: Photography, Print, Video, Strategy */}
      <ServiceMatrix 
        lang={lang} 
      />

      {/* Commission Slide-out Drawer */}
      <CommissionDrawer 
        lang={lang} 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />

      {/* Editorial Footer */}
      <Footer 
        lang={lang} 
      />
    </main>
  );
}