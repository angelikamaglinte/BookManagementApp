// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage/LandingPage';
// import Login from './components/Login/Login';
// import Logout from './components/Login/Logout';
// import BookList from './components/BookList/BookList';
// import ProtectedRoute from './ProtectedRoute';
// import AddBook from './components/AddBook/AddBook';
// import Sidebar from './components/Sidebar/Sidebar';
// import UpdateBook from './components/UpdateBook/UpdateConfirmationModal';
// import Dashboard from './components/Dashboard/Dashboard';
// import './App.css'

// function App() {
//     const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
//         setIsAdminLoggedIn(isLoggedIn);
//     }, []);

//     return (
//         <Router>
//             <div className="App">
//                 {/* only show Sidebar and Logout if admin is logged in */}
//                 {isAdminLoggedIn ? (
//                     <div className="layout-container">
//                         <Sidebar />
//                         <div className="main-content">
//                             <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />
//                             <Routes>
//                                 {/* if admin is logged in, LandingPage should not show. Instead, they should see the Dashboard component */}
//                                 <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
//                                 <Route path="/dashboard" element={<Dashboard />} />
//                                 <Route path="/booklist" element={<ProtectedRoute component={BookList} />} />
//                                 <Route path="/addbook" element={<AddBook />} />
//                                 <Route path="/updatebook/:id" element={<UpdateBook />} />
//                             </Routes>
//                         </div>
//                     </div>
//                 ) : (
//                     <Routes>
//                         {/* if admin is not logged in, show Landing Page for them to login using their credentials */}
//                         <Route path="/" element={<LandingPage />} />
//                         <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
//                     </Routes>
//                 )}
//             </div>
//         </Router>
//     );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LandingPage from './components/LandingPage/LandingPage';
// import Login from './components/Login/Login';
// import Logout from './components/Login/Logout';
// import BookList from './components/BookList/BookList';
// import AddBook from './components/AddBook/AddBook';
// import Sidebar from './components/Sidebar/Sidebar';
// import Dashboard from './components/Dashboard/Dashboard';
// import './App.css';
// import UserLandingPage from './userpages/UserLandingPage/UserLandingPage';
// import UserHomePage from './userpages/UserHomePage/UserHomePage';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//     const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
//         setIsAdminLoggedIn(isLoggedIn);
//     }, []);

//     return (
//         <Router>
//             <div className="App">
//                 {isAdminLoggedIn ? (
//                     <div className="layout-container">
//                         <Sidebar />
//                         <div className="main-content">
//                             <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />
//                             <Routes>
//                                 <Route path="/dashboard" element={<Dashboard />} />
//                                 <Route path="/booklist" element={<BookList />} />
//                                 <Route path="/addbook" element={<AddBook />} />
//                                 {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
//                             </Routes>
//                         </div>
//                     </div>
//                 ) : (
//                     <Routes>
//                         <Route path="/" element={<LandingPage />} />
//                         <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
//                         {/* <Route path="*" element={<Navigate to="/" />} /> */}
//                     </Routes>
//                 )}
//                 {/* for user */}
//                 <Routes>
//                     <Route path="/pagepilot" element={<UserLandingPage />} />
//                     <Route path="/pagepilot-home" element={<UserHomePage />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import BookList from './components/BookList/BookList';
import AddBook from './components/AddBook/AddBook';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import UserLandingPage from './userpages/UserLandingPage/UserLandingPage';
import UserHomePage from './userpages/UserHomePage/UserHomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
        setIsAdminLoggedIn(isLoggedIn);
    }, []);

    const location = useLocation(); // Get the current location

    // Exclude Sidebar and Logout for specific routes
    const hideSidebarAndLogout = location.pathname === '/pagepilot' || location.pathname === '/pagepilot-home';

    return (
        <div className="App">
            {!hideSidebarAndLogout && isAdminLoggedIn && (
                <div className="layout-container">
                    <Sidebar />
                    <div className="main-content">
                        <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/booklist" element={<BookList />} />
                            <Route path="/addbook" element={<AddBook />} />
                        </Routes>
                    </div>
                </div>
            )}

            <Routes>
                {/* Admin routes */}
                {!isAdminLoggedIn && (
                    <>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
                    </>
                )}
                {/* User routes */}
                <Route path="/pagepilot" element={<UserLandingPage />} />
                <Route path="/pagepilot-home" element={<UserHomePage />} />
            </Routes>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
