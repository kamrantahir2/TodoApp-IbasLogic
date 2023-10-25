//  Import modular styling and add ass attribute to JSX
import styles from '@/styles/TodoItem.module.css';
import { useState, useRef } from 'react';


// This component will render the actual li item to be rendered in TodosList

const TodoItem = ({ itemProp, setTodos, handleChange, delTodo, setUpdate }) => {

    // We will be taking advantage of useRef to switch to uncontrolled input
    const editInputRef = useRef(null);


    // Add state to allow switch between editing and read-only for todos
    const [editing, setEditing] = useState(false);

    // Initialise internal state to avoid rerendering entire app on edit
    // const [updateInput, setUpdateInput] = useState(itemProp.title);
    // We will be switching to uncontrolled input so we will be removing the state


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
            setUpdate(editInputRef.current.value, itemProp.id);
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
                    // To switch to uncontrolled input we comment out the value and onchange attributes
                    type="text"
                    // value={updateInput}
                    className={styles.textInput}
                    style={editMode}
                    // onChange={(e) => setUpdateInput(e.target.value)}
                    // We are using useRef to switch to uncontrolled input
                    ref={editInputRef}
                    defaultValue={itemProp.title}
                    onKeyDown={handleUpdateDone}
                />
            </li>
        </>
    );
};

export default TodoItem;