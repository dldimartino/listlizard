import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = props => {
    const {handleClick, isLoggedIn, isAdmin, isInstructor} = props
    return (
        <div className="navBar-Main">
            The Navbar
        </div>
    )
}

export default Navbar