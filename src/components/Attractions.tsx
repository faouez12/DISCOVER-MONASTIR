"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function Attractions() {
    const t = useTranslations('Attractions');
    const locale = useLocale();

    const stories = [
        { title: t('ribatDawn'), image: "/attractions/Ribat Dawn Patrol.webp", href: `/${locale}/discover/attractions/ribat-dawn-patrol` },
        { title: t('mausoleumLegacy'), image: "/attractions/Bourguibas Golden Legacy.webp", href: `/${locale}/discover/attractions/mausoleum-legacy` },
        { title: t('marinaTwilight'), image: "/attractions/Marina Twilight Escape.webp", href: `/${locale}/discover/attractions/marina-twilight-escape` },
        { title: t('medinaHunt'), image: "/attractions/Medina Treasure Hunt.webp", href: `/${locale}/discover/attractions/medina-treasure-hunt` },
        { title: t('hammamSwim'), image: "/attractions/Hammam Said Secret Swim.webp", href: `/${locale}/discover/attractions/hammam-said-swim` },
        { title: t('beachSolitude'), image: "/attractions/Beach Solitude.webp", href: `/${locale}/discover/attractions/beach-solitude` },
        { title: t('cemeteryWhispers'), image: "/attractions/Cemetery Sea Whispers.webp?v=2", href: `/${locale}/discover/attractions/cemetery-whispers` },
        { title: t('caveQuest'), image: "/attractions/Ghdamsi Cave Quest.webp", href: `/${locale}/discover/attractions/ghdamsi-cave` },
        { title: t('museumChronicles'), image: "/attractions/bourguiba meusiem.webp", href: `/${locale}/discover/attractions/museum-museum` },
    ];

    const extendedStories = Array(10).fill(stories).flat();

    const [currentIndex, setCurrentIndex] = useState(stories.length * 5);
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
        if (currentIndex >= stories.length * 7 || currentIndex <= stories.length * 3) {
            setIsSnapping(true);
            const normalizedIndex = (currentIndex % stories.length) + (stories.length * 5);
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

    const step = windowWidth < 768 ? 160 + 16 : 320 + 32;
    const centerOffset = isMounted ? (windowWidth / 2) - ((windowWidth < 768 ? 160 : 320) / 2) : 0;

    if (!isMounted) {
        return (
            <section id="attractions" className="relative py-24 md:py-48 bg-black min-h-screen" />
        );
    }

    return (
        <section id="attractions" className="relative py-24 md:py-48 px-0 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/attractions/love.webp"
                    alt="Attractions Background"
                    fill
                    className="object-cover opacity-20 brightness-50 contrast-125 saturate-50"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/30 via-transparent to-[#96611F]/20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full overflow-hidden">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#FBBF24] via-white to-[#96611F] bg-clip-text text-transparent drop-shadow-2xl uppercase tracking-[0.15em] mb-2 leading-none">
                        {t('title')}
                    </h2>
                    <p className="text-sm md:text-2xl text-white/40 font-light tracking-[0.4em] md:tracking-[0.6em] uppercase italic">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* The Slider Reel */}
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
                            if (offset.x < -40) nextSlide();
                            else if (offset.x > 40) prevSlide();
                            handleManualInteraction();
                        }}
                        animate={{ x: -(currentIndex * step) + centerOffset }}
                        transition={transition}
                        onAnimationComplete={handleAnimationComplete}
                    >
                        {extendedStories.map((story, index) => (
                            <motion.div
                                key={`${story.title}-${index}`}
                                className="flex-none w-40 md:w-80 h-[300px] md:h-[500px] rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-white/5"
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out pointer-events-none"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-40 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 z-10" />

                                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-10 z-20">
                                    <div className="md:transform md:translate-y-12 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                                        <h3 className="text-sm md:text-2xl font-black text-white leading-tight uppercase tracking-wide mb-2 md:mb-6">
                                            {story.title}
                                        </h3>

                                        <Link href={story.href}>
                                            <motion.button
                                                className="group/btn px-4 py-2 md:px-8 md:py-3.5 bg-gradient-to-r from-[#FBBF24] to-[#96611F] text-black font-black text-[10px] md:text-xs uppercase tracking-widest rounded-lg md:rounded-xl flex items-center gap-2 md:gap-3 shadow-xl hover:shadow-[#FBBF24]/30 transition-all active:scale-95"
                                            >
                                                {t('discover')}
                                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                            </motion.button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center space-x-6 md:space-x-12 mt-12 md:mt-20">
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
                                    width: `${((currentIndex % stories.length) / (stories.length - 1)) * 100}%`
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
                </div>
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
