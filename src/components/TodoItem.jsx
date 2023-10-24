
// This component will render the actual li item to be rendered in TodosList

const TodoItem = ({ itemProp }) => {
    return <li>{itemProp.title}</li>;
};

export default TodoItem;