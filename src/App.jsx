import './App.css'
import Home from '../src/Components/Home'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import NotFound from './Auth/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth/signup" element={<Signup/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
