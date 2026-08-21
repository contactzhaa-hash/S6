'use client';

import React from 'react';

export default function ServiceMatrix({ lang }: { lang: 'en' | 'ar' }) {
  const isAr = lang === 'ar';

  const pillars = [
    {
      num: '01',
      titleEn: 'High-Profile Product Photography',
      titleAr: 'تصوير المنتجات فائق الدقة',
      descEn: 'Precision studio lighting schematics, macro texture calibration, and color management tailored for luxury packaging, catalogs, and digital e-commerce.',
      descAr: 'هندسة إضاءة استوديو متقدمة، معايرة الأنسجة الدقيقة، وإدارة لونية مطابقة للمواصفات العالمية للمنتجات الفاخرة والتجارة الإلكترونية.'
    },
    {
      num: '02',
      titleEn: 'Cinematic Videography & Grading',
      titleAr: 'الإنتاج السينمائي وتلوين الماستر',
      descEn: 'Commercial narrative films, optical blocking, and precision DaVinci Resolve color transforms engineered for high-impact campaigns and broadcast release.',
      descAr: 'أفلام تجارية برؤية سينمائية، تخطيط بصري دقيق، وتلوين احترافي عبر منظومات سينمائية متطورة لإبراز هوية العلامة.'
    },
    {
      num: '03',
      titleEn: 'Bespoke Print & Packaging Execution',
      titleAr: 'هندسة المطبوعات والتغليف الفاخر',
      descEn: 'Pre-press asset preparation, large-format billboard color profiling, specialized foil stamping, and tactile luxury packaging production.',
      descAr: 'تجهيز ملفات ما قبل الطباعة، مطابقة ألوان اللوحات الإعلانية الضخمة، والتشطيبات الفاخرة كالبصمة الحرارية وتصميم العلب الخاصة.'
    },
    {
      num: '04',
      titleEn: 'Visual Brand Strategy & Marketing',
      titleAr: 'استراتيجية الهوية البصرية والتسويق',
      descEn: 'Cohesive visual identity systems, campaign positioning, creative direction, and digital asset distribution designed to establish lasting brand authority.',
      descAr: 'بناء الهويات البصرية المتكاملة، التوجيه الإبداعي للحملات، واستراتيجيات نشر الأصول الرقمية لترسيخ مكانة العلامة في السوق.'
    }
  ];

  return (
    <section id="capabilities" className="px-6 md:px-16 py-28 bg-[#090C10] border-y border-[#D6B278]/15 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] font-mono text-[#D6B278] uppercase block mb-2">
            {isAr ? 'الركائز الأربع للدار' : 'Full-Spectrum Visual Suite'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F0D4A3]">
            {isAr ? 'خدمات استثنائية لصناع التميز' : 'End-to-End Visual Excellence'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 md:p-10 bg-[#0E1116] border border-[#D6B278]/20 rounded relative overflow-hidden group hover:border-[#D6B278]/50 transition duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6B278] to-transparent opacity-30 group-hover:opacity-100 transition duration-300" />
              <span className="text-2xl font-serif text-[#D6B278] mb-4 block font-mono">{pillar.num}</span>
              <h3 className="text-xl md:text-2xl font-serif text-[#F8FAFC] mb-3">
                {isAr ? pillar.titleAr : pillar.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
                {isAr ? pillar.descAr : pillar.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}