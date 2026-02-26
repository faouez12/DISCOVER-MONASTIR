"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function MysteryClub() {
    const t = useTranslations('MysteryClub');
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // Simulate lead capture
        console.log("New Club Member:", email);
        setIsSubmitted(true);
    };

    return (
        <section id="mystery-club" className="relative py-24 bg-zinc-950 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FBBF24]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E3A8A]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 md:p-16 rounded-[3rem] shadow-2xl backdrop-blur-xl"
                        >
                            <motion.span
                                className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#FBBF24] border border-[#FBBF24]/30 rounded-full bg-[#FBBF24]/5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {t('badge')}
                            </motion.span>

                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                                {t('title')}
                            </h2>

                            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                {t('description')}
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    required
                                    placeholder={t('placeholder')}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-grow bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white font-bold outline-none focus:border-[#FBBF24] transition-all"
                                />
                                <button
                                    type="submit"
                                    className="px-10 py-5 bg-[#FBBF24] text-black font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
                                >
                                    {t('button')}
                                </button>
                            </form>

                            <p className="mt-8 text-white/30 text-[10px] uppercase tracking-widest font-medium">
                                Join 1,200+ travelers exploring the Sahel.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/5 border border-[#FBBF24]/30 p-12 md:p-20 rounded-[3rem] shadow-2xl backdrop-blur-3xl"
                        >
                            <div className="w-24 h-24 bg-[#FBBF24] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(251,191,36,0.5)]">
                                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">{t('successTitle')}</h2>
                            <p className="text-white/60 text-xl font-light">{t('successDescription')}</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-10 text-[#FBBF24] uppercase text-xs font-bold tracking-widest hover:underline"
                            >
                                Send another invite
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
