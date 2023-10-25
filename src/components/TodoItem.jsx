//  Import modular styling and add ass attribute to JSX
import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';


// This component will render the actual li item to be rendered in TodosList

const TodoItem = ({ itemProp, setTodos, handleChange, delTodo, setUpdate }) => {

    // Add state to allow switch between editing and read-only for todos
    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing((prev) => !prev);
    };

    // Creating a style object to dynamically style based on completed state
    const completedStyle = {
        fontStyle: 'italic',
        color: 'blue',
        opacity: 0.4,
        textDecoration: 'line-through'
    };

    // Display textfield only if editing state is true
    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

    const handleUpdateDone = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
        }
    };


    return (
        <>
            <li className={styles.item}>
                <div className={styles.content} style={viewMode} >
                    <input
                        type="checkbox"
                        checked={itemProp.completed}
                        onChange={() => handleChange(itemProp.id)}
                    />
                    <button onClick={handleEditing}>Edit</button>
                    <button onClick={() => delTodo(itemProp.id)}>Delete</button>
                    <span style={itemProp.completed ? completedStyle : null}>
                        {itemProp.title}
                    </span>
                </div>
                <input
                    type="text"
                    value={itemProp.title}
                    className={styles.textInput}
                    style={editMode}
                    onChange={(e) => setUpdate(e.target.value, itemProp.id)}
                    onKeyDown={handleUpdateDone}
                />
            </li>
        </>
    );
};

export default TodoItem;