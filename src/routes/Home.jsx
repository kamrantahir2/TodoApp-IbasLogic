
// The todos application view will be the index page.

// We will move the contents of the top level component (TodosApp) to here. The content of TodosApp.jsx will now be empty


import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
    return (
        // <div className='wrapper'>
        <div className="todos">
            {/* <Header /> */}
            {/* We will replace the self closing tag with opening and closing tags to take advantage of props.children in the Header component: */}

            <Header>
                <h1>Todos</h1>
                <p>Items will persist in the browser local storage</p>
            </Header>


            <TodosLogic />
        </div>
        // </ div>
    );
};

export default Home;