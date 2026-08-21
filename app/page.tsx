'use client';

import React, { useState } from 'react';

const dict = {
  en: {
    brand: "S6 MEDIA",
    tagline: "Commercial Visual Craft",
    navAbout: "About",
    navWork: "Work",
    navServices: "Services",
    navCommission: "Commission",
    langBtn: "العربية",
    heroEyebrow: "Commercial Visual House — Buraidah",
    heroTitle: "Visual Precision for Modern Regional Brands",
    heroSub: "Quiet mastery, spatial discipline, and responsible quality ethics. Color-matched, multi-resolution asset delivery tailored for print, digital web, and billboard standards.",
    heroCta: "Initiate Commission",
    trustedHeading: "Trusted by Brands",
    trustedSub: "Proudly based in Buraidah, serving visionaries and brands across the region with distinction and care.",
    pillar1: "Proudly rooted in Buraidah, setting an elevated benchmark for commercial visual art and empowering local brands to shine at global standards.",
    pillar2: "Honoring every client, product, and space with dedicated attention to detail, visual integrity, and true professionalism.",
    pillar3: "Dedicated to capturing regional stories with authenticity, depth, and uncompromising visual standards.",
    featuredHeading: "Curated Folio",
    featuredSub: "Commercial, culinary, and product still life executed with spatial discipline.",
    srvHeading: "Studio Capabilities",
    srvSub: "High-tier commercial photography and production standards.",
    srv1Num: "01",
    srv1Title: "Visual Strategy & Pre-Visualization",
    srv1Desc: "Detailed lighting plans, moodboards, and camera blocking to align creative direction prior to shooting.",
    srv2Num: "02",
    srv2Title: "Discreet Protocols & Security",
    srv2Desc: "Strict NDAs and closed-set execution for unreleased products, private estates, and executive privacy.",
    srv3Num: "03",
    srv3Title: "Asset Architecture & Delivery",
    srv3Desc: "Calibrated color spaces mapped for large-scale outdoor displays, luxury print, and digital e-commerce.",
    drawerTitle: "Commission Studio",
    drawerSub: "Available across Buraidah and the GCC.",
    lblName: "Full Name & Brand / Organization",
    lblPhone: "Contact Number",
    lblScope: "Select Project Scope",
    lblBrief: "Project Details (Optional)",
    btnSubmit: "Send Inquiry via WhatsApp",
    footerText: "© 2026 S6 MEDIA. ALL RIGHTS RESERVED."
  },
  ar: {
    brand: "إس ٦ ميديا",
    tagline: "الفن البصري التجاري",
    navAbout: "عن الاستوديو",
    navWork: "الأعمال",
    navServices: "الخدمات",
    navCommission: "طلب مشروع",
    langBtn: "English",
    heroEyebrow: "بيت الفن البصري التجاري — بريدة",
    heroTitle: "إتقان بصري يرتقي بالعلامات التجارية",
    heroSub: "إتقان يجسد القيمة ومسؤولية ترتقي بالمشهد. تسليم أصول بصرية متعددة الدقة ومطابقة للألوان مخصصة للطباعة والويب واللوحات الإعلانية.",
    heroCta: "ابدأ تعاونك معنا",
    trustedHeading: "شركاء النجاح",
    trustedSub: "انطلاقاً من بريدة، نخدم رواد الأعمال والعلامات التجارية في المنطقة بتميز واحترافية.",
    pillar1: "انطلاقاً من بريدة، نضع معياراً استثنائياً للفن البصري التجاري لتمكين العلامات المحلية والوصول بها إلى العالمية.",
    pillar2: "نمنح كل عميل، منتج، ومساحة عناية فائقة ترتكز على أدق التفاصيل والنزاهة البصرية والاحترافية العالية.",
    pillar3: "ملتزمون بتوثيق وتجسيد القصص الإقليمية بأصالة، عمق، ومعايير بصرية فائقة الدقة لا تقبل المساومة.",
    featuredHeading: "أبرز الأعمال",
    featuredSub: "تصوير تجاري وطهي ومنتجات بدقة عالية وإتقان بصري مميز.",
    srvHeading: "إمكانيات الاستوديو",
    srvSub: "معايير إنتاج وتصوير تجاري عالية الدقة.",
    srv1Num: "٠١",
    srv1Title: "التخطيط والرؤية البصرية",
    srv1Desc: "استشارات تفصيلية وخطط إضاءة لتحديد التوقعات بدقة قبل تصوير أي لقطة.",
    srv2Num: "٠٢",
    srv2Title: "البروتوكول والسرية الرقمية",
    srv2Desc: "اتفاقيات سرية صارمة وإدارة مشفرة للأصول لضمان الخصوصية التامة للمنتجات قبل إطلاقها.",
    srv3Num: "٠٣",
    srv3Title: "هندسة الأصول والتسليم",
    srv3Desc: "تخطيط كل لقطة لتناسب اللوحات الإعلانية الضخمة والمطبوعات الفاخرة والمنصات الرقمية.",
    drawerTitle: "طلب مشروع جديد",
    drawerSub: "متاحون للمشاريع التجارية والمعمارية في بريدة وكافة أنحاء الخليج.",
    lblName: "الاسم والجهة / الشركة",
    lblPhone: "رقم التواصل",
    lblScope: "اختر نوع المشروع",
    lblBrief: "تفاصيل المشروع (اختياري)",
    btnSubmit: "إرسال الطلب عبر واتساب",
    footerText: "© ٢٠٢٦ إس ٦ ميديا. جميع الحقوق محفوظة."
  }
};

