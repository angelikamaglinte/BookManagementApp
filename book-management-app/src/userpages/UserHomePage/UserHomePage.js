import React from 'react'
import './UserHomePage.css'
import NavigationBar from '../../usercomponents/NavigationBar/NavigationBar'
import BookList from '../../usercomponents/BookList/BookList'

const UserHomePage = () => {
    return (
        <div>
            {/* navigation bar - logo and search bar */}
            <NavigationBar />
            <BookList />
        </div>
    )
}

export default UserHomePage
