//  Import modular styling and add ass attribute to JSX
import styles from '@/styles/TodoItem.module.css';
import { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

// Importing useTodosContext to consume context data
import { useTodosContext } from '@/context/TodosContext';

// Importing useTodosStore to access data from the store
import { useTodosStore } from '@/store';

// We will hide the edit button for users who are not logged in. We will begin by importing useAuthContect to get the user state
import { useAuthContext } from '@/context/AuthContext';

// This component will render the actual li item to be rendered in TodosList
const TodoItem = ({ itemProp }) => {

    // Importing useTodosContext to consume context data
    // const { handleChange, delTodo, setUpdate } = useTodosContext();

    // We will be taking advantage of useRef to switch to uncontrolled input
    const editInputRef = useRef(null);


    // Add state to allow switch between editing and read-only for todos
    const [editing, setEditing] = useState(false);

    // Initialise internal state to avoid rerendering entire app on edit
    // const [updateInput, setUpdateInput] = useState(itemProp.title);
    // We will be switching to uncontrolled input so we will be removing the state

    // Handler functions will now be made accessible to this component:
    const handleChange = useTodosStore((state) => state.handleChange);
    const delTodo = useTodosStore((state) => state.delTodo);
    const setUpdate = useTodosStore((state) => state.setUpdate);


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

    // We will be adding a conditional based on the user state to render the edit button only if the user is logged in

    const { user } = useAuthContext();
    return (
        <>
            <li className={styles.item}>
                <div className={styles.content} style={viewMode} >
                    <input
                        type="checkbox"
                        checked={itemProp.completed}
                        onChange={() => handleChange(itemProp.id)}
                    />
                    {user && (
                        <button className='edit-button' onClick={handleEditing}><AiFillEdit /></button>
                    )}
                    <button onClick={() => delTodo(itemProp.id)} className='del-button' ><FaTrash /></button>
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