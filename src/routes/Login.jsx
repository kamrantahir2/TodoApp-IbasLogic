
//  We will only check if a user exists instead of athenticating by password

import { useState } from "react";
import styles from '@/styles/Login.module.css';
import { useAuthContext } from "@/context/AuthContext";

// We will create a form to take the user's input
const Login = () => {

    // We will access the login function from the context store and current form input state
    const { login } = useAuthContext();

    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) return;
        login(username);
        console.log(username);
    };


    return (
        <div>
            <h1>Login</h1>
            <div className={styles.formWrapper}>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <input type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;