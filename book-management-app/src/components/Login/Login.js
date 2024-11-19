import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
import './Login.css';
import login_page_image from '../../assets/login_Page_Image.jpg'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsAdminLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        try {
            const response = await axios.post('/login', {
                username,
                password,
            });
            toast.success('Login Successfull ! Redirecting... ', {
            });
            await wait(4000)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('isAdminLoggedIn', 'true');
            setIsAdminLoggedIn(true);

            navigate('/dashboard');

            console.log(response.data.token);

        } catch (err) {
            toast.error('Failed to login', {
            });
            console.log(err);
        }
    };

    return (
        <div className='loginPageDiv'>
            <img src={login_page_image} alt='' id='login_page_image'></img>
            <ToastContainer />
            <form onSubmit={handleSubmit} className='adminloginFields'>
            <h2 id='loginWelcomeMessage'>Welcome Back, Admin!</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p id='adminErrorMessage'>{error}</p>}
                <button type="submit">Login</button>
                
            </form>
         
        </div>
    );
};

export default Login;