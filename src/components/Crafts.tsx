"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/dist/Draggable";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Draggable);
}

export default function Crafts() {
    const t = useTranslations('Crafts');
    const locale = useLocale();
    const [isMounted, setIsMounted] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Virtual position tracker to keep everything synchronized
    const scrollPos = useRef({ x: 0 });

    const crafts = [
        { title: t('oliveWood'), subtitle: t('oliveWoodSub'), image: "/Exquisite Crafts/Olive Wood.webp", href: `/${locale}/discover/crafts/olive-wood` },
        { title: t('pottery'), subtitle: t('potterySub'), image: "/Exquisite Crafts/pottery.webp", href: `/${locale}/discover/crafts/pottery-mastery` },
        { title: t('chechia'), subtitle: t('chechiaSub'), image: "/Exquisite Crafts/Chechia Hats.webp", href: `/${locale}/discover/crafts/chechia-heritage` },
        { title: t('fouta'), subtitle: t('foutaSub'), image: "/Exquisite Crafts/Fouta Towels.webp", href: `/${locale}/discover/crafts/fouta-heritage` },
        { title: t('copper'), subtitle: t('copperSub'), image: "/Exquisite Crafts/Copper Lamps.webp", href: `/${locale}/discover/crafts/copper-lamps` },
        { title: t('embroidery'), subtitle: t('embroiderySub'), image: "/Exquisite Crafts/Sahel Embroidery.webp", href: `/${locale}/discover/crafts/sahel-embroidery` },
    ];

    const extendedCrafts = [...crafts, ...crafts, ...crafts];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useGSAP(() => {
        if (!trackRef.current || !isMounted) return;

        const track = trackRef.current;
        const isMobile = window.innerWidth < 768;
        const cardWidth = isMobile ? 160 : 320;
        const gap = isMobile ? 16 : 32;
        const totalItems = crafts.length;
        const setWidth = (cardWidth + gap) * totalItems;

        // Initialize Virtual X at the start of the middle set
        scrollPos.current.x = -setWidth;

        // Mathematical wrap function
        const wrapValue = gsap.utils.wrap(-2 * setWidth, -setWidth);

        // Apply initial position
        gsap.set(track, { x: scrollPos.current.x });

        // Draggable Implementation on the Track directly
        Draggable.create(track, {
            type: "x",
            onDrag: function () {
                // Update our virtual tracker based on real drag delta
                scrollPos.current.x += this.deltaX;

                // Set the track with wrapping
                gsap.set(track, {
                    x: scrollPos.current.x,
                    modifiers: {
                        x: (val) => `${wrapValue(parseFloat(val))}px`
                    }
                });
            },
            onDragEnd: function () {
                // Sync the internal Draggable x value with the wrapped track position
                const wrappedX = wrapValue(scrollPos.current.x);
                gsap.set(this.target, { x: wrappedX });
                scrollPos.current.x = wrappedX;
                this.update();
            }
        });

    }, { scope: containerRef, dependencies: [isMounted] });

    const handleManualScroll = (direction: 'next' | 'prev') => {
        if (!trackRef.current) return;

        const isMobile = window.innerWidth < 768;
        const moveAmount = isMobile ? 176 : 352;
        const totalItems = crafts.length;
        const cardWidth = isMobile ? 160 : 320;
        const gap = isMobile ? 16 : 32;
        const setWidth = (cardWidth + gap) * totalItems;
        const wrapValue = gsap.utils.wrap(-2 * setWidth, -setWidth);

        const targetX = direction === 'next' ? scrollPos.current.x - moveAmount : scrollPos.current.x + moveAmount;

        gsap.to(scrollPos.current, {
            x: targetX,
            duration: 0.8,
            ease: "power2.out",
            onUpdate: () => {
                gsap.set(trackRef.current, {
                    x: scrollPos.current.x,
                    modifiers: {
                        x: (val) => `${wrapValue(parseFloat(val))}px`
                    }
                });
            },
            onComplete: () => {
                const wrappedX = wrapValue(scrollPos.current.x);
                scrollPos.current.x = wrappedX;
                const draggables = Draggable.get(trackRef.current);
                if (draggables) {
                    gsap.set(trackRef.current, { x: wrappedX });
                    draggables.update();
                }
            }
        });
    };

    if (!isMounted) return null;

    return (
        <section id="crafts" ref={containerRef} className="relative py-24 md:py-48 bg-black overflow-hidden flex flex-col justify-center min-h-screen lg:min-h-0">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/Exquisite Crafts/crafts bg.webp"
                    alt=""
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

            {/* Infinite Slider Track */}
            <div className="relative z-20">
                <div
                    ref={trackRef}
                    className="flex gap-4 md:gap-8 cursor-grab active:cursor-grabbing px-[20vw] md:px-[40vw] select-none touch-pan-y transform-gpu"
                >
                    {extendedCrafts.map((craft, index) => (
                        <motion.div
                            key={`${craft.title}-${index}`}
                            className="flex-none w-40 md:w-80 h-[300px] md:h-[500px] rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-white/5 bg-zinc-900 pointer-events-auto"
                            whileHover={{ y: -10, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                src={craft.image}
                                alt={craft.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out pointer-events-none opacity-80 group-hover:opacity-100"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 z-10" />

                            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-10 z-20 pointer-events-none">
                                <div className="md:transform md:translate-y-12 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                    <h3 className="text-sm md:text-2xl font-black text-white leading-tight uppercase tracking-wide mb-2 md:mb-6">
                                        {craft.title}
                                    </h3>
                                    <p className="text-[#FBBF24] text-[10px] md:text-xs uppercase tracking-[0.3em] font-black mb-6 hidden md:block">
                                        {craft.subtitle}
                                    </p>

                                    <Link href={craft.href} className="pointer-events-auto">
                                        <button
                                            className="px-4 py-2 md:px-8 md:py-3.5 bg-gradient-to-r from-[#FBBF24] to-[#96611F] text-black font-black text-[10px] md:text-xs uppercase tracking-widest rounded-lg md:rounded-xl flex items-center gap-2 md:gap-3 shadow-xl hover:shadow-[#FBBF24]/30 transition-all active:scale-95"
                                        >
                                            <span className="md:inline hidden">{t('exploreCraft')}</span>
                                            <span className="md:hidden inline font-black tracking-widest">VIEW →</span>
                                            <span className="hidden md:inline transition-transform group-hover:translate-x-1">→</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-6 md:space-x-12 mt-12 md:mt-20 relative z-20">
                <button
                    onClick={() => handleManualScroll('prev')}
                    className="p-3 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl text-[#FBBF24] hover:bg-white/10 transition-all shadow-2xl active:scale-90"
                >
                    <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="relative w-32 md:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-[#FBBF24] rounded-full"
                        initial={{ width: "30%" }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                </div>

                <button
                    onClick={() => handleManualScroll('next')}
                    className="p-3 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl text-[#FBBF24] hover:bg-white/10 transition-all shadow-2xl active:scale-90"
                >
                    <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
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
