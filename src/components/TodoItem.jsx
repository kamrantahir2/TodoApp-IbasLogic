
// This component will render the actual li item to be rendered in TodosList

const TodoItem = ({ itemProp, setTodos, handleChange }) => {

    return (
        <>
            <li>
                <input
                    type="checkbox"
                    checked={itemProp.completed}
                    onChange={() => handleChange(itemProp.id)}
                />
                {itemProp.title}
            </li>
        </>
    );
};

export default TodoItem;