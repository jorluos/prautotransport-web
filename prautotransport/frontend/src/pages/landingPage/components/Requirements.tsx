import { Link } from "react-router-dom";
import USFlagImg from "../../../assets/flags/us.svg";
import PRFlagImg from "../../../assets/flags/pr.svg";

// Icono Checkmark rojo en círculo
const RedCheck = () => (
  <svg
    className="w-5 h-5 text-[#C8102E] shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const ChatIcon = () => (
  <svg
    className="w-5 h-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
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

function Requirements() {
  return (
    // Contenedor principal con fondo gris claro (#F4F6FA) y padding
    <div className="w-full h-auto bg-[#F4F6FA] py-16 px-6 border-b border-[#DDE2EC] flex flex-col items-center justify-center gap-10">
      {/* Título de la sección */}
      <h2 className="text-[26px] font-instrument font-semibold text-[#003087] text-center">
        Documentos requeridos
      </h2>

      {/* Grid de 2 columnas para las tarjetas de documentos */}
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center max-w-5xl">
        {/* TARJETA 1: USA -> PUERTO RICO */}
        <div className="w-full md:w-115 bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-4 border border-[#DDE2EC]/30">
          <div className="flex items-center gap-2 text-[16px] font-instrument font-semibold text-[#003087] mb-2">
            <img src={USFlagImg} className="w-5 h-5 shrink-0" alt="USA" />
            <span>USA <ArrowIcon /> Puerto Rico</span>
          </div>

          <ul className="space-y-4 font-instrument text-[15px] md:text-[16px] text-[#5A6070]">
            <li className="flex items-center gap-3">
              <RedCheck />
              <span>Título de propiedad</span>
            </li>
            <li className="flex items-center gap-3">
              <RedCheck />
              <span>Licencia del propietario</span>
            </li>
            <li className="flex items-center gap-3">
              <RedCheck />
              <span>Carta del banco (si financiado)</span>
            </li>
          </ul>
        </div>

        {/* TARJETA 2: PUERTO RICO -> USA */}
        <div className="w-full md:w-115 bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-4 border border-[#DDE2EC]/30">
          <div className="flex items-center gap-2 text-[16px] font-instrument font-semibold text-[#003087] mb-2">
            <img
              src={PRFlagImg}
              className="w-5 h-5 shrink-0"
              alt="Puerto Rico"
            />
            <span>Puerto Rico <ArrowIcon /> USA</span>
          </div>

          <ul className="space-y-4 font-instrument text-[15px] md:text-[16px] text-[#5A6070]">
            <li className="flex items-center gap-3">
              <RedCheck />
              <span>Título de propiedad</span>
            </li>
            <li className="flex items-center gap-3">
              <RedCheck />
              <span>Registración</span>
            </li>
            <li className="flex items-center gap-3">
              <RedCheck />
              <span>Licencia del propietario</span>
            </li>
            <li className="flex items-center gap-3">
              <RedCheck />
              <span>Carta bancaria (si financiado)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BANNER INFERIOR DE GESTORÍA (Fondo Azul Claro) */}
      <div className="w-full max-w-5xl bg-[#E6F1FB] rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center gap-5 shadow-sm border border-[#DDE2EC]/20">
        <p className="text-[16px] md:text-[18px] font-instrument text-[#5A6070] leading-relaxed">
          <span className="font-bold text-[#003087]">
            Nosotros te ayudamos con la gestoría.
          </span>{" "}
          Nuestro equipo te acompañará durante todo el proceso documental.
        </p>

        {/* Botón de acción */}
        <Link
          to="/asesoras"
          className="bg-[#C8102E] hover:bg-[#b00e28] transition-colors text-white py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 font-instrument font-semibold text-[16px] shadow-sm w-full sm:w-auto cursor-pointer"
        >
          <ChatIcon />
          <span>Hablar con asesor</span>
        </Link>
      </div>
    </div>
  );
}

export default Requirements;
