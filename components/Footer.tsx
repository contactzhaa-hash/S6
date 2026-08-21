'use client';

import React from 'react';

export default function Footer({ lang }: { lang: 'en' | 'ar' }) {
  const isAr = lang === 'ar';

  return (
    <footer id="ethos" className="py-20 border-t border-[#D6B278]/15 bg-[#040608] text-center relative z-10">
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <span className="text-lg tracking-[0.35em] font-serif uppercase text-[#F0D4A3] block mb-3">
          {isAr ? 'إس ٦ ميديا' : 'S6 MEDIA'}
        </span>
        <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xl mx-auto font-light">
          {isAr
            ? 'انطلاقاً من بريدة، نكرس خبراتنا في التصوير التجاري والإنتاج السينمائي والمطبوعات الفاخرة لتمكين العلامات الرائدة من التميز بأعلى المعايير.'
            : 'Rooted in Buraidah, dedicated to elevating modern regional brands with disciplined cinematography, still life, and luxury print assets.'}
        </p>
      </div>

      <div className="text-[10px] text-[#94A3B8]/70 tracking-[0.3em] font-mono">
        © 2026 S6 MEDIA BOUTIQUE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}