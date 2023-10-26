import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const TodosLogic = () => {

    // Function to retrieve todos items from local storage
    const getInitialTodos = () => {
        // Getting stored items
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
        // We also changed the todos State default to this function
    };

    const [todos, setTodos] = useState(getInitialTodos);

    // We will be taking advantage of browser local storage which has data persistence
    useEffect(() => {
        // Storing todos items
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos]);


    const handleChange = (id) => {
        setTodos((prev) => prev.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        }));
    };

    const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            })
        ]);
    };

    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.title = updatedTitle;
            }
            return todo;

        }));
    };


    return (

        <div>

            <InputTodo addTodoItem={addTodoItem} />

            <TodosList todosProps={todos} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo}
                setUpdate={setUpdate} />

        </div>
    );
};

export default TodosLogic;