"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function Wonders() {
    const t = useTranslations('Wonders');
    const locale = useLocale();

    const secrets = [
        {
            title: t('hammamCove'),
            subtitle: t('hammamCoveSub'),
            image: "/lesser knows/Hammam Said Cove.webp",
            href: `/${locale}/discover/secrets/hammam-said-cove`
        },
        {
            title: t('swaniBeach'),
            subtitle: t('swaniBeachSub'),
            image: "/lesser knows/swani.webp",
            href: `/${locale}/discover/secrets/swani-beach`
        },
        {
            title: t('ghdamsiCoast'),
            subtitle: t('ghdamsiCoastSub'),
            image: "/lesser knows/ghdamsi.webp",
            href: `/${locale}/discover/secrets/ghdamsi-coast`
        },
        {
            title: t('oldPort'),
            subtitle: t('oldPortSub'),
            image: "/lesser knows/Old Port & Fishermen Quay.webp",
            href: `/${locale}/discover/secrets/old-port`
        },
        {
            title: t('seaCemetery'),
            subtitle: t('seaCemeterySub'),
            image: "/lesser knows/cemetry-monastir.webp",
            href: `/${locale}/discover/secrets/cemetery-whispers`
        },
        {
            title: t('viewpointDune'),
            subtitle: t('viewpointDuneSub'),
            image: "/lesser knows/love.webp",
            href: `/${locale}/discover/secrets/viewpoint-dune`
        },
        {
            title: t('medinaAlleys'),
            subtitle: t('medinaAlleysSub'),
            image: "/lesser knows/old allies.webp",
            href: `/${locale}/discover/secrets/medina-alleys`
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % secrets.length);
    }, [secrets.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + secrets.length) % secrets.length);
    }, [secrets.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section id="wonders" className="relative py-24 md:py-48 px-4 md:px-12 overflow-hidden min-h-screen flex flex-col items-center justify-center">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/lesser knows/bg lesser knows.webp"
                    alt="Lesser Known Background"
                    fill
                    className="object-cover opacity-20 brightness-50 contrast-125 saturate-50"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/30 via-transparent to-[#96611F]/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
            </div>

            {/* Centered Title */}
            <motion.div
                className="relative z-50 text-center mb-12 md:mb-24 max-w-4xl mx-auto px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-7xl lg:text-9xl font-black bg-gradient-to-r from-[#FBBF24] via-white to-[#96611F] bg-clip-text text-transparent drop-shadow-2xl uppercase tracking-[0.05em] mb-4 md:mb-6 leading-tight">
                    {t('title')}
                </h2>
                <p className="text-sm md:text-3xl text-white/50 font-light tracking-[0.2em] md:tracking-[0.4em] uppercase italic">
                    {t('subtitle')}
                </p>
            </motion.div>

            {/* 3-Card Carousel Slider Container - Now with swipe detection */}
            <motion.div
                dir="ltr"
                className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center pt-12 md:pt-24 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_e, { offset }) => {
                    const swipe = offset.x;
                    if (swipe < -50) nextSlide();
                    else if (swipe > 50) prevSlide();
                }}
            >
                {secrets.map((secret, index) => {
                    let position = index - currentIndex;
                    if (position < -Math.floor(secrets.length / 2)) position += secrets.length;
                    if (position > Math.floor(secrets.length / 2)) position -= secrets.length;

                    const isMainThree = Math.abs(position) <= 1;

                    return (
                        <motion.div
                            key={secret.title}
                            className={`absolute w-[85vw] md:w-[60vw] max-w-2xl h-[45vh] md:h-[55vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-2 ${position === 0 ? 'border-[#FBBF24]/50' : 'border-white/10'} cursor-pointer`}
                            initial={false}
                            animate={{
                                scale: position === 0 ? 1 : 0.8,
                                x: typeof window !== 'undefined' && window.innerWidth < 768 ? position * (window.innerWidth * 0.9) : position * 450,
                                y: 0,
                                opacity: position === 0 ? 1 : (isMainThree ? 0.4 : 0),
                                zIndex: 50 - Math.abs(position) * 10,
                                rotateY: position * -25,
                                z: Math.abs(position) * -200,
                                filter: position === 0 ? "blur(0px) brightness(1)" : "blur(4px) brightness(0.5)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 30,
                            }}
                            onClick={() => setCurrentIndex(index)}
                            style={{ perspective: "1200px" }}
                        >
                            <Image
                                src={secret.image}
                                alt={secret.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none"
                                sizes="(max-width: 768px) 85vw, 40vw"
                            />

                            {/* Overlay Content for center card */}
                            <AnimatePresence>
                                {position === 0 && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12 z-20"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <motion.h3
                                            className="text-2xl md:text-5xl font-black text-white leading-tight uppercase tracking-wide mb-2 md:mb-4 drop-shadow-2xl"
                                        >
                                            {secret.title}
                                        </motion.h3>
                                        <p className="text-sm md:text-xl text-white/60 font-light italic mb-4 md:mb-8">
                                            {secret.subtitle}
                                        </p>
                                        <Link href={secret.href}>
                                            <motion.button
                                                className="px-6 py-2.5 md:px-8 md:py-3.5 bg-gradient-to-r from-[#FBBF24] to-[#96611F] text-black font-black text-[10px] md:text-xs uppercase tracking-widest rounded-lg md:rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all"
                                            >
                                                {t('discoverStory')}
                                            </motion.button>
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Premium Controls */}
            <div className="flex justify-center items-center space-x-6 md:space-x-12 mt-12 md:mt-20 z-[100]">
                {/* Previous */}
                <motion.button
                    onClick={prevSlide}
                    className="p-3 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl text-[#FBBF24] hover:bg-white/10 shadow-2xl transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>

                {/* Counter / Progress */}
                <div className="flex flex-col items-center gap-2 md:gap-3">
                    <div className="text-white/40 font-bold tracking-[0.2em] md:tracking-[0.5em] text-[10px] md:text-sm uppercase">
                        {String(currentIndex + 1).padStart(2, '0')} — {String(secrets.length).padStart(2, '0')}
                    </div>
                    <div className="w-32 md:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#FBBF24]"
                            animate={{ width: `${((currentIndex + 1) / secrets.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Next */}
                <motion.button
                    onClick={nextSlide}
                    className="p-3 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl text-[#FBBF24] hover:bg-white/10 shadow-2xl transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>
            {/* Ultra-thin section edge */}
            <div className="absolute bottom-0 left-0 w-full h-1 z-[101]">
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
