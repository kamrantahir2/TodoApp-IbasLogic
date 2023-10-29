
import { NavLink, useNavigate } from "react-router-dom";
import React from 'react';

// We have already created the logout function, all we have to do is incorporate it:
import { useAuthContext } from "@/context/AuthContext";

// This file will be used as a shared layout across all routes

const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
];

const NavBar = () => {

    // Grab the current state and the logout function from AuthContext
    const { user, logout } = useAuthContext();

    // We will navigate to login route after we logout
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // We will only display the logout feature if the user is logged in. We do this by calling the current state from above and using &&. We will do the same to hide the profile link when logged out

    // We will use the global user state to render the login menu link conditionally. This can be seen in the <React.Fragment> section.
    // To add a key to a fragment we must use React.Fragment
    return (
        <>
            <nav className="navbar">
                <ul>
                    {links.map((link) => {
                        return (
                            <React.Fragment key={link.text} >
                                {link.path === 'login' ? (
                                    !user && (
                                        <li>
                                            <NavLink to={link.path}>{link.text}</NavLink>
                                        </li>
                                    )
                                ) : link.path === 'profile' ? (
                                    user && (<li>
                                        <NavLink to={link.path}>
                                            {link.text}
                                        </NavLink>
                                    </li>)
                                ) : (
                                    <li>
                                        <NavLink to={link.path}>{link.text}</NavLink>
                                    </li>
                                )}
                            </React.Fragment>
                        );
                    })}
                </ul>
            </nav>
            {user && (
                <div className="logout">
                    <p>{user}</p>
                    {<button onClick={handleLogout}>Logout</button>}
                </div>
            )}
        </>

    );
};

// We checked if the path of the current iteration is login, then we only want it displayed if a user is not logged in. We used React.Fragment because we don't want an extra element to come in between ul and li

export default NavBar;