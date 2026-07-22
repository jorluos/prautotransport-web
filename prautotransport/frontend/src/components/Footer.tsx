import logoFooter from "../assets/logoFooter.png";

function Footer() {
  return (
    <div>
      <div className="bg-[#0D1B3E] w-full h-auto md:h-88.5 pt-12.5 pb-20 px-6 md:px-10 flex flex-col md:flex-row justify-between items-start gap-12">
        {" "}
        {/* FOOTER LOGO*/}
        <img
          src={logoFooter}
          className="h-auto w-40 md:w-31.75 md:h-16.5 -mt-3"
          alt="logo"
        ></img>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-50 font-instrument">
          {" "}
          {/* FIRST COLUMN */}
          <div>
            <h4 className="text-[#FFFFFF] mb-4">Enlaces </h4>
            <ul className="text-[#DDE2EC] space-y-3">
              <li>
                <a>Documentos</a>
              </li>
              <li>
                <a>Términos y condiciones</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>{" "}
          {/* SECOND COLUMN */}
          <div>
            <h4 className="text-[#FFFFFF] mb-4">Oficinas</h4>
            <ul className="text-[#DDE2EC] space-y-3">
              <li>
                <a>San Juan, Puerto Rico</a>
              </li>
              <li>
                <a>
                  Garlas LLC. — Ave. Boulevard, W-7, Ste. 2 Levittown, Toa Baja,
                  PR 00949
                </a>
              </li>
              <li>
                <a>Tampa, Florida</a>
              </li>
              <li>
                <a>
                  16484 Northdale Oaks Dr <br />
                  Tampa, FL 33624 <br />
                  ✉info@prautotransport.com
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* THIRD COLUMN */}
          <div className="flex flex-col gap-4 self-end">
            <div className="flex items-center gap-2 text-white">
              <span>📷</span>
            </div>
            <div className="text-white">+1 787 741 6032</div>
          </div>
        </div>
      </div>
      <div className="bg-[#060E20] w-full h-18 flex items-center justify-center">
        {" "}
        {/* LEGAL FOOTER TEXT */}
        <p className="text-[#FFFFFF] text-[14px] md:text-[16px] font-instrument">
          © Todos los derechos reservados — PRAutoTransport
        </p>
      </div>
    </div>
  );
}

export default Footer;