const partnerLogos = [
  '/images/logos/brand-partners_2.1.1.jpg',
  '/images/logos/brand-partners_2.2.1.jpg',
  '/images/logos/brand-partners_2.3.1.jpg',
  '/images/logos/brand-partners_2.4.1.jpg',
  '/images/logos/brand-partners_2.5.1.jpg',
  '/images/logos/brand-partners_2.6.1.jpg',
  '/images/logos/brand-partners_2.7.1.jpg',
  '/images/logos/brand-partners_2.8.1.jpg',
  '/images/logos/brand-partners_2.9.1.jpg',
  '/images/logos/brand-partners_2.10.1.jpg',
  '/images/logos/brand-partners_2.11.1.jpg',
  '/images/logos/brand-partners_2.12.1.jpg',
  '/images/logos/brand-partners_2.13.1.jpg',
  '/images/logos/brand-partners_2.14.1.jpg',
  '/images/logos/brand-partners_2.15.1.jpg',
  '/images/logos/brand-partners_2.16.1.jpg',
  '/images/logos/brand-partners_2.18.1.jpg',
  '/images/logos/brand-partners_2.19.1.jpg',
  '/images/logos/brand-partners_2.20.1.jpg',
  '/images/logos/brand-partners_2.21.1.jpg',
  '/images/logos/brand-partners_2.22.1.jpg',
  '/images/logos/brand-partners_2.23.1.jpg',
  '/images/logos/brand-partners_2.24.1.jpg',
  '/images/logos/brand-partners_2.25.1.jpg',
  '/images/logos/brand-partners_2.26.1.jpg',
  '/images/logos/brand-partners_2.28.1.jpg',
  '/images/logos/brand-partners_3.2.1.jpg',
  '/images/logos/brand-partners_3.4.1.jpg'
];

