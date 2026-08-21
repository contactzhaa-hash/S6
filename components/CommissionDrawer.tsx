'use client';

import React, { useState } from 'react';

interface DrawerProps {
  lang: 'en' | 'ar';
  isOpen: boolean;
  onClose: () => void;
}

export default function CommissionDrawer({ lang, isOpen, onClose }: DrawerProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [scopes, setScopes] = useState<string[]>([]);
  const [brief, setBrief] = useState('');

  if (!isOpen) return null;

  const isAr = lang === 'ar';

  const scopeOptions = [
    { en: 'Product Photography', ar: 'تصوير المنتجات والاستوديو' },
    { en: 'Cinematic Videography', ar: 'الإنتاج السينمائي والإعلاني' },
    { en: 'Luxury Print & Packaging', ar: 'المطبوعات والتغليف الفاخر' },
    { en: 'Full Brand Strategy', ar: 'استراتيجية الهوية البصرية والتسويق' }
  ];

  const toggleScope = (scope: string) => {
    setScopes(prev => prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]);
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneTarget = '966551692078';
    const text = isAr
      ? `مرحباً S6 Media،\nطلب مشروع جديد:\nالاسم والجهة: ${name}\nرقم التواصل: ${phone}\nالمجال: ${scopes.join(', ') || '—'}\nالتفاصيل: ${brief || '—'}`
      : `Hello S6 Media,\nNew Brand Commission Request:\nName & Entity: ${name}\nPhone: ${phone}\nScopes: ${scopes.join(', ') || '—'}\nBrief: ${brief || '—'}`;
    window.open(`https://wa.me/${phoneTarget}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#080B0F] border-s border-[#D6B278]/25 h-full z-10 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#D6B278]/20">
            <span className="text-[11px] tracking-[0.3em] font-mono text-[#D6B278] uppercase">
              {isAr ? 'طلب مشروع جديد' : 'Commission Studio'}
            </span>
            <button onClick={onClose} className="text-sm uppercase text-[#94A3B8] hover:text-white p-2">✕</button>
          </div>

          <h3 className="text-2xl font-serif text-[#F8FAFC] mb-2">
            {isAr ? 'لنصنع عملاً استثنائياً معاً' : 'Let’s Shape Your Visual Standard'}
          </h3>
          <p className="text-xs text-[#94A3B8] mb-8 font-light leading-relaxed">
            {isAr ? 'متاحون للمشاريع والحملات التجارية في بريدة وكافة أنحاء المملكة والخليج.' : 'Available for commercial campaigns and visual direction across Buraidah and the GCC.'}
          </p>

          <form onSubmit={handleWhatsApp} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#F0D4A3] mb-2 font-mono">
                {isAr ? 'الاسم والجهة / الشركة' : 'Client Name & Brand Entity'}
              </label>
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
              <label className="block text-[10px] uppercase tracking-widest text-[#F0D4A3] mb-2 font-mono">
                {isAr ? 'رقم التواصل / واتساب' : 'WhatsApp / Contact Phone'}
              </label>
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
              <label className="block text-[10px] uppercase tracking-widest text-[#F0D4A3] mb-2 font-mono">
                {isAr ? 'نوع الخدمات المطلوبة' : 'Commission Disciplines'}
              </label>
              <div className="grid grid-cols-1 gap-2">
                {scopeOptions.map((opt) => {
                  const val = isAr ? opt.ar : opt.en;
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
              <label className="block text-[10px] uppercase tracking-widest text-[#F0D4A3] mb-2 font-mono">
                {isAr ? 'نبذة عن المشروع والتطلعات' : 'Project Scope & Deliverables'}
              </label>
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
              {isAr ? 'إرسال التفاصيل عبر واتساب' : 'Dispatch Brief to WhatsApp'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}