import React from 'react'

export default function CodeScreen() {
  return (
    <div className="bg-[#0d1117] text-xs sm:text-sm font-mono rounded-xl overflow-hidden shadow-2xl w-full max-w-2xl">
    {/* Sekme Barı */}
    <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 bg-red-500 rounded-full cursor-pointer" />
        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full cursor-pointer" />
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full cursor-pointer" />
        <span className="ml-3 text-gray-400 text-[10px] sm:text-xs px-3">stack.js</span>
      </div>
    </div>
  
    {/* Kod */}
    <pre className="w-full max-w-full break-words overflow-x-auto whitespace-pre-wrap px-3 sm:px-5 py-4 leading-relaxed text-gray-300">

      <code>
        <span className="text-gray-500">// Mücahit Tekbaş'ın Geliştirici Yolculuğu 🚀</span>
        {"\n"}
        <span className="text-blue-400">const</span> <span className="text-green-400">devPath</span> <span className="text-pink-400">=</span> {'{'}
        {"\n"}  <span className="text-yellow-400">frontEnd</span>: [<span className="text-emerald-300">'HTML'</span>, <span className="text-emerald-300">'CSS'</span>, <span className="text-emerald-300">'Tailwind'</span>, <span className="text-emerald-300">'JavaScript'</span>, <span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'TypeScript'</span>],
        {"\n"}  <span className="text-yellow-400">stateManagement</span>: [<span className="text-emerald-300">'Zustand'</span>, <span className="text-emerald-300">'React Query'</span>],
        {"\n"}  <span className="text-yellow-400">backEnd</span>: [<span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'Express.js'</span>],
        {"\n"}  <span className="text-yellow-400">database</span>: [<span className="text-emerald-300">'MySQL'</span>, <span className="text-emerald-300">'PostgreSQL'</span>],
        {"\n"}  <span className="text-yellow-400">mobile</span>: [<span className="text-emerald-300">'React Native'</span>],
        {"\n"}  <span className="text-yellow-400">otherTools</span>: [<span className="text-emerald-300">'Git'</span>, <span className="text-emerald-300">'Figma'</span>, <span className="text-emerald-300">'VS Code'</span>],
        {"\n"}  <span className="text-yellow-400">learning</span>: [<span className="text-emerald-300">'Next.js'</span>, <span className="text-emerald-300">'Prisma'</span>],
        {"\n"}{'}'};
        {"\n\n"}
        <span className="text-blue-400">console</span>.<span className="text-green-400">log</span>(<span className="text-emerald-300">"Mücahit'in Stack'i:"</span>, <span className="text-green-400">devPath</span>);
      </code>
    </pre>
  </div>
  
  )
}
