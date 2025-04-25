import { useEffect, useState } from 'react';
import { FaStar, FaCode } from 'react-icons/fa';

export default function TopRepos() {
  const [repos, setRepos] = useState<any[]>([]);

  const fetchLatestRepos = async () => {
    const response = await fetch(
      "https://api.github.com/users/tekbasmucahit6/repos?sort=created&direction=desc&per_page=6"
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchLatestRepos().then(setRepos);
  }, []);

  return (
    <section
      id="projects"
      className="w-full bg-transparent text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-12">
          🚀 Son Projelerim
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 pt-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 flex flex-col hover:border-emerald-500 transition duration-300 group shadow-lg hover:shadow-emerald-500/20"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-emerald-300 group-hover:text-emerald-400 transition">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                  {repo.description || "Açıklama bulunamadı."}
                </p>
              </div>

              <div className="mt-auto flex justify-between text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {repo.stargazers_count}
                </div>
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <FaCode />
                    {repo.language}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
