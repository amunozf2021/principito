import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    title: "El Principito — Aventura Interactiva",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="dark">
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <body>{children}</body>
        <Analytics/>
        </html>
    );
}
