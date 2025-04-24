

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[1200px] mx-auto flex justify-between items-end px-6 py-4 mt-2 rounded-xl">
        <div className="text-xl font-bold text-white tracking-wide flex gap-2 justify-center items-end">
            <img src="./images/coding.png" className='w-10' alt="" />
          Mücahit Tekbaş
        </div>
        <nav className="flex gap-6 text-white font-medium">
          <a href="#projects" className="hover:text-cyan-300 transition">Projeler</a>
          <a href="#about" className="hover:text-cyan-300 transition">Hakkımda</a>
          <a href="#contact" className="hover:text-cyan-300 transition">İletişim</a>
        </nav>
      </div>
    </header>
  );
}