const folioItems = [
  { id: '01', title: 'Commercial & Product Still Life', aspect: 'md:col-span-7 aspect-[16/10]', img: '/images/product-photography/1-4.jpg' },
  { id: '02', title: 'Spatial & Interior Architecture', aspect: 'md:col-span-5 aspect-[4/5]', img: '/images/product-photography/2-4.jpg' },
  { id: '03', title: 'Culinary & Hospitality Arts', aspect: 'md:col-span-5 aspect-[4/5]', img: '/images/product-photography/3-4.jpg' },
  { id: '04', title: 'Bespoke Executive Portraiture', aspect: 'md:col-span-7 aspect-[16/10]', img: '/images/product-photography/4-3.jpg' },
  { id: '05', title: 'Tactile Materiality & Focus', aspect: 'md:col-span-6 aspect-[16/10]', img: '/images/product-photography/5-4.jpg' },
  { id: '06', title: 'Form & Atmosphere Exploration', aspect: 'md:col-span-6 aspect-[16/10]', img: '/images/product-photography/6-3.jpg' }
];

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [scopes, setScopes] = useState<string[]>([]);
  const [brief, setBrief] = useState('');

  const t = dict[lang];
  const isRtl = lang === 'ar';

  const toggleScope = (val: string) => {
    setScopes(prev => prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneTarget = "966551692078";
    const text = isRtl
      ? `مرحباً S6 Media،\nالاسم والجهة: ${name}\nالهاتف: ${phone}\nنوع المشروع: ${scopes.join(', ') || '—'}\nالتفاصيل: ${brief || '—'}`
      : `Hello S6 Media,\nName & Brand: ${name}\nPhone: ${phone}\nScope: ${scopes.join(', ') || '—'}\nBrief: ${brief || '—'}`;
    window.open(`https://wa.me/${phoneTarget}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-[#0E0A07] text-[#F3E9DD] font-sans antialiased selection:bg-[#C97B4A] selection:text-black">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#0E0A07]/90 backdrop-blur-md border-b border-[#C97B4A]/15 px-6 md:px-14 py-5 flex justify-between items-center">
        <a href="#" className="text-sm tracking-[0.3em] font-serif uppercase text-[#E0B27E]">{t.brand}</a>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#A6907A]">
            <a href="#about" className="hover:text-[#E0B27E] transition-colors">{t.navAbout}</a>
            <a href="#work" className="hover:text-[#E0B27E] transition-colors">{t.navWork}</a>
            <a href="#services" className="hover:text-[#E0B27E] transition-colors">{t.navServices}</a>
            <button onClick={() => setDrawerOpen(true)} className="hover:text-[#E0B27E] transition-colors uppercase">{t.navCommission}</button>
          </nav>
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-xs uppercase tracking-widest px-4 py-2 border border-[#C97B4A]/30 text-[#E0B27E] hover:border-[#C97B4A] hover:bg-[#C97B4A]/10 transition-all"
          >
            {t.langBtn}
          </button>
          <button
            onClick={() => setDrawerOpen(true)}
            className="hidden sm:inline-flex text-xs uppercase tracking-[0.2em] px-6 py-2.5 bg-[#C97B4A] text-[#0E0A07] font-medium hover:bg-[#E0B27E] transition-all"
          >
            {t.heroCta}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#24170E] via-[#0E0A07] to-[#0E0A07]">
        <span className="text-[11px] tracking-[0.35em] uppercase text-[#C97B4A] mb-4 block font-mono">{t.heroEyebrow}</span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-[#F3E9DD] max-w-4xl leading-[1.15] mb-6">{t.heroTitle}</h1>
        <p className="text-xs sm:text-sm text-[#A6907A] max-w-2xl leading-relaxed mb-10 tracking-wide font-light">{t.heroSub}</p>
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-xs uppercase tracking-[0.25em] px-9 py-4 border border-[#C97B4A] text-[#E0B27E] hover:bg-[#C97B4A] hover:text-[#0E0A07] transition-all duration-300 shadow-[0_0_20px_rgba(201,123,74,0.15)]"
        >
          {t.heroCta}
        </button>
      </section>

      {/* BRAND LOGOS STRIP */}
      <section className="border-y border-[#C97B4A]/15 bg-[#0A0705] py-8 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {partnerLogos.map((logo, idx) => (
            <div key={idx} className="h-10 w-24 flex items-center justify-center grayscale contrast-125 hover:grayscale-0 transition duration-300">
              <img
                src={logo}
                alt="Brand Partner"
                className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100"
              />
            </div>
          ))}
        </div>
      </section>

      {/* TRUSTED BY BRANDS SECTION */}
      <section id="about" className="px-6 md:px-14 py-24 bg-[#110C08] border-b border-[#C97B4A]/10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block w-12 h-1 bg-[#C97B4A]/40"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#E0B27E] mb-4">{t.trustedHeading}</h2>
          <p className="text-xs sm:text-sm text-[#A6907A] max-w-2xl mx-auto leading-relaxed">{t.trustedSub}</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative p-8 bg-[#18110B] border border-[#C97B4A]/20">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C97B4A]/20 via-[#C97B4A] to-[#C97B4A]/20" />
            <p className="text-xs text-[#A6907A] leading-relaxed tracking-wide">{t.pillar1}</p>
          </div>
          <div className="relative p-8 bg-[#18110B] border border-[#C97B4A]/20">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C97B4A]/20 via-[#C97B4A] to-[#C97B4A]/20" />
            <p className="text-xs text-[#A6907A] leading-relaxed tracking-wide">{t.pillar2}</p>
          </div>
          <div className="relative p-8 bg-[#18110B] border border-[#C97B4A]/20">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C97B4A]/20 via-[#C97B4A] to-[#C97B4A]/20" />
            <p className="text-xs text-[#A6907A] leading-relaxed tracking-wide">{t.pillar3}</p>
          </div>
        </div>
      </section>

      {/* FOLIO GALLERY */}
      <section id="work" className="px-6 md:px-14 py-28 max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-2xl sm:text-4xl font-serif text-[#E0B27E] mb-3">{t.featuredHeading}</h2>
          <p className="text-xs sm:text-sm text-[#A6907A]">{t.featuredSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {folioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setDrawerOpen(true)}
              className={`group relative overflow-hidden bg-[#18110B] border border-[#C97B4A]/15 cursor-pointer ${item.aspect}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0A07]/90 via-[#0E0A07]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-8 flex flex-col justify-end">
                <span className="text-[10px] tracking-[0.3em] font-mono text-[#C97B4A] uppercase mb-1">Archive {item.id}</span>
                <h3 className="text-lg font-serif text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-14 py-28 border-t border-[#C97B4A]/10 bg-[#140E0A]">
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <h2 className="text-2xl sm:text-4xl font-serif text-[#E0B27E] mb-3">{t.srvHeading}</h2>
          <p className="text-xs sm:text-sm text-[#A6907A]">{t.srvSub}</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-[#C97B4A]/15 p-8 bg-[#18110B]">
            <span className="text-xl font-serif text-[#C97B4A] mb-4 block font-mono">{t.srv1Num}</span>
            <h3 className="text-lg font-serif text-[#F3E9DD] mb-3">{t.srv1Title}</h3>
            <p className="text-xs text-[#A6907A] leading-relaxed">{t.srv1Desc}</p>
          </div>
          <div className="border border-[#C97B4A]/15 p-8 bg-[#18110B]">
            <span className="text-xl font-serif text-[#C97B4A] mb-4 block font-mono">{t.srv2Num}</span>
            <h3 className="text-lg font-serif text-[#F3E9DD] mb-3">{t.srv2Title}</h3>
            <p className="text-xs text-[#A6907A] leading-relaxed">{t.srv2Desc}</p>
          </div>
          <div className="border border-[#C97B4A]/15 p-8 bg-[#18110B]">
            <span className="text-xl font-serif text-[#C97B4A] mb-4 block font-mono">{t.srv3Num}</span>
            <h3 className="text-lg font-serif text-[#F3E9DD] mb-3">{t.srv3Title}</h3>
            <p className="text-xs text-[#A6907A] leading-relaxed">{t.srv3Desc}</p>
          </div>
        </div>
      </section>

      {/* SLIDE-OUT COMMISSION DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setDrawerOpen(false)} />
          <div className="relative w-full max-w-lg bg-[#140E0A] border-s border-[#C97B4A]/25 h-full z-10 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#C97B4A]/15">
                <span className="text-xs tracking-[0.25em] font-mono text-[#C97B4A] uppercase">{t.drawerTitle}</span>
                <button onClick={() => setDrawerOpen(false)} className="text-xs uppercase text-[#A6907A] hover:text-white p-2">✕</button>
              </div>
              <h3 className="text-2xl font-serif text-[#F3E9DD] mb-2">{t.drawerTitle}</h3>
              <p className="text-xs text-[#A6907A] mb-8">{t.drawerSub}</p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#E0B27E] mb-2">{t.lblName}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Abdullah Al-Mansour | S6 Media"
                    className="w-full bg-[#1A120D] border border-[#C97B4A]/20 p-3.5 text-xs text-white placeholder-[#A6907A]/40 focus:outline-none focus:border-[#C97B4A]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#E0B27E] mb-2">{t.lblPhone}</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full bg-[#1A120D] border border-[#C97B4A]/20 p-3.5 text-xs text-white placeholder-[#A6907A]/40 focus:outline-none focus:border-[#C97B4A]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#E0B27E] mb-2">{t.lblScope}</label>
                  <div className="grid grid-cols-1 gap-2">
                    {['Commercial Still Life', 'Spatial & Architecture', 'Culinary Arts', 'Executive Portraiture'].map((scope) => (
                      <button
                        type="button"
                        key={scope}
                        onClick={() => toggleScope(scope)}
                        className={`text-start p-3 text-xs border transition-all ${
                          scopes.includes(scope)
                            ? 'border-[#C97B4A] bg-[#C97B4A]/15 text-white'
                            : 'border-[#C97B4A]/15 bg-[#18110B] text-[#A6907A] hover:border-[#C97B4A]/40'
                        }`}
                      >
                        {scope} {scopes.includes(scope) ? '✓' : ''}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#E0B27E] mb-2">{t.lblBrief}</label>
                  <textarea
                    rows={3}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="..."
                    className="w-full bg-[#1A120D] border border-[#C97B4A]/20 p-3.5 text-xs text-white placeholder-[#A6907A]/40 focus:outline-none focus:border-[#C97B4A]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C97B4A] text-[#0E0A07] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#E0B27E] transition-all"
                >
                  {t.btnSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#C97B4A]/10 text-center text-[11px] text-[#A6907A] tracking-widest">
        {t.footerText}
      </footer>
    </div>
  );
}