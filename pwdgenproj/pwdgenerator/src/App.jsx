import { useState, useCallback, useRef, useEffect } from 'react'

function App() {
  
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(8)

  // useref hook for reference and showing selected content copied or not
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed == true){
      str+='0123456789'
    }

    if (charAllowed == true){
      str+="!@#$%&*"
    }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char)
      pass+=str.charAt(char)
    }

    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])

  const sliderChange = (e) => {
    console.log(e.target.value)
    setLength(e.target.value)
  }

  const numberChange = () => {
    setNumberAllowed((prevPass) => !(prevPass))
  }

  const charchange = () => {
    setCharAllowed((prevPass) => !(prevPass))
  }


  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>

        {/* input divs */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type='text' value={password} className="outline-green-200 w-full py-1 px-3 text-green-400" placeholder="Password" ref={passwordRef} readOnly/>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-green-500 text-white px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>

        {/* slider and checkboxes */}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" value={length} min={6} max={100} className='cursor-pointer' onChange={sliderChange}/>
            <label htmlFor="length" className='text-green-500'>Length({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" onChange={numberChange}/>
            <label htmlFor="numberInput" className='text-green-500'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="charInput" onChange={charchange}/>
            <label htmlFor="charInput" className='text-green-500'>SpecialCharacters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
