"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function DestinationsSection() {
    const t = useTranslations('Destinations');
    const locale = useLocale();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const destinations = [
        { title: t('ribat'), subtitle: t('ribatSub'), image: "/destinations/ribat.webp", href: `/${locale}/discover/attractions/ribat-dawn-patrol` },
        { title: t('mausoleum'), subtitle: t('mausoleumSub'), image: "/destinations/Mausoleum.webp", href: `/${locale}/discover/attractions/mausoleum-legacy` },
        { title: t('beaches'), subtitle: t('beachesSub'), image: "/destinations/beach.webp", href: `/${locale}/discover/attractions/beach-solitude` },
        { title: t('marina'), subtitle: t('marinaSub'), image: "/destinations/marina.webp", href: `/${locale}/discover/attractions/marina-twilight-escape` },
        { title: t('medina'), subtitle: t('medinaSub'), image: "/destinations/old medina.webp", href: `/${locale}/discover/attractions/medina-treasure-hunt` },
        { title: t('mosque'), subtitle: t('mosqueSub'), image: "/destinations/mosque.webp", href: `/${locale}/discover/attractions/mausoleum-legacy` },
        { title: t('museum'), subtitle: t('museumSub'), image: "/destinations/bourguiba meusiem.webp", href: `/${locale}/discover/attractions/museum-museum` },
    ];

    const intervalRef = useRef<NodeJS.Timeout>(undefined);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, [destinations.length]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    }, [destinations.length]);

    const startTimer = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, 7000);
    }, [nextSlide]);

    const handleManualInteraction = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, 30000);
    }, [nextSlide]);

    const manualNext = () => {
        nextSlide();
        handleManualInteraction();
    };

    const manualPrev = () => {
        prevSlide();
        handleManualInteraction();
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startTimer]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0
        })
    };

    return (
        <section id="destinations" className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-gradient-to-b from-[#1E3A8A]/10 to-[#96611F]/20 pt-20 md:pt-32">
            {/* Centered Title */}
            <motion.div
                className="relative z-20 text-center mb-12 md:mb-24 px-6 md:px-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#FBBF24] via-[#F5F5DC] to-[#96611F] bg-clip-text text-transparent drop-shadow-2xl uppercase tracking-[0.1em]">
                    {t('title')}
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl text-white/90 mt-4 md:mt-6 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                    {t('subtitle')}
                </p>
            </motion.div>


            {/* Image Slider - Now with swipe detection */}
            <div className="absolute inset-0">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring" as const, stiffness: 300, damping: 30 },
                            opacity: { duration: 0.8 }
                        }}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_e, { offset }) => {
                            const swipeValue = offset.x;
                            if (swipeValue < -50) {
                                manualNext();
                            } else if (swipeValue > 50) {
                                manualPrev();
                            }
                        }}
                    >
                        <Image
                            src={destinations[currentIndex].image}
                            alt={destinations[currentIndex].title}
                            fill
                            className="object-cover brightness-75 pointer-events-none"
                            priority={currentIndex === 0}
                            sizes="100vw"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />

            {/* Controls Container: Arrows + Title + Discover More */}
            <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex items-center space-x-4 md:space-x-8 z-20">
                {/* Left Arrow */}
                <motion.button
                    onClick={manualPrev}
                    className="p-2 md:p-4 bg-white/20 backdrop-blur-sm rounded-full text-[#FBBF24] hover:bg-white/40 transition-all hover:scale-110 shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>

                {/* Subtitle */}
                <motion.div
                    className="text-center min-w-[140px] md:min-w-[200px]"
                    key={`subtitle-${currentIndex}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#FBBF24] rounded-full mx-auto mb-2 md:mb-3 animate-pulse" />
                    <h3 className="text-xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-[0.2em] md:tracking-[0.3em] drop-shadow-2xl leading-tight">
                        {destinations[currentIndex].subtitle}
                    </h3>
                </motion.div>

                {/* Right Arrow */}
                <motion.button
                    onClick={manualNext}
                    className="p-2 md:p-4 bg-white/20 backdrop-blur-sm rounded-full text-[#FBBF24] hover:bg-white/40 transition-all hover:scale-110 shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>

            {/* Discover More Button */}
            <motion.div
                className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-center z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <Link href={destinations[currentIndex].href}>
                    <motion.button className="px-6 py-2.5 md:px-12 md:py-4 bg-gradient-to-r from-[#FBBF24] to-[#96611F] text-black font-bold text-sm md:text-lg rounded-full shadow-2xl hover:shadow-gold/50 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                        {t('discoverMore')}
                    </motion.button>
                </Link>
            </motion.div>

            {/* Right decorative dots */}
            <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 flex flex-col space-y-3 md:space-y-4 opacity-60 hidden sm:flex">
                {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white ${i === currentIndex % 4 ? 'md:w-4 scale-125 bg-[#FBBF24]' : ''}`} />
                ))}
            </div>
            {/* Ultra-thin section edge */}
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
