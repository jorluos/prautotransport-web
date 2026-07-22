import Advisors from "../../../assets/Advisors.png";

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
            <span className="text-[#C8102E] font-bold">✓</span> Atención
            personalizada
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#C8102E] font-bold">✓</span> Seguimiento
            completo
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#C8102E] font-bold">✓</span> Asistencia
            documental
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#C8102E] font-bold">✓</span> Expertas en PR ↔
            USA
          </li>
        </ul>

        {/* Botones de acción simplificados */}
        <div className="flex flex-col sm:flex-row gap-4 mt-3">
          <button className="w-full sm:w-59.5 h-12 bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-2xl text-white flex items-center justify-center gap-2 font-instrument font-semibold text-[16px] md:text-[18px] shadow-sm">
            <span>💬</span> Hablar con Dayana
          </button>
          <button className="w-full sm:w-59.5 h-12 bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-2xl text-white flex items-center justify-center gap-2 font-instrument font-semibold text-[16px] md:text-[18px] shadow-sm">
            <span>💬</span> Hablar con Yoselis
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvisorsSection;
