function Hero() {
  return (
    <div className="w-full flex flex-col items-center bg-[#FFFFFF]">
      {/* 1. SECCIÓN DE CABECERA (Fondo Azul - Altura de 372px) */}
      <div className="w-full h-[372px] bg-[#003087] flex flex-col items-center justify-center text-center px-6 md:px-[153px] py-10 gap-2.5">
        <h1 className="text-[32px] md:text-[40px] font-instrument font-bold text-white leading-tight">
          Nuestro equipo de asesoras
        </h1>
        <p className="text-[#B5D4F4] text-[16px] md:text-[18px] font-instrument max-w-xl leading-relaxed">
          Personas reales que te acompañan en cada paso del proceso de
          transporte de tu vehículo.
        </p>
      </div>
    </div>
  );
}

export default Hero;
