import React from 'react';
import './Footer.css';
import iphone_mockups from '../../assets/iphone-mockups.png';
import google_play_button from '../../assets/google-play-button.png';
import app_store_button from '../../assets/app-store-button.png';
// Import Font Awesome icons if needed
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <img src={iphone_mockups} alt="" />
                <div className="access-anywhere-container">
                    <p className="title">Access Anywhere</p>
                    <p className="text">Scan, search, and manage your book collection on the go with Page Pilot. Keep your library at your fingertips, wherever you are.</p>
                    <div className="app-buttons">
                        <img src={google_play_button} alt="Google Play" />
                        <img src={app_store_button} alt="App Store" />
                    </div>
                </div>
            </div>
            {/* footer contents */}
            <div className="footer-contents-container">
                <div className="footer-column">
                    <p className="footer-heading">Support</p>
                    <p>Help Centre</p>
                    <p>Report Concerns</p>
                    <p>Cancellation Options</p>
                    <p>Delivery Fees</p>
                </div>
                <div className="footer-column">
                    <p className="footer-heading">Company</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Delivery</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer-column">
                    <p className="footer-heading">Get In Touch</p>
                    <p>hello@creativedesignstudio.co.site</p>
                    <p>+123-456-7890</p>
                </div>
            </div>

            {/* Socials and copyright */}
            <div className="socials-container">
                <div className="socials">
                    <p>© 2024 PagePilot, Inc. · Privacy · Terms</p>
                    <div className="social-icons">
                        <FaFacebook className="social-icon" />
                        <FaInstagram className="social-icon" />
                        <FaYoutube className="social-icon" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
