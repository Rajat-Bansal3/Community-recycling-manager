import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/materials">Materials</Link></li>
            <li><Link to="/Recycle_Centers">Recycling Centers</Link> </li>
            
            <li><Link to="/Contactus"><button className='btn'>Contact us</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar