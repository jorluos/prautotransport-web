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
              +8 años de experiencia
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
            <button className="bg-[#C8102E] hover:bg-[#b00e28] transition-colors text-white py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 font-instrument font-semibold text-[16px] shadow-sm w-full sm:w-auto cursor-pointer">
              <span>📞</span>
              <span>Reservar mi cupo</span>
            </button>
            {/* Botón WhatsApp (Borde Azul) */}
            <button className="border border-[#003087] hover:bg-[#003087]/5 transition-colors text-[#003087] py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 font-instrument font-semibold text-[16px] w-full sm:w-auto cursor-pointer">
              <span>💬</span>
              <span>Hablar por WhatsApp</span>
            </button>
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
