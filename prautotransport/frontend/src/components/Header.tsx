import Logo from "../assets/logoHeader.png";

function Header() {
  return (
    <div className="bg-[#003087] w-full h-22.25 flex items-center justify-between relative px-6 md:px-10">
      <img src={Logo} className="h-auto w-40 md:h-8.75  md:w-109.75 "></img>
      <div className="hidden md:flex text-[#B5D4F4] items-center justify-center gap-7 absolute left-1/2 -translate-x-1/2">
        <a href="#servicios" className="hover:cursor-pointer">
          Servicios
        </a>
        <a href="#como-funciona" className="hover:cursor-pointer">
          Cómo funciona
        </a>
        <a href="#testimonios" className="hover:cursor-pointer">
          Testimonios
        </a>
        <a href="#faq" className="hover:cursor-pointer">
          FAQ
        </a>
      </div>
      <a href="#cotizar">
        <button className="border-2 border-[#B5D4F4] rounded-2xl w-47.5 hover:cursor-pointer">
          <p className="mb-5 mt-5 ml-7.5 mr-7.5 text-[#E6F1FB]">
            Cotizar Ahora
          </p>
        </button>
      </a>
    </div>
  );
}

export default Header;
