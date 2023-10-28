
// This file will be used as a shared layout across all routes

const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
];

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                {links.map((link) => {
                    return (
                        <li key={link.text} >
                            <a href={link.path}>{link.text}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;