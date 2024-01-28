const Example = () => {
  const array1: number[] = [1, 2, 3];
  const array2: string[] = ["Hello", "Bye"];
  const array3: Array<string> = ["Hello", "Bye"];
  const array4: (number | string)[] = [1, "Bye"];
  const array5: Array<number | string> = [1, "Bye"];

  type Person = { name: string; age?: number };
  const obj1: Person = {
    name: "Taro",
    age: 18,
  };

  const users: Person[] = [{ name: "Taro" }, { name: "Hanako", age: 17 }];
};

export default Example;
