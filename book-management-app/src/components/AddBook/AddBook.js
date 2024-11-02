import React, { useState } from 'react'
import axios from '../../axiosConfig'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

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

            // TODO: show successful toast notification upon adding a new book

            console.log(response.data);

            // clear fields after successfully adding the book
            setTitle('');
            setAuthor('');
            setDescription('');
            setPublicationDate('');
            setCoverImage('');
        } catch (err) {
            setError('Failed to add a new book.');

            // TODO: show error toast notification if admin is not able to add a new book

            console.log(err);
        }
    }

    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={HandleAddBook}>
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
                        placeholder="https://example.com/image.jpg"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default AddBook
