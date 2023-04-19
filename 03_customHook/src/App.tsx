import logo from './assets/react.svg'
import { User } from './models/User'
import useFetch from './hooks/useFetch'

const App = () => {
  const { data: users, hasError } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center gap-y-6 h-screen text-center'>
        <img src={logo} className='w-40 cursor-pointer' alt='react logo' />
        <span>Error: {JSON.stringify(hasError)}</span>
        <ul>
          {users.map((user: User) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
