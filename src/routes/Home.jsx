
// The todos application view will be the index page.

// We will move the contents of the top level component (TodosApp) to here. The content of TodosApp.jsx will now be empty


import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
    return (
        // <div className='wrapper'>
        <div className="todos">
            <Header />
            <TodosLogic />
        </div>
        // </ div>
    );
};

export default Home;