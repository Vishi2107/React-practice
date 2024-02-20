import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const addValue = () => {
    if(count < 30)
    setCount(count + 1)
  }

  const removeValue = () => {
    if(count > 0)
    setCount(count - 1)
  }

  return (
    <>
      <button >Count : {count}</button>
      <br /> <br />
      <button onClick={addValue}>Add value : {count} </button>
      <br /> <br />
      <button onClick={removeValue}>Remove value: {count}</button>
    </>
  )
}

export default App
