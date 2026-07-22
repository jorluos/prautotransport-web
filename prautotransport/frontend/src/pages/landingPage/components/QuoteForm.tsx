import React, { useState } from "react";

function QuoteForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    origen: "",
    destino: "",
    tipoVehiculo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de cotización:", formData);
    alert(`¡Gracias ${formData.nombre}! Estaremos procesando tu cotización.`);
  };

  return (
    // Tarjeta del formulario con sombra y bordes muy redondeados
    <div className="w-full max-w-[460px] bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#DDE2EC]/45 flex flex-col gap-5">
      <h3 className="text-[20px] md:text-[22px] font-instrument font-bold text-[#003087]">
        Obtén tu cotización gratis
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Cuadrícula de 2 columnas para los inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full h-11 bg-[#F4F6FA] border border-transparent rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full h-11 bg-[#F4F6FA] border border-transparent rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-11 bg-[#F4F6FA] border border-transparent rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all"
          />
          <input
            type="text"
            name="origen"
            placeholder="Origen"
            value={formData.origen}
            onChange={handleChange}
            required
            className="w-full h-11 bg-[#F4F6FA] border border-transparent rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all"
          />
          <input
            type="text"
            name="destino"
            placeholder="Destino"
            value={formData.destino}
            onChange={handleChange}
            required
            className="w-full h-11 bg-[#F4F6FA] border border-transparent rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all"
          />
          <input
            type="text"
            name="tipoVehiculo"
            placeholder="Tipo de vehículo"
            value={formData.tipoVehiculo}
            onChange={handleChange}
            required
            className="w-full h-11 bg-[#F4F6FA] border border-transparent rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[#C8102E] hover:bg-[#b00e28] transition-colors rounded-xl text-white font-instrument font-semibold text-[16px] shadow-sm mt-2 cursor-pointer"
        >
          Obtener cotización
        </button>
      </form>

      {/* Privacidad de datos */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-[#5A6070] font-instrument">
        <span>🔒</span>
        <span>Tus datos están protegidos</span>
      </div>
    </div>
  );
}

export default QuoteForm;
