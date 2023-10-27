import TodoItem from "@/components/TodoItem";

// To access context data we will begin by importing useContext as well as the TodosContext component we made.
import { useTodosContext } from "@/context/TodosContext";

// We will be importing the store from store.js which has all the handler functions
import { useTodosStore } from '@/store';

const TodosList = ({ todosProps, setTodos, handleChange, delTodo, setUpdate }) => {

    // The useContext Hook will let us read context data. We will call it above the return statement and pass the context object as an argument
    const value = useTodosContext();
    console.log(value);

    // We will destructure the provider value and grab the todos state we will map through.
    // Commented out as we are not managing the state from store.js
    // const { todos } = useTodosContext();

    // Creating a todos variable using useTodosStore to give us access to the todos state from store.js
    const todos = useTodosStore((state) => state.todos);


    /* To Display the list we need to loop through the array using the js map function and return the title of the individual todo*/
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    // key={todo.id} itemProp={todo} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate}
                    // We can remove all props containing handler functions as they are now handled by TodosContext
                    key={todo.id} itemProp={todo}
                />
            ))}
        </ul>
    );

};

export default TodosList;