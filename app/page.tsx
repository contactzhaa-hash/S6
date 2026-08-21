'use client';

import React, { useState } from 'react';

const dict = {
  en: {
    brand: "S6 MEDIA",
    tagline: "Visual Craft House",
    statusBadge: "Accepting Brand Commissions — 2026",
    navWork: "Archives",
    navServices: "Capabilities",
    navAbout: "Studio",
    navCommission: "Commission",
    langBtn: "العربية",
    heroEyebrow: "Commercial Photography • Cinematography • Bespoke Print • Brand Strategy",
    heroTitle: "Visual Precision for Modern Brand Authority",
    heroSub: "Unified visual architectures: master-tier product still life, cinematic motion campaigns, precision color science, and tactile print packaging.",
    heroCta: "Initiate Commission",
    exploreWork: "Explore Portfolio",
    trustedHeading: "Trusted by Regional Brands & Enterprises",
    archiveHeader: "Visual Portfolio",
    featuredHeading: "Curated Commissions",
    srvHeading: "Full-Spectrum Visual Suite",
    srvSub: "End-to-End Visual Excellence",
    srv1Num: "01",
    srv1Title: "High-Profile Product Photography",
    srv1Desc: "Precision studio lighting schematics, macro texture calibration, and color management tailored for luxury packaging, catalogs, and digital e-commerce.",
    srv2Num: "02",
    srv2Title: "Cinematic Videography & Grading",
    srv2Desc: "Commercial narrative films, optical blocking, and precision color transforms engineered for high-impact campaigns and broadcast release.",
    srv3Num: "03",
    srv3Title: "Bespoke Print & Packaging Execution",
    srv3Desc: "Pre-press asset preparation, large-format billboard color profiling, specialized foil stamping, and tactile luxury packaging production.",
    srv4Num: "04",
    srv4Title: "Visual Brand Strategy & Marketing",
    srv4Desc: "Cohesive visual identity systems, campaign positioning, creative direction, and digital asset distribution designed to establish lasting brand authority.",
    drawerTitle: "Commission Studio",
    drawerHeadline: "Let's Shape Your Visual Standard",
    drawerSub: "Available for commercial campaigns and visual direction across Buraidah and the GCC.",
    lblName: "Client Name & Brand Entity",
    lblPhone: "WhatsApp / Contact Phone",
    lblScope: "Commission Disciplines",
    lblBrief: "Project Scope & Deliverables",
    btnSubmit: "Dispatch Brief to WhatsApp",
    footerBio: "Rooted in Buraidah, dedicated to elevating modern regional brands with disciplined cinematography, still life, and luxury print assets.",
    footerCopy: "© 2026 S6 MEDIA BOUTIQUE. ALL RIGHTS RESERVED."
  },
  ar: {
    brand: "إس ٦ ميديا",
    tagline: "دار الفن البصري والتسويق",
    statusBadge: "جاهزون لتنفيذ التكليفات الكبرى — ٢٠٢٦",
    navWork: "الأرشيف",
    navServices: "الخدمات",
    navAbout: "الاستوديو",
    navCommission: "طلب مشروع",
    langBtn: "English",
    heroEyebrow: "تصوير تجاري • إنتاج سينمائي • مطبوعات فاخرة • تسويق استراتيجي",
    heroTitle: "هندسة بصرية ترتقي بمكانة العلامات التجارية",
    heroSub: "نبتكر أصولاً بصرية متكاملة: من جلسات تصوير المنتجات فائقة الدقة والأفلام السينمائية، إلى هندسة المطبوعات والتغليف الفاخر والتسويق الإقليمي.",
    heroCta: "ابدأ مشروعك معنا",
    exploreWork: "استكشف المجلدات",
    trustedHeading: "علامات تجارية وثقت برؤيتنا",
    archiveHeader: "الأرشيف البصري",
    featuredHeading: "أعمال تم تنفيذها بعناية",
    srvHeading: "الركائز الأربع للدار",
    srvSub: "خدمات استثنائية لصناع التميز",
    srv1Num: "٠١",
    srv1Title: "تصوير المنتجات فائق الدقة",
    srv1Desc: "هندسة إضاءة استوديو متقدمة، معايرة الأنسجة الدقيقة، وإدارة لونية مطابقة للمواصفات العالمية للمنتجات الفاخرة والتجارة الإلكترونية.",
    srv2Num: "٠٢",
    srv2Title: "الإنتاج السينمائي وتلوين الماستر",
    srv2Desc: "أفلام تجارية برؤية سينمائية، تخطيط بصري دقيق، وتلوين احترافي عبر منظومات سينمائية متطورة لإبراز هوية العلامة.",
    srv3Num: "٠٣",
    srv3Title: "هندسة المطبوعات والتغليف الفاخر",
    srv3Desc: "تجهيز ملفات ما قبل الطباعة، مطابقة ألوان اللوحات الإعلانية الضخمة، والتشطيبات الفاخرة كالبصمة الحرارية وتصميم العلب الخاصة.",
    srv4Num: "٠٤",
    srv4Title: "استراتيجية الهوية البصرية والتسويق",
    srv4Desc: "بناء الهويات البصرية المتكاملة، التوجيه الإبداعي للحملات، واستراتيجيات نشر الأصول الرقمية لترسيخ مكانة العلامة في السوق.",
    drawerTitle: "طلب مشروع جديد",
    drawerHeadline: "لنصنع عملاً استثنائياً معاً",
    drawerSub: "متاحون للمشاريع والحملات التجارية في بريدة وكافة أنحاء المملكة والخليج.",
    lblName: "الاسم والجهة / الشركة",
    lblPhone: "رقم التواصل / واتساب",
    lblScope: "نوع الخدمات المطلوبة",
    lblBrief: "نبذة عن المشروع والتطلعات",
    btnSubmit: "إرسال التفاصيل عبر واتساب",
    footerBio: "انطلاقاً من بريدة، نكرس خبراتنا في التصوير التجاري والإنتاج السينمائي والمطبوعات الفاخرة لتمكين العلامات الرائدة من التميز بأعلى المعايير.",
    footerCopy: "© ٢٠٢٦ إس ٦ ميديا. جميع الحقوق محفوظة."
  }
};

