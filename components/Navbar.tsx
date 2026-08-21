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
    <header className="fixed top-0 inset-x-0 z-40 bg-[#070503]/85 backdrop-blur-xl border-b border-[#C97B4A]/15 px-6 md:px-16 py-5 flex justify-between items-center transition-all">
      <div className="flex items-center gap-3">
        <a href="#" className="text-base tracking-[0.35em] font-serif uppercase text-[#E0B27E] font-medium">
          {isAr ? 'إس ٦ ميديا' : 'S6 MEDIA'}
        </a>
        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C97B4A]" />
        <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase text-[#A6907A] font-mono">
          {isAr ? 'دار الفن البصري والتسويق' : 'Visual Brand House'}
        </span>
      </div>

      <div className="flex items-center gap-8">
        <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase text-[#A6907A]">
          <a href="#work" className="hover:text-[#E0B27E] transition-colors">{isAr ? 'الأعمال' : 'Folio'}</a>
          <a href="#capabilities" className="hover:text-[#E0B27E] transition-colors">{isAr ? 'الخدمات' : 'Capabilities'}</a>
          <a href="#ethos" className="hover:text-[#E0B27E] transition-colors">{isAr ? 'عن الاستوديو' : 'Ethos'}</a>
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-[11px] uppercase tracking-widest px-3.5 py-1.5 border border-[#C97B4A]/30 text-[#E0B27E] hover:border-[#C97B4A] hover:bg-[#C97B4A]/10 transition-all rounded-sm"
          >
            {isAr ? 'English' : 'العربية'}
          </button>
          <button
            onClick={onOpenDrawer}
            className="text-[11px] uppercase tracking-[0.2em] px-5 py-2 bg-[#C97B4A] text-[#070503] font-semibold hover:bg-[#E0B27E] transition-all rounded-sm shadow-[0_0_25px_rgba(201,123,74,0.25)]"
          >
            {isAr ? 'طلب استشارة' : 'Commission'}
          </button>
        </div>
      </div>
    </header>
  );
}