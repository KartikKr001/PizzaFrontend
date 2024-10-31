import './App.css'
import Home from './Pages/Home'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import NotFound from './Pages/NotFound'
import AddProduct from './Pages/Admin/AddProduct'
import ProductDetails from './Pages/Products/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails'
import Order from './Pages/Order/Order'
import OrderSuccess from './Pages/Order/OrderSuccess'
import RequireAuth from './Components/Auth/RequireAuth'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth/signup" element={<Signup/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route element={<RequireAuth userRole = 'user'/>}>
          <Route path="/cart" element={<CartDetails/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/order/success" element={<OrderSuccess/>}/>
        </Route>
        <Route element = {<RequireAuth userRole = 'admin'/>}>
          <Route path="/admin/addProduct" element={<AddProduct/>}/>
        </Route>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
