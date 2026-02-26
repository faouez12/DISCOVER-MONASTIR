"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import SearchOverlay from "./SearchOverlay";
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const t = useTranslations('Navbar');
    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t('explore'), id: "destinations" },
        { name: t('attractions'), id: "attractions" },
        { name: t('secretSpots'), id: "wonders" },
        { name: t('crafts'), id: "crafts" },
        { name: t('planTrip'), id: "travel-info" },
    ];

    // True when we are on the home page (e.g. /en or /fr)
    const isHomePage = pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;

    const handleNavClick = (id: string) => {
        if (isHomePage) {
            // Already on home — smooth scroll to section
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const offsetPosition = elementRect - bodyRect - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        } else {
            // On another page — navigate home with hash so browser scrolls to section
            router.push(`/${currentLocale}#${id}`);
        }
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push(`/${currentLocale}`);
        }
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        const segments = pathname.split('/');
        segments[1] = newLocale;
        router.push(segments.join('/'));
    };

    return (
        <>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            {/* Mobile overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <nav className={`
                fixed top-0 left-0 right-0 z-[9999]
                px-6 py-4 lg:px-12 lg:py-6
                transition-all duration-500 ease-in-out
                ${isScrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl text-white"
                    : "bg-transparent text-white lg:hover:bg-black/90 lg:hover:backdrop-blur-xl lg:hover:border-b-white/20"}
                font-sans
            `}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo & Brand Group */}
                    <div className="flex items-center lg:mr-24">
                        <Link
                            href={`/${currentLocale}`}
                            onClick={handleLogoClick}
                            className="flex items-center space-x-4 group"
                        >
                            <div className="relative w-12 h-12 lg:w-16 lg:h-16 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/logo.webp"
                                    alt="Discover Monastir Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-[#96611F] via-[#FBBF24] to-[#96611F] bg-clip-text text-transparent uppercase tracking-tighter hidden sm:block">
                                Discover Monastir
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <li key={item.name} className="relative group">
                                <button
                                    onClick={() => handleNavClick(item.id)}
                                    className="px-4 py-2 text-sm font-black uppercase tracking-[0.2em] hover:text-[#FBBF24] transition-colors relative z-10 whitespace-nowrap"
                                >
                                    {item.name}
                                </button>
                                {/* Hover line effect */}
                                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#FBBF24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Right side: Language, Search, Login */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Language changer */}
                        <div className="relative group/lang">
                            <select
                                value={currentLocale}
                                onChange={handleLanguageChange}
                                className="appearance-none px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-black border border-white/20 hover:border-[#FBBF24] transition-all cursor-pointer outline-none uppercase tracking-widest min-w-[70px] text-center"
                            >
                                <option value="en" className="bg-zinc-900 text-white font-sans uppercase">EN</option>
                                <option value="fr" className="bg-zinc-900 text-white font-sans uppercase">FR</option>
                                <option value="ar" className="bg-zinc-900 text-white font-sans uppercase">AR</option>
                                <option value="de" className="bg-zinc-900 text-white font-sans uppercase">DE</option>
                                <option value="ru" className="bg-zinc-900 text-white font-sans uppercase">RU</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#FBBF24]">
                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>

                        {/* Search icon/button */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2.5 bg-white/10 rounded-full hover:bg-[#FBBF24] hover:text-black transition-all hover:scale-110 border border-white/10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Login button */}
                        <button
                            onClick={() => handleNavClick("mystery-club")}
                            className="px-7 py-2.5 bg-gradient-to-r from-[#96611F] to-[#FBBF24] text-black font-black uppercase text-xs tracking-[0.2em] rounded-full hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all hover:scale-105 active:scale-95"
                        >
                            {t('login')}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-6 p-6 bg-zinc-950/90 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-3xl">
                        <ul className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <button
                                        onClick={() => { handleNavClick(item.id); setIsMenuOpen(false); }}
                                        className="block w-full text-left px-5 py-4 text-sm font-black hover:text-[#FBBF24] rounded-2xl hover:bg-white/5 transition-all uppercase tracking-[0.3em] border border-transparent hover:border-white/10"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                            <li className="pt-4 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <select
                                        value={currentLocale}
                                        onChange={handleLanguageChange}
                                        className="flex-1 px-5 py-4 bg-white/5 rounded-2xl text-sm font-black uppercase tracking-widest border border-white/10"
                                    >
                                        <option value="en">English (EN)</option>
                                        <option value="fr">Français (FR)</option>
                                        <option value="ar">العربية (AR)</option>
                                        <option value="de">Deutsch (DE)</option>
                                        <option value="ru">Русский (RU)</option>
                                    </select>
                                    <button
                                        onClick={() => { setIsSearchOpen(true); setIsMenuOpen(false); }}
                                        className="p-4 bg-white/5 rounded-2xl hover:bg-[#FBBF24] hover:text-black transition-all"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <button
                                    onClick={() => { handleNavClick("mystery-club"); setIsMenuOpen(false); }}
                                    className="w-full px-6 py-5 bg-gradient-to-r from-[#96611F] to-[#FBBF24] text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl"
                                >
                                    {t('login')}
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
