import Item from "./Item";

const List = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Item todo={todo} deleteTodo={deleteTodo} key={todo.id} />;
      })}
    </div>
  );
};

export default List;
