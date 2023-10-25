import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps, setTodos, handleChange, delTodo, setUpdate }) => {
    /* To Display the list we need to loop through the array using the js map function and return the title of the individual todo*/
    return (
        <div>
            <ul>
                {todosProps.map(todo => (
                    <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
                ))}
            </ul>
        </div>
    );

};

export default TodosList;