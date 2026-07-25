import { Link } from "react-router-dom";

function TermsAndConditions() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionsEs = [
    { id: "es-1", num: "1", title: "DEFINICIÓN Y ALCANCE", text: "GARLAS LLC actúa como agente logístico y corredor autorizado para coordinar transporte terrestre y marítimo de vehículos, motocicletas y embarcaciones dentro de Estados Unidos, hacia/desde Puerto Rico y hacia Centroamérica (Guatemala, Honduras y El Salvador). GARLAS no es un transportista directo, sino un intermediario logístico (broker) debidamente registrado ante el DOT y FMCSA." },
    { id: "es-2", num: "2", title: "SERVICIOS Y LIMITACIÓN DE RESPONSABILIDAD", text: "GARLAS coordina el transporte con transportistas terrestres y marítimos certificados, pero nunca toma posesión del vehículo. La responsabilidad directa sobre daños o retrasos recae en el carrier o naviera que efectúa el transporte. En rutas marítimas aplican los términos del Bill of Lading de la naviera. No se garantizan fechas exactas de recogida o entrega." },
    { id: "es-3", num: "3", title: "RESPONSABILIDAD DEL CLIENTE", text: "El cliente debe proporcionar información exacta del vehículo, prepararlo adecuadamente, entregar documentación válida, estar presente o designar a un representante, inspeccionar y firmar el Bill of Lading, y notificar reclamos en 48 horas tras la entrega." },
    { id: "es-4", num: "4", title: "VEHÍCULOS INOPERABLES Y MODIFICADOS", text: "Deben notificarse al momento de la reserva. Vehículos con alteraciones o tamaño mayor pueden generar cargos adicionales o ser rechazados. Si un vehículo operable se vuelve inoperable, el cliente asumirá el recargo de winch o manejo especial." },
    { id: "es-5", num: "5", title: "OBJETOS PERSONALES Y ARTÍCULOS PROHIBIDOS", text: "No se permiten pertenencias personales dentro del vehículo (solo accesorios fijos). Se prohíben armas, líquidos inflamables, drogas, dinero o documentos. Cualquier objeto no declarado viaja bajo riesgo del cliente y puede causar la retención del vehículo por autoridades." },
    { id: "es-6", num: "6", title: "CANCELACIONES Y REEMBOLSOS", text: "Cancelaciones antes de asignar un carrier: sin costo. Después de la asignación o despacho: tarifa mínima $150 USD. Si el vehículo fue cargado o entregado al transportista: aplica cargo adicional. Las cancelaciones deben hacerse por correo electrónico a info@shipshippersusa.com." },
    { id: "es-7", num: "7", title: "PAGOS Y CARGOS", text: "Pagos totales antes del embarque o según orden. Pagos C.O.D. deben ser en efectivo, money order o cashier’s check. Si el cliente no recibe o paga, el vehículo podría ser almacenado a su costo. Facturas vencidas acumulan 1.5% de interés mensual." },
    { id: "es-8", num: "8", title: "SEGUROS", text: "Doméstico USA: seguro incluido (FMCSA). | USA-PR: opcional $100 (25k) / $200 (50k) con deducible $1,000. | USA-Centroamérica: no disponible. GARLAS recomienda seguro marítimo opcional para autos de valor superior a $15,000 USD." },
    { id: "es-9", num: "9", title: "RECLAMOS POR PÉRDIDA, DAÑO O RETRASO", text: "GARLAS no es responsable por daños o pérdidas. Reclamos deben presentarse directamente al carrier o naviera conforme a la ley (Carmack Amendment o Carriage of Goods by Sea Act). GARLAS asistirá con la información necesaria." },
    { id: "es-10", num: "10", title: "LIMITACIÓN DE RESPONSABILIDAD", text: "La responsabilidad máxima de GARLAS por cualquier reclamo no excederá el valor pagado por sus servicios de intermediación. No garantiza ganancias, tiempos de entrega ni condiciones futuras del mercado." },
    { id: "es-11", num: "11", title: "INDEMNIZACIÓN", text: "El cliente indemniza a GARLAS ante cualquier reclamo o pérdida derivada de información falsa, violaciones de ley o daños causados por artículos no autorizados." },
    { id: "es-12", num: "12", title: "LEY APLICABLE Y JURISDUCCIÓN", text: "Este acuerdo se rige por las leyes del Estado de Florida. Las disputas se resolverán en los tribunales del Condado de Miami-Dade, salvo arbitraje acordado. En Puerto Rico o Centroamérica aplican leyes marítimas locales." },
    { id: "es-13", num: "13", title: "RELACIÓN CONTRACTUAL", text: "Nada constituye sociedad o empleo entre las partes. GARLAS y el cliente actúan como entidades independientes. Estos términos reemplazan cualquier acuerdo previo." },
    { id: "es-14", num: "14", title: "DERECHOS DE IMAGEN Y PROMOCIÓN", text: "GARLAS podrá usar el nombre o logo del cliente como referencia comercial, salvo que el cliente lo rechace por correo a privacy@shipshippersusa.com." },
    { id: "es-resumen", num: "", title: "RESUMEN LEGAL SIMPLIFICADO", text: "GARLAS actúa como intermediario autorizado, no transportista. Los tiempos son estimados, las cancelaciones generan cargos administrativos, el seguro marítimo es opcional, y las reclamaciones se presentan directamente al carrier o naviera." },
  ];

  const sectionsEn = [
    { id: "en-1", num: "1", title: "DEFINITION AND SCOPE", text: "GARLAS LLC acts as an authorized logistics agent and broker to coordinate land and ocean transportation of vehicles, motorcycles, boats, and vessels within the United States, to and from Puerto Rico, and to Central America (Guatemala, Honduras, and El Salvador). GARLAS is not a direct carrier but a licensed logistics intermediary (broker) registered with the DOT and FMCSA." },
    { id: "en-2", num: "2", title: "SERVICES AND LIMITATION OF LIABILITY", text: "GARLAS coordinates transport through certified land and ocean carriers but never takes physical possession of the vehicle. Responsibility for loss or delay lies with the carrier or shipping line executing the transport. Ocean shipments are also subject to the carrier’s Bill of Lading terms. Pickup and delivery dates are estimated and not guaranteed." },
    { id: "en-3", num: "3", title: "CUSTOMER RESPONSIBILITIES", text: "The customer must provide accurate vehicle information, prepare the vehicle properly, submit valid documentation, be present or appoint a representative at pickup and delivery, inspect and sign the Bill of Lading, and report any claims within 48 hours after delivery." },
    { id: "en-4", num: "4", title: "INOPERABLE AND MODIFIED VEHICLES", text: "Vehicles that are inoperable or modified must be disclosed at the time of booking. Oversized or altered vehicles may incur extra charges or be rejected. If a running vehicle becomes inoperable during handling or transport, the customer will be responsible for additional winch or special handling fees." },
    { id: "en-5", num: "5", title: "PERSONAL ITEMS AND PROHIBITED ARTICLES", text: "No personal items are allowed inside the vehicle (only factory-installed accessories). Firearms, flammable liquids, drugs, money, and documents are prohibited. Any undeclared items travel at the customer’s sole risk and may cause the vehicle to be held by port or customs authorities." },
    { id: "en-6", num: "6", title: "CANCELLATIONS AND REFUNDS", text: "Cancellations before carrier assignment: no fee. After assignment or dispatch: $150 USD minimum administrative fee. If the vehicle has been loaded or handed to the carrier, additional charges may apply. Cancellations must be submitted via email to info@shipshippersusa.com. Phone or chat cancellations will not be accepted." },
    { id: "en-7", num: "7", title: "PAYMENTS AND CHARGES", text: "All payments must be completed in full prior to shipment or as stated on the order confirmation. C.O.D. payments must be made in cash, money order, or cashier’s check—personal checks or cards are not accepted. Vehicles may be stored at the customer’s expense if delivery is refused or payment is incomplete. Late invoices accrue 1.5% monthly interest." },
    { id: "en-8", num: "8", title: "INSURANCE", text: "Domestic USA: insurance included (FMCSA). | USA-Puerto Rico: optional $100 (25k) / $200 (50k) with $1,000 deductible. | USA-Central America: not available. GARLAS recommends optional maritime insurance for vehicles valued over $15,000 USD." },
    { id: "en-9", num: "9", title: "CLAIMS FOR LOSS, DAMAGE OR DELAY", text: "GARLAS is not liable for damage or loss. Claims must be filed directly with the carrier or shipping line in accordance with applicable laws (Carmack Amendment or Carriage of Goods by Sea Act). GARLAS will assist in providing carrier details upon request." },
    { id: "en-10", num: "10", title: "LIMITATION OF LIABILITY", text: "The maximum liability of GARLAS for any claim shall not exceed the service fees paid for brokerage services. GARLAS does not guarantee delivery times, profit, or future market conditions." },
    { id: "en-11", num: "11", title: "INDEMNIFICATION", text: "The customer agrees to indemnify and hold GARLAS harmless from any claims, fines, or losses arising from false information, legal violations, or damages caused by unauthorized or unreported items." },
    { id: "en-12", num: "12", title: "GOVERNING LAW AND JURISDICTION", text: "This agreement is governed by the laws of the State of Florida, USA. Any disputes shall be resolved in the courts of Miami-Dade County unless arbitration is mutually agreed. For Puerto Rico or Central America operations, local maritime laws apply." },
    { id: "en-13", num: "13", title: "CONTRACTUAL RELATIONSHIP", text: "Nothing in this agreement constitutes partnership, employment, or agency. GARLAS and the customer act as independent entities. These Terms supersede all prior agreements." },
    { id: "en-14", num: "14", title: "IMAGE AND PROMOTIONAL RIGHTS", text: "GARLAS may use the client’s name or logo as a commercial reference unless the client opts out by emailing privacy@shipshippersusa.com." },
    { id: "en-resumen", num: "", title: "LEGAL SUMMARY", text: "GARLAS LLC acts as a licensed intermediary, not a carrier. Delivery times are estimates, cancellations generate administrative fees, maritime insurance is optional, and claims must be filed directly with the carrier or shipping line." },
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
              <span className="text-[12px] text-[#5A6070] font-medium">Última actualización: Octubre 2025</span>
              <h1 className="text-[28px] md:text-[34px] font-bold text-[#003087] mt-2 mb-6">
                Términos y condiciones
              </h1>
              <p className="text-[15px] md:text-[16px] text-[#5A6070] leading-relaxed italic">
                Al contratar los servicios de Nomanejes.com de manera escrita, telefónica u oral estarás regidos por el siguiente contrato y/o Terminos & Condiciones:
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
              <span className="text-[12px] text-[#5A6070] font-medium">Last updated: October 2025</span>
              <h1 className="text-[28px] md:text-[34px] font-bold text-[#003087] mt-2 mb-6">
                Terms and conditions
              </h1>
              <p className="text-[15px] md:text-[16px] text-[#5A6070] leading-relaxed italic">
                By contracting the services of PRautotransport.com in written, telephone or oral manner will be governed by the following agreement and/or Terms & Conditions.
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
