import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import styles from './Dashboard.module.css';

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
        // <div >
        //     <br></br>
        //     <h2 className='dashboardHeading'>Manage and Monitor <br></br> with Ease</h2>
        //     <div className='dashboardContent'>

        //         <div className='dashboardCards'>
        //             <h2 className='dashboardCardTitles' >Available Books</h2>
        //             {error ? (
        //                 <p style={{ color: 'red' }}>{error}</p>
        //             ) : (
        //                 <p id='dashboardBookCount'>{booksCount}</p>
        //             )}
        //         </div>

        //         <div className='dashboardCards'>
        //             <h2 className='dashboardCardTitles'>Quote of the Month</h2>
        //             <p id='dashboardQuote'>"Books are mirrors, you only see in them what you already have inside you."
        //             </p>
        //         </div>

        //         <div className='dashboardCards'>
        //             <h2 className='dashboardCardTitles'>Creators Pick</h2>
        //             <p id='dashboardBookSuggestion'>To Kill a Mockingbird<br></br>-By Harper Lee</p>
        //         </div>
        //     </div>

        // </div>
        <div className={styles['dashboardContainer']}>
            <div className={styles['dashboardHeading']}>
                <h2>Manage and Monitor <br /> with Ease</h2>
            </div>
            <div className={styles['dashboardContent']}>
                <div className={styles['dashboardCards']}>
                    <h2 className={styles['dashboardCardTitles']}>Available Books</h2>
                    {error ? (
                        <p styles={{ color: 'red' }}>{error}</p>
                    ) : (
                        <p id={styles['dashboardBookCount']}>{booksCount}</p>
                    )}
                </div>

                <div className={styles['dashboardCards']}>
                    <h2 className={styles['dashboardCardTitles']}>Quote of the Month</h2>
                    <p id={styles['dashboardQuote']}>"Books are mirrors, you only see in them what you already have inside you."
                    </p>
                </div>

                <div className={styles['dashboardCards']}>
                    <h2 className={styles['dashboardCardTitles']}>Creator's Pick</h2>
                    <p id={styles['dashboardBookSuggestion']}>To Kill a Mockingbird<br />-By Harper Lee</p>
                </div>
                <div className={styles['dashboardCards']}>
                    <h2 className={styles['dashboardCardTitles']}>Add New Books</h2>
                    <p id={styles['dashboardAddBook']}>Keep your collection updated.</p>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
