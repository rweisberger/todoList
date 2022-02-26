function Todo({todo, index, remove}) {
    function handle(){
        remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.task} 
        <div>
            <button className="btn" onClick={() => completeTodo(index)}>√</button>
        </div>
      </div>
}