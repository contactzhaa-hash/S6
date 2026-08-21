'use client';

import React from 'react';

interface NavbarProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  onOpenDrawer: () => void;
}

export default function Navbar({ lang, setLang, onOpenDrawer }: NavbarProps) {
  const isAr = lang === 'ar';

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#050709]/80 backdrop-blur-2xl border-b border-[#D6B278]/10 px-6 md:px-16 py-5 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-3">
        <a href="#" className="text-base tracking-[0.35em] font-serif uppercase text-[#F0D4A3] font-medium hover:opacity-80 transition">
          {isAr ? 'إس ٦ ميديا' : 'S6 MEDIA'}
        </a>
        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#D6B278]" />
        <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase text-[#94A3B8] font-mono">
          {isAr ? 'دار الفن البصري والتسويق' : 'Visual Craft House'}
        </span>
      </div>

      <div className="flex items-center gap-8">
        <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase text-[#94A3B8]">
          <a href="#work" className="hover:text-[#F0D4A3] transition-colors">{isAr ? 'الأرشيف' : 'Archives'}</a>
          <a href="#capabilities" className="hover:text-[#F0D4A3] transition-colors">{isAr ? 'الخدمات' : 'Capabilities'}</a>
          <a href="#ethos" className="hover:text-[#F0D4A3] transition-colors">{isAr ? 'الاستوديو' : 'Studio'}</a>
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-[11px] uppercase tracking-widest px-3.5 py-1.5 border border-[#D6B278]/25 text-[#F0D4A3] hover:border-[#D6B278] hover:bg-[#D6B278]/10 rounded transition-all duration-200"
          >
            {isAr ? 'English' : 'العربية'}
          </button>
          <button
            onClick={onOpenDrawer}
            className="text-[11px] uppercase tracking-[0.2em] px-5 py-2 bg-[#D6B278] text-[#050709] font-semibold hover:bg-[#F0D4A3] transition-all duration-300 rounded shadow-[0_0_20px_rgba(214,178,120,0.2)]"
          >
            {isAr ? 'طلب استشارة' : 'Commission'}
          </button>
        </div>
      </div>
    </header>
  );
}