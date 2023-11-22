const Item = ({todo, deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      <span>{todo.content}</span>
    </div>
  );
};

export default Item;
