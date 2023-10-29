
// We will take the data from the Login component and pass it to a tontext store that lets us broadcast it

import { useState, useContext, createContext, useEffect } from "react";

// We created a context store that helps to manage the user's input and the login and logout functionalities.

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {



    // Just like we added browser storage for our todos for data persistence in TodosContext, we will do the same with the user state.
    const getUsername = () => {
        // Getting stored state
        const temp = localStorage.getItem('username');
        const savedUsername = JSON.parse(temp);
        return savedUsername || '';
    };

    const [user, setUser] = useState(getUsername());



    useEffect(() => {
        // Storing user state
        const temp = JSON.stringify(user);
        localStorage.setItem('username', temp);
    }, [user]);

    //  We created a login function that expects the user's input from the login form to update the global user state. This function will be used in the Login component to take the current username
    const login = (user) => setUser(user);

    // The logout functiopn only resets the user state and will be used in any component that includes a logout button
    const logout = () => setUser(null);

    // Now we will wrap the consuming components (the Layout component) in AuthProvider so they can access the provider value.
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </ AuthContext.Provider>
    );

};

export const useAuthContext = () => useContext(AuthContext);