
// Whenever we have a children route we will use Outlet in the parent route (in this, case About) to render the children (in this case, the single page content)
import { NavLink, Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <h1>About Page</h1>
            <div className="about">
                <ul className="about_list">
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