
// We will include the NavBar in this component as a shared component

// When we create a nested configuration lik in the TodoApp component we will use outlet in the parent route which in this case will be Layout, to render their child route's elements.
import { Outlet } from "react-router-dom";

import NavBar from "@/components/NavBar";

const Layout = () => {
    return (
        <div className="wrapper">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Layout;