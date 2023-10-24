
const TodosLogic = () => {
    // Mock List
    const todos = [
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: 2,
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
        },
    ];

    return (
        /* To Display the list we need to loop through the array using the js map() function and return the title of the individual todo*/
        <>
            <ul>
                {todos.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </ul>

        </>
    );
};

export default TodosLogic;