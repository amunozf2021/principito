"use client";

export default function ThemeToggle() {
    return (
        <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
            🌓 Tema
        </button>
    );
}
