import React from 'react';
import styles from './Footer.module.css';
import iphone_mockups from '../../assets/iphone-mockups.png';
import google_play_button from '../../assets/google-play-button.png';
import app_store_button from '../../assets/app-store-button.png';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className={styles['footer-container']}>
                <img src={iphone_mockups} alt="" />
                <div className={styles['access-anywhere-container']}>
                    <p className={styles['title']}>Access Anywhere</p>
                    <p className={styles['text']}>Scan, search, and manage your book collection on the go with Page Pilot. Keep your library at your fingertips, wherever you are.</p>
                    <div className={styles['app-buttons']}>
                        <img src={google_play_button} alt="Google Play" />
                        <img src={app_store_button} alt="App Store" />
                    </div>
                </div>
            </div>
            {/* footer contents */}
            <div className={styles['footer-contents-container']}>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-heading']}>Support</p>
                    <p>Help Centre</p>
                    <p>Report Concerns</p>
                    <p>Cancellation Options</p>
                    <p>Delivery Fees</p>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-heading']}>Company</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Delivery</p>
                    <p>Privacy Policy</p>
                </div>
                <div className={styles['footer-column']}>
                    <p className={styles['footer-heading']}>Get In Touch</p>
                    <p>hello@creativedesignstudio.co.site</p>
                    <p>+123-456-7890</p>
                </div>
            </div>

            {/* Socials and copyright */}
            <div className={styles['socials-container']}>
                <div className={styles['socials']}>
                    <p>© 2024 PagePilot, Inc. · Privacy · Terms</p>
                    <div className={styles['social-icons']}>
                        <FaFacebook className={styles['social-icon']}/>
                        <FaInstagram className={styles['social-icon']} />
                        <FaYoutube className={styles['social-icon']}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
