import { Link } from "react-router-dom";
import bridgeImage from "../../assets/Blog/bridge.jpg";
import carAndBoatImage from "../../assets/Blog/carAndBoat.jpg";
import carInsideImage from "../../assets/Blog/carInside.jpg";

function Blog() {
  const secondaryPosts = [
    {
      id: "como-transportar-vehiculo-estado-otro-eeuu",
      title: "Cómo Transportar tu Vehículo de un Estado a Otro en EE. UU. : Lo Que Debes Saber",
      image: bridgeImage,
    },
    {
      id: "cuanto-cuesta-transportar-vehiculo-entre-estados",
      title: "¿Cuánto cuesta transportar un vehículo entre estados?",
      image: carInsideImage,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white font-instrument pt-16">
      {/* Page Title */}
      <h1 className="text-[32px] md:text-[40px] font-bold text-[#003087] mb-12 text-center">
        Blog
      </h1>

      {/* Main Grid */}
      <div className="w-full max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column - Featured Post */}
        <div className="lg:col-span-7">
          <Link
            to="/blog/cuanto-cuesta-transportar-vehiculo-entre-estados"
            className="group block bg-[#F4F6FA]/70 rounded-3xl p-6 md:p-8 border border-[#DDE2EC]/40 hover:shadow-md transition-shadow text-left"
          >
            <div className="w-full h-auto aspect-[4/3] md:aspect-[1.48/1] overflow-hidden rounded-2xl mb-6">
              <img
                src={carAndBoatImage}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                alt="Car and Boat at harbor"
              />
            </div>
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#003087] leading-snug mb-4 group-hover:text-[#002466] transition-colors">
              ¿Cuánto cuesta transportar un vehículo entre estados?
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#5A6070] leading-relaxed">
              Transportar un vehículo entre estados puede ser una necesidad para muchas personas, ya sea por mudanza, compra de un automóvil en otro estado o simplemente por la necesidad de mover un vehiculo de un lugar a otro. Sin embargo, uno de los primeros aspectos que las personas consideran es el costo asociado con este servicio.
            </p>
          </Link>
        </div>

        {/* Right Column - Secondary Posts & Button */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-6">
            {secondaryPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.id}`}
                className="group flex flex-row items-center gap-4 md:gap-6 hover:opacity-90 transition-opacity"
              >
                {/* Image Container with precise size */}
                <div className="w-[120px] h-[85px] sm:w-[180px] sm:h-[127px] md:w-[221px] md:h-[156px] shrink-0 overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover"
                    alt={post.title}
                  />
                </div>
                {/* Title */}
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#003087] leading-snug group-hover:underline">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* Ver más Button */}
          <button className="bg-[#C8102E] hover:bg-[#b00e28] transition-colors text-white py-3.5 px-10 rounded-2xl md:rounded-full font-semibold text-[15px] w-full md:w-auto self-start cursor-pointer shadow-sm mt-2 text-center">
            Ver más
          </button>
        </div>
      </div>

      {/* Blue Footer Banner (CTA) */}
      <div className="w-full bg-[#003087] py-16 px-6 mt-20 flex flex-col items-center text-center">
        {/* Red horizontal line bar */}
        <div className="w-12 h-1 bg-[#C8102E] rounded-full"></div>
        
        <h2 className="text-[26px] md:text-[34px] font-bold text-white mt-6 max-w-2xl leading-tight">
          Tu vehículo está a un paso de llegar a su destino
        </h2>
        
        <p className="text-[#B5D4F4] text-[15px] md:text-[17px] mt-4 mb-8 max-w-xl">
          Recibe asistencia personalizada y asegura tu espacio de transporte hoy.
        </p>

        <Link to="/#cotizar">
          <button className="border border-[#B5D4F4]/60 hover:bg-white/10 transition-colors text-white py-3.5 px-6 rounded-full flex items-center justify-center gap-2 font-semibold text-[15px] cursor-pointer">
            <span>🏎</span>
            <span>Reserva tu cupo hoy</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
