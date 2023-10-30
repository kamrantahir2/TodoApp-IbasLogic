
// We will be dynamically displaying the content on a single page based on the params.

import { useParams } from "react-router-dom";


// To display dynamic content we will begin by adding the following data outside the SinglePage component:

const aboutData = [
    {
        slug: 'about-app',
        title: 'About the app',
        description:
            "This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser's local storage for a subsequent visit.",
    },
    {
        slug: 'about-developer',
        title: 'About the developer',
        description:
            "I am Kamran Tahir. I am a self-taught developer originally focused on backend Java development, now, I am breaking into frontend development by learning React. With this new found skill I will be returning to my REST API's and building a frontend for each of them using React.",
    },
];


// After that we will render the datat object dynamically using slug and useParams()

const SinglePage = () => {

    const { slug } = useParams();

    const aboutContent = aboutData.find((item) => item.slug === slug);

    const { title, description } = aboutContent;


    return (
        <div className="main-content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SinglePage;