const partnerLogos = [
  'brand-partners_2.1.1.jpg', 'brand-partners_2.2.1.jpg', 'brand-partners_2.3.1.jpg',
  'brand-partners_2.4.1.jpg', 'brand-partners_2.5.1.jpg', 'brand-partners_2.6.1.jpg',
  'brand-partners_2.7.1.jpg', 'brand-partners_2.8.1.jpg', 'brand-partners_2.9.1.jpg',
  'brand-partners_2.10.1.jpg', 'brand-partners_2.11.1.jpg', 'brand-partners_2.12.1.jpg'
];

const categoryFolders = [
  { id: 'all', en: 'All Archives', ar: 'كافة الأعمال' },
  { id: 'product', en: 'Product Still Life', ar: 'تصوير المنتجات' },
  { id: 'print', en: 'Print & Packaging', ar: 'المطبوعات والتغليف' },
  { id: 'motion', en: 'Commercial Motion', ar: 'الإنتاج السينمائي' },
  { id: 'space', en: 'Spatial Architecture', ar: 'المساحات والمعمار' }
];

const folioProjects = [
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

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [activeFolder, setActiveFolder] = useState('all');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [scopes, setScopes] = useState<string[]>([]);
  const [brief, setBrief] = useState('');

  const t = dict[lang];
  const isRtl = lang === 'ar';

  const filteredFolio = activeFolder === 'all'
    ? folioProjects
    : folioProjects.filter(item => item.cat === activeFolder);

  const toggleScope = (val: string) => {
    setScopes(prev => prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneTarget = "966551692078";
    const text = isRtl
      ? `مرحباً S6 Media،\nطلب مشروع جديد:\nالاسم والجهة: ${name}\nالهاتف: ${phone}\nالمجال: ${scopes.join(', ') || '—'}\nالتفاصيل: ${brief || '—'}`
      : `Hello S6 Media,\nNew Brand Commission Request:\nName & Entity: ${name}\nPhone: ${phone}\nScopes: ${scopes.join(', ') || '—'}\nBrief: ${brief || '—'}`;
    window.open(`https://wa.me/${phoneTarget}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#050709] text-[#F1F5F9] selection:bg-[#D6B278] selection:text-black overflow-x-hidden font-sans antialiased"
    >
      {/* AMBIENT AURORA GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(214,178,120,0.12),transparent_65%)] blur-3xl animate-pulse" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#050709]/80 backdrop-blur-2xl border-b border-[#D6B278]/10 px-6 md:px-16 py-5 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <a href="#" className="text-base tracking-[0.35em] font-serif uppercase text-[#F0D4A3] font-medium hover:opacity-80 transition">
            {t.brand}
          </a>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#D6B278]" />
          <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase text-[#94A3B8] font-mono">
            {t.tagline}
          </span>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase text-[#94A3B8]">
            <a href="#work" className="hover:text-[#F0D4A3] transition-colors">{t.navWork}</a>
            <a href="#capabilities" className="hover:text-[#F0D4A3] transition-colors">{t.navServices}</a>
            <a href="#ethos" className="hover:text-[#F0D4A3] transition-colors">{t.navAbout}</a>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-[11px] uppercase tracking-widest px-3.5 py-1.5 border border-[#D6B278]/25 text-[#F0D4A3] hover:border-[#D6B278] hover:bg-[#D6B278]/10 rounded transition-all duration-200"
            >
              {t.langBtn}
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-[11px] uppercase tracking-[0.2em] px-5 py-2 bg-[#D6B278] text-[#050709] font-semibold hover:bg-[#F0D4A3] transition-all duration-300 rounded shadow-[0_0_20px_rgba(214,178,120,0.2)]"
            >
              {t.navCommission}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1116] border border-[#D6B278]/30 mb-8 shadow-inner shadow-black/60">
          <span className="w-2 h-2 rounded-full bg-[#D6B278] animate-ping" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#F0D4A3] font-mono">
            {t.statusBadge}
          </span>
        </div>

        <span className="text-xs uppercase tracking-[0.45em] text-[#94A3B8] mb-4 font-mono">
          {t.heroEyebrow}
        </span>

        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#F8FAFC] max-w-5xl leading-[1.08] mb-8 font-normal tracking-tight">
          {t.heroTitle}
        </h1>

        <p className="text-xs sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed mb-12 font-light tracking-wide">
          {t.heroSub}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-full sm:w-auto text-xs uppercase tracking-[0.25em] px-10 py-4 bg-[#D6B278] text-[#050709] font-semibold hover:bg-[#F0D4A3] hover:shadow-[0_0_35px_rgba(214,178,120,0.35)] transition-all duration-300 rounded"
          >
            {t.heroCta}
          </button>
          <a
            href="#work"
            className="w-full sm:w-auto text-xs uppercase tracking-[0.25em] px-10 py-4 border border-[#D6B278]/30 text-[#F0D4A3] hover:border-[#D6B278] hover:bg-[#D6B278]/10 transition-all duration-300 rounded"
          >
            {t.exploreWork}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition duration-300">
          <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[#94A3B8]">Scroll</span>
          <div className="w-[1px] h-9 bg-gradient-to-b from-[#D6B278] to-transparent animate-bounce" />
        </div>
      </section>

      {/* BRAND LOGOS STRIP */}
      <section className="border-y border-[#D6B278]/15 bg-[#090C10] py-10 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-center text-[10px] uppercase tracking-[0.35em] text-[#D6B278] font-mono mb-8">
            {t.trustedHeading}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 hover:opacity-100 transition-opacity duration-300">
            {partnerLogos.map((file, idx) => (
              <div key={idx} className="h-10 w-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
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

      {/* FOLIO ARCHIVES */}
      <section id="work" className="px-6 md:px-16 py-28 max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-mono uppercase text-[#D6B278] block mb-2">
              {t.archiveHeader}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F0D4A3]">
              {t.featuredHeading}
            </h2>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#0E1116] border border-[#D6B278]/20 rounded-md">
            {categoryFolders.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFolder(f.id)}
                className={`text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded transition duration-200 ${
                  activeFolder === f.id
                    ? 'bg-[#D6B278] text-[#050709] font-semibold shadow'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#151921]'
                }`}
              >
                {lang === 'ar' ? f.ar : f.en}
              </button>
            ))}
          </div>
        </div>

        {/* Folio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredFolio.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setDrawerOpen(true)}
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
                  {lang === 'ar' ? item.scopeAr : item.scopeEn}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 CORE DISCIPLINES */}
      <section id="capabilities" className="px-6 md:px-16 py-28 bg-[#090C10] border-y border-[#D6B278]/15 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] font-mono text-[#D6B278] uppercase block mb-2">
              {t.srvHeading}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F0D4A3]">
              {t.srvSub}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: t.srv1Num, title: t.srv1Title, desc: t.srv1Desc },
              { num: t.srv2Num, title: t.srv2Title, desc: t.srv2Desc },
              { num: t.srv3Num, title: t.srv3Title, desc: t.srv3Desc },
              { num: t.srv4Num, title: t.srv4Title, desc: t.srv4Desc }
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 md:p-10 bg-[#0E1116] border border-[#D6B278]/20 rounded relative overflow-hidden group hover:border-[#D6B278]/50 transition duration-300"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6B278] to-transparent opacity-30 group-hover:opacity-100 transition duration-300" />
                <span className="text-2xl font-serif text-[#D6B278] mb-4 block font-mono">{pillar.num}</span>
                <h3 className="text-xl md:text-2xl font-serif text-[#F8FAFC] mb-3">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={() => setDrawerOpen(false)} />
          <div className="relative w-full max-w-lg bg-[#080B0F] border-s border-[#D6B278]/25 h-full z-10 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#D6B278]/20">
                <span className="text-[11px] tracking-[0.3em] font-mono text-[#D6B278] uppercase">{t.drawerTitle}</span>
                <button onClick={() => setDrawerOpen(false)} className="text-sm uppercase text-[#94A3B8] hover:text-white p-2">✕</button>
              </div>

              <h3 className="text-2xl font-serif text-[#F8FAFC] mb-2">{t.drawerHeadline}</h3>
              <p className="text-xs text-[#94A3B8] mb-8 font-light leading-relaxed">{t.drawerSub}</p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#F0D4A3] mb-2 font-mono">{t.lblName}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Abdullah Al-Mansour | Brand Co."
                    className="w-full bg-[#0E1116] border border-[#D6B278]/25 p-3.5 text-xs text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#D6B278] rounded"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#F0D4A3] mb-2 font-mono">{t.lblPhone}</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full bg-[#0E1116] border border-[#D6B278]/25 p-3.5 text-xs text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#D6B278] rounded"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#F0D4A3] mb-2 font-mono">{t.lblScope}</label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { en: 'Product Photography', ar: 'تصوير المنتجات والاستوديو' },
                      { en: 'Cinematic Videography', ar: 'الإنتاج السينمائي والإعلاني' },
                      { en: 'Luxury Print & Packaging', ar: 'المطبوعات والتغليف الفاخر' },
                      { en: 'Full Brand Strategy', ar: 'استراتيجية الهوية البصرية والتسويق' }
                    ].map((opt) => {
                      const val = isRtl ? opt.ar : opt.en;
                      const isSelected = scopes.includes(val);
                      return (
                        <button
                          type="button"
                          key={opt.en}
                          onClick={() => toggleScope(val)}
                          className={`text-start p-3 text-xs border transition-all rounded ${
                            isSelected
                              ? 'border-[#D6B278] bg-[#D6B278]/20 text-white font-medium'
                              : 'border-[#D6B278]/15 bg-[#0E1116] text-[#94A3B8] hover:border-[#D6B278]/40'
                          }`}
                        >
                          {val} {isSelected ? '✓' : ''}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#F0D4A3] mb-2 font-mono">{t.lblBrief}</label>
                  <textarea
                    rows={3}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="..."
                    className="w-full bg-[#0E1116] border border-[#D6B278]/25 p-3.5 text-xs text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#D6B278] rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#D6B278] text-[#050709] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#F0D4A3] transition-all rounded shadow-[0_0_20px_rgba(214,178,120,0.25)]"
                >
                  {t.btnSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer id="ethos" className="py-20 border-t border-[#D6B278]/15 bg-[#040608] text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <span className="text-lg tracking-[0.35em] font-serif uppercase text-[#F0D4A3] block mb-3">
            {t.brand}
          </span>
          <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xl mx-auto font-light">
            {t.footerBio}
          </p>
        </div>

        <div className="text-[10px] text-[#94A3B8]/70 tracking-[0.3em] font-mono">
          {t.footerCopy}
        </div>
      </footer>
    </main>
  );
}
