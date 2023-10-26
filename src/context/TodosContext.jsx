
// Global data will be kept in a context store and will expose them for other components to consume

import { createContext } from "react";

const TodosContext = createContext(null);

// Any descendants of this provider will have access to the context data
export const TodosProvider = ({ children }) => {
    return (

        // All components that will be descendents of <TodosProvider> will have access to whatever we assign to the provider's value prop
        <TodosContext.Provider value={'todos data'} >
            {children}
        </TodosContext.Provider>
    );
};

export { TodosContext };

// We will now be heading to TodosLogic to wrap the entire jsx in <TodosProvider>. This will allow the components to have access to the context