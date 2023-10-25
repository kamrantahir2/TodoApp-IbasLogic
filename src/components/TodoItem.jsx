
// This component will render the actual li item to be rendered in TodosList

const TodoItem = ({ itemProp, setTodos }) => {
    return (
        <>
            <li>
                <input type="checkbox" />
                {itemProp.title}
            </li>
        </>
    );
};

export default TodoItem;