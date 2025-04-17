import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setvalue] = useState(0)

  function decre()
  {
    setvalue (value - 1)
  } 

  function reset()
  {
    setvalue(0)
  }

  function incre()
  {
    setvalue (value + 1)
  }

  return (
    <>
      <h3>Counter</h3>

      <h1> {value} </h1>

      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incre}>Increment</button>

    </>
  )
}

export default App