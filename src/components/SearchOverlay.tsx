"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { discoverData } from "@/lib/discoverData";
import { useTranslations, useLocale } from 'next-intl';

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const t = useTranslations('Search');
    const locale = useLocale();

    const searchData = useMemo(() => {
        return Object.values(discoverData).map(item => ({
            id: item.id,
            title: item.title,
            category: item.category,
            description: item.description,
            categoryDisplay: item.category.charAt(0).toUpperCase() + item.category.slice(1)
        }));
    }, []);

    const results = useMemo(() => {
        if (!query) return [];
        return searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, searchData]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleSelect = (category: string, id: string) => {
        onClose();
        // Construct the localized path
        router.push(`/${locale}/discover/${category}/${id}`);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] flex items-start justify-center pt-[10vh] px-6"
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

                    {/* Search Container */}
                    <motion.div
                        initial={{ y: -20, scale: 0.95 }}
                        animate={{ y: 0, scale: 1 }}
                        className="relative w-full max-w-2xl bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Input Area */}
                        <div className="flex items-center px-8 py-6 border-b border-white/10">
                            <svg className="w-6 h-6 text-white/40 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={t('placeholder')}
                                className="w-full bg-transparent text-xl font-sans text-white outline-none placeholder:text-white/20"
                            />
                            <button onClick={onClose} className="ml-4 text-white/30 hover:text-white text-sm font-black uppercase tracking-widest">{t('esc')}</button>
                        </div>

                        {/* Results Area */}
                        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                            {query && results.length === 0 && (
                                <div className="py-20 text-center">
                                    <p className="text-white/40 text-lg">{t('noResults')} "{query}"</p>
                                </div>
                            )}

                            {!query && (
                                <div className="p-4">
                                    <p className="text-white/30 text-[10px] uppercase font-bold tracking-[0.2em] mb-4">{t('popular')}</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["Ribat", "Marina", "Mausoleum", "Medina"].map(pop => (
                                            <button
                                                key={pop}
                                                onClick={() => setQuery(pop)}
                                                className="text-left p-3 rounded-xl bg-white/5 text-white/70 hover:bg-[#FBBF24] hover:text-black transition-all font-black uppercase tracking-tighter"
                                            >
                                                {pop}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {results.map((result) => (
                                <button
                                    key={result.id}
                                    onClick={() => handleSelect(result.category, result.id)}
                                    className="w-full flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left border border-transparent hover:border-white/10 group mb-2"
                                >
                                    <div className="mt-1 w-10 h-10 bg-[#FBBF24]/10 rounded-xl flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">
                                        {result.category === "attractions" ? "🏰" : result.category === "destinations" ? "📍" : "✨"}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-white font-bold text-lg">{result.title}</h4>
                                            <span className="text-[10px] text-[#FBBF24] font-black uppercase tracking-widest px-2 py-0.5 border border-[#FBBF24]/30 rounded-md">
                                                {result.categoryDisplay}
                                            </span>
                                        </div>
                                        <p className="text-white/40 text-sm line-clamp-1">{result.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
