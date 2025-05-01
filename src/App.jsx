import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [count, setcount] = useState(0)

  const handleData = ()=>{
    let oldCount = JSON.parse(localStorage.getItem("count"));
    setcount(oldCount);
  }

  useEffect(() => {
    handleData()
  })
  
  const handleDecrement = ()=>{
    let newCount = count - 1;
    localStorage.setItem("count",JSON.stringify(newCount))
    if (count <= 0 )return;
    setcount(newCount)
  }

  const handleIncrement = ()=>{
    let newCount = count + 1;
    localStorage.setItem("count",JSON.stringify(newCount))
    setcount(newCount);
  }

  const handleReset = ()=>{
    let resetCount = 0;
    localStorage.setItem("count",JSON.stringify(resetCount))
    setcount(resetCount);
  }

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h2 className='mt-3 text-white text-center'>Counter App</h2>
          <div className='box'>
            <h2>{count}</h2>
          </div>
          <div className='box-btn'>
            <button onClick={handleDecrement}>-</button>
            <button className='btn-reset' onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>+</button>
          </div>
      </div>
    </>
  )
}

export default App
