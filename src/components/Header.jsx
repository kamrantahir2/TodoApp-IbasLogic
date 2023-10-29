// Import modular styling from Header.module.css
import styles from "@/styles/Header.module.css";


// We can also assign the styling to a variable
const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center'
};


// We will be modifying the Header component to reuse it with varying content in multiple routes


const Header = (props) => {
    return (
        <header
            style={headerStyle}
            className={styles.header}
        >
            {/* <h1>Todos</h1>
            <p>Items will persist in the browser local storage</p> */}

            {/* We commented out the above code so we can make use of props.children  and make the Header component reusable with varying content in multiple routes: */}

            {props.children}

            {/* With the children prop we cna now inject varying content between the openening and closing tags of the Header component in other components. We will do this in the Home.jsx routes file*/}

        </header>
    );
};

export default Header;