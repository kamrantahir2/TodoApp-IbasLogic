import TodoItem from "@/components/TodoItem";

// To access context data we will begin by importing useContext as well as the TodosContext component we made.
import { useContext } from "react";
import { TodosContext } from "@/context/TodosContext";


const TodosList = ({ todosProps, setTodos, handleChange, delTodo, setUpdate }) => {

    // The useContext Hook will let us read context data. We will call it above the return statement and pass the context object as an argument
    const value = useContext(TodosContext);
    console.log(value);

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