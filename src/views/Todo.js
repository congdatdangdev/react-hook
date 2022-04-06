const Todo = (props) => {
  //   const todos = props.todos;
  const { todos, title, deleteDataTodo } = props;

  const handleDeleteClick = (id) => {
    deleteDataTodo(id);
  };

  return (
    <div className="todo-container">
      <div className="allTitle">{props.title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child" key={todo.id}>
              {todo.title}
              &nbsp; &nbsp;{" "}
              <span onClick={() => handleDeleteClick(todo.id)}>x</span>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
