
// Whenever we have a children route we will use Outlet in the parent route (in this, case About) to render the children (in this case, the single page content)
import { NavLink, Outlet } from "react-router-dom";

import Header from "@/components/Header";

const About = () => {
    return (
        <>
            <Header>
                <h1 className="about-header" >About Page</h1>
            </Header>
            <div className="about">
                <ul className="about-list">
                    <li>
                        <NavLink to='about-app' >About App</NavLink>
                    </li>
                    <li>
                        <NavLink to='about-developer' >About developer</NavLink>
                    </li>
                </ul>
                <Outlet />
            </div>
        </>

    );
};

export default About;

// Remember that the about/:slug will render a SinglePage component. So, any matching path like about/about-app will render the SinglePage.