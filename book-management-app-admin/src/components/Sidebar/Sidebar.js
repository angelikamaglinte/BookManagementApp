import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2>Sidebar navigation</h2>
            <ul>
                <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                <li><NavLink to="/booklist" activeClassName="active">Book List</NavLink></li>
                <li><NavLink to="/addbook" activeClassName="active">Add Books</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar