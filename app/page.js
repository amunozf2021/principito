import Starfield from "./components/Starfield";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "El Principito — Aventura Interactiva",
  description: "Una experiencia educativa e interactiva inspirada en El Principito.",
  openGraph: {
    title: "El Principito — Aventura Interactiva",
    description: "Una experiencia educativa e interactiva inspirada en El Principito.",
    url: "https://principito.vercel.app",
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

export default function Page() {
  return (
    <main className="relative min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-b from-indigo-100 via-blue-100 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-x-hidden">

        <style>{`
        @keyframes twinkle {0%,100%{opacity:.2;}50%{opacity:1;}}
        .star{position:absolute;width:3px;height:3px;background:white;border-radius:50%;animation:twinkle 2s infinite ease-in-out;}
      `}</style>

        <Starfield />

        <script dangerouslySetInnerHTML={{
        __html: `
        const starContainer = document.getElementById('stars-layer');
        if (starContainer) {
          const totalStars = 120;
          for (let i = 0; i < totalStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = Math.random()*100+'vh';
            star.style.left = Math.random()*100+'vw';
            star.style.animationDuration = 1.5+Math.random()*2+'s';
            star.style.opacity = Math.random();
            starContainer.appendChild(star);
          }
        }
      `}}>
      </script>
        <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">El Principito</h1>
            <ThemeToggle />
        </header>

      <section className="relative text-center max-w-3xl mx-auto py-20">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-md">Una aventura entre planetas</h2>
        <p className="text-lg opacity-90">Descubre mundos diminutos, cuida una rosa, conversa con un zorro y revive la magia del Principito en formato interactivo.</p>
        <div className="mt-8">
          <a href="https://wa.me/14173085432?text=jugar%20principito" className="px-8 py-3 bg-yellow-500 text-white rounded-xl shadow-lg hover:bg-yellow-400 transition">Comenzar aventura</a>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <h3 className="text-center text-4xl font-bold mb-10 drop-shadow">Ilustraciones de la aventura</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 p-6">
          <div className="shadow-xl rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-700/60 backdrop-blur">
            <img src="/mockup1.webp" />
          </div>
          <div className="shadow-xl rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-700/60 backdrop-blur">
            <img src="/mockup2.webp" />
          </div>
          <div className="shadow-xl rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-700/60 backdrop-blur">
            <img src="/mockup3.webp" />
          </div>
        </div>
      </section>

      <section id="jugar" className="relative py-28 text-center">
        <h3 className="text-4xl font-semibold mb-4 drop-shadow-lg">Escanea y comienza tu viaje</h3>
        <p className="opacity-90 mb-6">Tu viaje por los asteroides del Principito empieza aquí.</p>
        <div className="flex justify-center mt-6">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://tu-enlace-a-la-aventura.com"
            className="w-52 h-52 shadow-xl rounded-2xl bg-white p-4 border-4 border-gray-900 dark:border-white"/>
        </div>
      </section>

      <footer className="text-center py-10 opacity-70 text-sm">
        Creado con ❤️ para una experiencia educativa y mágica por 
        <a href="https://mowapps.es" target="_blank" className="underline hover:text-yellow-500"> MoWApps</a>
      </footer>

      <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-N8899S23"></script>
      <script dangerouslySetInnerHTML={{__html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-N8899S23');
      `}} />
    </main>
  );
}
