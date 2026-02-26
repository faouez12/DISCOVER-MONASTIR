"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const t = useTranslations('Footer');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsSubmitted(true);
    };

    const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

    const scrollTo = (id: string) => {
        if (isHomePage) {
            const el = document.getElementById(id);
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
            }
        } else {
            router.push(`/${locale}#${id}`);
        }
    };

    const exploreLinks = [
        { label: t('exploreDestinations'), id: "destinations" },
        { label: t('exploreWonders'), id: "wonders" },
        { label: t('exploreCrafts'), id: "crafts" },
        { label: t('exploreTravelGuide'), id: "travel-info" },
    ];

    const infoLinks = [
        { label: t('visaReq'), href: "https://www.ivisa.com/tunisia-visa" },
        { label: t('howToGet'), href: "https://www.monastir.aero/en/" },
        { label: t('transport'), href: "https://www.transports.tn/" },
        { label: t('weather'), href: "https://www.weather.com/weather/today/l/Monastir+Governorate+Tunisia" },
        { label: t('culture'), href: "https://en.wikipedia.org/wiki/Culture_of_Tunisia" },
    ];

    return (
        <footer className="relative bg-black text-white overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 bg-cover bg-center"
                style={{ backgroundImage: "url('/footer.webp')" }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent" />

            <div className="relative z-20 max-w-7xl mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <button onClick={() => scrollTo("destinations")} className="inline-block group text-left">
                            <h2 className="text-4xl font-black tracking-tighter uppercase italic">
                                Monastir<span className="text-[#FBBF24]">.</span>
                            </h2>
                            <div className="h-1 w-0 group-hover:w-full bg-[#FBBF24] transition-all duration-500" />
                        </button>
                        <p className="text-white/60 text-lg leading-relaxed max-w-xs">
                            {t('tagline')}
                        </p>
                    </div>

                    {/* Explore — smooth scroll to sections */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold uppercase tracking-widest text-[#FBBF24]">{t('explore')}</h3>
                        <ul className="space-y-4 text-white/70">
                            {exploreLinks.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollTo(item.id)}
                                        className="hover:text-white hover:translate-x-2 transition-all flex items-center group text-left"
                                    >
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-[#FBBF24] mr-0 group-hover:mr-2 transition-all" />
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful Info — real external links */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold uppercase tracking-widest text-[#FBBF24]">{t('usefulInfo')}</h3>
                        <ul className="space-y-4 text-white/70">
                            {infoLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white hover:translate-x-2 transition-all flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-[#FBBF24] mr-0 group-hover:mr-2 transition-all" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold uppercase tracking-widest text-[#FBBF24]">{t('stayInspired')}</h3>
                        <p className="text-white/60">{t('subscribeDesc')}</p>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="relative group">
                                <input
                                    type="email"
                                    required
                                    placeholder={t('placeholder')}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/20 px-6 py-4 rounded-xl focus:outline-none focus:border-[#FBBF24] transition-all"
                                />
                                <button type="submit" className="absolute right-2 top-2 bottom-2 px-6 bg-[#FBBF24] text-black font-bold rounded-lg hover:scale-105 transition-all">
                                    {t('join')}
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-[#FBBF24]/10 border border-[#FBBF24]/30 rounded-xl text-[#FBBF24] text-center font-bold uppercase text-xs tracking-widest"
                            >
                                ✨ {t('welcome')}
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-sm uppercase tracking-widest">
                    <p>© 2026 Discover Monastir. {t('rights')}</p>
                    <div className="flex space-x-12 font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t('terms')}</Link>
                    </div>
                </div>
            </div>

            <div className="h-2 w-full bg-gradient-to-r from-[#96611F] via-[#FBBF24] to-[#96611F]" />
        </footer>
    );
}
