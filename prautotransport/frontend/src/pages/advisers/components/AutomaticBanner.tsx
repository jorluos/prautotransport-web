
function AutomaticBanner() {
  return (
    <div className="w-full max-w-[1197px] px-4">
      <div className="bg-[#003087] rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-[25px] min-h-[247px] md:h-[247px] shadow-md">
        <h3 className="text-[22px] md:text-[24px] font-bold text-white leading-none">
          ¿No sabes cuál elegir?
        </h3>

        <p className="text-[#B5D4F4] text-[15px] md:text-[16px] leading-none">
          Te asignamos la asesora disponible en este momento
        </p>

        <a
          href="https://wa.me/17877416032?text=Hola,%20quiero%20que%20me%20asignen%20una%20asesora%20disponible"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white hover:bg-white/10 transition-colors text-white py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 font-semibold text-[15px] cursor-pointer"
        >
          <span>👤</span>
          <span>Conectar con una asesora ahora</span>
        </a>
      </div>
    </div>
  );
}

export default AutomaticBanner;
