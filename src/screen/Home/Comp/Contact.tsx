

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0d1117] text-white px-4 py-20 flex justify-center items-center">
      <div className=" mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-400 mb-4">
          İletişim
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Aşağıdaki formu doldurarak bana ulaşabilirsin. Soruların, önerilerin ya da projeler hakkında konuşmak için her zaman açığım! 💬
        </p>

        <form className="bg-[#161b22] p-6 rounded-2xl shadow-lg flex flex-col gap-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Adınız</label>
            <input
              type="text"
              id="name"
              placeholder="Adınızı girin"
              className="w-full px-4 py-2 bg-[#0d1117] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">E-posta</label>
            <input
              type="email"
              id="email"
              placeholder="ornek@mail.com"
              className="w-full px-4 py-2 bg-[#0d1117] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Mesajınız</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Mesajınızı yazın..."
              className="w-full px-4 py-2 bg-[#0d1117] text-white border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 transition rounded-lg font-medium text-white"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  )
}
