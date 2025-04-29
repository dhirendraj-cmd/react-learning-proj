import { useState } from 'react'
import Button from './components/Button'

function App() {

  let [color, setColor] = useState("#fff")

  return (
    <div className='w-full h-screen duration-150' style={{backgroundColor: "white"}}>
      <Button color="Red" />
      <Button color="Blue" />
      <Button color="Green" />
    </div>
  )
}

export default App
