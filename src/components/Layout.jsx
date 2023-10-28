
// We will include the NavBar in this component as a shared component

// When we create a nested configuration lik in the TodoApp component we will use outlet in the parent route which in this case will be Layout, to render their child route's elements.
import { Outlet } from "react-router-dom";

import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/context/AuthContext";

// We will wrap the components that rely on AuthContext in AuthProvider. This is because we will need the AuthContext in the NavBar for user authentication. This will give the component access to the context data
const Layout = () => {
    return (
        <div className="wrapper">
            <AuthProvider>
                <NavBar />
                <Outlet />
            </ AuthProvider>
        </div>
    );
};

export default Layout;