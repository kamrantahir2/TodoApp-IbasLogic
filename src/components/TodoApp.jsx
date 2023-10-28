import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

// With all the content in TodoApp moved to Home.jsx, we will use Routes wrappers to determine which page to display

import Home from '@/routes/Home';
import About from '@/routes/About';
import Login from '@/routes/Login';
import Profile from '@/routes/Profile';
import NotMatch from '@/routes/NotMatch';


// We will wrap all route elements in a Layout route which will be shared components
const TodoApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='login' element={<Login />} />
                <Route path='profile' element={<Profile />} />
                <Route path='*' element={<NotMatch />} />
            </Route>

        </Routes>
    );
};

export default TodoApp;