import Starfield from "./components/Starfield";
import ThemeToggle from "./components/ThemeToggle";
import Analytics from "./components/Analytics";

export const metadata = {
  title: "El Principito — Aventura Interactiva",
  description: "Una experiencia educativa, accesible e interactiva inspirada en El Principito.",
  openGraph: {
    title: "El Principito — Aventura Interactiva",
    description: "Una experiencia educativa, accesible e interactiva inspirada en El Principito.",
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

export default function Page() {
  return (
    <main className="relative min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-b from-indigo-100 via-blue-100 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-x-hidden">

        <style>{`
        @keyframes twinkle {0%,100%{opacity:.2;}50%{opacity:1;}}
        .star{position:absolute;width:3px;height:3px;background:white;border-radius:50%;animation:twinkle 2s infinite ease-in-out;}
      `}</style>

        <Analytics />
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
            <h1 className="text-2xl font-bold">El Principito — Aventura Interactiva</h1>
            <ThemeToggle />
        </header>

      <section className="relative text-center max-w-3xl mx-auto py-5">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-md">Un viaje mágico que cobra vida en tu WhatsApp</h2>
        <p className="text-lg opacity-90">Descubre mundos diminutos, cuida una rosa, conversa con un zorro y revive la magia del Principito en formato interactivo.</p>
        <div className="mt-8">
          <a href="https://wa.me/14173085432?text=jugar%20principito" className="px-8 py-3 bg-yellow-500 text-white rounded-xl shadow-lg hover:bg-yellow-400 transition">Comenzar aventura</a>
        </div>
      </section>

      <div className="max-w-xl mx-auto mt-1 mb-5 p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur rounded-3xl shadow-xl border border-white/30 text-center">
          <h3 className="text-2xl font-bold mb-4 drop-shadow">Accesible para todas las personas</h3>

          <p className="text-lg opacity-90 mb-6">
            Nuestra experiencia de lectura funciona en WhatsApp y está diseñada para que
            cualquier persona pueda disfrutarla sin barreras.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Audio */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-4xl">🔊</span>
              <p className="text-sm opacity-90">
                <strong>Audio accesible</strong><br />
                Para personas ciegas o quienes prefieren escuchar la historia.
              </p>
            </div>

            {/* Texto */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-4xl">📖</span>
              <p className="text-sm opacity-90">
                <strong>Lectura clara</strong><br />
                Para personas sordas o quienes disfrutan leyendo en pantalla.
              </p>
            </div>

          </div>
        </div>
        <section className="relative bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">

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

      <section id="como-jugar" className="relative text-center max-w-3xl mx-auto py-0">
            <div className="mb-16 p-10 rounded-3xl bg-white/70 dark:bg-gray-800/60 shadow-xl backdrop-blur border border-white/30">
                <h2 className="text-4xl font-bold mb-6 drop-shadow-md">¿Cómo se juega?</h2>
                <p className="text-lg opacity-90 mb-6">Una aventura interactiva donde avanzas escribiendo acciones. Aquí tienes una guía rápida sin spoilers:</p>


                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mx-auto max-w-xl text-lg text-center">


                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">🧭</span>
                        <p className="opacity-90 text-sm"><strong>Moverte</strong><br/>
                            <code>ir &lt;lugar&gt;</code>
                        </p>
                    </div>


                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">💬</span>
                        <p className="opacity-90 text-sm"><strong>Hablar</strong><br/><code>hablar &lt;nombre&gt;</code></p>
                    </div>


                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">🔍</span>
                        <p className="opacity-90 text-sm"><strong>Explorar</strong><br/><code>mirar</code></p>
                    </div>


                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">🎒</span>
                        <p className="opacity-90 text-sm"><strong>Objetos</strong><br/><code>coger</code> / <code>usar</code></p>
                    </div>


                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">📦</span>
                        <p className="opacity-90 text-sm"><strong>Inventario</strong><br/><code>inventario</code></p>
                    </div>


                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">↩️</span>
                        <p className="opacity-90 text-sm"><strong>Volver</strong><br/><code>volver</code></p>
                    </div>


                    <div className="flex flex-col items-center gap-2 col-span-2 sm:col-span-3">
                        <span className="text-3xl">🤖</span>
                        <p className="opacity-90 text-sm"><strong>Modo IA</strong><br/><code>personaje &lt;nombre&gt;</code></p>
                    </div>


                </div>
            </div>
        </section>

      <section id="jugar" className="relative py-0 text-center">
        <h3 className="text-4xl font-semibold mb-4 drop-shadow-lg">Escanea y comienza tu viaje</h3>
        <p className="opacity-90 mb-6">Tu viaje por los asteroides del Principito empieza aquí.</p>
        <div className="flex justify-center mt-6">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://wa.me/14173085432?text=jugar%20principito"
            className="w-52 h-52 shadow-xl rounded-2xl bg-white p-4 border-4 border-gray-900 dark:border-white"/>
        </div>
      </section>

      <footer className="text-center py-10 opacity-70 text-sm">
        Creado con ❤️ para una experiencia educativa y mágica por
        <a href="https://mowapps.es" target="_blank" className="underline hover:text-yellow-500"> MoWApps</a>
      </footer>
    </main>
  );
}
