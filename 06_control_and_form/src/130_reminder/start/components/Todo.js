import { useState } from "react";
import List from "./List"

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = () => {
    setTodos(enteredTodo);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return id !== todo.id;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </>
  );
};

export default Todo;
