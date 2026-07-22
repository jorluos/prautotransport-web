import Jose from "../../../assets/CostumersImages/jose.png";
import Maria from "../../../assets/CostumersImages/maria.png";
import Roberto from "../../../assets/CostumersImages/roberto.png";

interface TestimonialCardProps {
  image: string;
  name: string;
  duration: string;
  stars: number;
  comment: string;
}

// Icono de Estrella Dorada de Figma
const StarIcon = () => (
  <svg
    className="w-4.5 h-4.5 text-[#F2A900] fill-current"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function TestimonialCard({
  image,
  name,
  duration,
  comment,
}: TestimonialCardProps) {
  return (
    // Contenedor de la tarjeta con ancho exacto de Figma (361px)
    <div className="w-90.25 shrink-0 bg-[#F4F6FA]/50 rounded-3xl overflow-hidden border border-[#DDE2EC]/40 flex flex-col shadow-sm">
      {/* 1. SECCIÓN VIDEO/FOTO (Alto de 289px) */}
      <div className="relative w-full h-72.25">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={`Testimonio de ${name}`}
        />
        {/* Capa oscura suave + Botón Play */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <button className="w-14 h-14 bg-[#003087]/90 border-2 border-white rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <svg className="w-6 h-6 fill-current pl-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        {/* Píldora roja con duración del video */}
        <span className="absolute bottom-4 left-4 bg-[#C8102E] text-white text-[12px] font-instrument font-semibold px-2 py-0.5 rounded">
          {duration}
        </span>
      </div>

      {/* 2. SECCIÓN TEXTO E INFO (Blanco) */}
      <div className="bg-white p-6 flex flex-col gap-2.5">
        <h3 className="text-[16px] font-instrument font-bold text-[#003087]">
          {name}
        </h3>

        {/* 5 estrellas */}
        <div className="flex gap-1">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>

        <p className="text-[14px] font-instrument text-[#5A6070] leading-snug">
          {comment}
        </p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    // Contenedor principal con fondo blanco y alto automático
    <div className="w-full h-auto bg-[#FFFFFF] py-16 px-6 border-b border-[#DDE2EC] flex flex-col items-center">
      <h2 className="text-[26px] font-instrument font-semibold text-[#003087] text-center mb-10">
        Lo que dicen nuestros clientes
      </h2>

      {/* Contenedor del Carrusel deslizable en móvil, alineado en escritorio */}
      <div className="flex flex-row overflow-x-auto gap-6 pb-6 w-full max-w-7xl px-4 md:justify-center scrollbar-none snap-x">
        <TestimonialCard
          image={Maria}
          name="María L."
          duration="0:31"
          stars={5}
          comment="Las asesoras estuvieron conmigo en cada paso."
        />
        <TestimonialCard
          image={Roberto}
          name="Roberto S."
          duration="0:37"
          stars={5}
          comment="Muy recomendado, proceso fácil y rápido."
        />
        <TestimonialCard
          image={Jose}
          name="José Rodríguez"
          duration="0:24"
          stars={5}
          comment="Excelente servicio, mi carro llegó perfectamente."
        />
      </div>

      {/* Valoración y Clientes Satisfechos */}
      <div className="flex flex-col items-center gap-2 mt-8">
        <div className="flex gap-1.5">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className="text-[14px] font-instrument font-medium text-[#5A6070]">
          Más de 15,000 clientes satisfechos
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
