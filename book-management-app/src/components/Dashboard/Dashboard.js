import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './Dashboard.css';

const Dashboard = () => {
    const [booksCount, setBooksCount] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBooksCount = async () => {
            try {
                const response = await axios.get('/books');
                setBooksCount(response.data.length); // show count of books available
            } catch (err) {
                setError('Failed to fetch books count.');
            }
        };

        fetchBooksCount();
    }, [])

    return (
        <div >
            <br></br>
            <h2 className='dashboardHeading'>Manage and Monitor <br></br> with Ease</h2>
            <div className='dashboardContent'>

                <div className='dashboardCards'>
                    <h2 className='dashboardCardTitles' >Available Books</h2>
                    {error ? (
                        <p style={{ color: 'red' }}>{error}</p>
                    ) : (
                        <p id='dashboardBookCount'>{booksCount}</p>
                    )}
                </div>

                <div className='dashboardCards'>
                    <h2 className='dashboardCardTitles'>Quote of the Month</h2>
                    <p id='dashboardQuote'>"Books are mirrors, you only see in them what you already have inside you."
                    </p>
                </div>

                <div className='dashboardCards'>
                    <h2 className='dashboardCardTitles'>Creators Pick</h2>
                    <p id='dashboardBookSuggestion'>To Kill a Mockingbird<br></br>-By Harper Lee</p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
