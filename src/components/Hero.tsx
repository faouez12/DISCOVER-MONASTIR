"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function HeroSlider() {
    const t = useTranslations('HeroSlider');
    const tCTA = useTranslations('CTA');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const slides = [
        { title: t('title1'), subtitle: t('subtitle1'), video: "/videos/overview.mp4" },
        { title: t('title2'), subtitle: t('subtitle2'), video: "/videos/beach.mp4" },
        { title: t('title3'), subtitle: t('subtitle3'), video: "/videos/history.mp4" },
        { title: t('title4'), subtitle: t('subtitle4'), video: "/videos/Marina.mp4" },
        { title: t('title5'), subtitle: t('subtitle5'), video: "/videos/Markets.mp4" },
    ];

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const toggleMute = () => setIsMuted(!isMuted);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.src = slides[currentIndex].video;
        video.muted = isMuted;
        if (video.paused) video.play().catch(() => { });

        const handleEnded = () => nextSlide();
        video.addEventListener("ended", handleEnded);
        return () => video.removeEventListener("ended", handleEnded);
    }, [currentIndex, isMuted, nextSlide, slides]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        })
    };

    const slideTransition = {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
    };

    return (
        <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={slideTransition}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, { offset }) => {
                            const swipe = offset.x;
                            if (swipe < -50) {
                                nextSlide();
                            } else if (swipe > 50) {
                                prevSlide();
                            }
                        }}
                    >
                        {/* Background blurred version for mobile to fill the screen without cropping the main content */}
                        <div className="absolute inset-0 md:hidden">
                            <video
                                src={slides[currentIndex].video}
                                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                                playsInline
                                autoPlay
                                muted
                                loop
                            />
                        </div>

                        {/* Main Video: Contain on mobile to see everything, Cover on desktop for full impact */}
                        <video
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full object-contain md:object-cover pointer-events-none z-10"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            playsInline
                            autoPlay
                            muted
                            preload="auto"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />

            {/* Bottom-Left Horizontal Nav */}
            <div className="absolute bottom-10 left-6 md:bottom-12 md:left-12 flex items-center space-x-3 md:space-x-4 z-20">
                {slides.map((slide, index) => (
                    <motion.div
                        key={slide.subtitle}
                        className={`flex items-center space-x-2 cursor-pointer group ${index === currentIndex
                            ? "text-[#FBBF24]"
                            : "text-white/60 hover:text-white"
                            }`}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentIndex ? "bg-[#FBBF24] scale-125" : "bg-white/40 group-hover:bg-white"
                            }`} />
                        <span className="text-[10px] md:text-sm font-medium uppercase tracking-wider hidden sm:inline">
                            {slide.subtitle}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Center-Bottom Main Title */}
            <motion.div
                className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 text-center w-full px-4 z-20"
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white/95 tracking-tight leading-tight drop-shadow-2xl uppercase">
                    {slides[currentIndex].title}
                </h1>
            </motion.div>

            {/* Bottom-Right Small Play/Mute Button */}
            <div className="absolute bottom-10 right-6 md:bottom-12 md:right-12 z-20">
                <motion.button
                    onClick={toggleMute}
                    className="p-2.5 md:p-3 bg-black/40 backdrop-blur-sm rounded-full text-[#FBBF24] hover:bg-black/60 transition-all hover:scale-110 shadow-2xl border border-white/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMuted ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        )}
                    </svg>
                </motion.button>
            </div>

            {/* Sticky Vertical CTA */}
            <motion.div
                className="fixed right-0 top-[60%] -translate-y-1/2 z-[100]"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 1.5, type: "spring" }}
            >
                <button
                    onClick={() => {
                        const el = document.getElementById("travel-info");
                        if (el) {
                            const top = el.getBoundingClientRect().top + window.scrollY - 80;
                            window.scrollTo({ top, behavior: "smooth" });
                        }
                    }}
                    className="bg-gradient-to-b from-[#FBBF24] to-[#96611F] text-black px-2 md:px-3 py-6 md:py-10 rounded-l-[1rem] md:rounded-l-[1.5rem] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] shadow-[-10px_0_30px_rgba(0,0,0,0.3)] border-l border-white/20 hover:pl-8 transition-all duration-500 group cursor-pointer flex items-center justify-center"
                >
                    <span
                        className="text-[8px] md:text-xs whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                        {tCTA('bookYourTrip')}
                    </span>
                </button>
            </motion.div>
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
