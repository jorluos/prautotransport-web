import Four from "../../../assets/HowItWorksImages/four.png";
import One from "../../../assets/HowItWorksImages/one.png";
import Three from "../../../assets/HowItWorksImages/three.png";
import Two from "../../../assets/HowItWorksImages/two.png";

interface HowItWorksCardProps {
  image: string;
  title: string;
  label: string;
}

function HowItWorksCard({ image, title, label }: HowItWorksCardProps) {
  return (
    <div className="w-67.5 h-39.5 flex flex-col items-center justify-center text-center p-4">
      <img
        src={image}
        className="w-10.75 h-11 object-contain mb-3"
        alt={title}
      ></img>
      <h2 className="text-[18px] font-instrument font-semibold text-[#003087]">
        {title}
      </h2>
      <p className="text-[16px] font-instrument font-semibold text-[#5A6070]">
        {label}
      </p>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="w-full h-auto md:h-120 bg-[#FFFFFF] flex flex-col items-center justify-center py-12.5 border-b">
      <h2 className="text-[26px] font-instrument font-semibold text-[#003087] text-center">
        ¿Cómo funciona el proceso?
      </h2>
      <div className="flex flex-col md:flex-row mt-10 justify-center">
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
      <div className="w-283.75 h-11.25 py-3 flex border items-center justify-center rounded-2xl mt-8">
        <p className="text-[18px] font-instrument text-[#5A6070]">
          Tiempo promedio de proceso: 6–18 días según origen y destino
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
