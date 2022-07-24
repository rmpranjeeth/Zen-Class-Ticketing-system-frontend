import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg-img.jpg'


export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">welcome to Zen Class</h1>
            <p className="main-para text-center">Don't waste time join us now</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}