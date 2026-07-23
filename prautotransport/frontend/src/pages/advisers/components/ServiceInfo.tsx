
// Icono de Auriculares (Soporte)
const HeadphonesIcon = () => (
  <svg
    className="w-[28px] h-[28px] text-[#003087] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 18v-6a9 9 0 0118 0v6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
    />
  </svg>
);

function ServiceInfo() {
  return (
    <div className="w-full max-w-[1198px] px-4">
      <div className="bg-[#E6F1FB] rounded-3xl pt-10 pb-10 pl-[30px] pr-[30px] border border-[#B5D4F4]/30 shadow-sm flex flex-row items-center justify-start gap-[25px] min-h-[177px] md:h-[177px]">
        {/* Círculo del icono */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
          <HeadphonesIcon />
        </div>

        {/* Información y Textos */}
        <div className="flex flex-col gap-1 text-left">
          <h3 className="text-[16px] font-instrument font-bold text-[#003087]">
            Atención disponible de lunes a sábado
          </h3>
          <p className="text-[14px] font-instrument text-[#5A6070] leading-relaxed">
            Todas nuestras asesoras hablan español y están especializadas en
            rutas Puerto Rico ↔ Estados Unidos. Escoge la asesora que
            prefieras o te asignamos una disponible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfo;
