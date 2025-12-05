import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL("https://principito-dusky.vercel.app/"),
  title: "El Principito — Aventura Interactiva",
  description: "Una experiencia educativa e interactiva inspirada en El Principito."
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="dark">
            <body>{children}</body>
            <Analytics/>
        </html>
    );
}
