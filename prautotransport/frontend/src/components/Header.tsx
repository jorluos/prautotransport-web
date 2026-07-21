import Logo from "../assets/logoHeader.png";

function Header() {
  return (
    <div className="bg-[#003087] w-full h-22.25 flex items-center justify-between relative pr-6 pl-6 md:pr-10 md:pl-10">
      <img src={Logo} className="h-auto w-40 md:h-8.75  md:w-109.75 "></img>
      <div className="hidden md:flex text-[#B5D4F4] items-center justify-center gap-7 absolute left-1/2 -translate-x-1/2">
        <p>Servicios</p>
        <p>Cómo funciona</p>
        <p>Testimonios</p>
        <p>FAQ</p>
      </div>
      <button className="border-2 border-[#B5D4F4] rounded-2xl">
        <p className="mb-5 mt-5 ml-7.5 mr-7.5 text-[#E6F1FB]">Cotizar Ahora</p>
      </button>
    </div>
  );
}

export default Header;
