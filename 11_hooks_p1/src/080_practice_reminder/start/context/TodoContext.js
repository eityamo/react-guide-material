import { createContext, useContext, useReducer } from "react";

const TodoContent = createContext();
const TodoDispatchContent = createContext();

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    case "todo/update":
      return todos.map((_todo) => {
        return action.todo.id === _todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    case "todo/delete":
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    default:
      return todos;
  }
};

const todoList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, todoList);

  return (
    <TodoContent.Provider value={todos}>
      <TodoDispatchContent.Provider value={dispatch}>
        {children}
      </TodoDispatchContent.Provider>
    </TodoContent.Provider>
  );
};

const useTodos = () => useContext(TodoContent);
const useDispatchTodos = () => useContext(TodoDispatchContent);

export { TodoProvider, useTodos, useDispatchTodos };
