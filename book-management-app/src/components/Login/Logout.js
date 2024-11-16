import React from 'react';
import { useNavigate } from 'react-router-dom';
import'./Logout.css'

const Logout = ({ setIsAdminLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.setItem('isAdminLoggedIn', 'false');

        setIsAdminLoggedIn(false);
        navigate('/');
    };


    return (
        <div>
            <button onClick={handleLogout} className='logoutButton'>Logout</button>
        </div>
    );
};

export default Logout;