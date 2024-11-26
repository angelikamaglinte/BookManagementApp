// import React, { useState, useEffect } from 'react';
// import axios from '../../axiosConfig';
// import DeleteConfirmationModal from '../DeleteBook/DeleteConfirmationModal';
// import UpdateBookModal from '../UpdateBook/UpdateConfirmationModal';
// import './BookList.css'
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const BookList = () => {
//     const [books, setBooks] = useState([]);
//     const [bookToDelete, setBookToDelete] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [showUpdateModal, setShowUpdateModal] = useState(false);
//     const [selectedBookId, setSelectedBookId] = useState(null);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await axios.get('/books');
//                 setBooks(response.data);
//             } catch (err) {
//                 console.error('Failed to fetch books.');
//             }
//         };

//         fetchBooks();
//     }, []);

//     const handleDelete = async (bookId) => {
//         // try {
//         //     await axios.delete(`/books/${bookId}`);
//         //     setBooks(books.filter((book) => book.id !== bookId));
//         // } catch (err) {
//         //     console.error('Failed to delete book', err);
//         // }
//         try {
//             await axios.delete(`/books/${bookId}`);
//             setBooks(books.filter((book) => book.id !== bookId));
//             toast.success('Book successfully deleted!', {
//                 position: 'top-right', 
//                 autoClose: 3000,
//             });
//         } catch (err) {
//             console.error('Failed to delete book', err);
//             toast.error('Failed to delete book. Please try again.', {
//                 position: 'top-right', 
//                 autoClose: 3000,
//             });
//         }
//     };

//     const confirmDelete = (bookId) => {
//         setBookToDelete(bookId);
//         setShowModal(true);
//     };

//     const handleModalConfirm = () => {
//         handleDelete(bookToDelete);
//         setShowModal(false);
//     };

//     const handleModalCancel = () => {
//         setShowModal(false);
//     };

//     // function to handle opening the UpdateBook modal
//     const handleEdit = (bookId) => {
//         setSelectedBookId(bookId);
//         setShowUpdateModal(true);
//     };

//     return (
//         <div className='adminBookList'>
//             <ToastContainer />
//             <h2 className='booklistTitle'>Book List</h2>

//             <div className='booklistTitle2'>
//             <h4 id='serialNo'>Serial No.</h4>
//             <h4 id='image'>Image</h4>
//             <h4 id='bookName'>Book Name</h4>
//             <h4 id='Actions'>Actions</h4>
//             </div>

//             <ol>
//                 {books.map((book) => (
//                     <li key={book.id}>
//                         <p>
//                             {book.coverImage && (
//                                 <img
//                                     src={book.coverImage}
//                                     alt={`${book.title} cover`}
//                                     style={{ width: '100px', height: '150px' }}
//                                 />
//                             )}
//                             {book.title} by {book.author}
//                         </p>
//                         <div className='booklistButtons'>
//                         <button onClick={() => handleEdit(book.id)}>Edit</button>
//                         <button onClick={() => confirmDelete(book.id)}>Delete</button>
//                         </div>
//                     </li>
//                 ))}
//             </ol>

//             {/* modal pop up for delete confirmation */}
//             <DeleteConfirmationModal
//                 show={showModal}
//                 onConfirm={handleModalConfirm}
//                 onCancel={handleModalCancel}
//             />

//             {/* modal pop up for updating book */}
//             {showUpdateModal && (
//                 <UpdateBookModal
//                     bookId={selectedBookId}
//                     onClose={() => setShowUpdateModal(false)}
//                     onBookUpdated={(updatedBook) => {
//                         setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
//                         setShowUpdateModal(false);
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

// export default BookList;

import React, { useState, useEffect, useMemo } from 'react';
import axios from '../../axiosConfig';
import DeleteConfirmationModal from '../DeleteBook/DeleteConfirmationModal';
import UpdateBookModal from '../UpdateBook/UpdateConfirmationModal';
import './BookList.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [bookToDelete, setBookToDelete] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc'); // default to ascending

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

    // Memoized sorting function
    const sortedBooks = useMemo(() => {
        return [...books].sort((a, b) => {
            // Sorting based on 'id' or another field that determines order of addition
            const idA = a.id; // Use 'id' or another field here
            const idB = b.id; // Use 'id' or another field here

            return sortOrder === 'asc' ? idA - idB : idB - idA;
        });
    }, [books, sortOrder]); // Recompute when books or sortOrder changes

    const handleDelete = async (bookId) => {
        try {
            await axios.delete(`/books/${bookId}`);
            setBooks(books.filter((book) => book.id !== bookId));
            toast.success('Book successfully deleted!', {
                position: 'top-right',
                autoClose: 3000,
            });
        } catch (err) {
            console.error('Failed to delete book', err);
            toast.error('Failed to delete book. Please try again.', {
                position: 'top-right',
                autoClose: 3000,
            });
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

    const handleEdit = (bookId) => {
        setSelectedBookId(bookId);
        setShowUpdateModal(true);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div className='adminBookList'>
            <ToastContainer />
            <h2 className='booklistTitle'>Book List</h2>
            <div className="sortDropdown">
                <label htmlFor="sortOrder">Sort by:&nbsp;&nbsp;</label>
                <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                    <option classname="sortOrderOptions"  value="asc">Oldest First</option>
                    <option classname="sortOrderOptions"  value="desc">Newest First</option>
                </select>
            </div>

            <ol>
                {sortedBooks.map((book) => (
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
