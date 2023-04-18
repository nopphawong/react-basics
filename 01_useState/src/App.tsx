import { useState } from 'react'
import logo from './assets/react.svg'

const App = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='flex flex-col justify-center items-center gap-y-6 h-screen'>
      <img
        src={logo}
        onClick={() => setCount(0)}
        className='w-40 cursor-pointer'
        alt='react logo'
      />
      <button
        type='button'
        onClick={() => setCount((count) => count + 1)}
        className='block text-lg text-white bg-[#00d8fe] p-3 rounded-lg hover:bg-[#00b8d8]'
      >
        Count is {count}
      </button>
    </div>
  )
}

export default App
