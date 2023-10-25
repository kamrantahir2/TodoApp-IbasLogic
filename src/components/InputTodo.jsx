import { useState } from 'react';


const InputTodo = ({ addTodoItem }) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        addTodoItem(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo..." value={title} onChange={handleChange} />
        </form>
    );
};

export default InputTodo;