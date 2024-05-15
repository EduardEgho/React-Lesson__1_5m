import React from 'react';
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Form</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/post'}>Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;

