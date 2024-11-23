import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './UserLandingPage.module.css';
import logo from '../../assets/Page Pilot.png'
import Footer from '../../usercomponents/Footer/Footer'
import axios from 'axios';

const UserLandingPage = () => {
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
        <div className={styles['landing-page-container']}>
            <a href="/pagepilot"><img src={logo} alt="Page Pilot" className={styles['landing-page-logo']} /></a>
            <div className={styles['landing-page-left-buttons']}>
                {/* <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/signup">
                    <button>Get Started</button>
                </Link> */}
                <NavLink to="/pagepilot-home">
                    <button className={styles['landing-page-see-books']}>See books</button>
                </NavLink>
            </div>
            <div className={styles['landing-page-contents']}>
                <p className={styles['landing-page-book-explorer-title']}>
                    Book Explorer
                </p>
                <p className={styles['landing-page-book-explorer-details']}>
                    Your library has never looked so good. Discover and explore books from every genre, all in one place.
                </p>
                <NavLink to="/pagepilot-home"><button className={styles['landing-page-get-started']}>Get Started</button></NavLink>
            </div>
            <div className={styles['landing-page-book-explorer-books']}>
                {error && <p>{error}</p>}
                <div className={styles['books-container']}>
                    {books.map((book) => (
                        <div key={book.id} className={styles['book-card']}>
                            {book.coverImage && (
                                <img
                                    src={book.coverImage}
                                    alt={`${book.title} cover`}
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
            <div className={styles['landing-page-contents']}>
                <p className={styles['landing-page-browse-collection-title']}>
                    Browse Our Collection
                </p>
                <p className={styles['landing-page-browse-collection-details']}>
                    Page Pilot stremlines book management for readers, libraries, and organizations. Easily catalog, tag, search, and explore your collection with our user-friendly platform. Stay organized and take control of your libray - whether it's small or extensive. Discover how Page Pilot can elevate your book management experience.
                </p>
                <NavLink to="/pagepilot-home"><button className={styles['landing-page-get-started']}>Get Started</button></NavLink>
                {/* <div className={styles['browse-collection-video']}> */}
                    <video
                        className={styles['video-background']}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="videos/browse-collection.mkv" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                {/* </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default UserLandingPage
