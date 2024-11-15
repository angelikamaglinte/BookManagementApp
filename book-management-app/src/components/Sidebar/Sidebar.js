// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import './Sidebar.css'

// const Sidebar = () => {
//     return (
//         <div className='sidebar'>
//             <h2>Sidebar navigation</h2>
//             <ul>
//                 <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
//                 <li><NavLink to="/booklist" activeClassName="active">Book List</NavLink></li>
//                 <li><NavLink to="/addbook" activeClassName="active">Add Books</NavLink></li>
//             </ul>
//         </div>
//     )
// }

// export default Sidebar

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import admin_sidebar_homeIcon from '../../assets/admin-sidebar-homeicon.png'
import admin_sidebar_addIcon from '../../assets/admin-sidebar-addIcon.png'
import admin_sidebar_Book from '../../assets/admin-sidebar-Book.png'
import admin_sidebar_logo from '../../assets/Page Pilot.png'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <img src={admin_sidebar_logo} alt='' id='adminSidebarLogo'/>
            <ul>
                <div className='sidebarTabContainer'>
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <img src={admin_sidebar_homeIcon}  className='sidebarIcons'  id='adminSidebarHomeIcon' alt=''></img>
                        <p className='sideBarActiveTabText'>Dashboard</p>
                    </NavLink>
                </li>
                <li>
                   
                    <NavLink
                        to="/booklist"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                         <img src={admin_sidebar_Book}  className='sidebarIcons' id='adminSidebarBookIcon' alt=''></img>
                         <p className='sideBarActiveTabText'>Book List</p>
                    </NavLink>
                </li>
                <li>
                   
                    <NavLink
                        to="/addbook"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                         <img src={admin_sidebar_addIcon} className='sidebarIcons' id='adminSidebaraddIcon' alt=''></img>
                         <p className='sideBarActiveTabText'>Add Books</p>
                    </NavLink>
                </li>
                </div>
            </ul>

        </div>
    );
};

export default Sidebar;
