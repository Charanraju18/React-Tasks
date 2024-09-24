import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourites/Favourite'
function App() {
  return (
    <>
      <div>
        <Home/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/user_favourites" element={<Favourite />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App