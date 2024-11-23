import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './BookList.module.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import arrow_back_icon from '../../assets/arrow-back-icon.png';
import Footer from '../Footer/Footer';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [error, setError] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:7000/books');
                setBooks(response.data);
                setFilteredBooks(response.data);
            } catch (err) {
                setError('Could not fetch books. Please try again later.');
                console.error('Error fetching books:', err);
            }
        };

        fetchBooks();
    }, []);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

    const onSearch = (query) => {
        if (query) {
            const filtered = books.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase()) ||
                (book.keywords && book.keywords.toLowerCase().includes(query.toLowerCase())) ||
                (book.publicationDate && book.publicationDate.includes(query))
            );
            setFilteredBooks(filtered);
            setIsSearching(true);
            if (filtered.length === 0) {
                setError('No search results found.');
            } else {
                setError(null);
            }
        } else {
            setFilteredBooks(books);
            setIsSearching(false);
            setError(null);
        }
    };

    const handleGoBack = () => {
        setFilteredBooks(books);
        setIsSearching(false);
        setError(null);
    };

    const booksToShow = showMore ? filteredBooks : filteredBooks.slice(0, 25);

    if (error) return <p>{error}</p>;

    return (
        <div className={styles['booklist-page-container']}>
            <div className={styles['book-list-container']}>

                <NavigationBar onSearch={onSearch} />

                {/* Display "Search Results" or "Book List" title */}
                <p className={styles['list-title']}>{isSearching ? "Search results" : "Book List"}</p>

                {isSearching && (
                    <div className={styles['go-back-container']}>
                        <button className={styles['go-back-button']} onClick={handleGoBack}>
                            <img src={arrow_back_icon} alt="Go back arrow icon" />&nbsp;Go Back
                        </button>
                    </div>
                )}

                {/* Show "No search results" message if no books are found during search */}
                {isSearching && filteredBooks.length === 0 ? (
                    <p className={styles['no-results-message']}>No search results found.</p>
                ) : (
                    Array.from({ length: Math.ceil(booksToShow.length / 5) }, (_, i) => (
                        <div className={styles['book-row']} key={i}>
                            {booksToShow.slice(i * 5, i * 5 + 5).map((book) => (
                                <div key={book.id} className={styles['book-card']} onClick={() => handleBookClick(book)}>
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
                    ))
                )}

                {!isSearching && !showMore && (
                    <div className={styles['see-more-container']}>
                        <p className={styles['browse-our-collection']}>Browse Our Collection</p>
                        <p className={styles['continue-browsing']}>Continue exploring our books</p>
                        <button className={styles['see-more-button']} onClick={() => setShowMore(true)}>
                            See More
                        </button>
                    </div>
                )}

                {selectedBook && (
                    <div className={styles['modal-overlay']}>
                        <div className={styles['modal-container']}>
                            <div className={styles['modal']} onClick={(e) => e.stopPropagation()}>
                                <button className={styles['close-button']} onClick={closeModal}>×</button>
                                {selectedBook.coverImage && (
                                    <img src={selectedBook.coverImage} alt={`${selectedBook.title} cover`} className={styles['modal-book-cover']} />
                                )}
                                <div className={styles['details']}>
                                    <p className={styles['title']}>{selectedBook.title}</p>
                                    <p className={styles['author']}><strong>Author:</strong> {selectedBook.author}</p>
                                    <p className={styles['description']}>{selectedBook.description}</p>
                                    <p className={styles['publication-date']}><strong>Publication Date:</strong> {selectedBook.publicationDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Footer />
            </div>
        </div>
    );
};

export default BookList;
