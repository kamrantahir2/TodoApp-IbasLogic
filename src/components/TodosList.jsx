import TodoItem from "@/components/TodoItem";

// To access context data we will begin by importing useContext as well as the TodosContext component we made.
import { useTodosContext } from "@/context/TodosContext";

const TodosList = ({ todosProps, setTodos, handleChange, delTodo, setUpdate }) => {

    // The useContext Hook will let us read context data. We will call it above the return statement and pass the context object as an argument
    const value = useTodosContext();
    console.log(value);

    // We will destructure the provider value and grab the todos state we will map through
    const { todos } = useTodosContext();


    /* To Display the list we need to loop through the array using the js map function and return the title of the individual todo*/
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        // key={todo.id} itemProp={todo} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate}
                        // We can remove all props containing handler functions as they are now handled by TodosContext
                        key={todo.id} itemProp={todo}
                    />
                ))}
            </ul>
        </div>
    );

};

export default TodosList;