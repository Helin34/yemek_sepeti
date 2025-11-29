import React, { useEffect } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { useDispatch } from 'react-redux'
import ActionTypes from './redux/reducers/actionTypes'

import { getRestaurants} from './redux/actions/restActions'
import Restaurant from './pages/Restaurant'
import RestaurantDetail from './components/RestaurantDetail'
import { getCart } from './redux/actions/basketActions'





const App = () => {
  const dispatch = useDispatch();
    

    
    useEffect(()=>{
      dispatch(getRestaurants());
      dispatch(getCart());
      
    })
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/restaurant/:id" element={<Restaurant/>}/>



  <Route path="/cart" element={<Cart/>} />
 </Routes>

 </BrowserRouter>
  )
}

export default App
