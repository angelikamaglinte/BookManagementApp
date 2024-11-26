import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'
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
            <button onClick={handleLogout} className='logoutButton'>Logout &nbsp;&nbsp;<FaArrowRight size={18}/></button>
        </div>
    );
};

export default Logout;