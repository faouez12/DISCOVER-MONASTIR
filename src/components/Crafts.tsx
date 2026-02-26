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

    const extendedCrafts = Array(12).fill(crafts).flat();

    const [currentIndex, setCurrentIndex] = useState(crafts.length * 6);
    const [isHovered, setIsHovered] = useState(false);
    const [isSnapping, setIsSnapping] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const [autoDelay, setAutoDelay] = useState(5000);
    const manualTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setIsMounted(true);
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        if (isSnapping) return;
        setCurrentIndex((prev) => prev + 1);
    }, [isSnapping]);

    const prevSlide = useCallback(() => {
        if (isSnapping) return;
        setCurrentIndex((prev) => prev - 1);
    }, [isSnapping]);

    const handleManualInteraction = useCallback(() => {
        setAutoDelay(30000);
        if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
        manualTimerRef.current = setTimeout(() => {
            setAutoDelay(5000);
        }, 30000);
    }, []);

    const handleAnimationComplete = () => {
        if (currentIndex >= crafts.length * 9 || currentIndex <= crafts.length * 3) {
            setIsSnapping(true);
            const normalizedIndex = (currentIndex % crafts.length) + (crafts.length * 6);
            setCurrentIndex(normalizedIndex);
        } else {
            setIsSnapping(false);
        }
    };

    useEffect(() => {
        if (isHovered || isSnapping || !isMounted) return;

        const timer = setTimeout(() => {
            nextSlide();
        }, autoDelay);

        return () => clearTimeout(timer);
    }, [currentIndex, isHovered, isSnapping, autoDelay, nextSlide, isMounted]);

    const transition = isSnapping
        ? { duration: 0 } as const
        : { type: "spring" as const, stiffness: 300, damping: 35, mass: 1 } as const;

    const step = windowWidth < 768 ? 160 + 16 : 300 + 32;
    const centerOffset = isMounted ? (windowWidth / 2) - ((windowWidth < 768 ? 160 : 300) / 2) : 0;

    // Prevent hydration mismatch by using isMounted
    if (!isMounted) {
        return (
            <section id="crafts" className="relative py-24 md:py-48 bg-black min-h-screen">
                <div className="flex justify-center items-center h-full">
                    <div className="w-12 h-12 border-4 border-[#FBBF24] border-t-transparent rounded-full animate-spin"></div>
                </div>
            </section>
        );
    }

    return (
        <section id="crafts" className="relative py-24 md:py-48 px-0 overflow-hidden min-h-screen flex flex-col justify-center">
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
                <h2 className="text-4xl md:text-8xl lg:text-9xl font-black uppercase tracking-[0.1em] bg-gradient-to-r from-[#FBBF24] via-[#F5F5DC] to-[#96611F] bg-clip-text text-transparent drop-shadow-4xl mb-4 md:mb-6 leading-none text-center">
                    {t('title')}
                </h2>
                <div className="flex justify-center">
                    <p className="text-lg md:text-3xl text-white font-light tracking-widest uppercase italic bg-black/20 backdrop-blur-sm inline-block px-6 py-1.5 md:px-8 md:py-2 rounded-full text-center">
                        {t('subtitle')}
                    </p>
                </div>
            </motion.div>

            {/* Sliding Track Viewport */}
            <div
                dir="ltr"
                className="relative cursor-grab active:cursor-grabbing max-w-[100vw] overflow-visible"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex gap-4 md:gap-8"
                    drag="x"
                    dragConstraints={{ left: -20000, right: 20000 }}
                    dragElastic={1}
                    onDragEnd={(_e, { offset }) => {
                        if (offset.x < -30) nextSlide();
                        else if (offset.x > 30) prevSlide();
                        handleManualInteraction();
                    }}
                    animate={{ x: -(currentIndex * step) + centerOffset }}
                    transition={transition}
                    onAnimationComplete={handleAnimationComplete}
                >
                    {extendedCrafts.map((craft, index) => (
                        <motion.div
                            key={`${craft.title}-${index}`}
                            className="flex-none w-40 md:w-[300px] h-[45vh] md:h-[65vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/10 hover:border-[#FBBF24] transition-all duration-500 group relative bg-black"
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Image
                                src={craft.image}
                                alt={craft.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 pointer-events-none opacity-80 group-hover:opacity-100"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white z-20">
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl md:text-3xl font-black drop-shadow-2xl mb-1 uppercase tracking-tight leading-none italic text-white">
                                        {craft.title}
                                    </h3>
                                    <p className="text-[#FBBF24] text-[10px] md:text-xs uppercase tracking-[0.3em] font-black mb-6">
                                        {craft.subtitle}
                                    </p>

                                    <Link href={craft.href}>
                                        <motion.button
                                            className="w-full py-3 md:py-4 bg-gradient-to-r from-[#FBBF24] to-[#96611F] text-black font-black text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-xl shadow-xl hover:shadow-[#FBBF24]/40 active:scale-95 flex items-center justify-center gap-2"
                                        >
                                            {t('exploreCraft')}
                                            <span>→</span>
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-6 md:space-x-12 mt-12 md:mt-20 relative z-20">
                <motion.button
                    onClick={() => { prevSlide(); handleManualInteraction(); }}
                    className="p-3 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl text-[#FBBF24] hover:bg-white/10 transition-all shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>

                <div className="relative w-32 md:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-[#FBBF24] rounded-full"
                        animate={{
                            width: `${((currentIndex % crafts.length) / (crafts.length - 1)) * 100}%`
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                </div>

                <motion.button
                    onClick={() => { nextSlide(); handleManualInteraction(); }}
                    className="p-3 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl text-[#FBBF24] hover:bg-white/10 transition-all shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 z-50">
                <Image
                    src="/section-footer.webp"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
}
