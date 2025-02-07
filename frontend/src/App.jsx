import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import SignupPage from './pages/singUpPage';
import Home from './pages/Home';
import CreateProduct from './pages/createProduct';
import "./App.css";
import MyProducts from './pages/myProducts';  

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/my-products" element={<MyProducts/>} />
      <Route path="/create-product/:id" element={<CreateProduct />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App