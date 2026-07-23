import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logoHeader.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative w-full z-50">
      {/* Header Bar */}
      <div className="bg-[#003087] w-full h-22.25 flex items-center justify-between px-6 xl:px-10">
        <Link to="/" onClick={closeMenu} className="flex items-center shrink-0">
          <img
            src={Logo}
            className="h-auto w-40 lg:w-72 xl:w-109.75 hover:cursor-pointer transition-all duration-300"
            alt="PRAutoTransport Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-[#B5D4F4] items-center justify-center gap-5 xl:gap-7 absolute left-1/2 -translate-x-1/2">
          <Link to="/#servicios" className="hover:text-white transition-colors hover:cursor-pointer">
            Servicios
          </Link>
          <Link to="/#como-funciona" className="hover:text-white transition-colors hover:cursor-pointer">
            Cómo funciona
          </Link>
          <Link to="/#testimonios" className="hover:text-white transition-colors hover:cursor-pointer">
            Testimonios
          </Link>
          <Link to="/#faq" className="hover:text-white transition-colors hover:cursor-pointer">
            FAQ
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link to="/#cotizar">
            <button className="border-2 border-[#B5D4F4] rounded-2xl w-40 xl:w-47.5 hover:cursor-pointer transition-colors hover:bg-white/10 flex items-center justify-center">
              <p className="py-2 text-[#E6F1FB] font-semibold text-[14px] xl:text-[16px] leading-normal">
                Cotizar Ahora
              </p>
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#E6F1FB] border-t border-[#003087]/20 shadow-lg flex flex-col px-8 py-10 gap-8 font-instrument text-left z-50">
          <Link
            to="/#servicios"
            onClick={closeMenu}
            className="text-[20px] font-bold text-[#003087] hover:opacity-80 transition-opacity"
          >
            Servicios
          </Link>
          <Link
            to="/#como-funciona"
            onClick={closeMenu}
            className="text-[20px] font-bold text-[#003087] hover:opacity-80 transition-opacity"
          >
            Cómo funciona
          </Link>
          <Link
            to="/#testimonios"
            onClick={closeMenu}
            className="text-[20px] font-bold text-[#003087] hover:opacity-80 transition-opacity"
          >
            Testimonios
          </Link>
          <Link
            to="/#faq"
            onClick={closeMenu}
            className="text-[20px] font-bold text-[#003087] hover:opacity-80 transition-opacity"
          >
            FAQ
          </Link>

          <Link to="/#cotizar" onClick={closeMenu} className="w-full mt-4">
            <button className="bg-[#C8102E] hover:bg-[#b00e28] transition-colors text-white py-4 px-6 rounded-full font-semibold text-[18px] w-full text-center shadow-md cursor-pointer">
              Cotizar Ahora
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
