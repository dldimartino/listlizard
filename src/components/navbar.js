import React from './node_modules/react'
import {Link} from './node_modules/react-router-dom'

const Navbar = props => {
    const {handleClick, isLoggedIn, isAdmin, isInstructor} = props
    return (
        <div className="navBar-Main">
            The Navbar
        </div>
    )
}

export default Navbar