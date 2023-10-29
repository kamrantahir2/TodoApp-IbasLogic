
// To make specific routes inaccessible for users that are not authenticaed, we will protect the route.
// To do this we will create a custom component to hold the functionalities

import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

const ProtectedRoute = ({ children }) => {
    // We checked the user's login status to render children prop or redirect the user to the login page
    const { user } = useAuthContext();

    // Instead of redirecting manually to the index page using navigate('/') we will take advantage of useLocation
    const location = useLocation();
    console.log(location);

    // Next we need to pass the pathname while redirecting to the login screen to keep track of the user's intender route. We can do that useing the state attribute of the Navigate element. We also add the replace attribute to prevent going back to the login screen when we click back after a successful login.

    // We will then go back to the Login component to access the pthname so we can use it as the route to direct to after a successful login

    if (!user) {
        return (
            <Navigate
                to='/login'
                state={{ pathname: location.pathname }}
                replace
            />
        );
    }
    return children;
};

export default ProtectedRoute;

// Now, any components nested inside ProtectedRoute in TodoApp will become the children and become protected