'use client';

import React from 'react';

const logos = [
  'brand-partners_2.1.1.jpg', 'brand-partners_2.2.1.jpg', 'brand-partners_2.3.1.jpg',
  'brand-partners_2.4.1.jpg', 'brand-partners_2.5.1.jpg', 'brand-partners_2.6.1.jpg',
  'brand-partners_2.7.1.jpg', 'brand-partners_2.8.1.jpg', 'brand-partners_2.9.1.jpg',
  'brand-partners_2.10.1.jpg', 'brand-partners_2.11.1.jpg', 'brand-partners_2.12.1.jpg'
];

export default function BrandMarquee({ lang }: { lang: 'en' | 'ar' }) {
  const isAr = lang === 'ar';

  return (
    <section className="border-y border-[#C97B4A]/15 bg-[#0C0806] py-10 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <span className="block text-center text-[10px] uppercase tracking-[0.35em] text-[#C97B4A] font-mono mb-8">
          {isAr ? 'علامات تجارية وثقت برؤيتنا' : 'Trusted by Visionary Regional Brands'}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 hover:opacity-100 transition duration-300">
          {logos.map((file, idx) => (
            <div key={idx} className="h-10 w-24 flex items-center justify-center grayscale contrast-125 hover:grayscale-0 transition duration-300">
              <img
                src={`/images/logos/${file}`}
                alt="Brand Partner"
                className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}