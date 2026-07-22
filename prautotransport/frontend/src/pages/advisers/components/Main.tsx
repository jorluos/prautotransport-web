import DayanaImage from "../../../assets/AdvisorsImages/dayana.png";
import YoselisImage from "../../../assets/AdvisorsImages/yoselis.png";

// Icono Teléfono para el botón Llamar
const CallIcon = () => (
  <svg
    className="w-4.5 h-4.5 text-[#003087] fill-current"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

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

function Main() {
  return (
    <div className="w-full flex flex-col items-center py-12 px-6 bg-[#F4F6FA] font-instrument gap-12 relative">
      {/* =========================================================
          1. PÍLDORA DE ATENCIÓN
          ========================================================= */}
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
              className="w-full h-full object-cover rounded-2xl"
              alt="Dayana Ramos"
            />
          </div>

          {/* Cuerpo de la tarjeta (Ocupa el resto de la altura de 800px) */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-4 text-left">
            <div className="flex flex-col gap-1">
              <h2 className="text-[22px] font-bold text-[#003087]">
                Dayana Ramos
              </h2>
              <p className="text-[14px] text-[#5A6070]">
                Asesora verificada PRautotransport
              </p>
            </div>

            {/* Badges/Etiquetas */}
            <div className="flex flex-wrap gap-2 text-[12px] font-semibold">
              <span className="bg-[#F4F6FA] text-[#5A6070] px-3 py-1 rounded-full border border-[#DDE2EC]">
                🌍 Envíos USA
              </span>
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
                +8 Años de experiencia
              </span>
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30 w-full text-left">
                🏅 Reconocido por atención al cliente
              </span>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/17877416032?text=Hola%20Dayana,%20quiero%20cotizar%20el%20transporte%20de%20mi%20auto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-2xl text-white flex items-center justify-center gap-2 font-semibold text-[16px] shadow-sm"
              >
                <span>💬</span> Hablar con Dayana
              </a>
              <a
                href="tel:+17877416032"
                className="w-full h-12 border border-[#003087] hover:bg-[#003087]/5 transition-colors text-[#003087] rounded-2xl flex items-center justify-center gap-2 font-semibold text-[16px]"
              >
                <CallIcon />
                <span>Llamar</span>
              </a>
            </div>

            {/* Reseña de la asesora */}
            <p className="text-[14px] text-[#5A6070] leading-relaxed border-t border-[#F4F6FA] pt-3">
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
              className="w-full h-full object-cover rounded-2xl"
              alt="Yoselis Parra"
            />
          </div>

          {/* Cuerpo de la tarjeta (Ocupa el resto de la altura de 800px) */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-4 text-left">
            <div className="flex flex-col gap-1">
              <h2 className="text-[22px] font-bold text-[#003087]">
                Yoselis Parra
              </h2>
              <p className="text-[14px] text-[#5A6070]">
                Asesora verificada PRautotransport
              </p>
            </div>

            {/* Badges/Etiquetas */}
            <div className="flex flex-wrap gap-2 text-[12px] font-semibold">
              <span className="bg-[#F4F6FA] text-[#5A6070] px-3 py-1 rounded-full border border-[#DDE2EC]">
                🌍 Envíos USA
              </span>
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
                👥 Acompañamiento completo
              </span>
              <span className="bg-[#E6F1FB] text-[#003087] px-3 py-1 rounded-full border border-[#B5D4F4]/30 w-full text-left">
                🏅 Reconocido por atención al cliente
              </span>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/17877416032?text=Hola%20Yoselis,%20necesito%20coordinar%20el%20envío%20de%20mi%20vehículo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-2xl text-white flex items-center justify-center gap-2 font-semibold text-[16px] shadow-sm"
              >
                <span>💬</span> Hablar con Yoselis
              </a>
              <a
                href="tel:+17877416032"
                className="w-full h-12 border border-[#003087] hover:bg-[#003087]/5 transition-colors text-[#003087] rounded-2xl flex items-center justify-center gap-2 font-semibold text-[16px]"
              >
                <CallIcon />
                <span>Llamar</span>
              </a>
            </div>

            {/* Reseña de la asesora */}
            <p className="text-[14px] text-[#5A6070] leading-relaxed border-t border-[#F4F6FA] pt-3">
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
    </div>
  );
}

export default Main;
