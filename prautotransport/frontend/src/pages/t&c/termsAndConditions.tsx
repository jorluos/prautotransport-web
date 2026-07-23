import { Link } from "react-router-dom";

function TermsAndConditions() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionsEs = [
    { id: "es-1", num: "1", title: "DEFINICIÓN Y ALCANCE", text: "PRAutoTransport actúa como corredor logístico y agente de carga para coordinar el traslado de vehículos de motor entre Puerto Rico y los Estados Unidos. Estos términos regulan la relación entre el cliente y la empresa." },
    { id: "es-2", num: "2", title: "SERVICIOS Y LIMITACIÓN DE RESPONSABILIDAD", text: "Nuestros servicios se limitan a la coordinación y logística de transporte. No somos responsables por demoras causadas por condiciones climáticas, inspecciones gubernamentales, fallas mecánicas de las navieras u otros eventos de fuerza mayor." },
    { id: "es-3", num: "3", title: "RESPONSABILIDAD DEL CLIENTE", text: "El cliente debe asegurarse de proveer información exacta del vehículo, incluyendo marca, modelo, VIN y estado de funcionamiento. El cliente garantiza que cuenta con la autoridad legal para autorizar el traslado." },
    { id: "es-4", num: "4", title: "VEHÍCULOS INOPERABLES Y MODIFICADOS", text: "Los vehículos inoperables o con modificaciones de suspensión/altura deben ser notificados previamente. Se aplicarán cargos adicionales si el vehículo no puede rodar por sus propios medios al momento de la carga." },
    { id: "es-5", num: "5", title: "OBJETOS PERSONALES Y ARTÍCULOS PROHIBIDOS", text: "No se permite el transporte de artículos personales dentro del vehículo. PRAutoTransport no se hace responsable por la pérdida de artículos no declarados u objetos prohibidos por el USDA/Aduanas." },
    { id: "es-6", num: "6", title: "CANCELACIONES Y REEMBOLSOS", text: "Las solicitudes de cancelación deben realizarse por escrito con un mínimo de 48 horas de anticipación a la fecha programada. Se pueden aplicar penalidades de administración según el estado de la reserva." },
    { id: "es-7", num: "7", title: "PAGOS Y CARGOS", text: "El pago del servicio debe completarse antes de la entrega del vehículo en el puerto de destino. Los cargos adicionales incurridos durante el tránsito (como almacenamiento) serán responsabilidad del cliente." },
    { id: "es-8", num: "8", title: "SEGUROS", text: "El transporte incluye una cobertura básica de seguro marítimo proporcionada por la naviera. Se recomienda al cliente adquirir un seguro complementario de cobertura total para mayor seguridad." },
    { id: "es-9", num: "9", title: "RECLAMACIÓN POR PÉRDIDA, DAÑO O RETRASO", text: "Cualquier reclamo por daños físicos o pérdida debe ser reportado por escrito en el punto de entrega y registrado en el documento de inspección correspondiente. Reclamaciones posteriores no serán aceptadas." },
    { id: "es-10", num: "10", title: "LIMITACIÓN DE RESPONSABILIDAD", text: "La responsabilidad máxima de PRAutoTransport ante cualquier pérdida o daño físico directo al vehículo no excederá el valor de mercado depreciado del vehículo o el límite de cobertura de la póliza aplicable." },
    { id: "es-11", num: "11", title: "INDEMNIZACIÓN", text: "El cliente se compromete a indemnizar y mantener libre de daños a PRAutoTransport frente a cualquier reclamo, pérdida o penalidad gubernamental derivada de la omisión de documentación requerida." },
    { id: "es-12", num: "12", title: "LEY APLICABLE Y JURISDICCIÓN", text: "Este acuerdo se regirá e interpretará conforme a las leyes del Estado Libre Asociado de Puerto Rico. Cualquier acción legal deberá presentarse en los tribunales de San Juan." },
    { id: "es-13", num: "13", title: "RELACIÓN CONTRACTUAL", text: "La aceptación de estos términos no constituye una sociedad, empleo o relación de representación de exclusividad entre el cliente y PRAutoTransport." },
    { id: "es-14", num: "14", title: "DERECHOS DE IMAGEN Y PROMOCIÓN", text: "PRAutoTransport se reserva el derecho de tomar fotografías del vehículo durante la inspección y el transporte para fines de control de calidad y registro de seguridad." },
    { id: "es-resumen", num: "", title: "RESUMEN LEGAL SIMPLIFICADO", text: "En resumen, usted nos autoriza a coordinar el envío de su auto, certifica que los documentos provistos son reales y acepta que no somos responsables de demoras navieras o artículos olvidados dentro del auto." },
  ];

  const sectionsEn = [
    { id: "en-1", num: "1", title: "DEFINITION AND SCOPE", text: "PRAutoTransport acts as a logistics broker and freight forwarder to coordinate the transportation of motor vehicles between Puerto Rico and the United States. These terms govern the relationship between the client and the company." },
    { id: "en-2", num: "2", title: "SERVICES AND LIMITATION OF LIABILITY", text: "Our services are limited to transportation logistics coordination. We are not responsible for delays caused by weather conditions, government inspections, ocean carrier mechanical failures, or other force majeure events." },
    { id: "en-3", num: "3", title: "CUSTOMER RESPONSIBILITIES", text: "The client must ensure exact vehicle details are provided, including make, model, VIN, and operational status. The client guarantees they hold legal authority to authorize transport." },
    { id: "en-4", num: "4", title: "INOPERABLE AND MODIFIED VEHICLES", text: "Inoperable or suspension/height modified vehicles must be reported in advance. Additional fees apply if the vehicle cannot roll under its own power at loading." },
    { id: "en-5", num: "5", title: "PERSONAL ITEMS AND PROHIBITED ARTICLES", text: "No personal items are allowed to be transported inside the vehicle. PRAutoTransport is not liable for loss of undeclared items or items prohibited by USDA/Customs." },
    { id: "en-6", num: "6", title: "CANCELLATIONS AND REFUNDS", text: "Cancellation requests must be submitted in writing at least 48 hours prior to the scheduled date. Administration fees may apply depending on booking status." },
    { id: "en-7", num: "7", title: "PAYMENTS AND CHARGES", text: "Service payments must be completed before vehicle pickup at the destination port. Additional transit-related fees (such as storage) are the client's responsibility." },
    { id: "en-8", num: "8", title: "INSURANCE", text: "Transport includes basic ocean marine insurance provided by the carrier. Clients are strongly encouraged to purchase supplemental full-coverage insurance." },
    { id: "en-9", num: "9", title: "CLAIM FOR LOSS, DAMAGE OR DELAY", text: "Any physical damage or loss claim must be reported in writing at delivery and documented in the inspection report. Post-delivery claims will not be honored." },
    { id: "en-10", num: "10", title: "LIMITATION OF LIABILITY", text: "The maximum liability of PRAutoTransport for any loss or direct physical damage to the vehicle will not exceed the depreciated market value of the vehicle or policy limits." },
    { id: "en-11", num: "11", title: "INDEMNIFICATION", text: "The client agrees to indemnify and hold harmless PRAutoTransport against any claim, loss, or government penalty resulting from missing documentation." },
    { id: "en-12", num: "12", title: "GOVERNING LAW AND JURISDICTION", text: "This agreement is governed by the laws of the Commonwealth of Puerto Rico. Any legal action must be filed in the courts of San Juan." },
    { id: "en-13", num: "13", title: "CONTRACTUAL RELATIONSHIP", text: "Acceptance of these terms does not establish a partnership, employment, or exclusive agency relationship between the client and PRAutoTransport." },
    { id: "en-14", num: "14", title: "IMAGE AND PROMOTIONAL RIGHTS", text: "PRAutoTransport reserves the right to take photographs of the vehicle during inspection and transit for quality assurance and safety records." },
    { id: "en-resumen", num: "", title: "LEGAL SUMMARY", text: "In short, you authorize us to coordinate your vehicle shipping, certify that all documentation is valid, and agree that we are not liable for carrier delays or personal items left inside." },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white font-instrument pt-16">
      {/* Main Grid Container */}
      <div className="w-full max-w-[1200px] px-6 flex flex-col md:flex-row gap-0 items-start mb-20 text-left">
        {/* Left Sidebar - Hidden on mobile */}
        <aside className="hidden md:block w-72 shrink-0 pr-8 border-r border-[#DDE2EC] sticky top-8 self-start max-h-[85vh] overflow-y-auto">
          {/* Section: Español */}
          <div className="mb-8">
            <h3 className="text-[16px] font-bold text-[#003087] mb-4">Español</h3>
            <ul className="flex flex-col gap-3 text-[13px] text-[#5A6070] font-medium leading-tight">
              {sectionsEs.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className="hover:text-[#003087] transition-colors cursor-pointer text-left w-full truncate"
                    title={sec.title}
                  >
                    {sec.num ? `${sec.num}. ` : ""}{sec.title.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: English */}
          <div>
            <h3 className="text-[16px] font-bold text-[#003087] mb-4">English</h3>
            <ul className="flex flex-col gap-3 text-[13px] text-[#5A6070] font-medium leading-tight">
              {sectionsEn.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className="hover:text-[#003087] transition-colors cursor-pointer text-left w-full truncate"
                    title={sec.title}
                  >
                    {sec.num ? `${sec.num}. ` : ""}{sec.title.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 pl-0 md:pl-12 flex flex-col gap-16">
          {/* Spanish Document */}
          <article className="flex flex-col gap-8">
            <div>
              <span className="text-[12px] text-[#5A6070] font-medium">Última actualización: Julio 2026</span>
              <h1 className="text-[28px] md:text-[34px] font-bold text-[#003087] mt-2 mb-6">
                Términos y condiciones
              </h1>
              <p className="text-[15px] md:text-[16px] text-[#5A6070] leading-relaxed italic">
                Al contratar los servicios de PRAutoTransport usted garantiza aceptar los términos detallados registrados en el presente contrato de Términos & Condiciones.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {sectionsEs.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-6 flex flex-col gap-3">
                  <h2 className="text-[16px] md:text-[18px] font-bold text-[#003087]">
                    {sec.num ? `${sec.num}. ` : ""}{sec.title}
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#5A6070] leading-relaxed">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* English Document */}
          <article className="flex flex-col gap-8 border-t border-[#DDE2EC] pt-16">
            <div>
              <span className="text-[12px] text-[#5A6070] font-medium">Last updated: July 2026</span>
              <h1 className="text-[28px] md:text-[34px] font-bold text-[#003087] mt-2 mb-6">
                Terms and conditions
              </h1>
              <p className="text-[15px] md:text-[16px] text-[#5A6070] leading-relaxed italic">
                By contracting the services of PRAutoTransport you guarantee to confirm, detail and agree to be governed by the following agreement section of Terms & Conditions.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {sectionsEn.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-6 flex flex-col gap-3">
                  <h2 className="text-[16px] md:text-[18px] font-bold text-[#003087]">
                    {sec.num ? `${sec.num}. ` : ""}{sec.title}
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#5A6070] leading-relaxed">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>
          </article>
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

export default TermsAndConditions;
