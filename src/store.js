
// We will be using Zustand instead of Redux. The difference between this and a context provider is that the components don't need to be wrapped in the context provider
import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';

const todosStore = (set) => ({

    // All handler functions have been move to this file
        handleChange: (id) => {
        set((state) => {
            todos: state.todos.map((todos) => {
                if (todo.id === id) {
                    return {
                        ...todos,
                        completed: !todos.completed,
                    }
                }
                return todo;
            })
        });
    },

    delTodo: (id) => {
        set((state) => {
            todos: state.todos.filter((todo) => {
                return todo.id !== id;
            })
       });
    },

    setUpdate: (updatedTitle, id) => {
        set((state) => {
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.title = updatedTitle;
                }
                return todo;
            })
        });
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