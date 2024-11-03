// import React, { useState, useEffect } from 'react';
// import axios from '../../axiosConfig';
// import { toast } from 'react-toastify';
// import './UpdateConfirmationModal.css';

// const UpdateConfirmationModal = ({ bookId, onClose, onBookUpdated }) => {
//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');
//     const [description, setDescription] = useState('');
//     const [publicationDate, setPublicationDate] = useState('');
//     const [coverImage, setCoverImage] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchBookDetails = async () => {
//             try {
//                 const response = await axios.get(`/books/${bookId}`);
//                 const { title, author, description, publicationDate, coverImage } = response.data;

//                 setTitle(title);
//                 setAuthor(author);
//                 setDescription(description);
//                 setPublicationDate(publicationDate);
//                 setCoverImage(coverImage);
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Failed to fetch book details:', err);
//                 toast.error('Failed to fetch book details.');
//                 setLoading(false);
//             }
//         };

//         if (bookId) {
//             fetchBookDetails();
//         }
//     }, [bookId]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.put(`/books/${bookId}`, {
//                 title,
//                 author,
//                 description,
//                 publicationDate,
//                 coverImage,
//             });
//             toast.success('Book updated successfully!');
//             onBookUpdated(response.data);
//         } catch (err) {
//             toast.error('Failed to update book.');
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Update Book</h2>
//                 <form onSubmit={handleUpdate}>
//                     <div>
//                         <label>Title:</label>
//                         <input
//                             type="text"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Author:</label>
//                         <input
//                             type="text"
//                             value={author}
//                             onChange={(e) => setAuthor(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Description:</label>
//                         <textarea
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Publication Date:</label>
//                         <input
//                             type="date"
//                             value={publicationDate}
//                             onChange={(e) => setPublicationDate(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Cover Image URL:</label>
//                         <input
//                             type="text"
//                             value={coverImage}
//                             onChange={(e) => setCoverImage(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit">Update Book</button>
//                     <button type="button" onClick={onClose}>Cancel</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdateConfirmationModal;

import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { toast } from 'react-toastify';
import './UpdateConfirmationModal.css';

const UpdateConfirmationModal = ({ bookId, onClose, onBookUpdated }) => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/books');
                setBooks(response.data); // Store all books
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch books:', err);
                toast.error('Failed to fetch book details.');
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    useEffect(() => {
        if (books.length > 0) {
            const book = books.find(b => b.id === bookId); // Find the book by ID
            if (book) {
                setTitle(book.title);
                setAuthor(book.author);
                setDescription(book.description);
                setPublicationDate(book.publicationDate);
                setCoverImage(book.coverImage);
            }
        }
    }, [books, bookId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/books/${bookId}`, {
                title,
                author,
                description,
                publicationDate,
                coverImage,
            });
            toast.success('Book updated successfully!');
            onBookUpdated(response.data);
            onClose();
        } catch (err) {
            toast.error('Failed to update book.');
        }
    };

    if (loading) {
        return <div className="modal-loading">Loading...</div>;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Update Book</h2>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Author:</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Publication Date:</label>
                        <input
                            type="date"
                            value={publicationDate}
                            onChange={(e) => setPublicationDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Cover Image URL:</label>
                        <input
                            type="text"
                            value={coverImage}
                            onChange={(e) => setCoverImage(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update Book</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateConfirmationModal;
