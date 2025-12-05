
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"
import Starfield from "./components/Starfield";

export const metadata = {
  metadataBase: new URL("https://principito-dusky.vercel.app/"),
  title: "El Principito — Aventura Interactiva",
  description: "Una experiencia educativa e interactiva inspirada en El Principito.",
  openGraph: {
    title: "El Principito — Aventura Interactiva",
    description: "Una experiencia educativa e interactiva inspirada en El Principito.",
    url: "https://principito-dusky.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TextQuest — Crea, explora y juega con historias",
      },
    ],
  },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="dark">
            <body>{children}</body>
            <Analytics/>

            <Starfield />
        </html>
    );
}
