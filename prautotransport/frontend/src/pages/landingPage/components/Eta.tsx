import USFlagImg from "../../../assets/flags/us.svg";
import PRFlagImg from "../../../assets/flags/pr.svg";

const USFlag = () => (
  <img src={USFlagImg} className="w-5 h-5 shrink-0" alt="USA" />
);

const PRFlag = () => (
  <img src={PRFlagImg} className="w-5 h-5 shrink-0" alt="Puerto Rico" />
);

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 inline-block mx-1 -mt-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

interface EtaCardsProps {
  flag: React.ReactNode;
  destination: React.ReactNode;
  ETA: string;
  label: string;
}

function EtaCards({ flag, destination, ETA, label }: EtaCardsProps) {
  return (
    <div className="w-full max-w-139.5 h-auto md:h-33.5 bg-[#F4F6FA] rounded-2xl border-l-[6px] border-[#C8102E] overflow-hidden flex flex-col justify-center p-6 shadow-sm">
      <h3 className="text-[15px] md:text-[16px] font-instrument font-semibold text-[#003087] mb-1 flex items-center gap-2">
        {flag}
        <span>{destination}</span>
      </h3>

      <p className="text-[26px] font-instrument font-bold text-[#C8102E] leading-tight mb-1">
        {ETA}
      </p>

      <p className="text-[14px] font-instrument text-[#5A6070]">{label}</p>
    </div>
  );
}

function Eta() {
  return (
    // Contenedor principal con fondo blanco y padding vertical y horizontal
    <div className="w-full h-auto bg-[#FFFFFF] py-16 px-6 border-b border-[#DDE2EC] flex flex-col items-center justify-center">
      <h2 className="text-[26px] font-instrument font-semibold text-[#003087] text-center mb-10">
        Tiempo estimado de tránsito
      </h2>

      {/* Cuadrícula de 2x2 en escritorio (md:grid-cols-2), 1 columna en celulares */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full justify-items-center">
        <EtaCards
          flag={<USFlag />}
          destination={<>Florida <ArrowIcon /> Puerto Rico</>}
          ETA="6–8 días"
          label="Ruta más rápida disponible"
        />
        <EtaCards
          flag={<USFlag />}
          destination={<>Texas <ArrowIcon /> Puerto Rico</>}
          ETA="8–12 días"
          label="Salidas semanales regulares"
        />
        <EtaCards
          flag={<USFlag />}
          destination={<>California <ArrowIcon /> Puerto Rico</>}
          ETA="12–18 días"
          label="Transporte cross-country"
          />
        <EtaCards
          flag={<PRFlag />}
          destination={<>Puerto Rico <ArrowIcon /> USA</>}
          ETA="Variable"
          label="Depende del destino final"
        />
      </div>

      {/* Texto de advertencia al pie de la sección */}
      <p className="text-[14px] font-instrument italic text-[#5A6070] mt-10 text-center">
        Los tiempos pueden variar según temporada, clima y disponibilidad.
      </p>
    </div>
  );
}

export default Eta;
