'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface FolioItem {
  id: string;
  title: string;
  category: string;
  aspect: string;
  image: string;
  dimensions: string;
}

const folioData: FolioItem[] = [
  { id: '01', title: 'Amber & Glass Silhouette', category: 'Culinary & Product', aspect: 'aspect-[3/4]', image: '/media/look-1.webp', dimensions: 'Medium Format 100MP' },
  { id: '02', title: 'Monolithic Spaces', category: 'Architectural', aspect: 'aspect-[16/10]', image: '/media/look-2.webp', dimensions: 'Natural Light Study' },
  { id: '03', title: 'Artisan Heritage Series', category: 'Commercial Still Life', aspect: 'aspect-[4/5]', image: '/media/look-3.webp', dimensions: 'sRGB Master Deliverable' },
];

export default function LookbookGrid({ onSelect }: { onSelect: (item: FolioItem) => void }) {
  return (
    <section className="px-6 md:px-16 py-28 bg-[#0D0907]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[#C97B4A]/20 pb-8">
        <div>
          <span className="text-[11px] tracking-[0.35em] text-[#C97B4A] uppercase block mb-2">Curated Folio</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F5EFEB] tracking-wide">Selected Works</h2>
        </div>
        <p className="text-xs text-[#9E8975] tracking-widest uppercase mt-4 md:mt-0">2026 Collection / Buraidah</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {folioData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            className={`group relative overflow-hidden bg-[#18110B] border border-[#C97B4A]/10 hover:border-[#C97B4A]/40 transition-all duration-500 cursor-pointer ${
              idx === 0 ? 'md:col-span-5' : idx === 1 ? 'md:col-span-7' : 'md:col-span-12'
            }`}
            onClick={() => onSelect(item)}
          >
            <div className={`relative ${item.aspect} w-full overflow-hidden`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0907]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <span className="text-[10px] tracking-[0.25em] text-[#E8C194] uppercase mb-1">{item.category}</span>
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-[#C97B4A]" />
                </div>
                <p className="text-[11px] text-[#9E8975] mt-2 font-mono">{item.dimensions}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}