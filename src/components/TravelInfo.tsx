"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

interface FormData {
    from: string;
    to: string;
    dates: string;
    trip: "one-way" | "round-trip";
    guests: number;
}

const recommendedHotels = [
    { name: "Regency Hotel & Spa", price: "from $85/night", image: "/destinations/marina.webp", rating: "★★★★★" },
    { name: "Royal Thalassa Monastir", price: "from $120/night", image: "/destinations/beach.webp", rating: "★★★★★" },
    { name: "Hotel Marina Cap Monastir", price: "from $65/night", image: "/destinations/old medina.webp", rating: "★★★★" },
];

const airports = [
    "Amsterdam (AMS)", "Belgrade (BEG)", "Berlin (BER)", "Birmingham (BHX)",
    "Brussels (BRU)", "Dubai (DXB)", "Dusseldorf (DUS)", "Frankfurt (FRA)",
    "Geneva (GVA)", "Istanbul (IST)", "Lisbon (LIS)", "London (LGW)",
    "London (LHR)", "Lyon (LYS)", "Madrid (MAD)", "Manchester (MAN)",
    "Marseille (MRS)", "Milan (MXP)", "Munich (MUC)", "Nantes (NTE)",
    "Nice (NCE)", "Paris (CDG)", "Paris (ORY)", "Prague (PRG)",
    "Rome (FCO)", "Tunis (TUN)", "Vienna (VIE)", "Warsaw (WAW)", "Zurich (ZRH)"
].sort();

export default function TravelInfo() {
    const t = useTranslations('TravelInfo');
    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            from: "",
            to: "Monastir (MIR)",
            dates: "",
            trip: "round-trip",
            guests: 1
        }
    });

    const onSearch = (data: FormData) => {
        const searchUrl = `https://www.skyscanner.net/transport/flights/${data.from.slice(-4, -1)}/mir/`;
        window.open(searchUrl, "_blank");
    };

    return (
        <section id="travel-info" className="relative py-24 bg-black overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1E3A8A]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#96611F]/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        className="text-4xl md:text-7xl font-black uppercase text-white mb-6 tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        {t('titlePart1')} <span className="text-[#FBBF24]">{t('titlePart2')}</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* FLIGHT SEARCH CARD */}
                    <motion.div
                        className="lg:col-span-2 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-3xl">✈️</span>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">{t('findFlights')}</h3>
                        </div>

                        <form onSubmit={handleSubmit(onSearch)} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] ml-2">{t('departingFrom')}</label>
                                    <input
                                        {...register("from")}
                                        list="airport-cities"
                                        placeholder={t('placeholderDepart')}
                                        className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-white font-bold focus:outline-none focus:border-[#FBBF24] transition-all placeholder:text-white/20"
                                    />
                                    <datalist id="airport-cities">
                                        {airports.map(airport => (
                                            <option key={airport} value={airport} />
                                        ))}
                                    </datalist>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] ml-2">{t('arrivingAt')}</label>
                                    <input value="Monastir (MIR)" readOnly className="w-full bg-[#FBBF24] p-5 rounded-2xl text-black font-black focus:outline-none cursor-default" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] ml-2">{t('travelDates')}</label>
                                    <input type="date" {...register("dates")} className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-white font-bold focus:outline-none focus:border-[#FBBF24] transition-all" />
                                </div>
                                <div className="space-y-3 flex items-end">
                                    <button type="submit" className="w-full py-5 bg-gradient-to-r from-red-600 to-red-800 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-[1.02] transition-all">
                                        {t('searchRates')} →
                                    </button>
                                </div>
                            </div>
                        </form>
                    </motion.div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-3">
                            <div className="w-8 h-8 relative">
                                <Image src="/logos/Hand-Picked Stays.webp" alt="Stays" fill className="object-contain" />
                            </div>
                            {t('handPickedStays')}
                        </h3>
                        {recommendedHotels.map((hotel, i) => (
                            <motion.div
                                key={hotel.name}
                                className="group relative h-32 bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#FBBF24] transition-all flex cursor-pointer shadow-lg"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="relative w-1/3 h-full overflow-hidden">
                                    <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-5 flex flex-col justify-center">
                                    <span className="text-[#FBBF24] text-[10px] mb-1">{hotel.rating}</span>
                                    <h4 className="text-white font-bold leading-tight mb-1 group-hover:text-[#FBBF24] transition-colors">{hotel.name}</h4>
                                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{hotel.price}</p>
                                </div>
                            </motion.div>
                        ))}
                        <Link href="https://www.booking.com/city/tn/monastir.html" target="_blank" className="block text-center text-[#FBBF24] text-xs font-bold uppercase tracking-widest hover:underline pt-2">
                            {t('viewAllBooking')} →
                        </Link>
                    </div>
                </div>

                <div className="mt-24 grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-6 relative">
                            <Image src="/logos/Local Transport.webp" alt="Local Transport" fill className="object-contain" />
                        </div>
                        <h4 className="text-white font-bold uppercase mb-4 tracking-widest">{t('localTransport')}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{t('localTransportDesc')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-6 relative">
                            <Image src="/logos/Gifting Culture.webp" alt="Gifting Culture" fill className="object-contain" />
                        </div>
                        <h4 className="text-white font-bold uppercase mb-4 tracking-widest">{t('giftingCulture')}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{t('giftingCultureDesc')}</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-6 relative">
                            <Image src="/logos/Best Sunset.webp" alt="Best Sunset" fill className="object-contain" />
                        </div>
                        <h4 className="text-white font-bold uppercase mb-4 tracking-widest">{t('bestSunset')}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{t('bestSunsetDesc')}</p>
                    </div>
                </div>
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
