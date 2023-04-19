import { Component } from 'react'
import { useEffect, useState } from 'react'
import logo from './assets/react.svg'
import axios from 'axios'
import { User } from './models/User'

interface IState {
  hasError: boolean
  users: User[]
}

// class App extends Component<{}, IState> {
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       hasError: false,
//       users: [],
//     }
//   }

//   componentDidMount(): void {
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(({ data }) => this.setState({ users: data }))
//   }

//   render() {
//     return (
//       <div className='container mx-auto'>
//         <div className='flex flex-col justify-center items-center gap-y-6 h-screen text-center'>
//           <img src={logo} className='w-40 cursor-pointer' alt='react logo' />
//           <span>Error: {JSON.stringify(this.state.hasError)}</span>
//           <ul>
//             {this.state.users.map((user) => (
//               <li key={user.id}>{user.name}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

const App = () => {
  const [hasError, setErrors] = useState<boolean>(false)
  const [users, setUsers] = useState<User[]>([])

  async function getUsers() {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      setUsers(data)
    } catch (err) {
      setErrors(true)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center gap-y-6 h-screen text-center'>
        <img src={logo} className='w-40 cursor-pointer' alt='react logo' />
        <span>Error: {JSON.stringify(hasError)}</span>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
