import React from 'react'
import logo from '../../assets/Page Pilot.png';
import Footer from '../../usercomponents/Footer/Footer'

const UserLandingPage = () => {
    return (
        <div className="user-landing-page-container">
            <img src={logo} alt="Page Pilot" className="logo" />
            <div className="user-landing-page-footer">
                <Footer />
            </div>

        </div>
    )
}

export default UserLandingPage
