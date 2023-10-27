
// Move the todos state and handler functions from TodosLogic to this file.

// Global data will be kept in a context store and will expose them for other components to consume
import { createContext, useContext, useState, useEffect } from "react";

const TodosContext = createContext(null);


// Any descendants of this provider will have access to the context data
export const TodosProvider = ({ children }) => {


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

        // All components that will be descendents of <TodosProvider> will have access to whatever we assign to the provider's value prop
        // We will pass through the todos state and all handler functions from TodosLogic to the value prop.
        <TodosContext.Provider
            value={{
                todos,
                handleChange,
                delTodo,
                addTodoItem,
                setUpdate,
            }}
        >
            {children}
        </TodosContext.Provider>
    );
};

export const useTodosContext = () => useContext(TodosContext);

// We will now be heading to TodosLogic to wrap the entire jsx in <TodosProvider>. This will allow the components to have access to the context