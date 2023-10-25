//  Import modular styling and add ass attribute to JSX
import styles from '@/styles/TodoItem.module.css';


// This component will render the actual li item to be rendered in TodosList

const TodoItem = ({ itemProp, setTodos, handleChange, delTodo }) => {

    // Creating a style object to dynamically style based on completed state
    const completedStyle = {
        fontStyle: 'italic',
        color: 'blue',
        opacity: 0.4,
        textDecoration: 'line-through'
    };

    return (
        <>
            <li className={styles.item}>
                <div className={styles.content}>
                    <input
                        type="checkbox"
                        checked={itemProp.completed}
                        onChange={() => handleChange(itemProp.id)}
                    />
                    <button onClick={() => delTodo(itemProp.id)}>Delete</button>
                    <span style={itemProp.completed ? completedStyle : null}>
                        {itemProp.title}
                    </span>
                </div>

            </li>
        </>
    );
};

export default TodoItem;