function App(){
    const [todos, setTodos] = React.useState([
        {
            task: 'go to bank',
            isCompleted: false,
        },
        {
            task: 'wash sheets',
            isCompleted: false,
        },
        {
            task: 'find childcare',
            isCompleted: false,
        },
    ]);
    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault(); // the default is to reload the page
        if(!value) return; // check for existing input value
        const newTodos = [...todos, {task:value, isCompleted: false}]; //set new todo list with spreader and adding the new todo to the end of the list
        setTodos(newTodos); // set todos to new todo list with added value
        setValue(''); //setting the value back to empty
        console.log(todos);
        console.log(newTodos);
    }
    const removeTodo = e => {
        const index = Number(e.target.id); //gives us the index position of the task we want to remove from the list
        let currentList = [...todos];
        currentList.splice(index,1); // removes the item at the given index from the current list
        setTodos(currentList);
    }
    return (<>
        {todos.map((todo,i) => <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.task}</div>)}
        {/* this form allows the user to add an input */}
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                className="input"
                value={value}
                placeholder="New task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    </>);
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
