import {useState} from 'react'
import './App.css'
import MainFrame from './components/main-frame'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainFrame/>
    </div>
  )
}