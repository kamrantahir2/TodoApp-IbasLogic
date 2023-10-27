
// We will be using Zustand instead of Redux. The difference between this and a context provider is that the components don't need to be wrapped in the context provider
import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';

const todosStore = (set) => ({
    // Create new array so we don't alter the existing stat
    todos: [],
    // Create a new Todo when for when the user adds one
    addTodoItem: (title) => {
        const newTodo = {
            id: uuidv4(),
            title, title,
            completed: false,
        };
            // Set the state to include the new Todo
        set((state) => ({
            todos: [...state.todos, newTodo]
        }));
    }

});

export const useTodosStore = create(todosStore);