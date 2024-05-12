import React from 'react'
import './navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import uploadIcon from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/jack.png'


function Navbar({ setSidebar }) {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className='menu-icon' onClick={() => setSidebar(prev => prev === false ? true : false)} src={menuIcon} alt="" />
                <img className='logo' src={logo} alt="" />
            </div>

            <div className="nav-middle flex-div" >
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <img src={searchIcon} alt="" />
                </div>

            </div>

            <div className="nav-right flex-div">
                <img src={uploadIcon} alt="" />
                <img src={more} alt="" />
                <img src={notification} alt="" />
                <img src={profile} className='user-icon' alt="" />
            </div>
        </nav>
    )
}

export default Navbar
