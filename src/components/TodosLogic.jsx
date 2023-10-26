import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
    // Mock List
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: uuidv4(),
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Deploy to live server',
            completed: false,
        },
    ]);


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