import { Search } from '@material-ui/icons'
import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <img className="header__icon" src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-desktop.jpg" alt="" />
            <div className="header__center">
                <input type="text"/>
                <Search/>
            </div>

        </div>
        
    )
}

export default Header
