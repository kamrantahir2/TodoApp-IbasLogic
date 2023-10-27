
import { useState } from 'react';
// Alongside useState, we will be importing icons from react-icons
import { FaPlusCircle } from 'react-icons/fa';
// import styles from '@/styles/app.css';

// Importing useTodosContext to consume context data
import { useTodosContext } from '@/context/TodosContext';

// Import useTodosStore in order to consume data from the store
import { useTodosStore } from '@/store';

const InputTodo = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    // const { addTodoItem } = useTodosContext();

    //  We will now be getting all handler functions from the store as the store now handles the state
    const addTodoItem = useTodosStore((state) => state.addTodoItem);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim()) {
            addTodoItem(title);
            setTitle('');
            setMessage('');
        } else {
            setMessage("Please add item");
        }

        console.log(title);

    };

    return (
        <>
            <form onSubmit={handleSubmit} className='form-container' >
                <input type="text" placeholder="Add Todo..." value={title} onChange={handleChange}
                    className='input-text' />
                <button className="input-submit"><FaPlusCircle /></button>
            </form>
            <span className='submit-warning' >{message}</span>
        </>
    );
};

export default InputTodo;