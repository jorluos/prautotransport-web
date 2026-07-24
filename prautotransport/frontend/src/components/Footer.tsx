import { Link } from "react-router-dom";
import logoFooter from "../assets/logoFooter.png";

function Footer() {
  return (
    <div>
      <div className="bg-[#0D1B3E] w-full h-auto md:h-88.5 pt-12.5 pb-20 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        {/* FOOTER LOGO*/}
        <div className="w-full flex justify-center md:w-auto md:block">
          <Link to="/">
            <img
              src={logoFooter}
              className="h-auto w-40 md:w-31.75 md:h-16.5 md:-mt-3"
              alt="logo"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24 lg:gap-50 font-instrument w-full md:w-auto text-left">
          {/* FIRST COLUMN */}
          <div>
            <h4 className="text-[#FFFFFF] mb-4 font-bold">Enlaces</h4>
            <ul className="text-[#DDE2EC] space-y-3">
              <li>
                <Link
                  to="/documentos"
                  className="hover:text-white transition-colors"
                >
                  Documentos
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos-y-condiciones"
                  className="hover:text-white transition-colors"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* SECOND COLUMN */}
          <div>
            <h4 className="text-[#FFFFFF] mb-4 font-bold">Oficinas</h4>
            <ul className="text-[#DDE2EC] space-y-3">
              <li>
                <span className="font-semibold text-white">
                  San Juan, Puerto Rico
                </span>
              </li>
              <li className="text-[14px]">
                Garlas LLC. — Ave. Boulevard, W-7, Ste. 2 Levittown, Toa Baja,
                PR 00949
              </li>
              <li>
                <span className="font-semibold text-white">Tampa, Florida</span>
              </li>
              <li className="text-[14px] leading-relaxed">
                16484 Northdale Oaks Dr <br />
                Tampa, FL 33624 <br />{" "}
                <span className="flex items-center gap-1.5 mt-1">
                  <span>✉️</span>
                  <span>info@prautotransport.com</span>
                </span>
              </li>
            </ul>
          </div>
          {/* THIRD COLUMN */}
          <div className="flex flex-col gap-4 self-start md:self-end">
            <div className="flex items-center gap-2 text-white">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-[24px] h-[24px] text-[#DDE2EC]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            <a
              href="tel:+17877416032"
              className="text-[#DDE2EC] hover:text-white transition-colors flex items-center gap-2.5"
            >
              {/* Phone SVG */}
              <svg
                className="w-5 h-5 text-[#DDE2EC]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+1 787 741 6032</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#060E20] w-full h-18 flex items-center justify-center">
        {/* LEGAL FOOTER TEXT */}
        <p className="text-[#FFFFFF] text-[14px] md:text-[16px] font-instrument">
          © Todos los derechos reservados — PRAutoTransport
        </p>
      </div>
    </div>
  );
}

export default Footer;
