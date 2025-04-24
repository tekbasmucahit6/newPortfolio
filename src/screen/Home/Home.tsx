
import CodeScreen from './Comp/CodeScreen'
import Hello from './Comp/Hello'
import GitHubİst from './Comp/GitHubİst'

export default function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-12'>
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full">
    <div className="w-full md:w-1/2 flex justify-center">
      <Hello />
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <CodeScreen />
    </div>

  </div>
  <div className='w-full'>
  <GitHubİst />
  </div>
    </div>
  
  )
}
