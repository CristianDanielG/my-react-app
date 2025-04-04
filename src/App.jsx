import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Tic Tac Toe Time</h1>
      <Board />
    </>
  )
}

export function Board() {
  return(
    <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </>)
}

export function Square() {
  const [value, setValue]=useState(null);

  function handleClick(){
    setValue('X');
    console.log('clicked!');
  }

  return (
    <button 
      className='square'
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
