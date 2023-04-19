import { useEffect, useState } from 'react'
import logo from './assets/react.svg'
import axios from 'axios'

interface User {}

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
    <div className='flex flex-col justify-center items-center gap-y-6 h-screen'>
      <img src={logo} className='w-40 cursor-pointer' alt='react logo' />
      {JSON.stringify(users)}
    </div>
  )
}

export default App
