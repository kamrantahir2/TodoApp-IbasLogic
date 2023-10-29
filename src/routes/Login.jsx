
//  We will only check if a user exists instead of athenticating by password

import { useState } from "react";
import styles from '@/styles/Login.module.css';
import { useAuthContext } from "@/context/AuthContext";
import Header from "@/components/Header";

// We want to navigate away from the login screen to an intended route after a successful login. To do this we can take advantage of the useNavigate Hook from React Router
import { useNavigate, useLocation } from "react-router-dom";

// We will create a form to take the user's input
const Login = () => {

    // We will access the login function from the context store and current form input state.
    // The current state is now available 
    const { login } = useAuthContext();

    // We will use useNavigate to navigate away from the login screen after a successful login, this will be done in handleSubmit:
    const navigate = useNavigate();

    // Instead of redirecting manually to the index page using navigate('/') we will take advantage of useLocation
    const location = useLocation();
    // We will access the pathname from ProtectedRoute
    // We've check if we hit the path to a protected route so we can redirect to the route after we log in, otherwise we redirect to the index page
    const from = location.state?.pathname || '/';

    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) return;
        login(username);
        console.log(username);
        // The replace option means that we won't go back to the login screen when we press the back button after a successful login
        navigate(from, { replace: true });
    };


    return (
        <div>
            <Header>
                <h1>Login</h1>
            </Header>
            <div className={styles.formWrapper}>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <input type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className={styles.loginButton} >Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;