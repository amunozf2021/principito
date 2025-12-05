"use client";
import { useEffect, useState } from "react";

export default function Starfield() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      opacity: Math.random(),
      duration: `${1.5 + Math.random() * 2}s`,
    }));
    setStars(arr);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            opacity: s.opacity,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}
