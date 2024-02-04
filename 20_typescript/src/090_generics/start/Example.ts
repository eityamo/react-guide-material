const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  };
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  };
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };
  const numArry = repeat<number>(10, 3);
  const stringArry = repeat<string>("hello", 3);
  const boolArry = repeat<boolean>(true, 3);
  const byeArry = repeat<'bye'>('bye', 3);
  // const strArry = repeatStr("hello", 3);
  // const numArry = repeatNum(10, 3);
  // console.log(strArry);
  // console.log(numArry);

};

export default Example;
