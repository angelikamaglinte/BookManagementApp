import React, { useState, useEffect } from 'react'
import styles from './LandingPage.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import landingPageLogo from '../../assets/Page Pilot.png'
import landingPageSection1Image from '../../assets/landingPageSection1Image.png'
import section3Video from '../../assets/section3Video.gif'
import section4Image from '../../assets/section4Booklist.png'
import section5Image from '../../assets/section5Dashboard.png'
import Footer from '../Footer/Footer'

const LandingPage = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:7000/books');
                setBooks(response.data);
            } catch (err) {
                setError('Could not fetch books. Please try again later.');
                console.error('Error fetching books:', err);
            }
        };
        fetchBooks();
    }, []);

    return (
        // <div className={styles['landingPageContent']}>
        //     <a href="/"><img src={landingPageLogo} id={styles['landingPageLogo']} alt=''></img></a>
        //     <div className={styles['landingPageActions']}>
        //         <NavLink to="/login"><button className={styles['landingPageButtons']}>Login</button></NavLink>
        //     </div>

        //     <div className={styles['landingPageSection1']}>

        //         <h1 className={styles['landingpageTitles']}>Manage Your Library with Ease</h1>

        //         <p id={styles['section1Description']} className={styles['landingpageDescription']}>
        //             As a Page Pilot Administrator, you have full control over your book collection.
        //             From adding new titles to updating existing entries or
        //             removing outdated books,
        //             our intuitive admin dashboard makes library management simple and efficient.
        //         </p>
        //         <img id={styles['landingPageSection1Image']} src={landingPageSection1Image} alt=''></img>
        //     </div>

        //     <div className={styles['landingPageSection2']}>
        //         <h1 className={styles['landingpageTitles']}>Manage Your Library with Ease</h1>
        //         <p className={styles['landingpageDescription']}>
        //             Keep your catalog accurate and up to date,
        //             and ensure your readers always have access to the best information.
        //         </p>
        //     </div>


        //     <div className={styles['landingpageAfterSection2']}>
        //         <div className={styles['landingPageSection3']}>
        //             <div className={styles['section3Subsection1']}>

        //                 <h1 className={styles['landingpageTitles']}>Seamless Book <br></br> Management</h1>
        //                 <p id={styles['section3Description']} className={styles['landingpageDescription']}>
        //                     Take control of your library today with Page Pilot’s powerful <br></br>admin tools.
        //                 </p>

        //             </div>
        //             <div className={styles['section3Subsection2']}>
        //                 <img src={section3Video} className={styles['landingpageVideo']} alt=''></img>
        //             </div>
        //         </div>

        //         <div className={styles['landingPageSection4']}>
        //             <div className={styles['section4Subsection2']}>
        //                 <img src={section4Image} className={styles['section4Image']} alt=''></img>
        //             </div>
        //             <div className={styles['section4Subsection1']}>
        //                 <h1 className={styles['landingpageTitles']}>Real-Time Updates</h1>
        //                 <p id={styles['section4Description']} className={styles['landingpageDescription']}>
        //                     Ensure your collection stays current and organized.
        //                 </p>
        //             </div>

        //         </div>

        //         <div className={styles['landingPageSection5']}>

        //             <div className={styles['section5Subsection1']}>
        //                 <h1 className={styles['landingpageTitles']}>User-Friendly Interface</h1>
        //                 <p id={styles['section5Description']} className={styles['landingpageDescription']}>
        //                     Manage your library effortlessly, whether you’re overseeing a small collection or a large archive.
        //                 </p>
        //             </div>

        //             <div className={styles['section5Subsection2']}>
        //                 <img src={section5Image} className={styles['section5Image']} alt=''></img>
        //             </div>

        //         </div>
        //     </div>
        // </div>

        <div className={styles['admin-landing-page-container']}>
            <a href="/"><img src={landingPageLogo} alt="Page Pilot" className={styles['admin-landing-page-logo']} /></a>
            <div className={styles['admin-landing-page-left-buttons']}>
                <NavLink to="/login">
                    <button className={styles['admin-landing-page-login']}>Login</button>
                </NavLink>
            </div>
            <div className={styles['admin-landing-page-contents']}>
                <p className={styles['admin-landing-page-book-explorer-title']}>
                    Book Explorer
                </p>
                <p className={styles['admin-landig-page-book-explorer-details']}>
                    From adding new titles to updating existing entries or removing outdated books, our intuitive admin dashboard makes library management simple and efficient.
                </p>
                <NavLink to="/login"><button className={styles['admin-landing-page-get-started']}>Get Started</button></NavLink>
            </div>
            <div className={styles['admin-landing-page-book-explorer-books']}>
                {error && <p>{error}</p>}
                <div className={styles['books-container']}>
                    {books.map((book) => (
                        <div key={book.id} className={styles['book-card']}>
                            {book.coverImage && (
                                <img
                                    src={book.coverImage}
                                    alt={`${book.ttle} cover`}
                                    className={styles['book-cover']}
                                />
                            )}
                            <div className={styles['book-info']}>
                                <h3 className={styles['book-title']}>{book.title}</h3>
                                <p className={styles['book-author']}>{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles['admin-landing-page-contents']}>
                <p className={styles['admin-landing-page-manage-library-with-ease-title']}>
                    Manage Your Library with Ease
                </p>
                <p className={styles['admin-landing-page-manage-library-with-ease-details']}>
                    Keep your catalog accurate and up to date, and ensure your readers always have access to the best information.
                </p>
                <NavLink to="/login"><button className={styles['admin-landing-page-get-started']}>Get Started</button></NavLink>
            </div>
            <div className={styles['admin-landing-page-features']}>
                {/* feature 1 */}
                <div className={styles['admin-landing-page-feature1']}>
                    <div className={styles['admin-landing-page-feature1-container']}>
                        <div className={styles['admin-landing-page-feature1-title']}>Seamless Book Management</div>
                        <div className={styles['admin-landing-page-feature1-details']}>
                            Add, edit, and delete books with just a few clicks.
                        </div>
                        <video
                            className={styles['video-background']}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="video/browse-collection.mkv" type="video/mp4" className={styles['video-src']} />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                {/* feature 2 */}
                <div className={styles['admin-landing-page-feature2']}>
                    <div className={styles['admin-landing-page-feature2-container']}>
                        <div className={styles['admin-landing-page-feature2-title']}>Real-Time Updates</div>
                        <div className={styles['admin-landing-page-feature2-details']}>Ensure your collection stays current and organized.</div>
                    </div>
                    <img src={section4Image} alt="" />
                </div>
                {/* feature 3 */}
                <div className={styles['admin-landing-page-feature3']}>
                    <img src={section5Image} alt="" />
                    <div className={styles['admin-landing-page-feature3-container']}>
                        <div className={styles['admin-landing-page-feature3-title']}>User-Friendly Interface</div>
                        <div className={styles['admin-landing-page-feature3-details']}>Manage your library effortlessly, whether you're overseeing a small collection or a large archive.</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage