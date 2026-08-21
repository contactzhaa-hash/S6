'use client';

import React from 'react';

export default function Footer({ lang }: { lang: 'en' | 'ar' }) {
  const isAr = lang === 'ar';

  return (
    <footer id="ethos" className="py-20 border-t border-[#C97B4A]/15 bg-[#060403] text-center relative z-10">
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <span className="text-lg tracking-[0.35em] font-serif uppercase text-[#E0B27E] block mb-3">
          {isAr ? 'إس ٦ ميديا' : 'S6 MEDIA'}
        </span>
        <p className="text-xs text-[#A6907A] leading-relaxed max-w-xl mx-auto font-light">
          {isAr
            ? 'انطلاقاً من بريدة، نكرس خبراتنا في التصوير التجاري والإنتاج السينمائي والمطبوعات الفاخرة لتمكين العلامات الرائدة من التميز بأعلى المعايير.'
            : 'Proudly rooted in Buraidah, dedicated to elevating modern regional brands with disciplined cinematography, still life, and luxury print assets.'}
        </p>
      </div>

      <div className="text-[10px] text-[#A6907A]/70 tracking-[0.3em] font-mono">
        © {new Date().getFullYear()} S6 MEDIA. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}