
import { NavLink } from "react-router-dom";

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
    const handleLogout = () => {
        logout();
    };

    // We will only display the logout feature if the user is logged in. We do this by calling the current state from above and using &&
    return (
        <>
            <nav className="navbar">
                <ul>
                    {links.map((link) => {
                        return (
                            <li key={link.text} >
                                <NavLink to={link.path}
                                >{link.text}</NavLink>
                            </li>
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

export default NavBar;