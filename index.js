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
    const addTodo = task => {
        const newTodos = [...todos, {task:task, isCompleted: false}];
        setTodos(newTodos);  // set todos to new todo list with added value
        console.log(newTodos);
    }
    const removeTodo = index => {
        let currentList = [...todos];
        currentList.splice(index,1); // removes the item from the current list
        setTodos(currentList)
    }
    return (
    <div className="app">
        <div className="todo-list">
            {todos.map((todo,i) => <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
            {/* this form allows the user to add an input */}
            <TodoForm addTodo={addTodo}/>
        </div>
    </div>
    );
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
