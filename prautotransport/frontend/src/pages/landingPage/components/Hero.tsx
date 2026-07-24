import Background from "../../../assets/heroBg.jpg";
import QuoteForm from "./QuoteForm";

// Icono Checkmark azul de Figma
const BlueCheck = () => (
  <svg
    className="w-5 h-5 text-[#003087] shrink-0"
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

function Hero() {
  return (
    // Contenedor principal: Altura responsiva con fondo azul claro (#E6F1FB)
    <div
      id="cotizar"
      className="w-full h-auto bg-[#E6F1FB] relative overflow-hidden py-12 md:py-20 flex items-center border-b border-[#DDE2EC]"
    >
      {/* IMAGEN DE FONDO con opacidad baja (25%) para crear el efecto de filtro azul */}
      <img
        src={Background}
        className="opacity-25 w-full h-full object-cover absolute inset-0 z-0"
        alt="Background auto transport"
      />

      {/* CONTENIDO PRINCIPAL (Centrado y sobre la imagen) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* LADO IZQUIERDO: Textos, Checks y Botones */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          {/* Badge rojo */}
          <div className="bg-[#C8102E] rounded-full px-4.5 py-1.5 mb-5 flex items-center justify-center shadow-sm">
            <p className="font-instrument text-[14px] font-semibold text-[#FFFFFF] tracking-wide">
              8 años de experiencia
            </p>
          </div>

          {/* Título Principal */}
          <h1 className="text-[30px] md:text-[42px] font-instrument font-bold text-[#003087] leading-tight mb-4 max-w-xl">
            Transportamos tu vehículo entre Puerto Rico y Estados Unidos de
            forma segura y rápida
          </h1>

          {/* Subtítulo */}
          <p className="text-[16px] md:text-[18px] font-instrument text-[#5A6070] leading-relaxed mb-6 max-w-lg">
            Más de 8 años ayudando a miles de clientes a mover sus vehículos con
            seguridad, gestoría y acompañamiento personalizado.
          </p>

          {/* Lista de Checks de Figma */}
          <ul className="flex flex-col gap-3.5 mb-8 text-[15px] md:text-[16px] font-instrument text-[#5A6070] font-medium">
            <li className="flex items-center gap-2.5">
              <BlueCheck /> Salidas semanales
            </li>
            <li className="flex items-center gap-2.5">
              <BlueCheck /> Atención personalizada
            </li>
            <li className="flex items-center gap-2.5">
              <BlueCheck /> Asistencia documental
            </li>
            <li className="flex items-center gap-2.5">
              <BlueCheck /> Transporte terrestre y marítimo
            </li>
          </ul>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Botón Reservar (Rojo) */}
            <a
              href="tel:+17877416032"
              className="bg-[#C8102E] hover:bg-[#b00e28] transition-colors text-white py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 font-instrument font-semibold text-[16px] shadow-sm w-full sm:w-auto cursor-pointer"
            >
              <PhoneIcon />
              <span>Reservar mi cupo</span>
            </a>
            {/* Botón WhatsApp (Borde Azul) */}
            <a
              href="https://wa.me/17865156990"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#003087] hover:bg-[#003087]/5 transition-colors text-[#003087] py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 font-instrument font-semibold text-[16px] w-full sm:w-auto cursor-pointer"
            >
              <ChatIcon />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* LADO DERECHO: El Formulario Blanco de Cotización */}
        <div className="w-full lg:w-auto flex justify-center z-10">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}

export default Hero;
