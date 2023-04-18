import './App.css'
import MainFrame from './components/frames/main-frame'
import { HashRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainFrame />}/>
        </Routes>
      </div>
    </HashRouter>
  )
}