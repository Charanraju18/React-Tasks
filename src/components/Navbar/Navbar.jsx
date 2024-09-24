import React,{useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faUser,faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
	const [first, setfirst] = useState(false)
	const menu_clicked = () =>{
		setfirst(!first)
	}
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <p className="project-Title">SMARTPICK</p>
          <ul>
            <li>Home</li>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>TV's</li>
            <li>Other Electronics</li>
          </ul>
        </div>
        <div className="navbar-right">
          <Link to='/user_favourites'><FontAwesomeIcon icon={faHeart} className="fav-icon" /></Link>
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#ffffff" }}
            className="user-icon"
          />
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#ffffff" }}
            className="menu-bars"
            onClick={menu_clicked}
          />
        </div>
        <div className={`${ first ? 'sidebar-menu' : 'hidesidebar'}`}>
          <ul>
            <li>Home</li>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>TV's</li>
            <li>Other Electronics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar