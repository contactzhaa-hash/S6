'use client';

import { useState } from 'react';
import LookbookGrid from '@/components/LookbookGrid';
import CommissionDrawer from '@/components/CommissionDrawer';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0D0907] text-[#F5EFEB]">
      {/* Floating Boutique Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#0D0907]/80 backdrop-blur-md border-b border-[#C97B4A]/10 px-8 py-5 flex justify-between items-center">
        <span className="font-serif tracking-[0.3em] text-sm text-[#E8C194]">S6 MEDIA</span>
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-[11px] uppercase tracking-[0.25em] px-5 py-2 border border-[#C97B4A] text-[#E8C194] hover:bg-[#C97B4A] hover:text-[#0D0907] transition-all"
        >
          Book Commission
        </button>
      </header>

      {/* Editorial Hero */}
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20">
        <span className="text-[11px] tracking-[0.4em] text-[#C97B4A] uppercase mb-4">Commercial Visual House</span>
        <h1 className="font-serif text-4xl md:text-7xl max-w-4xl leading-[1.15] text-[#F5EFEB] mb-6">
          Visual Precision for Modern Brands
        </h1>
        <p className="text-xs md:text-sm text-[#9E8975] max-w-lg tracking-wide mb-10 leading-relaxed">
          Spatial discipline, color-calibrated assets, and private client commissions rooted in Buraidah.
        </p>
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-xs uppercase tracking-[0.25em] px-8 py-4 bg-[#18110B] border border-[#C97B4A]/40 text-[#E8C194] hover:border-[#C97B4A] hover:shadow-[0_0_25px_rgba(201,123,74,0.2)] transition-all"
        >
          Explore Commission Protocol
        </button>
      </section>

      {/* Boutique Lookbook Grid */}
      <LookbookGrid onSelect={() => setDrawerOpen(true)} />

      {/* Slide-over Drawer */}
      <CommissionDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </main>
  );
}