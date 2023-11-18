const Example = () => {
  const val1 = 1;
  const val2 = 2;
  const add = (val1) => {
    return val1 + val2;
  }
  return (
    <>
      <div>純粋関数:{add(val1)}</div>
    </>
  );
};

export default Example;
