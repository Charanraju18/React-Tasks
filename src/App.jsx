import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourites/Favourite'
import Cart from './pages/Cart/Cart'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/React-Tasks/' element={<Home/>}/>
          <Route path="/React-Tasks/user_favourites/" element={<Favourite />}/>
          <Route path="/React-Tasks/user_cart/" element={<Cart />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App