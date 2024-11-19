import React, { useState } from 'react'
import axios from '../../axiosConfig'
import './AddBook.css'
// import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [error, setError] = useState('');

    const HandleAddBook = async (e) => {
        e.preventDefault();
        setError(''); // clear previous errors

        try {
            // send post request to add a new book to the list
            const response = await axios.post('/books', {
                title,
                author,
                description,
                publicationDate,
                coverImage
            });

            //show successful toast notification upon adding a new book
            toast.success('Book added successfully!', {
            });
            console.log(response.data);

            // clear fields after successfully adding the book
            setTitle('');
            setAuthor('');
            setDescription('');
            setPublicationDate('');
            setCoverImage('');
        } catch (err) {
            //show error toast notification if admin is not able to add a new book
            toast.error('Failed to add a new book. Please try again.', {
            });
            console.log(err);
        }
    }

    return (
        <div>
         
            <h2>Add a new book</h2>
            <form className='addBookForm' onSubmit={HandleAddBook}>
                <div>
                    <label>Title</label><br/>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author</label><br/>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label><br/>
                    <textarea
                        className='textareaDescription'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Publication Date</label><br/>
                    <input
                        className='publicationDate'
                        type="date"
                        value={publicationDate}
                        onChange={(e) => setPublicationDate(e.target.value)}
                        require
                    />
                </div>
                <div>
                    <label>Cover Image URL</label><br/>
                    <input
                        type="text"
                        placeholder="https://example.com/image1231234.jpg"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        required
                    />
                </div>
                <ToastContainer />
                <button type="submit" className='addBookButton'>Add Book</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default AddBook
