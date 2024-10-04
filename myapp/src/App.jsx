import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import ThreeName from './components/ThreeName'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      
      <Routes>
        <Route path='/log' element={<Login/>}/>
        <Route path='/s' element={<StateBasics/>}/>
        <Route path='/name' element={<ThreeName/>}/>
        <Route path='/api' element={<Api/>}/>
        <Route path='/po' element={<Pokemon/>}/>


      </Routes>
      
    </>
  )
}

export default App