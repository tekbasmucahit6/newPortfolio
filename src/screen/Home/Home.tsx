
import CodeScreen from './Comp/CodeScreen'
import Hello from './Comp/Hello'
import GitHubİst from './Comp/GitHubİst'
import Mucahit from './Comp/Mucahit'
import Contact from './Comp/Contact'

export default function Home() {
  return (
    <div className='w-full flex flex-col justify-start items-center gap-30'>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
            <Hello />
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
            <CodeScreen />
            </div>
        </div>

        <div className='w-full'>
            <div className='w-full'>
                <GitHubİst />
            </div>
        </div>

        <div className='flex justify-start items-center w-full'>
            <div className='w-full'>
                <Mucahit />
            </div>
        </div>

        <div>
            <Contact />
        </div>
  
  </div>
  
  )
}
