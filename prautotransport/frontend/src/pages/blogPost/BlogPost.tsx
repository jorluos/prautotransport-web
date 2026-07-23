import { useParams, Link } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  const postsData: Record<string, { title: string; date: string; content: string[] }> = {
    "guia-envio-puerto-rico-usa": {
      title: "Guía completa para enviar tu auto de Puerto Rico a USA",
      date: "23 de Julio, 2026",
      content: [
        "El proceso de enviar un automóvil desde Puerto Rico a los Estados Unidos Continentales puede parecer abrumador al principio. Sin embargo, con la preparación y el equipo adecuado, puede ser una experiencia sencilla y sin estrés.",
        "Paso 1: Documentación. Deberás presentar el título del vehículo original, identificación con foto válida, licencia del vehículo y una certificación de no deudas de la ACAA.",
        "Paso 2: Limpieza profunda. El USDA inspeccionará el auto en el puerto. Es vital que el vehículo esté completamente limpio, especialmente el chasis, motor y guardabarros, libres de tierra o semillas.",
        "Paso 3: Entrega en el puerto. Asegúrate de tener menos de 1/4 de tanque de gasolina, ya que es una regulación naviera estándar por razones de seguridad."
      ]
    },
    "requisitos-aduanas-2026": {
      title: "Requisitos de aduana actualizados para el transporte de autos",
      date: "15 de Julio, 2026",
      content: [
        "Para este año 2026, las regulaciones navieras y de aduana han reforzado sus inspecciones ecológicas y documentales.",
        "Es obligatorio pasar por la inspección de la división de vehículos hurtados de la Policía de Puerto Rico antes de programar tu cita en el puerto marítimo.",
        "Asimismo, recuerda que el USDA mantiene tolerancia cero para tierra orgánica en vehículos importados al continente, por lo que recomendamos encarecidamente realizar un lavado a presión profesional antes del traslado."
      ]
    },
    "cuanto-cuesta-transportar-vehiculo-entre-estados": {
      title: "¿Cuánto cuesta transportar un vehículo entre estados?",
      date: "23 de Julio, 2026",
      content: [
        "Transportar un vehículo entre estados puede ser una necesidad para muchas personas, ya sea por mudanza, compra de un automóvil en otro estado o simplemente por la necesidad de mover un vehiculo de un lugar a otro.",
        "Sin embargo, uno de los primeros aspectos que las personas consideran es el costo asociado con este servicio.",
        "El costo final dependerá del tipo de transporte (abierto o cerrado), la distancia exacta y el tamaño/peso de tu vehículo. Comunícate con nuestras asesoras para recibir una cotización detallada."
      ]
    },
    "como-transportar-vehiculo-estado-otro-eeuu": {
      title: "Cómo Transportar tu Vehículo de un Estado a Otro en EE. UU. : Lo Que Debes Saber",
      date: "20 de Julio, 2026",
      content: [
        "Mudar tu auto a través de las fronteras estatales de EE. UU. requiere planificación y conocimiento sobre logística interestatal.",
        "Desde la selección de la naviera adecuada hasta los trámites locales y permisos aduanales si se involucra tránsito marítimo.",
        "Preparar la documentación necesaria con anticipación te ahorrará demoras y cargos adicionales en el puerto."
      ]
    }
  };

  const post = postsData[id || ""] || {
    title: "Artículo no encontrado",
    date: "",
    content: ["El artículo solicitado no existe o ha sido trasladado."]
  };

  return (
    <div className="w-full flex flex-col items-center py-16 px-6 bg-[#F4F6FA] font-instrument min-h-[60vh]">
      <div className="w-full max-w-[800px] bg-white rounded-3xl p-8 md:p-12 border border-[#DDE2EC] shadow-sm text-left">
        <Link to="/blog" className="text-[#003087] font-semibold hover:underline flex items-center gap-1 mb-6">
          <span>←</span> Volver al Blog
        </Link>
        {post.date && (
          <span className="text-[12px] font-semibold text-[#003087] bg-[#E6F1FB] px-3 py-1 rounded-full border border-[#B5D4F4]/30">
            {post.date}
          </span>
        )}
        <h1 className="text-[28px] md:text-[34px] font-bold text-[#003087] mt-4 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="space-y-6 text-[16px] text-[#5A6070] leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
