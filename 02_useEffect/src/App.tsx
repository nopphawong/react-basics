import { useEffect, useState } from 'react'
import logo from './assets/react.svg'
import axios from 'axios'
import { User } from './models/User'

const App = () => {
  const [hasError, setErrors] = useState<boolean>(false)
  const [users, setUsers] = useState<User[]>([])

  async function getUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/')
      console.log(data.results)
      setUsers(data.results)
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
        <span>{JSON.stringify(`${users[0]?.name.first} ${users[0]?.name.last}`)}</span>
        <span>{JSON.stringify(hasError)}</span>
      </div>
    </div>
  )
}

export default App
