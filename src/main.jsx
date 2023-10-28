import React from 'react';
import ReactDOM from 'react-dom/client';

import TodoApp from '@/components/TodoApp';
import '@/styles/app.css';

// Import React Router
import { BrowserRouter as Router } from 'react-router-dom';

const domContainer = document.getElementById('root');

const root = ReactDOM.createRoot(domContainer);

// We wrap the top level component in a BrowserRouter component
root.render((
    <React.StrictMode>
        <Router>
            <TodoApp />
        </Router>
    </React.StrictMode>
));