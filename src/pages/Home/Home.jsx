import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
	<div>
		<Navbar/>
		<Content/>
		<Footer/>
	</div>
  )
}

export default Home