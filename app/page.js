<div className="max-w-xl mx-auto mt-12 p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur rounded-3xl shadow-xl border border-white/30 text-center">
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
