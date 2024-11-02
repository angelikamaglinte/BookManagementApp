import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;