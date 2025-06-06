import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Addproduct from './Pages/Addproduct'
// import Product from './Pages/Product'
import SignIn from './Pages/SignIn'
import Signup from './Pages/Signup'
import PrivatePage from './Components/PrivatePage'
import EditProduct from './Pages/EditProduct'
import ProductsList from './Pages/ProductsList'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/add' element={<Addproduct/>}></Route>
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path='/product' element={
              
              <PrivatePage>
              {/* <Product/> */}
              {<ProductsList />} 
              </PrivatePage>
              
              }></Route>
            <Route path='/signIn' element={<SignIn/>}></Route>
            <Route path='/signUp' element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes