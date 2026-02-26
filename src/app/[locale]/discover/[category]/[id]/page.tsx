"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { discoverData } from "@/lib/discoverData";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { useTranslations, useLocale, useMessages } from 'next-intl';

export default function DiscoverPage({ params }: { params: Promise<{ category: string; id: string }> }) {
    const { category, id } = use(params);
    const baseData = discoverData[id];
    const [activeSeason, setActiveSeason] = useState<"spring" | "summer" | "autumn" | "winter">("summer");
    const t = useTranslations('Discover');
    const locale = useLocale();
    const messages = useMessages();

    if (!baseData) return notFound();

    // Safely get translated data using messages object (avoids td.raw() throwing on missing keys)
    let data = { ...baseData };
    try {
        const raw = ((messages as any)?.DiscoverData)?.[id];
        if (raw) {
            // Merge simple string fields
            const simpleFields = ['title', 'subtitle', 'description', 'story', 'pledge'];
            for (const field of simpleFields) {
                if (raw[field] && typeof raw[field] === 'string') {
                    (data as any)[field] = raw[field];
                }
            }
            // Merge nested objects
            if (raw.sensory && typeof raw.sensory === 'object') data.sensory = { ...baseData.sensory, ...raw.sensory };
            if (raw.kit && typeof raw.kit === 'object') data.kit = { ...baseData.kit, ...raw.kit };
            if (raw.seasons && typeof raw.seasons === 'object') data.seasons = { ...baseData.seasons, ...raw.seasons };
            if (raw.quote && typeof raw.quote === 'object') data.quote = raw.quote;
            // Merge array fields
            if (raw.tags && Array.isArray(raw.tags)) data.tags = raw.tags;
            if (raw.facts && Array.isArray(raw.facts)) data.facts = raw.facts;
            if (raw.chronology && Array.isArray(raw.chronology)) data.chronology = raw.chronology;
            // Insider: normalize 'description' key → 'detail' to match TS type
            if (raw.insider && Array.isArray(raw.insider)) {
                data.insider = raw.insider.map((tip: any) => ({
                    title: tip.title ?? '',
                    detail: tip.detail ?? tip.description ?? ''
                }));
            }
        }
    } catch (e) {
        // Fallback to static baseData if anything goes wrong
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
            <Navbar />

            {/* --- HERO SECTION: The "Ken Burns" Cinema --- */}
            <section className="relative h-[100vh] w-full overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, ease: "easeOut" }}
                >
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover brightness-[0.5] contrast-125"
                        priority
                    />
                </motion.div>

                {/* Soul Glow Overlay */}
                <div
                    className="absolute inset-0 opacity-40 z-10"
                    style={{
                        background: `radial-gradient(circle at center, transparent 0%, ${data.accentColor}55 100%)`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />

                {/* Hero Title & Tags */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    >
                        <div className="flex gap-4 mb-10 justify-center">
                            {data.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-6 py-2 rounded-full border border-white/10 backdrop-blur-xl text-[10px] uppercase tracking-[0.4em] font-black bg-white/5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-7xl md:text-[8rem] lg:text-[12rem] font-black uppercase tracking-tighter mb-4 leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-white/40 font-light tracking-[0.5em] uppercase italic">
                            {data.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Floating "Scroll Down" Particle */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">{t('journeyBegins')}</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-20" />
                </motion.div>
            </section>

            {/* --- CONTENT SECTION: The "Sensory Scroll" --- */}
            <section className="relative py-48 px-6 md:px-24 max-w-7xl mx-auto z-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                    {/* Left: The Poetic Legend */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-16"
                        >
                            <div className="space-y-4">
                                <h2 className="text-sm font-black text-[#FBBF24] uppercase tracking-[1em]">{t('chronicle')}</h2>
                                <p className="text-3xl md:text-6xl font-light leading-tight text-white/95">
                                    {data.description}
                                </p>
                            </div>

                            <div className="prose prose-invert prose-2xl max-w-none">
                                {data.story.split('\n\n').map((para: string, i: number) => (
                                    <p key={i} className={`text-white/60 leading-relaxed font-light ${i === 0 ? 'first-letter:text-8xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:text-[#FBBF24] first-letter:mt-2' : ''}`}>
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* --- LOCAL WHISPER (QUOTE) --- */}
                            {data.quote && (
                                <motion.div
                                    className="py-16 border-y border-white/5"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-5xl md:text-7xl text-[#FBBF24]/20 font-serif absolute -translate-y-6">“</div>
                                    <p className="text-2xl md:text-4xl font-light italic text-[#FBBF24] mb-6 relative z-10 pl-10 pr-6">
                                        {typeof data.quote === 'string' ? data.quote : data.quote.text}
                                    </p>
                                    {typeof data.quote !== 'string' && data.quote.author && (
                                        <p className="text-sm uppercase tracking-[0.5em] text-white/30 font-black pl-10">— {data.quote.author}</p>
                                    )}
                                </motion.div>
                            )}
                        </motion.div>
                    </div>

                    {/* Right: The Fact Grid (Sticky) */}
                    <div className="lg:col-span-12 xl:col-span-5">
                        <div className="sticky top-32 space-y-12">
                            {/* Facts Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
                                {data.facts.map((fact: any, i: number) => (
                                    <motion.div
                                        key={fact.label}
                                        className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl group hover:border-[#FBBF24]/50 transition-all duration-700"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black mb-4 block group-hover:text-[#FBBF24] transition-colors">{fact.label}</span>
                                        <span className="text-3xl font-black text-white">{fact.value}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* --- EXPLORER'S KIT --- */}
                            {data.kit && (
                                <motion.div
                                    className="p-10 rounded-[3rem] bg-white/5 border border-white/10 space-y-10"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xs font-black uppercase tracking-[0.6em] text-white/20 border-b border-white/5 pb-6">{t('explorersKit')}</h3>
                                    <div className="space-y-12">
                                        <div className="flex gap-8 items-center group">
                                            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-[#FBBF24] group-hover:from-[#FBBF24] group-hover:to-[#96611F] group-hover:text-black transition-all duration-700 shadow-2xl">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-2 font-medium">{t('recommendedWear')}</p>
                                                <p className="text-xl text-white font-bold tracking-tight group-hover:text-[#FBBF24] transition-colors">{data.kit.footwear}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 items-center group">
                                            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-[#FBBF24] group-hover:from-[#FBBF24] group-hover:to-[#96611F] group-hover:text-black transition-all duration-700 shadow-2xl">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-2 font-medium">{t('perfectShot')}</p>
                                                <p className="text-xl text-white font-bold tracking-tight group-hover:text-[#FBBF24] transition-colors">{data.kit.photo}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 items-center group">
                                            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-[#FBBF24] group-hover:from-[#FBBF24] group-hover:to-[#96611F] group-hover:text-black transition-all duration-700 shadow-2xl">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-2 font-medium">{t('goldenHour')}</p>
                                                <p className="text-xl text-white font-bold tracking-tight group-hover:text-[#FBBF24] transition-colors">{data.kit.hour}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SENSORY MATRIX SECTION --- */}
            {data.sensory && (
                <section className="py-48 bg-white/5 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 text-center relative z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <span className="text-[11px] uppercase tracking-[0.6em] text-[#FBBF24] font-black mb-6 block">{t('scent')}</span>
                            <p className="text-3xl font-light italic text-white/90 leading-relaxed">{data.sensory.scent}</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <span className="text-[11px] uppercase tracking-[0.6em] text-[#FBBF24] font-black mb-6 block">{t('sound')}</span>
                            <p className="text-3xl font-light italic text-white/90 leading-relaxed">{data.sensory.sound}</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <span className="text-[11px] uppercase tracking-[0.6em] text-[#FBBF24] font-black mb-6 block">{t('touch')}</span>
                            <p className="text-3xl font-light italic text-white/90 leading-relaxed">{data.sensory.touch}</p>
                        </motion.div>
                    </div>
                    {/* Atmospheric Blur Background */}
                    <div className="absolute inset-x-0 top-0 h-full opacity-10 blur-[120px] pointer-events-none"
                        style={{ background: `linear-gradient(to right, transparent, ${data.accentColor}, transparent)` }} />
                </section>
            )}

            {/* --- HIDDEN CHRONOLOGY (TIMELINE) --- */}
            {data.chronology && (
                <section className="py-48 px-6 max-w-5xl mx-auto relative">
                    <div className="text-center mb-32">
                        <h2 className="text-sm font-black text-[#FBBF24] uppercase tracking-[1em] mb-4">{t('throughTime')}</h2>
                        <p className="text-3xl font-light text-white/40">{t('evolution')}</p>
                    </div>

                    <div className="relative space-y-32">
                        {/* The Glowing Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                        {data.chronology.map((event: any, i: number) => (
                            <motion.div
                                key={event.year}
                                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex-1 text-center md:text-right md:px-12 w-full">
                                    {i % 2 === 0 ? (
                                        <>
                                            <span className="text-5xl font-black text-[#FBBF24] mb-4 block leading-none">{event.year}</span>
                                            <h4 className="text-2xl font-bold uppercase mb-4">{event.title}</h4>
                                            <p className="text-white/40 font-light leading-relaxed">{event.description}</p>
                                        </>
                                    ) : null}
                                </div>

                                {/* Central Dot */}
                                <div className="w-4 h-4 rounded-full bg-[#FBBF24] border-4 border-black relative z-10 shadow-[0_0_20px_#FBBF24]" />

                                <div className="flex-1 text-center md:text-left md:px-12 w-full">
                                    {i % 2 !== 0 ? (
                                        <>
                                            <span className="text-5xl font-black text-[#FBBF24] mb-4 block leading-none">{event.year}</span>
                                            <h4 className="text-2xl font-bold uppercase mb-4">{event.title}</h4>
                                            <p className="text-white/40 font-light leading-relaxed">{event.description}</p>
                                        </>
                                    ) : null}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* --- INSIDER PATH (LOCAL TIPS) --- */}
            {data.insider && (
                <section className="py-48 bg-white/5 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-24 items-center">
                            <div className="lg:w-1/2 space-y-12">
                                <h2 className="text-sm font-black text-[#FBBF24] uppercase tracking-[1em]">{t('insidersPath')}</h2>
                                <p className="text-4xl md:text-7xl font-black uppercase leading-tight tracking-tighter italic">
                                    {t('exploreLikeNative').split(' ').slice(0, 1)} <br /> {t('exploreLikeNative').split(' ').slice(1, 2)} <br /> <span className="text-outline-white text-transparent">{t('exploreLikeNative').split(' ').slice(2).join(' ')}</span>
                                </p>
                            </div>
                            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {data.insider.map((tip: any, i: number) => (
                                    <motion.div
                                        key={tip.title}
                                        className="p-10 rounded-[3rem] bg-black border border-white/10 group hover:border-[#FBBF24]/50 transition-all duration-700"
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-[#FBBF24]/10 flex items-center justify-center text-[#FBBF24] mb-8 group-hover:bg-[#FBBF24] group-hover:text-black transition-all">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xl font-black uppercase mb-4 tracking-wide">{tip.title}</h4>
                                        <p className="text-white/40 font-light leading-relaxed">{tip.detail ?? tip.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* --- RECOMMENDATIONS --- */}
            <section className="py-12 md:py-48 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 text-center">
                    <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic">{t('nextDiscovery')}</h2>
                    <p className="text-white/30 uppercase tracking-[0.4em] md:tracking-[0.8em] text-[10px] md:text-xs">{t('newStory')}</p>
                </div>
                <div className="flex gap-6 md:gap-12 px-6 md:px-24 overflow-x-auto pb-12 md:pb-24 scrollbar-hide snap-x">
                    {data.recommendations.map((recId: string) => {
                        const rec = discoverData[recId]; if (!rec) return null;
                        return (<Link key={recId} href={`/${locale}/discover/${rec.category}/${recId}`} className="flex-none group snap-center"><div className="relative w-[280px] md:w-[450px] h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 transition-all duration-1000 group-hover:border-[#FBBF24]/30 shadow-2xl"><Image src={rec.image} alt={rec.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s] blur-[2px] group-hover:blur-0" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:opacity-80 transition-opacity" /><div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12"><span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-[#FBBF24] font-black mb-2 md:mb-4 block translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{rec.category}</span><h3 className="text-xl md:text-3xl font-black text-white uppercase leading-tight group-hover:tracking-wider transition-all duration-700">{rec.title}</h3><div className="w-12 h-1 bg-[#FBBF24] mt-4 md:mt-6 origin-left group-hover:w-full transition-all duration-1000" /></div></div></Link>);
                    })}
                </div>
            </section>

            {/* --- SEASONAL PULSE (THE TIME SHIFTER) --- */}
            {data.seasons && (
                <section className="py-24 md:py-48 px-6 bg-white/5 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-24">
                            <h2 className="text-xs md:text-sm font-black text-[#FBBF24] uppercase tracking-[0.5em] md:tracking-[1em] mb-4">{t('seasonalPulse')}</h2>
                            <p className="text-3xl md:text-7xl font-black uppercase tracking-tighter">
                                {t('livingCycle').split(' ').slice(0, 1)} <span className="text-transparent select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>{t('livingCycle').split(' ').slice(1).join(' ')}</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-20">
                            {(["spring", "summer", "autumn", "winter"] as const).map((season) => (
                                <button
                                    key={season}
                                    onClick={() => setActiveSeason(season)}
                                    className={`px-6 py-2 md:px-10 md:py-4 rounded-full border transition-all duration-500 uppercase text-[10px] md:text-xs font-black tracking-widest ${activeSeason === season ? 'bg-[#FBBF24] text-black border-[#FBBF24]' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'}`}
                                >
                                    {season}
                                </button>
                            ))}
                        </div>

                        <div className="max-w-4xl mx-auto min-h-[150px] md:min-h-[200px] text-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeSeason}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-xl md:text-5xl font-light leading-relaxed italic text-white/70"
                                >
                                    “{(data.seasons as any)[activeSeason]}”
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            )}

            {/* --- MONASTIR PLEDGE (THE SOUL SIGNATURE) --- */}
            {data.pledge && (
                <section className="py-32 md:py-64 px-6 text-center relative overflow-hidden bg-[#FBBF24]/5">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.3)_0%,transparent_70%)]" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto space-y-12 md:space-y-16"
                    >
                        <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.8em] md:tracking-[1.5em] text-[#FBBF24]">{t('soulPledge')}</h4>
                        <p className="text-2xl md:text-7xl font-light leading-tight italic text-white/90">
                            “{data.pledge}”
                        </p>
                        <motion.button
                            className="px-10 py-6 md:px-20 md:py-8 rounded-full border-2 border-white/20 text-white font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[10px] md:text-xs hover:bg-white hover:text-black transition-all duration-1000 group relative overflow-hidden"
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">{t('signChronicle')}</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        </motion.button>
                        <div className="pt-12 md:pt-24 opacity-20 text-[8px] md:text-[10px] uppercase font-bold tracking-[0.4em] md:tracking-[0.8em]">{t('legacy')}</div>
                    </motion.div>
                </section>
            )}

            <Footer />
        </main>
    );
}
