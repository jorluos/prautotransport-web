import { Link } from "react-router-dom";
import bridgeImage from "../../assets/Blog/bridge.jpg";
import carAndBoatImage from "../../assets/Blog/carAndBoat.jpg";
import carInsideImage from "../../assets/Blog/carInside.jpg";

function BlogPost() {
  return (
    <div className="w-full flex flex-col items-center bg-[#F4F6FA] font-instrument pt-8 md:pt-12">
      {/* Main Content Card Container */}
      <div className="w-full max-w-[1000px] px-4 md:px-6">
        <div className="w-full bg-white rounded-3xl overflow-hidden border border-[#DDE2EC] shadow-sm text-left flex flex-col">
          {/* Top Post Image Banner */}
          <div className="w-full h-[220px] sm:h-[350px] md:h-[450px] overflow-hidden">
            <img
              src={carAndBoatImage}
              className="w-full h-full object-cover"
              alt="Transportación de Autos"
            />
          </div>

          {/* Post Content Area */}
          <div className="p-6 sm:p-8 md:p-12 flex flex-col gap-8">
            {/* Top Navigation & Share Bar */}
            <div className="flex justify-end items-center text-[14px] font-semibold text-[#003087]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1.5 text-[#5A6070]"
              >
                <span>Compartir en</span>
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>

            {/* Post Title */}
            <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#003087] leading-tight">
              Transportación de Autos: ¿Por qué es Importante Elegir una Empresa Confiable?
            </h1>

            {/* Post Body Content */}
            <div className="space-y-6 text-[15px] sm:text-[16px] text-[#5A6070] leading-relaxed">
              <p>
                En el mundo actual, la movilidad es una necesidad que todos enfrentamos, y el traslado de vehículos se ha convertido en una actividad común para muchos de nosotros. Es por eso que elegir una compañía de transporte confiable se ha vuelto más importante que nunca. Permíteme explicarte por qué es esencial tomar esta decisión con cuidado.
              </p>
              <p>
                <strong className="block sm:inline mb-1 sm:mb-0">
                  Confianza y Seguridad:
                </strong>{" "}
                La seguridad de tu vehículo es de suma importancia. Al optar por una compañía de transporte en la que puedas confiar, puedes estar seguro de que tu automóvil será manejado con cuidado y profesionalismo, reduciendo al mínimo cualquier riesgo de daño durante el proceso de transporte.
              </p>
              <p>
                <strong className="block sm:inline mb-1 sm:mb-0">
                  Experiencia y Profesionalismo:
                </strong>{" "}
                La experiencia cuenta mucho en este campo. Una compañía con años de experiencia en el transporte de vehículos no solo tiene el conocimiento necesario, sino también las habilidades prácticas desarrolladas a lo largo del tiempo para ofrecer un servicio de calidad y sin complicaciones.
              </p>
              <p>
                <strong className="block sm:inline mb-1 sm:mb-0">
                  Transparencia y Honestidad:
                </strong>{" "}
                Es crucial saber exactamente qué estás pagando y qué esperar. Una compañía confiable te proporcionará precios claros y transparentes desde el principio, evitando sorpresas desagradables o costos ocultos más adelante en el proceso.
              </p>
              <p>
                <strong className="block sm:inline mb-1 sm:mb-0">
                  Atención Personalizada:
                </strong>{" "}
                Cada cliente tiene necesidades únicas. Un servicio que se adapta a tus necesidades específicas marca la diferencia. Nos esforzamos por ofrecer una atención personalizada y satisfacer las demandas individuales de cada cliente, asegurando una experiencia de transporte satisfactoria y sin estrés.
              </p>
              <p>
                <strong className="block sm:inline mb-1 sm:mb-0">
                  Conclusión:
                </strong>{" "}
                Elegir una compañía de transporte confiable para tu vehículo es un paso fundamental. Ofrece seguridad, experiencia, transparencia y un servicio personalizado que te brindará la tranquilidad que necesitas durante todo el proceso de traslado.
              </p>
              <p>
                Si estás buscando una compañía de transporte de coches en la que puedas confiar, no dudes en contactarnos. Estamos aquí para brindarte la tranquilidad y el servicio confiable que necesitas para mover tu vehículo de manera segura y sin complicaciones.
              </p>
            </div>

            {/* Te podría interesar Box */}
            <div className="bg-[#F4F6FA] rounded-3xl p-6 sm:p-8 border border-[#DDE2EC]/60 mt-6 text-left">
              <h3 className="text-[18px] font-bold text-[#003087] mb-6">
                Te podría interesar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/blog/como-transportar-vehiculo-estado-otro-eeuu"
                  className="group bg-white rounded-2xl overflow-hidden border border-[#DDE2EC]/40 hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  <div className="w-full h-[120px] sm:h-[150px] overflow-hidden">
                    <img
                      src={bridgeImage}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      alt="Cómo Transportar tu Vehículo de un Estado a Otro en EE. UU."
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-center">
                    <h4 className="text-[14px] font-bold text-[#003087] leading-snug group-hover:underline line-clamp-2">
                      Cómo Transportar tu Vehículo de un Estado a Otro en EE. UU. : Lo Que Debes Saber
                    </h4>
                  </div>
                </Link>

                <Link
                  to="/blog/cuanto-cuesta-transportar-vehiculo-entre-estados"
                  className="group bg-white rounded-2xl overflow-hidden border border-[#DDE2EC]/40 hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  <div className="w-full h-[120px] sm:h-[150px] overflow-hidden">
                    <img
                      src={carInsideImage}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      alt="¿Cuánto cuesta transportar un vehículo entre estados?"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-center">
                    <h4 className="text-[14px] font-bold text-[#003087] leading-snug group-hover:underline line-clamp-2">
                      ¿Cuánto cuesta transportar un vehículo entre estados?
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Footer Banner (CTA) */}
      <div className="w-full bg-[#003087] py-16 px-6 mt-16 flex flex-col items-center text-center">
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

export default BlogPost;
