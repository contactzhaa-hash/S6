'use client';

import React from 'react';

interface HeroProps {
  lang: 'en' | 'ar';
  onOpenDrawer: () => void;
}

export default function Hero({ lang, onOpenDrawer }: HeroProps) {
  const isAr = lang === 'ar';

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 z-10">
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1116] border border-[#D6B278]/30 mb-8 shadow-inner shadow-black/60">
        <span className="w-2 h-2 rounded-full bg-[#D6B278] animate-ping" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#F0D4A3] font-mono">
          {isAr ? 'جاهزون لتنفيذ التكليفات الكبرى — ٢٠٢٦' : 'Available for Brand Commissions — 2026'}
        </span>
      </div>

      <span className="text-xs uppercase tracking-[0.45em] text-[#94A3B8] mb-4 font-mono">
        {isAr ? 'تصوير تجاري • إنتاج سينمائي • مطبوعات فاخرة • تسويق استراتيجي' : 'Commercial Photography • Cinematography • Bespoke Print • Brand Strategy'}
      </span>

      <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#F8FAFC] max-w-5xl leading-[1.08] mb-8 font-normal tracking-tight">
        {isAr ? 'هندسة بصرية ترتقي بمكانة العلامات التجارية' : 'Visual Precision for Modern Brand Authority'}
      </h1>

      <p className="text-xs sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed mb-12 font-light tracking-wide">
        {isAr
          ? 'نبتكر أصولاً بصرية متكاملة: من جلسات تصوير المنتجات فائقة الدقة والأفلام السينمائية، إلى هندسة المطبوعات والتغليف الفاخر والتسويق الإقليمي.'
          : 'Unified visual architectures: master-tier product still life, cinematic motion campaigns, precision color science, and tactile print packaging.'}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={onOpenDrawer}
          className="w-full sm:w-auto text-xs uppercase tracking-[0.25em] px-10 py-4 bg-[#D6B278] text-[#050709] font-semibold hover:bg-[#F0D4A3] hover:shadow-[0_0_35px_rgba(214,178,120,0.35)] transition-all duration-300 rounded"
        >
          {isAr ? 'ابدأ مشروعك معنا' : 'Initiate Commission'}
        </button>
        <a
          href="#work"
          className="w-full sm:w-auto text-xs uppercase tracking-[0.25em] px-10 py-4 border border-[#D6B278]/30 text-[#F0D4A3] hover:border-[#D6B278] hover:bg-[#D6B278]/10 transition-all duration-300 rounded"
        >
          {isAr ? 'استكشف المجلدات' : 'Explore Portfolio'}
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition duration-300">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[#94A3B8]">Scroll</span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#D6B278] to-transparent animate-bounce" />
      </div>
    </section>
  );
}