"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function Crafts() {
    const t = useTranslations('Crafts');
    const locale = useLocale();

    const crafts = [
        { title: t('oliveWood'), subtitle: t('oliveWoodSub'), image: "/Exquisite Crafts/Olive Wood.webp", href: `/${locale}/discover/crafts/olive-wood` },
        { title: t('pottery'), subtitle: t('potterySub'), image: "/Exquisite Crafts/pottery.webp", href: `/${locale}/discover/crafts/pottery-mastery` },
        { title: t('chechia'), subtitle: t('chechiaSub'), image: "/Exquisite Crafts/Chechia Hats.webp", href: `/${locale}/discover/crafts/chechia-heritage` },
        { title: t('fouta'), subtitle: t('foutaSub'), image: "/Exquisite Crafts/Fouta Towels.webp", href: `/${locale}/discover/crafts/fouta-heritage` },
        { title: t('copper'), subtitle: t('copperSub'), image: "/Exquisite Crafts/Copper Lamps.webp", href: `/${locale}/discover/crafts/copper-lamps` },
        { title: t('embroidery'), subtitle: t('embroiderySub'), image: "/Exquisite Crafts/Sahel Embroidery.webp", href: `/${locale}/discover/crafts/sahel-embroidery` },
    ];

    // We duplicate the list to create a seamless loop
    const extendedCrafts = [...crafts, ...crafts, ...crafts];
    const [currentIndex, setCurrentIndex] = useState(crafts.length);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setCurrentIndex((prev) => prev + 1);
    }, [isAnimating]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setCurrentIndex((prev) => prev - 1);
    }, [isAnimating]);

    // Handle the infinite loop jump
    useEffect(() => {
        if (currentIndex >= crafts.length * 2) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(crafts.length);
            }, 1200);
            return () => clearTimeout(timer);
        }
        if (currentIndex < crafts.length) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(crafts.length * 2 - 1);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, crafts.length]);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(nextSlide, 7000);
            return () => clearInterval(interval);
        }
    }, [nextSlide, isHovered]);

    return (
        <section id="crafts" className="relative py-24 md:py-48 px-2 md:px-12 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/Exquisite Crafts/crafts bg.webp"
                    alt="Crafts Background"
                    fill
                    className="object-cover opacity-40 brightness-75 contrast-125 saturate-100"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#96611F]/40 via-transparent to-[#1E3A8A]/30" />
            </div>

            {/* Header */}
            <motion.div
                className="relative z-20 text-center mb-12 md:mb-24 max-w-4xl mx-auto px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl md:text-8xl lg:text-9xl font-black uppercase tracking-[0.1em] bg-gradient-to-r from-[#FBBF24] via-[#F5F5DC] to-[#96611F] bg-clip-text text-transparent drop-shadow-4xl mb-4 md:mb-6 leading-none">
                    {t('title')}
                </h2>
                <p className="text-lg md:text-3xl text-white font-light tracking-widest uppercase italic bg-black/20 backdrop-blur-sm inline-block px-6 py-1.5 md:px-8 md:py-2 rounded-full">
                    {t('subtitle')}
                </p>
            </motion.div>

            {/* Sliding Track Viewport - Now with swipe detection */}
            <div
                dir="ltr"
                className="relative max-w-7xl mx-auto overflow-hidden px-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex gap-4 md:gap-8"
                    drag="x"
                    dragConstraints={{ left: -10000, right: 10000 }}
                    onDragEnd={(_e, { offset }) => {
                        if (offset.x < -50) nextSlide();
                        else if (offset.x > 50) prevSlide();
                    }}
                    animate={{ x: -(currentIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 200 + 16 : 296 + 32)) }}
                    transition={{
                        duration: 0.8,
                        ease: [0.23, 1, 0.32, 1], // More energetic ease
                    }}
                    onAnimationStart={() => setIsAnimating(true)}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    {extendedCrafts.map((craft, index) => (
                        <motion.div
                            key={`${craft.title}-${index}`}
                            className="flex-none w-[200px] md:w-[296px] h-[45vh] md:h-[65vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/10 hover:border-[#FBBF24] transition-all duration-500 group relative bg-black"
                            whileHover={{ scale: 1.05, y: -15 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Image
                                src={craft.image}
                                alt={craft.title}
                                fill
                                className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 pointer-events-none opacity-80 group-hover:opacity-100"
                            />

                            {/* Dynamic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white z-10">
                                <motion.div
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <h3 className="text-xl md:text-3xl font-black drop-shadow-2xl mb-1 uppercase tracking-tight leading-none italic">
                                        {craft.title}
                                    </h3>
                                    <p className="text-[#FBBF24] text-[10px] md:text-xs uppercase tracking-[0.3em] font-black mb-6">
                                        {craft.subtitle}
                                    </p>

                                    <Link href={craft.href}>
                                        <motion.button
                                            className="w-full py-3 md:py-4 bg-gradient-to-r from-[#FBBF24] to-[#96611F] text-black font-black text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.4)] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-[#FBBF24]/40 active:scale-95"
                                        >
                                            {t('exploreCraft')}
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Energetic Glow Effect on Hover */}
                            <div className="absolute -inset-2 bg-[#FBBF24]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Controls */}
            <div className="flex justify-center items-center space-x-8 md:space-x-12 mt-12 md:mt-24 relative z-20">
                <motion.button
                    onClick={prevSlide}
                    className="p-3 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl text-[#FBBF24] hover:bg-white/10 shadow-2xl transition-all"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>

                {/* Progress Indicator */}
                <div className="flex gap-2">
                    {crafts.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 transition-all duration-500 rounded-full ${currentIndex % crafts.length === i ? 'w-8 bg-[#FBBF24]' : 'w-2 bg-white/20'}`}
                        />
                    ))}
                </div>

                <motion.button
                    onClick={nextSlide}
                    className="p-3 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl text-[#FBBF24] hover:bg-white/10 shadow-2xl transition-all"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>
        </section>
    );
}
