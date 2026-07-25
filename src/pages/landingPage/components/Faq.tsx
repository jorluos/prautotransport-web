import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-5 h-5 text-[#0D1B3E] shrink-0 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

function Faq() {
  // Estado para controlar qué pregunta está abierta (null si ninguna lo está)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "¿Cuánto tarda el transporte?",
      answer: "Entre 6 y 18 días según tu origen y destino.",
    },
    {
      question: "¿Puedo dejar pertenencias dentro del vehículo?",
      answer:
        "[PENDIENTE: agregar respuesta real aquí]",
    },
    {
      question: "¿El auto necesita estar en funcionamiento?",
      answer:
        "[PENDIENTE: agregar respuesta real aquí]",
    },
    {
      question: "¿El transporte tiene seguro incluido?",
      answer:
        "[PENDIENTE: agregar respuesta real aquí]",
    },
    {
      question: "¿Cómo realizo el pago?",
      answer:
        "[PENDIENTE: agregar respuesta real aquí]",
    },
    {
      question: "¿Puedo rastrear mi vehículo en tránsito?",
      answer:
        "[PENDIENTE: agregar respuesta real aquí]",
    },
    {
      question: "¿Necesito el título del vehículo?",
      answer:
        "[PENDIENTE: agregar respuesta real aquí]",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Contenedor principal con alto automático y color de fondo de Figma
    <div
      id="faq"
      className="w-full h-auto bg-[#F4F6FA] py-16 px-6 border-b border-[#DDE2EC] flex flex-col items-center"
    >
      <h2 className="text-[26px] font-instrument font-semibold text-[#003087] text-center mb-10">
        Preguntas frecuentes
      </h2>

      {/* Contenedor del acordeón */}
      <div className="w-full max-w-200 flex flex-col gap-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#DDE2EC] overflow-hidden shadow-sm transition-all duration-300"
            >
              {/* Botón de la Pregunta */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-instrument font-semibold text-[#0D1B3E] text-[16px] md:text-[18px] hover:text-[#003087] transition-colors focus:outline-none"
              >
                <span>{item.question}</span>
                {/* Icono animado + / - */}
                <ChevronIcon isOpen={isOpen} />
              </button>

              {/* Respuesta Desplegable */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-1 text-[14px] md:text-[16px] font-instrument text-[#5A6070] leading-relaxed border-t border-[#F4F6FA]">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
