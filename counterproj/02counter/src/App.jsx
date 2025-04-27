import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(1)

  const incremental = () => {
    setCounter(counter+1)
    console.log("current val: ", counter);
    
  }
  const decremental = () => {
    if (counter > 0){
      setCounter(counter-1)
      console.log("current val: ", counter);
    }
    
  }

  return (
    <>
      <h1>Current Value: {counter}</h1>
      <button onClick={incremental}>Increment</button>
      <br />
      <button onClick={decremental}>Decrement</button>
    </>
  )
}

export default App
