
// This component will render the actual li item to be rendered in TodosList

const TodoItem = ({ itemProp, setTodos, handleChange, delTodo }) => {

    return (
        <>
            <li>
                <input
                    type="checkbox"
                    checked={itemProp.completed}
                    onChange={() => handleChange(itemProp.id)}
                />
                <button onClick={() => delTodo(itemProp.id)}>Delete</button>
                {itemProp.title}
            </li>
        </>
    );
};

export default TodoItem;