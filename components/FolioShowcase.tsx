'use client';

import React, { useState } from 'react';

interface FolioProps {
  lang: 'en' | 'ar';
  onSelectWork: () => void;
}

const folders = [
  { id: 'all', en: 'All Archives', ar: 'كافة الأعمال' },
  { id: 'product', en: 'Product Still Life', ar: 'تصوير المنتجات' },
  { id: 'print', en: 'Print & Packaging', ar: 'المطبوعات والتغليف' },
  { id: 'motion', en: 'Commercial Motion', ar: 'الإنتاج السينمائي' },
  { id: 'space', en: 'Spatial Architecture', ar: 'المساحات والمعمار' }
];

const projects = [
  {
    cat: 'product',
    titleEn: 'Tactile Fragrance & Monolith Glass',
    titleAr: 'عطور فاخرة وزجاج نقي',
    scopeEn: 'Still Life Photography',
    scopeAr: 'تصوير منتجات فائق الدقة',
    span: 'md:col-span-8 aspect-[16/10]',
    img: '/images/product-photography/1-4.jpg',
    fallback: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    cat: 'space',
    titleEn: 'Minimalist Spatial Architecture',
    titleAr: 'معمار داخلي معاصر',
    scopeEn: 'Spatial Documentation',
    scopeAr: 'توثيق معماري ومساحات',
    span: 'md:col-span-4 aspect-[4/5]',
    img: '/images/product-photography/2-4.jpg',
    fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    cat: 'motion',
    titleEn: 'Specialty Culinary Craft',
    titleAr: 'فنون الطهي والضيافة',
    scopeEn: 'Cinematography & Master Grade',
    scopeAr: 'إنتاج سينمائي وتلوين دقيق',
    span: 'md:col-span-4 aspect-[4/5]',
    img: '/images/product-photography/3-4.jpg',
    fallback: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    cat: 'print',
    titleEn: 'Luxury Editorial Book & Packaging',
    titleAr: 'مطبوعات فاخرة وتغليف مبتكر',
    scopeEn: 'Print Engineering & Foil Finishing',
    scopeAr: 'هندسة طباعة وتشطيبات خاصة',
    span: 'md:col-span-8 aspect-[16/10]',
    img: '/images/product-photography/4-3.jpg',
    fallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    cat: 'product',
    titleEn: 'Artisan Leather & Hardware Study',
    titleAr: 'منتجات جلدية وتفاصيل معدنية',
    scopeEn: 'Macro Commercial Photography',
    scopeAr: 'تصوير ماكرو تجاري دقيق',
    span: 'md:col-span-6 aspect-[16/10]',
    img: '/images/product-photography/5-4.jpg',
    fallback: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
  },
  {
    cat: 'motion',
    titleEn: 'Regional Heritage Form Exploration',
    titleAr: 'توثيق التراث والهوية الإقليمية',
    scopeEn: 'Brand Narrative Film',
    scopeAr: 'فيلم وثائقي للعلامة التجارية',
    span: 'md:col-span-6 aspect-[16/10]',
    img: '/images/product-photography/6-3.jpg',
    fallback: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  }
];

export default function FolioShowcase({ lang, onSelectWork }: FolioProps) {
  const [activeTab, setActiveTab] = useState('all');
  const isAr = lang === 'ar';

  const filtered = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.cat === activeTab);

  return (
    <section id="work" className="px-6 md:px-16 py-28 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-[10px] tracking-[0.3em] font-mono uppercase text-[#D6B278] block mb-2">
            {isAr ? 'الأرشيف البصري' : 'Visual Portfolio'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F0D4A3]">
            {isAr ? 'أعمال تم تنفيذها بعناية' : 'Curated Commissions'}
          </h2>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#0E1116] border border-[#D6B278]/20 rounded-md">
          {folders.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              className={`text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded transition duration-200 ${
                activeTab === f.id
                  ? 'bg-[#D6B278] text-[#050709] font-semibold shadow'
                  : 'text-[#94A3B8] hover:text-white hover:bg-[#151921]'
              }`}
            >
              {isAr ? f.ar : f.en}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            onClick={onSelectWork}
            className={`group relative overflow-hidden bg-[#0E1116] border border-[#D6B278]/15 cursor-pointer rounded ${item.span}`}
          >
            <img
              src={item.img}
              alt={item.titleEn}
              className="w-full h-full object-cover grayscale-[25%] contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              onError={(e) => { e.currentTarget.src = item.fallback; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050709]/95 via-[#050709]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
              <span className="text-[10px] font-mono tracking-widest text-[#D6B278] uppercase mb-1">
                {isAr ? item.scopeAr : item.scopeEn}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white">
                {isAr ? item.titleAr : item.titleEn}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}