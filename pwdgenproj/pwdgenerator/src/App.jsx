import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>

        {/* input divs */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type='text' className="outline-green-200 w-full py-1 px-3 text-green-400" placeholder="Password"/>
          <button className='outline-none bg-green-500 text-white px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>

        {/* slider and checkboxes */}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={2} max={100} className='cursor-pointer'/>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" />
            <label htmlFor="numberInput" className='text-green-500'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="charInput" />
            <label htmlFor="charInput" className='text-green-500'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
