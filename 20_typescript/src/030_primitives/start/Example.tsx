const Example = () => {
  let str: string = "Hello";
  str = "Bye";
  console.log(str);

  let num: number = 102;
  console.log(num);

  let bignum: bigint = 103n;
  console.log(bignum);

  let bool: boolean = true;
  console.log(bool);

  let nuulish: null = null;
  let undefinedValue: undefined = undefined;

  // リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
  let strHello: "hello" = "hello";
};

export default Example;
