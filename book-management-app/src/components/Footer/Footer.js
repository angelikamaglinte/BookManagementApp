import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            {/* footer content */}
            <div className={styles['admin-footer-contents-container']}>
                <div className={styles['admin-footer-column']}>
                    <p className={styles['admin-footer-heading']}>Support</p>
                    <p>Help Centre</p>
                    <p>Report Concerns</p>
                    <p>Cancellation Options</p>
                    <p>Delivery Fees</p>
                </div>
                <div className={styles['admin-footer-column']}>
                    <p className={styles['admin-footer-heading']}>Company</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Delivery</p>
                    <p>Privacy Policy</p>
                </div>
                <div className={styles['admin-footer-column']}>
                    <p className={styles['admin-footer-heading']}>Get In Touch</p>
                    <p>hello@creativedesignstudio.co.site</p>
                    <p>+123 456 7890</p>
                </div>
            </div>
            {/* socials and copyright */}
            <div className={styles['admin-socials-container']}>
                <div className={styles['admin-socials']}>
                    <p>© 2024 PagePilot, Inc. · Privacy · Terms</p>
                    <div className={styles['admin-social-icons']}>
                        <FaFacebook className={styles['admin-social-icon']}/>
                        <FaInstagram className={styles['admin-social-icon']} />
                        <FaYoutube className={styles['admin-social-icon']}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;