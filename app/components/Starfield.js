"use client";

import { useEffect, useState } from "react";

export default function Starfield() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Indicar que el componente está montado (solo en cliente)
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const layer = document.getElementById("stars-layer");
        const totalStars = 120;

        for (let i = 0; i < totalStars; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.top = Math.random() * 100 + "vh";
            star.style.left = Math.random() * 100 + "vw";
            star.style.animationDuration = 1.5 + Math.random() * 2 + "s";
            star.style.opacity = Math.random();
            layer.appendChild(star);
        }
    }, [mounted]);

    if (!mounted) return null; // 🔥 prevenir HTML en SSR

    return (
        <div
            id="stars-layer"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        ></div>
    );
}
