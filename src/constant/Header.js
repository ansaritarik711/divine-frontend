import React from 'react'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <header>
    <Link to="/"><img className="first" src="assets/images/Frame 397.png" alt /></Link>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About US</Link></li>
    <li><Link to="/our shop">Our shop</Link></li>
    <li><Link to="/contact us">Contact us</Link></li>
  </ul>
  <div className="menu1">
    <img src="assets/images/iconoir_search.png" alt />
    <Link to="/cart"><img src="assets/images/Vector.png" alt /></Link>
  </div>
  <button>Log in/Sign up</button>
</header>

  )
}

export default Header