import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookList.css';
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
        } else {
            setFilteredBooks(books);
            setIsSearching(false);
        }
    };

    const handleGoBack = () => {
        setFilteredBooks(books);
        setIsSearching(false);
    };

    const booksToShow = showMore ? filteredBooks : filteredBooks.slice(0, 25);

    if (error) return <p>{error}</p>;

    return (
        <div className="book-list-container">
            
            <NavigationBar onSearch={onSearch} />

            {/* Display "Search Results" or "Book List" title */}
            <p className="list-title">{isSearching ? "Search Results" : "Book List"}</p>

            {isSearching && (
                <div className="go-back-container">
                    <button className="go-back-button" onClick={handleGoBack}>
                        <img src={arrow_back_icon} alt="Go back arrow icon" />&nbsp;Go Back
                    </button>
                </div>
            )}

            {/* Show "No search results" message if no books are found during search */}
            {isSearching && filteredBooks.length === 0 ? (
                <p className="no-results-message">No search results found.</p>
            ) : (
                Array.from({ length: Math.ceil(booksToShow.length / 5) }, (_, i) => (
                    <div className="book-row" key={i}>
                        {booksToShow.slice(i * 5, i * 5 + 5).map((book) => (
                            <div key={book.id} className="book-card" onClick={() => handleBookClick(book)}>
                                {book.coverImage && (
                                    <img
                                        src={book.coverImage}
                                        alt={`${book.title} cover`}
                                        className="book-cover"
                                    />
                                )}
                                <div className="book-info">
                                    <h3 className="book-title">{book.title}</h3>
                                    <p className="book-author">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            )}

            {!isSearching && !showMore && (
                <div className="see-more-container">
                    <p className="browse-our-collection">Browse Our Collection</p>
                    <p className="continue-browsing">Continue exploring our books</p>
                    <button className="see-more-button" onClick={() => setShowMore(true)}>
                        See More
                    </button>
                </div>
            )}

            

            {selectedBook && (
                <div className="modal-overlay">
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>×</button>
                        <h2>{selectedBook.title}</h2>
                        <p><strong>Author:</strong> {selectedBook.author}</p>
                        <p><strong>Description:</strong> {selectedBook.description}</p>
                        {selectedBook.coverImage && (
                            <img src={selectedBook.coverImage} alt={`${selectedBook.title} cover`} className="modal-book-cover" />
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default BookList;
