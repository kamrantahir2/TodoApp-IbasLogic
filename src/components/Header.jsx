
// We can also assign the styling to a variable
const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center'
};


const Header = () => {
    return (
        <header
            // Usage of inline css styling
            // style={{
            //     padding: '20px 0',
            //     lineHeight: '1.5em',
            //     color: '#aeadad',
            //     textAlign: 'center'
            // }}
            style={headerStyle}
        >
            <h1>Todos</h1>
            <p>Items will persist in the browser local storage</p>
        </header>
    );
};

export default Header;