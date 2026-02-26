"use client";
import { useEffect } from "react";

export default function HashScrollHandler() {
    useEffect(() => {
        const hash = window.location.hash?.slice(1);
        if (!hash) return;
        // Small delay so the page finishes rendering before scrolling
        const timer = setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
                const offset = 80;
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }, 300);
        return () => clearTimeout(timer);
    }, []);
    return null;
}
