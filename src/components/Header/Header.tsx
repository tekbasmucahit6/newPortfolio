import { Link } from "react-scroll";


export default function Header() {
  return (
    <header id="header" className="w-full">
      <div className="max-w-[1200px] mx-auto flex justify-between items-end px-6 py-4 rounded-xl">
        <div className="text-xl font-bold text-white tracking-wide flex gap-2 justify-center items-end">
            <img src="./images/coding.png" className='w-10' alt="" />
          Mücahit Tekbaş
        </div>
        <div className="hidden xl:flex lg:flex md:flex">
          <nav className="flex gap-6 text-white font-medium">
          <Link
              to="aboutme"
              smooth={true}
              duration={500}
              offset={-80} // navbar yüksekliği kadar boşluk bırakır
              className="cursor-pointer text-white"
            >
              hakkımda
          </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80} // navbar yüksekliği kadar boşluk bırakır
              className="cursor-pointer text-white"
            >
              projelerim
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80} // navbar yüksekliği kadar boşluk bırakır
              className="cursor-pointer text-white"
            >
              İletişim
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}
