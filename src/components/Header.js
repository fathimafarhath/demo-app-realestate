import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="intro">
                <p>Looking for a property !</p>
                <h1><span>Buy</span>and<span>Sell</span></h1>
                <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                <a href="#" className="header-btn">Details</a>
            </div>
            
        </div>
    )
}

export default Header
