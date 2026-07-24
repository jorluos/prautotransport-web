import Advisors from "../../../assets/Advisors.png";

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

function AdvisorsSection() {
  return (
    // Contenedor principal: Altura de 557px en escritorio y borde inferior
    <div className="w-full h-auto md:h-139.25 bg-[#E6F1FB] border-b border-[#DDE2EC] flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* IMAGEN (Lado Izquierdo) - Ocupa 805px de ancho en escritorio */}
      <div className="w-full md:w-201.25 h-75 md:h-139.25 shrink-0">
        <img
          src={Advisors}
          className="w-full h-full object-cover"
          alt="Asesoras de PRAutoTransport"
        />
      </div>

      {/* TEXTO Y BOTONES (Lado Derecho) - Con espaciados exactos de Figma */}
      <div className="flex-1 flex flex-col justify-center gap-5 p-8 md:pl-15 md:pr-25 xl:pl-32.5 xl:pr-74.25">
        <h2 className="text-[26px] font-instrument font-semibold text-[#003087] leading-tight">
          Expertas que te acompañan en cada paso del proceso
        </h2>

        <p className="text-[16px] md:text-[20px] font-instrument text-[#5A6070] leading-relaxed">
          Desde la cotización hasta la entrega, nuestro equipo está disponible
          para ayudarte con documentos, <br className="hidden md:inline" />{" "}
          dudas y seguimiento.
        </p>

        {/* Lista con checkmarks rojos */}
        <ul className="space-y-3 font-instrument text-[16px] md:text-[20px] text-[#5A6070]">
          <li className="flex items-center gap-3">
            <RedCheck />
            <span>Atención personalizada</span>
          </li>
          <li className="flex items-center gap-3">
            <RedCheck />
            <span>Seguimiento completo</span>
          </li>
          <li className="flex items-center gap-3">
            <RedCheck />
            <span>Asistencia documental</span>
          </li>
          <li className="flex items-center gap-3">
            <RedCheck />
            <span>Expertas en PR ↔ USA</span>
          </li>
        </ul>

        {/* Botones de acción simplificados */}
        <div className="flex flex-col sm:flex-row gap-4 mt-3">
          <a
            href="https://wa.me/17865156990"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-59.5 h-12 bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-2xl text-white flex items-center justify-center gap-2 font-instrument font-semibold text-[16px] md:text-[18px] shadow-sm cursor-pointer"
          >
            <ChatIcon />  Hablar con Dayana
          </a>
          <a
            href="https://wa.me/17208317147"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-59.5 h-12 bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-2xl text-white flex items-center justify-center gap-2 font-instrument font-semibold text-[16px] md:text-[18px] shadow-sm cursor-pointer"
          >
            <ChatIcon />  Hablar con Yoselis
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdvisorsSection;
