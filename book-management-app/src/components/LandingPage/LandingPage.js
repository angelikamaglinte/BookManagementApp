import React from 'react'
import './LandingPage.css'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/login">Get Started</NavLink>
        </div>
    )
}

export default LandingPage