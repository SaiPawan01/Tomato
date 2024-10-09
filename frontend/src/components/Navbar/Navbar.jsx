import React, { useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState('Home')

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu('Home')} className={menu === 'Home'?'active':""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('Menu')} className={menu === 'Menu'?'active':""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu('Mobile-app')} className={menu === 'Mobile-app'?'active':""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu('About')} className={menu === 'About'?'active':""}>About</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon" className="search-icon" />
            <div className="div-basket-icon">
                <Link  to='/cart'><img src={assets.basket_icon} alt="basket-icon" className="basket-icon" /></Link>
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
