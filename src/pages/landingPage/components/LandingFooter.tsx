function LandingFooter() {
  return (
    <footer className="w-full flex flex-col font-instrument">
      {/* ==========================================
          BLOQUE 1: BANNER CTA (Fondo Azul Rey #003087)
          ========================================== */}
      <div className="bg-[#003087] py-16 px-6 flex flex-col items-center justify-center text-center text-white relative">
        {/* Línea roja decorativa de Figma */}
        <div className="w-12 h-[3.5px] bg-[#C8102E] rounded-full mb-6" />

        {/* Título principal */}
        <h2 className="text-[26px] md:text-[34px] font-bold mb-4 max-w-xl leading-tight">
          Tu vehículo está a un paso <br className="hidden md:inline" /> de
          llegar a su destino
        </h2>

        {/* Subtítulo */}
        <p className="text-[#DDE2EC] text-[15px] md:text-[16px] mb-6 max-w-md leading-relaxed font-normal">
          Recibe asistencia personalizada y asegura tu espacio de transporte
          hoy.
        </p>

        {/* Botón con borde blanco (Píldora) */}
        <button className="border border-white hover:bg-white/10 transition-colors text-white py-3.5 px-7 rounded-full flex items-center justify-center gap-2 font-semibold text-[15px] md:text-[16px] cursor-pointer">
          <span>🚗</span>
          <span>Reserva tu cupo hoy</span>
        </button>
      </div>
    </footer>
  );
}

export default LandingFooter;
