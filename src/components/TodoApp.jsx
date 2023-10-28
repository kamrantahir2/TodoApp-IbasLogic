import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import { Routes, Route } from 'react-router-dom';

// With all the content in TodoApp moved to Home.jsx, we will use Routes wrappers to determine which page to display

import Home from '@/routes/Home';
import About from '@/routes/About';
import Login from '@/routes/Login';
import Profile from '@/routes/Profile';

const TodoApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='profile' element={<Profile />} />
        </Routes>
    );
};

export default TodoApp;