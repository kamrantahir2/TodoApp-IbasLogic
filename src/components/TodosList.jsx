
const TodosList = (props) => {
    /* To Display the list we need to loop through the array using the js map function and return the title of the individual todo*/
    return (
        <div>
            <ul>
                {props.todosProps.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </ul>
        </div>
    );

};

export default TodosList;