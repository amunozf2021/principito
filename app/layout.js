import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    title: "El Principito — Aventura Interactiva",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="dark">
        <body>{children}</body>
        <Analytics/>
        </html>
    );
}
