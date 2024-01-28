const Example = () => {
  let strOrNum: string | number = "Hello";
  strOrNum = 123;
  console.log(strOrNum);

  let strOrNumOrBool: string | number | boolean = "Hello";
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);

  type HelloOrNum = "Hello" | number;
  const hello: HelloOrNum = "Hello";
  console.log(hello);

  type DayOfWeek = "Monday" | "Tuesday" | "Wednesday";
  const day: DayOfWeek = "Monday";
  console.log(day);
};

export default Example;
