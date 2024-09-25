import React, { useState } from 'react'
import '../Content'
import './Props.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'
function Mobile_Props(props) {
	var {Product,Image,Display,CPU,RAM,Storage,camera,Front_camera,Weight,Battery_life,Price,Fav} = props.product_data

	const [fav, setfav] = useState(false)
	const userFavourite = () => {
		Fav = !Fav
		console.log(Fav)
	}

  return (
	<>
		<div className='props_details'>
			<h3>{Product}</h3>
			<div className='product_image_div'>
				<img src={Image} height={200} style={{margin: 'auto'}}/>
				<FontAwesomeIcon icon={faHeart} style={{color: "grey"}} className='fav' onClick={userFavourite}/>
				<FontAwesomeIcon icon={faCartShopping} style={{color: "grey"}} className='cart'/>
			</div>
			<p><b>Display</b> : {Display}</p>
			<p><b>CPU</b> : {CPU}</p>
			<p><b>RAM</b> : {RAM}</p>
			<p><b>Storage</b> : {Storage}</p>
			<p><b>Camera</b> : {camera}</p>
			<p><b>Front Camera</b> : {Front_camera}</p>
			<p><b>Weight</b> : {Weight}</p>
			<p><b>Battery</b> : {Battery_life}</p>
			<p style={{color: "green"}}><b style={{color: "black"}}>Price : </b>&nbsp;<b>₹{Price}</b></p>
		</div>
	</>
  )
}

export default Mobile_Props