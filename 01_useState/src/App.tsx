import { Component } from 'react'
import { useState } from 'react'
import logo from './assets/react.svg'

class App extends Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div className='flex flex-col justify-center items-center gap-y-6 h-screen'>
        <img
          src={logo}
          onClick={() => this.setState({count: 0})}
          className='w-40 cursor-pointer'
          alt='react logo'
        />
        <button
          type='button'
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className='block text-lg text-white bg-[#00d8fe] p-3 rounded-lg hover:bg-[#00b8d8]'
        >
          Count is {this.state.count}
        </button>
      </div>
    )
  }
}

// const App = () => {
//   const [count, setCount] = useState<number>(0)

//   return (
//     <div className='flex flex-col justify-center items-center gap-y-6 h-screen'>
//       <img
//         src={logo}
//         onClick={() => setCount(0)}
//         className='w-40 cursor-pointer'
//         alt='react logo'
//       />
//       <button
//         type='button'
//         onClick={() => setCount(count + 1)}
//         className='block text-lg text-white bg-[#00d8fe] p-3 rounded-lg hover:bg-[#00b8d8]'
//       >
//         Count is {count}
//       </button>
//     </div>
//   )
// }

export default App
