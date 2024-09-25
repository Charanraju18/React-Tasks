import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Favourite.css'
import { Mobiles_data } from '../../components/Content/Mobiles_data'
import { Laptop_data } from '../../components/Content/Laptops_data'
import Mobile_Props from '../../components/Content/Props/Mobile_Props'
import Laptop_props from '../../components/Content/Props/Laptop_props'
function Favourite() {

  return (
	<>
		<Navbar/>
			<div className='fav_items'>
				<div className='props_outer_div'>
					{
						Mobiles_data.map((product,ind)=>{
						return(
							<>
								<Mobile_Props product_data={product}/>
							</>
						)
						})
					}

				</div>

				{/* <div className='props_outer_div'>
					{
						Laptop_data.map((product,ind)=>{
						return(
							<>
								<Laptop_props product_data={product}/>
							</>
						)
						})
					}
				</div> */}
			</div>
		<Footer/>
	</>
  )
}

export default Favourite