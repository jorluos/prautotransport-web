// Icono de Auriculares con Micrófono (Soporte)
const HeadphonesIcon = () => (
  <svg
    className="w-[42px] h-[42px] text-[#003087] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
    <rect x="1" y="13" width="4" height="7" rx="2" />
    <rect x="19" y="13" width="4" height="7" rx="2" />
    <path d="M19 19v1a3 3 0 0 1-3 3h-3" />
    <rect x="11" y="22" width="3" height="1.5" rx="0.75" fill="currentColor" />
  </svg>
);

function ServiceInfo() {
  return (
    <div className="w-full max-w-[1198px] px-4">
      <div className="bg-[#E6F1FB] rounded-3xl pt-10 pb-10 pl-[30px] pr-[30px] border border-[#B5D4F4]/30 shadow-sm flex flex-row items-center justify-start gap-[25px] min-h-[177px] md:h-[177px]">
        {/* Icono de soporte */}
        <div className="flex items-center justify-center shrink-0">
          <HeadphonesIcon />
        </div>

        {/* Información y Textos */}
        <div className="flex flex-col gap-1 text-left">
          <h3 className="text-[26px] font-instrument font-bold text-[#003087]">
            Atención disponible de lunes a sábado
          </h3>
          <p className="text-[20px] font-instrument text-[#5A6070] leading-relaxed">
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
