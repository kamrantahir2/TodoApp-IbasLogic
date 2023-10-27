
// We will be using Zustand instead of Redux. The difference between this and a context provider is that the components don't need to be wrapped in the context provider
import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';

const todosStore = (set) => ({

    // All handler functions have been move to this file
        handleChange: (id) => {
        setTodos((prev) => prev.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        }));
    },

    delTodo: (id) => {
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            })
        ]);
    },

    addTodoItem: (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    },

    setUpdate: (updatedTitle, id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.title = updatedTitle;
            }
            return todo;

        }));
    },



    // Create new array so we don't alter the existing stat
    todos: [],
    // Create a new Todo when for when the user adds one
    addTodoItem: (title) => {
        const newTodo = {
            id: uuidv4(),
            title, title,
            completed: false,
        };
            // use Set to update the state to include the new Todo
        set((state) => ({
            todos: [...state.todos, newTodo]
        }));
    }

});

export const useTodosStore = create(todosStore);