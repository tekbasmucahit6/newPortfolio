export default function Mucahit() {
  return (
    <div
      id="aboutme"
      className="w-full mx-auto bg-white dark:bg-[#0d1117] text-gray-800 dark:text-gray-200 rounded-xl shadow-md p-6 mt-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
        Hakkımda
      </h2>

      <p className="mb-4">
        Merhaba! Ben <span className="font-semibold text-blue-500">Mücahit Tekbaş</span> 👋
        <br />
        Liseden <strong>Web Programcılığı</strong> mezunu bir <strong>Bilgisayar Teknisyeniyim</strong>. Yazılım yolculuğuma lise yıllarında başladım ve özellikle <strong>frontend geliştirme</strong> alanında tutkuyla çalışıyorum.
      </p>

      <p className="mb-4">
        🚀 Modern, sade ve kullanıcı odaklı arayüzler oluşturmak en sevdiğim şeylerden biri.
      </p>

      <p className="mb-4">
        Şimdiye kadar birçok arayüz projesi geliştirdim. Örnek olarak:
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 dark:text-gray-400">
          <li><strong>LinkedIn</strong> anasayfa tasarımı (modern kart yapısı ve sidebar ile)</li>
          <li><strong>YouTube</strong> arayüzü – video listesi, kanal bölümü, üst navbar tasarımı</li>
          <li><strong>Instagram</strong> feed ekranı – gönderi kartları ve navbar yapısı</li>
        </ul>
      </p>

      <div className="mb-4 mt-6">
        <p className="font-semibold mb-2">🔧 Kullandığım Teknolojiler:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript</li>
          <li><strong>Backend:</strong> Node.js, Express.js (temel düzey)</li>
          <li><strong>Diğer Araçlar:</strong> Git, Figma, VS Code</li>
        </ul>
      </div>

      <p className="mb-4">
        📚 Şu anda <strong>Next.js</strong>, <strong>Prisma</strong> ve <strong>React Native</strong> üzerine çalışıyor, daha dinamik projeler geliştirmeyi hedefliyorum.
      </p>

      <p>
        Eğer portföy projelerimle ilgileniyorsan ya da sadece yazılım hakkında konuşmak istersen <span className="text-green-400 font-medium">iletişime geçmekten çekinme</span>! 🙌
      </p>
    </div>
  );
}
