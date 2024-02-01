const Example = () => {
  function sum1(x: number, y: number = 1) {
    return x + y;
  }

  const sum2 = (x: number, y: number): number => x + y;

  const result1 = sum1(1);
  console.log(result1);

  const result2 = sum2(10, 20);
  console.log(result2);

  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
  const result3 = sum3(1, 2);
  console.log(result3);
};

export default Example;
