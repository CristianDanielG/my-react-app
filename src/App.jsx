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
      <Square />
    </>
  )
}

export function Square() {
  return(
    <>
    <div className="board-row">
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
    <div className="board-row">
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
    <div className="board-row">
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
  </>)
}
