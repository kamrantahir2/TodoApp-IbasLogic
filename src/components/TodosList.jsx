import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps }) => {
    /* To Display the list we need to loop through the array using the js map function and return the title of the individual todo*/
    return (
        <div>
            <ul>
                {todosProps.map(todo => (
                    <TodoItem key={todo.id} itemProp={todo} />
                ))}
            </ul>
        </div>
    );

};

export default TodosList;