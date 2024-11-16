import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import DeleteConfirmationModal from '../DeleteBook/DeleteConfirmationModal';
import UpdateBookModal from '../UpdateBook/UpdateConfirmationModal';
import './BookList.css'
// import { toast } from 'react-toastify';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [bookToDelete, setBookToDelete] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/books');
                setBooks(response.data);
            } catch (err) {
                console.error('Failed to fetch books.');
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (bookId) => {
        try {
            await axios.delete(`/books/${bookId}`);
            setBooks(books.filter((book) => book.id !== bookId));
        } catch (err) {
            console.error('Failed to delete book', err);
        }
    };

    const confirmDelete = (bookId) => {
        setBookToDelete(bookId);
        setShowModal(true);
    };

    const handleModalConfirm = () => {
        handleDelete(bookToDelete);
        setShowModal(false);
    };

    const handleModalCancel = () => {
        setShowModal(false);
    };

    // function to handle opening the UpdateBook modal
    const handleEdit = (bookId) => {
        setSelectedBookId(bookId);
        setShowUpdateModal(true);
    };

    return (
        <div className='adminBookList'>
            <h2 className='booklistTitle'>Book List</h2>

            <div className='booklistTitle2'>
            <h4 id='serialNo'>Serial No.</h4>
            <h4 id='image'>Image</h4>
            <h4 id='bookName'>Book Name</h4>
            <h4 id='Actions'>Actions</h4>
            </div>

            <ol>
                {books.map((book) => (
                    <li key={book.id}>
                        <p>
                            {book.coverImage && (
                                <img
                                    src={book.coverImage}
                                    alt={`${book.title} cover`}
                                    style={{ width: '100px', height: '150px' }}
                                />
                            )}
                            {book.title} by {book.author}
                        </p>
                        <div className='booklistButtons'>
                        <button onClick={() => handleEdit(book.id)}>Edit</button>
                        <button onClick={() => confirmDelete(book.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ol>

            {/* modal pop up for delete confirmation */}
            <DeleteConfirmationModal
                show={showModal}
                onConfirm={handleModalConfirm}
                onCancel={handleModalCancel}
            />

            {/* modal pop up for updating book */}
            {showUpdateModal && (
                <UpdateBookModal
                    bookId={selectedBookId}
                    onClose={() => setShowUpdateModal(false)}
                    onBookUpdated={(updatedBook) => {
                        setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
                        setShowUpdateModal(false);
                    }}
                />
            )}
        </div>
    );
};

export default BookList;
