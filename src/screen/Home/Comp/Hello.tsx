import { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Hello() {
  const [typing, setTyping] = useState('');

  useEffect(() => {
    const fullText = "I'm Mücahit Tekbaş, a frontend developer passionate about building clean and modern interfaces with React and Tailwind CSS.";
    let index = 0;
    const typingInterval = setInterval(() => {
      setTyping((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-start gap-6 w-full p-3 min-h-[400px]">
      <h1 className="flex items-center text-3xl md:text-5xl font-mono text-white gap-2 fade-in">
        <span className="text-red-500">&lt;</span>
        <span className="text-cyan-400">Hello</span>
        <span className="text-red-500">/&gt;</span>
      </h1>

      <p className="text-sm md:text-base text-gray-100 font-light max-w-md fade-in min-h-16">
        {typing}
      </p>

      <p className="text-sm text-gray-500 italic fade-in">
        — Welcome to my portfolio!
      </p>

      <div className='flex justify-start items-center gap-5 w-full'>
        <a href="https://github.com/tekbasmucahit6" className='rounded-full p-3 bg-white text-black'><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/mucahit-tekbas/" className='rounded-full p-3 bg-white text-blue-500'><FaLinkedin size={30} /></a>
        <a href="https://www.instagram.com/mucahitxtekbs/" className='rounded-full p-3 bg-white text-pink-500'><FaInstagram size={30} /></a>
      </div>
    </div>
  );
}
