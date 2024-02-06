const Example = () => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log("MouseEvent", event)
  return (
    <>
      <button onClick={(event) => console.log("MouseEvent", event)}>buttonタグ</button>
      <button onClick={clickHandler}>buttonタグ</button>
    </>
  )
};

export default Example;
