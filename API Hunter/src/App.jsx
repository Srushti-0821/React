import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import API from './API'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <API />

    </>
  )
}

export default App
