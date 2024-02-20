import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(num) str += "0123456789"
    if(char) str += "!@#$%^&*()_+"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, char, num, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(passwordRef)
  },[password])  

  useEffect(() => {passwordGenerator()}, [length,num ,char, passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 my-8 py-4 text-orange-500 bg-blue-200'>
        <h1 className='text-blue text-center my-3'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password} 
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-gray-400 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
           <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>setLength(e.target.value)}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={num}
            id="numberInput"
            onChange={()=>{
              setNum((prev) => !prev);
            }} 
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={char}
            id="charInput"
            onChange={()=>{
              setChar((prev) => !prev); 
            }}
            />
            <label htmlFor="charInput">Characters</label>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
