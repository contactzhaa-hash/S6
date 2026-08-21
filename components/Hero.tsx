'use client';

import React from 'react';

interface HeroProps {
  lang: 'en' | 'ar';
  onOpenDrawer: () => void;
}

export default function Hero({ lang, onOpenDrawer }: HeroProps) {
  const isAr = lang === 'ar';

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160E09] border border-[#C97B4A]/30 mb-8">
        <span className="w-2 h-2 rounded-full bg-[#C97B4A] animate-pulse" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#E0B27E] font-mono">
          {isAr ? 'نستقبل تكليفات العلامات التجارية — ٢٠٢٦' : 'Accepting Brand Commissions — 2026'}
        </span>
      </div>

      <span className="text-xs uppercase tracking-[0.4em] text-[#A6907A] mb-4 font-mono">
        {isAr ? 'تصوير تجاري • إنتاج سينمائي • مطبوعات فاخرة • استراتيجية هوية' : 'Product Photography • Cinematography • Bespoke Print • Brand Strategy'}
      </span>

      <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#F4ECE1] max-w-5xl leading-[1.08] mb-8 font-normal tracking-tight">
        {isAr ? 'هندسة بصرية ترتقي بمكانة العلامات التجارية' : 'Optical Precision for Distinct Modern Brands'}
      </h1>

      <p className="text-xs sm:text-base text-[#A6907A] max-w-2xl leading-relaxed mb-12 font-light tracking-wide">
        {isAr
          ? 'نصمم وننفذ منظومة بصرية متكاملة: من جلسات تصوير المنتجات فائقة الدقة والإنتاج السينمائي، إلى هندسة المطبوعات الفاخرة واستراتيجيات التسويق الرقمي.'
          : 'Executing unified visual architectures: from master-grade product still life and cinematic motion, to bespoke large-format print engineering and regional brand positioning.'}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={onOpenDrawer}
          className="w-full sm:w-auto text-xs uppercase tracking-[0.25em] px-10 py-4 bg-[#C97B4A] text-[#070503] font-semibold hover:bg-[#E0B27E] transition-all rounded-sm shadow-[0_0_30px_rgba(201,123,74,0.25)]"
        >
          {isAr ? 'ابدأ مشروعك معنا' : 'Initiate Commission'}
        </button>
        <a
          href="#work"
          className="w-full sm:w-auto text-xs uppercase tracking-[0.25em] px-10 py-4 border border-[#C97B4A]/30 text-[#E0B27E] hover:border-[#C97B4A] hover:bg-[#C97B4A]/10 transition-all rounded-sm"
        >
          {isAr ? 'استكشف المجلدات' : 'Explore Portfolio'}
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[#A6907A]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C97B4A] to-transparent animate-bounce" />
      </div>
    </section>
  );
}