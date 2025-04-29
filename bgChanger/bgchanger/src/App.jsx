import { useState } from 'react'
import Button from './components/Button'

function App() {

  let [color, setColor] = useState("#000")

  return (
    <div className='w-full h-screen duration-150' style={{backgroundColor: color}}>
      <Button btn="Red" />
      <Button btn="Blue" />
      <Button btn="Green" />
    </div>
  )
}

export default App
