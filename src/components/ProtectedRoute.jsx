
// To make specific routes inaccessible for users that are not authenticaed, we will protect the route.
// To do this we will create a custom component to hold the functionalities

import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

const ProtectedRoute = ({ children }) => {
    // We checked the user's login status to render children prop or redirect the user to the login page
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to='/login' />;
    }
    return children;
};

export default ProtectedRoute;

// Now, any components nested inside ProtectedRoute in TodoApp will become the children and become protected