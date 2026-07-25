import DayanaImage from "../../../assets/AdvisorsImages/dayana.png";
import YoselisImage from "../../../assets/AdvisorsImages/yoselis.png";
import AutomaticBanner from "./AutomaticBanner";
import ServiceInfo from "./ServiceInfo";

// Icono Teléfono para el botón Llamar
const PhoneIcon = () => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 6A5 5 0 0 1 18 10.95" />
    <path d="M14.05 2A9 9 0 0 1 22 9.95" />
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

function Main() {
  return (
    <div className="w-full flex flex-col items-center py-12 px-6 bg-[#F4F6FA] font-instrument gap-12 relative">
      {/* =========================================================
          1. PÍLDORA DE ATENCIÓN
          ========================================================= */}
      <ServiceInfo />

      {/* =========================================================
          2. GRID DE ASESORAS (Dayana & Yoselis) -> Ancho 1,006px, Gap 40px
          ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] w-full max-w-[1006px]">
        {/* TARJETA 1: DAYANA RAMOS */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#DDE2EC] flex flex-col shadow-sm w-full md:w-[483px] h-auto md:h-[800px] justify-between">
          {/* Foto real con fondo celeste, altura de 415px y padding de 10px */}
          <div className="w-full h-[415px] bg-[#E6F1FB] overflow-hidden relative p-[10px] rounded-t-3xl">
            <img
              src={DayanaImage}
              className="w-full h-full object-contain rounded-2xl scale-[155%] translate-y-[45px]"
              alt="Dayana Ramos"
            />
          </div>

          {/* Cuerpo de la tarjeta (Ocupa el resto de la altura de 800px) */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-4 text-left">
            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] font-bold text-[#003087]">
                Dayana Ramos
              </h2>
              <p className="text-[18px] text-[#5A6070]">
                Asesora verificada PRautotransport
              </p>
            </div>

            {/* Badges/Etiquetas */}
            <div className="flex flex-wrap gap-2 text-[12px] font-semibold">
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
                🌍 Envíos USA
              </span>
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
                +6 Años de experiencia
              </span>
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
                🏅 Reconocido por atención al cliente
              </span>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/17865156990"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-2xl text-white flex items-center justify-center gap-2 font-semibold text-[16px] shadow-sm"
              >
                <ChatIcon />  Hablar con Dayana
              </a>
              <a
                href="tel:+17877416032"
                className="w-full h-12 border border-[#003087] hover:bg-[#003087]/5 transition-colors text-[#003087] rounded-2xl flex items-center justify-center gap-2 font-semibold text-[16px]"
              >
                <PhoneIcon />
                <span>Llamar</span>
              </a>
            </div>

            {/* Reseña de la asesora */}
            <p className="text-[15px] text-[#5A6070] leading-relaxed border-t border-[#F4F6FA] pt-3">
              Especialista en transporte internacional de vehículos. Mi
              compromiso es acompañarte en cada etapa del proceso con atención
              personalizada, información clara y seguimiento constante.
            </p>
          </div>
        </div>

        {/* TARJETA 2: YOSELIS PARRA */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#DDE2EC] flex flex-col shadow-sm w-full md:w-[483px] h-auto md:h-[800px] justify-between">
          {/* Foto real con fondo melón/rosado, altura de 415px y padding de 10px */}
          <div className="w-full h-[415px] bg-[#FCEBEB] overflow-hidden relative p-[10px] rounded-t-3xl">
            <img
              src={YoselisImage}
              className="w-full h-full object-contain rounded-2xl scale-[191%] translate-y-[123px]"
              alt="Yoselis Parra"
            />
          </div>

          {/* Cuerpo de la tarjeta (Ocupa el resto de la altura de 800px) */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-4 text-left">
            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] font-bold text-[#003087]">
                Yoselis Parra
              </h2>
              <p className="text-[18px] text-[#5A6070]">
                Asesora verificada PRautotransport
              </p>
            </div>

            {/* Badges/Etiquetas */}
            <div className="flex flex-wrap gap-2 text-[12px] font-semibold">
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
                🌍 Envíos USA
              </span>
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
                👥 Acompañamiento completo
              </span>
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
                🏅 Reconocido por atención al cliente
              </span>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/17208317147"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-2xl text-white flex items-center justify-center gap-2 font-semibold text-[18px] shadow-sm"
              >
                <ChatIcon />  Hablar con Yoselis
              </a>
              <a
                href="tel:+17877416032"
                className="w-full h-12 border border-[#003087] hover:bg-[#003087]/5 transition-colors text-[#003087] rounded-2xl flex items-center justify-center gap-2 font-semibold text-[18px]"
              >
                <PhoneIcon />
                <span>Llamar</span>
              </a>
            </div>

            {/* Reseña de la asesora */}
            <p className="text-[15px] text-[#5A6070] leading-relaxed border-t border-[#F4F6FA] pt-3">
              Especialista en soluciones de transporte, me apasiona el servicio
              al cliente y mi objetivo es ser tu aliada estratégica en cada
              etapa del proceso logístico. Trabajo para que el transporte de tu
              auto sea productivo y seguro.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          3. BANNER DE ASIGNACIÓN AUTOMÁTICA
          ========================================================= */}
      <AutomaticBanner />
    </div>
  );
}

export default Main;
