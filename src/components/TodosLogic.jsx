import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { useEffect, useState } from "react";

// To give the components access to the data we need to import TodosProvider which we created and wrap the jsx in its component
import { TodosProvider } from "@/context/TodosContext";


const TodosLogic = () => {

    return (

        // We wrap the components in TodosProvider to give all its descendents access to the data. The descendents of InputTodo and TodosList are also covered.
        // Header and TodosLogic are not covered. They do not need access to the data so we will keep access to where it's needed.

        // Now that we have moved the state and handler functions to the value prop in TodosContext we can remove all props below. They now have access to consume the data directly from the context store.
        <TodosProvider>

            <InputTodo />

            <TodosList />

        </TodosProvider>
    );
};

export default TodosLogic;