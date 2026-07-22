import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

function Faq() {
  // Estado para controlar qué pregunta está abierta (null si ninguna lo está)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "¿Qué documentos necesito para transportar mi vehículo?",
      answer:
        "Por lo general, necesitas copia de la identificación del dueño, el título de propiedad del vehículo (o carta de autorización del banco si está financiado), el registro vigente y la licencia del vehículo. Para Puerto Rico se requiere además la certificación de no multas y el pago de arbitrios correspondientes.",
    },
    {
      question:
        "¿Cuánto tiempo tarda el transporte entre Puerto Rico y Estados Unidos?",
      answer:
        "El tránsito marítimo de puerto a puerto suele tomar entre 4 y 6 días (vía Jacksonville, Florida) o de 8 a 10 días (vía Philadelphia). Si requieres transporte terrestre adicional (Door to Door) en EE.UU., se deben sumar de 3 a 7 días dependiendo de la distancia final.",
    },
    {
      question: "¿Cómo debo preparar mi vehículo para el transporte?",
      answer:
        "El vehículo debe estar limpio por fuera para realizar la inspección de daños previa. El tanque de combustible debe tener 1/4 de capacidad o menos por regulaciones marítimas. Además, no se permite dejar pertenencias personales dentro del auto durante el traslado.",
    },
    {
      question: "¿Qué diferencia hay entre transporte abierto y cerrado?",
      answer:
        "El transporte abierto es el más popular y económico, donde el auto viaja en un camión tipo portavehículos convencional. El transporte cerrado utiliza remolques completamente sellados que protegen el vehículo del clima, polvo y escombros, ideal para autos de lujo, exóticos o clásicos.",
    },
    {
      question: "¿El servicio incluye seguro para el vehículo?",
      answer:
        "Sí, todos los transportes contratados a través de PRAutoTransport incluyen una cobertura de seguro de carga contratada que protege tu vehículo contra daños ocurridos durante el proceso de carga, traslado marítimo y descarga.",
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
                <span className="text-xl text-[#C8102E] shrink-0 transition-transform duration-300">
                  {isOpen ? "−" : "+"}
                </span>
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
