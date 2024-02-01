const Example = () => {
  function sum1(x: number, y: number = 1) {
    return x + y;
  }

  const sum2 = (x: number, y: number) => x + y;

  const result1 = sum1(1);
  console.log(result1);

  // const result2 = sum1(1, '2');

};

export default Example;
