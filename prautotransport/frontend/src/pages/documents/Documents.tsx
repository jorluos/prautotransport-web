import { Link } from "react-router-dom";

function Documents() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-white font-instrument pt-16">
      {/* Main Grid Container */}
      <div className="w-full max-w-[1200px] px-6 flex flex-col md:flex-row gap-0 items-start mb-20 text-left">
        {/* Left Sidebar - Hidden on mobile */}
        <aside className="hidden md:block w-60 shrink-0 pr-8 border-r border-[#DDE2EC] sticky top-8 self-start">
          <h3 className="text-[18px] font-bold text-[#003087] mb-6">Procedimiento</h3>
          <ul className="flex flex-col gap-4 text-[15px] text-[#5A6070] font-medium">
            <li>
              <button
                onClick={() => scrollToSection("requisitos")}
                className="hover:text-[#003087] transition-colors cursor-pointer text-left w-full"
              >
                Requisitos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("no-permitido")}
                className="hover:text-[#003087] transition-colors cursor-pointer text-left w-full"
              >
                No permitido
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("gestoria")}
                className="hover:text-[#003087] transition-colors cursor-pointer text-left w-full"
              >
                Más información
              </button>
            </li>
          </ul>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 pl-0 md:pl-12 flex flex-col gap-10">
          {/* Main Title Section */}
          <section className="flex flex-col gap-4">
            <h1 className="text-[28px] md:text-[34px] font-bold text-[#003087] leading-tight">
              Enviando tu auto con PRautotransport
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#5A6070] italic leading-relaxed">
              La reservación es requerida antes de entregar tu vehículo. Para realizar una reservación por favor llamar al{" "}
              <a href="tel:+17877416032" className="text-[#003087] font-semibold hover:underline">1-787-741-6032</a> o al{" "}
              <a href="tel:+18704556742" className="text-[#003087] font-semibold hover:underline">1-870-455-6742</a>
            </p>
          </section>

          {/* Requisitos Section */}
          <section id="requisitos" className="flex flex-col gap-6 scroll-mt-6 border-t border-[#F4F6FA] pt-8">
            <h2 className="text-[22px] md:text-[26px] font-bold text-[#003087]">Requisitos</h2>
            <p className="text-[15px] md:text-[16px] text-[#5A6070]">
              Los siguientes requisitos tienen que ser completados antes de embarcar un vehículo de motor:
            </p>

            <ol className="flex flex-col gap-6 text-[15px] md:text-[16px] text-[#5A6070] leading-relaxed">
              <li className="flex flex-col gap-2">
                <span className="font-semibold text-[#003087]">1. Documentos del vehículo:</span>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Licencia (registración)</li>
                  <li>Título del vehículo</li>
                  <li>Copia de licencia de conducir del dueño</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold text-[#003087]">2.</span> Certificado de no multas pendientes de pago con sellos de $1.50 Emitido por el Departamento de Transportación y Obras Públicas (DTOP) vigente por 2 días. Impresión de internet no es válido.
              </li>

              <li>
                <span className="font-semibold text-[#003087]">3.</span> Comprobante (voucher) de exportación por $10.00 de la Colecturía (No sellos/stamps).
              </li>

              <li>
                <span className="font-semibold text-[#003087]">4.</span> El vehículo tiene que ser inspeccionado en la División de Vehículos Hurtados (Estación de policía de la ciudad donde reside el vehículo). (Válido por 5 días solamente).
              </li>

              <li>
                <span className="font-semibold text-[#003087]">5.</span> Certificado de no deudas con ACCA (La administración que se ocupa de autos accidentes) *Emitido en las oficinas de San Juan, PR solamente. (Arterial Hostos, Esq. Chardón - San Juan, PR 00936).
              </li>

              <li>
                <span className="font-semibold text-[#003087]">6.</span> Recibo de lavado incluyendo el exterior, motor y chasis.
              </li>

              <li>
                <span className="font-semibold text-[#003087]">7.</span> Declaración jurada (original) que autoriza a Nomanejes.com/PRautotransport.com y el puerto hacer el envío. (Documento original con sello de Puerto Rico).
              </li>

              <li>
                <span className="font-semibold text-[#003087]">8.</span> Declaración jurada (original) hecha en Puerto Rico más copia de la licencia del dueño autorizando el embarque. (Es requerido cuando el dueño no esté presente).
              </li>

              <li>
                <span className="font-semibold text-[#003087]">9.</span> Carta del banco (original) autorizando el embarque en caso de tener algún gravamen (ver ejemplo).
              </li>

              <li>
                <span className="font-semibold text-[#003087]">10.</span> Si el envío del vehículo es hacia Puerto Rico, usted es responsable de pagar el impuesto de importación del vehículo. Para determinar el requisito del impuesto estimado para el vehículo específico, por favor tenga su VIN listo y haga clic <a href="https://siscon.hacienda.gobierno.pr/Siscon/Portal/ARBAW951Form.aspx" target="_blank" rel="noopener noreferrer" className="text-[#003087] font-semibold hover:underline">aquí</a>.
              </li>
            </ol>

            <p className="text-[15px] md:text-[16px] text-[#5A6070] italic font-bold mt-4">
              Todas las tablillas de Puerto Rico serán removidas por la policía antes de embarcación y no serán devueltas.
            </p>
          </section>

          {/* Gestoria Info Warning Section */}
          <section id="gestoria" className="bg-[#F4F6FA]/60 rounded-3xl p-6 md:p-8 border border-[#DDE2EC]/40">
            <p className="text-[14px] md:text-[15px] text-[#5A6070] italic font-bold uppercase leading-relaxed">
              AVISANOS SI DESEAS QUE TE AYUDEMOS A REALIZAR ESTAS GESTORIAS, LLAMANDONOS O VISITANDO NUESTRAS OFICINAS DE PR EN: Ave. Boulevard, W-7, Ste. 2, Levittown, Toa Baja, PR 00949. Horario: Lunes a Viernes 10am - 6pm Telefonos 787-231-5526 ó 787-354-4252
            </p>
          </section>

          {/* No es permitido Section */}
          <section id="no-permitido" className="flex flex-col gap-6 scroll-mt-6 border-t border-[#F4F6FA] pt-8">
            <h2 className="text-[22px] md:text-[26px] font-bold text-[#003087]">No es permitido</h2>
            <ul className="flex flex-col gap-4 text-[15px] md:text-[16px] text-[#5A6070] list-disc pl-6 leading-relaxed">
              <li>Vehículo con alarmas que no sean instalados por el productor. (Estas tienen que ser desconectadas).</li>
              <li>Vehículos que no tengan los sellos con los números de identificación legibles en las puertas, bonete, tapa de baúl y "dashboard". Todas las partes reemplazadas tienen que ser documentadas.</li>
              <li>No podemos enviar los vehículos con ventanas rotas, dañadas, o vehículos que son inoperables. (Si el vehículo deja de funcionar después de ser recibido, se cobrará un adicional de $150.00).</li>
              <li>No se aceptará para el envío cualquier vehículo que se considere peligroso.</li>
              <li>No aceptamos vehículos con artículos personales por dentro. Los únicos artículos aceptables son accesorios que normalmente son conectados al vehículo, o permanentemente instalados. (Aceptamos asientos de niños).</li>
              <li>Al momento de entrega no se aceptará vehículos que contengan más de un cuarto de gasolina en el tanque.</li>
              <li>Por favor, tenga en cuenta que los vehículos que son de gran tamaño se envían de formas especiales dependiendo de la dimensiones (Camiones / Vans/ vehículos de gran tamaño). Para enviar alguno de estos vehículos por favor llamenos al 1-787-741-6032.</li>
            </ul>
          </section>
        </main>
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

export default Documents;
