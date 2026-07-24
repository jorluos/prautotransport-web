import Four from "../../../assets/HowItWorksImages/four.png";
import One from "../../../assets/HowItWorksImages/one.png";
import Three from "../../../assets/HowItWorksImages/three.png";
import Two from "../../../assets/HowItWorksImages/two.png";

const ClockIcon = () => (
  <svg
    className="w-4.5 h-4.5 text-[#003087] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

interface HowItWorksCardProps {
  image: string;
  title: string;
  label: string;
}

function HowItWorksCard({ image, title, label }: HowItWorksCardProps) {
  return (
    <div className="w-full max-w-[270px] flex flex-col items-center text-center p-4">
      <div className="w-[50px] h-[50px] flex items-center justify-center mb-4">
        <img src={image} className="w-full h-full object-contain" alt={title} />
      </div>
      <h3 className="text-[18px] font-instrument font-semibold text-[#003087] mb-2">
        {title}
      </h3>
      <p className="text-[15px] font-instrument text-[#5A6070] leading-relaxed">
        {label}
      </p>
    </div>
  );
}

function HowItWorks() {
  return (
    <div
      id="como-funciona"
      className="w-full h-auto bg-[#FFFFFF] flex flex-col items-center justify-center py-16 px-6 border-b border-[#DDE2EC]"
    >
      <h2 className="text-[26px] md:text-[32px] font-instrument font-semibold text-[#003087] text-center">
        ¿Cómo funciona el proceso?
      </h2>
      <div className="flex flex-col md:flex-row mt-12 justify-center items-center md:items-start gap-8 md:gap-12 w-full max-w-6xl">
        <HowItWorksCard
          image={One}
          title="Solicita cotización"
          label="Cuéntanos origen, destino y vehículo."
        />
        <HowItWorksCard
          image={Two}
          title="Reserva tu cupo"
          label="Coordinamos el transporte disponible."
        />
        <HowItWorksCard
          image={Three}
          title="Recogemos el vehículo"
          label="Terrestre o marítimo según destino."
        />
        <HowItWorksCard
          image={Four}
          title="Entrega segura"
          label="Recibes tu vehículo con seguimiento."
        />
      </div>
      <div className="w-full max-w-[1135px] py-4 px-6 flex border border-[#DDE2EC] items-center justify-center rounded-2xl mt-12 text-center shadow-sm bg-[#F4F6FA]/50 mx-4">
        <p className="text-[15px] md:text-[16px] font-instrument text-[#5A6070] flex items-center gap-2">
          <ClockIcon />
          <span>
            Tiempo promedio de proceso:{" "}
            6–18 días{" "}
            según origen y destino
          </span>
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
