import { useState } from 'react'
import Button from './components/Buttons'

function App() {

  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-150' style={{backgroundColor: 'white'}}>
      <Button btn="Red" color="Red" text="white"/>
      <Button btn="Green" color="Green" text="white"/>
      <Button btn="Blue" color="Blue" text="white"/>
      <Button btn="Olive" color="Olive" text="white"/>
      <Button btn="Purple" color="Purple" text="white"/>
      <Button btn="Grey" color="Grey" text="white"/>
      <Button btn="Black" color="Black" text="white"/>
      <Button btn="yellow" color="yellow" text="black"/>
      <Button btn="Lavender" color="Lavender" text="black"/>
    </div>
  )
}

export default App
