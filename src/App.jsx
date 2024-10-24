import './App.css'
import Home from '../src/Components/Home'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Signup from './Auth/Signup'
import Login from './Auth/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth/signup" element={<Signup/>}/>
        <Route path="/auth/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
