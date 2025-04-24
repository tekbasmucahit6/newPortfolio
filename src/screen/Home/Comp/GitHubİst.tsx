import { useEffect, useState } from 'react';
import { FaStar, FaCode } from 'react-icons/fa';

export default function TopRepos() {
  const [repos, setRepos] = useState<any[]>([]);

  const fetchLatestRepos = async () => {
    const response = await fetch(
      "https://api.github.com/users/tekbasmucahit6/repos?sort=created&direction=desc&per_page=4"
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchLatestRepos().then(setRepos);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto mt-8 w-full text-white animate-fade-in">
      <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">🚀 En Popüler Repolarım</h2>
      {repos.map(repo => (
        <div key={repo.id} className="mb-4 border-b border-gray-700 pb-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-medium text-lg hover:underline"
          >
            {repo.name}
          </a>
          <p className="text-sm text-gray-400">{repo.description || "Açıklama yok"}</p>
          <div className="flex gap-4 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <FaStar /> {repo.stargazers_count}
            </div>
            {repo.language && (
              <div className="flex items-center gap-1">
                <FaCode /> {repo.language}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
