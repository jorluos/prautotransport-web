import { Link } from "react-router-dom";
import Boat from "../../../assets/ServicesImages/boat.png";
import Car from "../../../assets/ServicesImages/car.png";
import House from "../../../assets/ServicesImages/house.png";
import Shield from "../../../assets/ServicesImages/shield.png";

interface ServicesCardProps {
  image: string;
  title: string;
  label: string;
}

function ServiceCard({ image, title, label }: ServicesCardProps) {
  return (
    <div className="w-67.5 h-auto md:h-39.25 rounded-2xl bg-[#FFFFFF] items-center p-6 text-center flex flex-col my-4">
      <div className="h-12 w-full flex items-center justify-center mb-2 -mt-1">
        <img
          src={image}
          className="h-10.75 w-10.75 object-contain"
          alt={title}
        ></img>
      </div>
      <h2 className="text-[18px] font-instrument font-semibold text-[#003087] mb-1">
        {title}
      </h2>
      <p className="text-[16px] font-instrument font-semibold text-[#5A6070]">
        {label}
      </p>
    </div>
  );
}

function Services() {
  const handleCotizarClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById("cotizar");
      if (element) {
        e.preventDefault();
        window.history.pushState(null, "", "/#cotizar");
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      id="servicios"
      className="w-full h-auto md:h-94.75 bg-[#F4F6FA] flex flex-col items-center py-10.5"
    >
      <h2 className="text-[26px] font-instrument font-semibold text-[#003087]">
        Nuestros servicios de transporte
      </h2>
      <div className="flex flex-col md:flex-row gap-4.5">
        <ServiceCard
          image={Car}
          title="Transporte abierto"
          label="La opción más económica y popular."
        />
        <ServiceCard
          image={Shield}
          title="Transporte cerrado"
          label="Máxima protección para vehículos premium."
        />
        <ServiceCard
          image={Boat}
          title="Transporte marítimo"
          label="Puerto Rico ↔ Estados Unidos."
        />
        <ServiceCard
          image={House}
          title="Door to Door"
          label="Recogida y entrega personalizada."
        />
      </div>
      <Link
        to="/#cotizar"
        onClick={handleCotizarClick}
        className="w-58.75 h-12.5 bg-[#C8102E] hover:bg-[#b00e28] transition-colors rounded-2xl mt-2 flex items-center justify-center cursor-pointer shadow-sm"
      >
        <span className="text-[18px] font-instrument font-semibold text-[#FFFFFF]">
          Solicitar cotización
        </span>
      </Link>
    </div>
  );
}

export default Services;
