function Hero() {
  return (
    <div className="w-full flex flex-col items-center bg-[#FFFFFF]">
      {/* 1. SECCIÓN DE CABECERA (Fondo Azul - Compacto) */}
      <div className="w-full h-[230px] bg-[#003087] flex flex-col items-center justify-center text-center px-6 md:px-[153px] py-6 gap-2">
        <h1 className="text-[36px] md:text-[38px] font-instrument font-bold text-white leading-tight">
          Nuestro equipo de asesoras
        </h1>
        <p className="text-[#B5D4F4] text-[26px] md:text-[18px] font-instrument max-w-xl leading-relaxed">
          Personas reales que te acompañan en cada paso del proceso de
          transporte de tu vehículo.
        </p>
      </div>
    </div>
  );
}

export default Hero;
