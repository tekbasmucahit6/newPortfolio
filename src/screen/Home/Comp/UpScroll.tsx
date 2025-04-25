import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

export default function UpScroll() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-50">
      {show && (
        <Link
          to="header"
          smooth={true}
          duration={500}
          offset={-80}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl 
                     hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 
                     animate-fade-in cursor-pointer"
        >
          <FaArrowUp className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}
