interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="w-67.5 h-auto md:h-24 bg-[#F4F6FA] flex flex-col rounded-2xl my-2 items-center justify-center">
      <h3 className="text-[26px] font-semibold font-instrument text-[#C8102E]">
        {number}
      </h3>
      <p className="text-[16px] font-semibold font-instrument text-[#5A6070]">
        {label}
      </p>
    </div>
  );
}

function Stats() {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] flex flex-col items-center py-10.5 px-6 gap-8">
      <h2 className="text-[#003087] font-semibold font-instrument text-[22px] md:text-[26px] text-center">
        Miles de clientes han confiado en PRAutoTransport
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4.5 w-full items-center">
        <StatCard number="+8" label="Años de experiencia" />
        <StatCard number="+15K" label="Vehículos transportados" />
        <StatCard number="50" label="Estados Cubiertos" />
        <StatCard number="100%" label="Atención personalizada" />
      </div>
      <p className="text-[16px] md:text-[18px] font-instrument text-[#5A6070] text-center leading-relaxed">
        Miles de clientes han confiado en{" "}
        <span className="font-semibold">PRAutoTransport</span> para mover sus
        vehículos de forma segura entre <span className="font-semibold">Puerto Rico</span> y <span className="font-semibold">Estados Unidos.</span>
      </p>
    </div>
  );
}

export default Stats;
