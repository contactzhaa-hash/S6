'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandMarquee from '../components/BrandMarquee';
import FolioShowcase from '../components/FolioShowcase';
import ServiceMatrix from '../components/ServiceMatrix';
import CommissionDrawer from '../components/CommissionDrawer';
import Footer from '../components/Footer';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const isRtl = lang === 'ar';

  return (
    <main
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#050709] text-[#F1F5F9] selection:bg-[#D6B278] selection:text-black overflow-x-hidden font-sans antialiased"
    >
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(214,178,120,0.12),transparent_65%)] blur-3xl animate-pulse" />
      </div>

      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenDrawer={() => setDrawerOpen(true)} 
      />

      <Hero 
        lang={lang} 
        onOpenDrawer={() => setDrawerOpen(true)} 
      />

      <BrandMarquee 
        lang={lang} 
      />

      <FolioShowcase 
        lang={lang} 
        onSelectWork={() => setDrawerOpen(true)} 
      />

      <ServiceMatrix 
        lang={lang} 
      />

      <CommissionDrawer 
        lang={lang} 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />

      <Footer 
        lang={lang} 
      />
    </main>
  );
}
