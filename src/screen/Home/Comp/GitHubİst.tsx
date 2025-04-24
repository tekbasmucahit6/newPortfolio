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
    <div className="w-full mx-auto bg-white dark:bg-[#0d1117] text-gray-800 dark:text-gray-200 rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">🚀 Son Çalıştığım Projeler</h2>
      <div className='flex flex-wrap justify-between items-start gap-3 w-full'>
      {repos.map(repo => (
         <a
         href={repo.html_url}
         target="_blank"
         rel="noopener noreferrer"
         className="text-cyan-400 font-medium text-lg hover:underline p-5 w-3/12 flex flex-col justify-center items-center text-center gap-4"
       >
          <div key={repo.id} className="">
            <img src="./images/coding.png" className='w-40' alt="" />
            {repo.name}
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

        </a>
      ))}

</div>
    </div>
  );
}
