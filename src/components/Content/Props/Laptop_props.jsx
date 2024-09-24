import React from 'react'
import '../Content'
import './Props.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Laptop_props(props) {
	const {Product,Image,CPU,GPU,RAM,Storage,Display,Size,Weight,Price,Geekbench} = props.product_data

  return (
	<>
		<div className='props_details'>
			<h3>{Product}</h3>
			<div className='product_image_div'>
				<img src={Image} height={200} style={{margin: 'auto'}}/>
				<FontAwesomeIcon icon={faHeart} style={{color: "grey"}} className='fav'/>
				<FontAwesomeIcon icon={faCartShopping} style={{color: "grey"}} className='cart'/>
			</div>
			<p ><b>GeekBench Score </b>: <span style={{color: 'blue'}}><b>{Geekbench}</b></span></p>
			<p><b>CPU</b> : {CPU}</p>
			<p><b>GPU</b> : {GPU}</p>
			<p><b>RAM</b> : {RAM}</p>
			<p><b>Storage</b> : {Storage}</p>
			<p><b>Display</b> : {Display}</p>
			<p><b>Size</b> : {Size}</p>
			<p><b>Weight</b> : {Weight}</p>
			<p style={{color: "green"}}><b style={{color: "black"}}>Price : </b>&nbsp;<b>₹{Price}</b></p>
		</div>
	</>
  )
}

export default Laptop_props