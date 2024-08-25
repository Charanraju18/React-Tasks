import React from 'react'
import '../Content'
import './Props.css'
function Laptop_props(props) {
	const {Product,Image,CPU,GPU,RAM,Storage,Display,Size,Weight} = props.product_data

  return (
	<>
		<div className='props_details'>
			<h3>{Product}</h3>
			<div className='product_image_div'>
				<img src={Image} height={200} style={{margin: 'auto'}}/>
			</div>
			<p><b>CPU</b> : {CPU}</p>
			<p><b>GPU</b> : {GPU}</p>
			<p><b>RAM</b> : {RAM}</p>
			<p><b>Storage</b> : {Storage}</p>
			<p><b>Display</b> : {Display}</p>
			<p><b>Size</b> : {Size}</p>
			<p><b>Weight</b> : {Weight}</p>
		</div>
	</>
  )
}

export default Laptop_props