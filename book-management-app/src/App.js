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


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import BookList from './components/BookList/BookList';
import AddBook from './components/AddBook/AddBook';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
        setIsAdminLoggedIn(isLoggedIn);
    }, []);

    return (
        <Router>
            <div className="App">
                {isAdminLoggedIn ? (
                    <div className="layout-container">
                        <Sidebar />
                        <div className="main-content">
                            <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />
                            <Routes>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/booklist" element={<BookList />} />
                                <Route path="/addbook" element={<AddBook />} />
                                <Route path="*" element={<Navigate to="/dashboard" />} />
                            </Routes>
                        </div>
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
}

export default App;
