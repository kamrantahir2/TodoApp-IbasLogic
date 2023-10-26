
import { useState } from 'react';
// Alongside useState, we will be importing icons from react-icons
import { FaPlusCircle } from 'react-icons/fa';
// import styles from '@/styles/app.css';


const InputTodo = ({ addTodoItem }) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

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