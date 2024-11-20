import React from 'react'
import './LandingPage.css'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
    return (
        
                <div className='landingPageContent'>
                    <h1>Manage Your Library with Ease</h1>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/login">Get Started</NavLink>
                </div>
           
    )
}

export default LandingPage