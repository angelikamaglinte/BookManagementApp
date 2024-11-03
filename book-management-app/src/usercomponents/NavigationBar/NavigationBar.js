import React, { useState } from 'react';
import './NavigationBar.css';
import logo from '../../assets/Page Pilot.png';
import search_icon from '../../assets/search_icon.png';

const NavigationBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchError, setSearchError] = useState(null);

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            setSearchError('Please enter a search term.');
            return;
        }
        setSearchError(null);
        onSearch(searchQuery);
    };

    const handleLogoClick = () => {
        window.location.reload();
    };

    return (
        <div className="navigation-bar-container">
            <a href="#" onClick={handleLogoClick}>
                <img src={logo} alt="Page Pilot" className="logo" />
            </a>
            <div className="search-bar-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search books here"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    <img src={search_icon} alt="Search icon" />
                </button>
            </div>
            {searchError && <p className="error-message">{searchError}</p>}
        </div>
    );
};

export default NavigationBar;
