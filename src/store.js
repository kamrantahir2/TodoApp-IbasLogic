
// We will be using Zustand instead of Redux. The difference between this and a context provider is that the components don't need to be wrapped in the context provider
import { create } from "zustand";

const todosStore = (set) => {

};

export const useTodosStore = create(todosStore);