'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useState } from 'react';

export default function CommissionDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
  const scopes = ['Commercial Still Life', 'Spatial & Architecture', 'Culinary Arts', 'Executive Identity'];

  const toggleScope = (scope: string) => {
    setSelectedScopes(prev => 
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#140E0A] border-l border-[#C97B4A]/20 z-50 p-8 md:p-12 overflow-y-auto flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-10">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#C97B4A]">Commission Studio</span>
                <button onClick={onClose} className="p-2 text-[#9E8975] hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="font-serif text-2xl text-[#F5EFEB] mb-2">Initiate Creative Direction</h2>
              <p className="text-xs text-[#9E8975] mb-8 leading-relaxed">Discreet commercial production and spatial documentation in Buraidah and across the GCC.</p>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#E8C194] block mb-3">Select Scope</label>
                  <div className="grid grid-cols-1 gap-2">
                    {scopes.map(scope => (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => toggleScope(scope)}
                        className={`flex items-center justify-between p-3.5 text-xs border text-left transition-all ${
                          selectedScopes.includes(scope)
                            ? 'border-[#C97B4A] bg-[#C97B4A]/10 text-white'
                            : 'border-[#C97B4A]/15 bg-[#1B130E] text-[#9E8975] hover:border-[#C97B4A]/30'
                        }`}
                      >
                        <span>{scope}</span>
                        {selectedScopes.includes(scope) && <Check className="w-4 h-4 text-[#C97B4A]" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#E8C194] block mb-2">Representative & Brand</label>
                  <input
                    type="text"
                    placeholder="E.g. Abdullah | Brand House"
                    className="w-full bg-[#1B130E] border border-[#C97B4A]/20 p-3.5 text-xs text-white placeholder-[#9E8975]/50 focus:outline-none focus:border-[#C97B4A]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#C97B4A]/15">
              <button
                type="button"
                className="w-full py-4 bg-[#C97B4A] text-[#0D0907] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#E8C194] transition-colors"
              >
                Send Request Via WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}