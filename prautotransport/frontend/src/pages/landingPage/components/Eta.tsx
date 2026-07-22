interface EtaCardsProps {
  destination: string;
  ETA: string;
  label: string;
}

function EtaCards({ destination, ETA, label }: EtaCardsProps) {
  return (
    // Tarjeta responsiva: ancho máximo de 558px y altura fija de 134px en escritorio.
    // border-l-[6px] crea la barra lateral roja y overflow-hidden redondea su esquina.
    <div className="w-full max-w-139.5 h-auto md:h-33.5 bg-[#F4F6FA] rounded-2xl border-l-[6px] border-[#C8102E] overflow-hidden flex flex-col justify-center p-6 shadow-sm">
      {/* Ruta y bandera (en azul y semibold) */}
      <h3 className="text-[15px] md:text-[16px] font-instrument font-semibold text-[#003087] mb-1">
        {destination}
      </h3>

      {/* Tiempo estimado (rojo y grande) */}
      <p className="text-[26px] font-instrument font-bold text-[#C8102E] leading-tight mb-1">
        {ETA}
      </p>

      {/* Leyenda aclaratoria (en gris) */}
      <p className="text-[14px] font-instrument text-[#5A6070]">{label}</p>
    </div>
  );
}

function Eta() {
  return (
    // Contenedor principal con fondo blanco y padding vertical y horizontal
    <div className="w-full h-auto bg-[#FFFFFF] py-16 px-6 border-b border-[#DDE2EC] flex flex-col items-center justify-center">
      <h2 className="text-[26px] font-instrument font-semibold text-[#003087] text-center mb-10">
        Tiempo estimado de tránsito
      </h2>

      {/* Cuadrícula de 2x2 en escritorio (md:grid-cols-2), 1 columna en celulares */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full justify-items-center">
        <EtaCards
          destination="🇺🇸 Florida → Puerto Rico"
          ETA="6–8 días"
          label="Ruta más rápida disponible"
        />
        <EtaCards
          destination="🇺🇸 Texas → Puerto Rico"
          ETA="8–12 días"
          label="Salidas semanales regulares"
        />
        <EtaCards
          destination="🇺🇸 California → Puerto Rico"
          ETA="12–18 días"
          label="Transporte cross-country"
        />
        <EtaCards
          destination="🇵🇷 Puerto Rico → USA"
          ETA="Variable"
          label="Depende del destino final"
        />
      </div>

      {/* Texto de advertencia al pie de la sección */}
      <p className="text-[14px] font-instrument italic text-[#5A6070] mt-10 text-center">
        Los tiempos pueden variar según temporada, clima y disponibilidad.
      </p>
    </div>
  );
}

export default Eta;
