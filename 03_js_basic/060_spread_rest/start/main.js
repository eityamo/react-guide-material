const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums);
console.log(result);

// 元ある配列から新しい配列を作成
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, 10, ...arr2];
let newArr1 = arr1;
newArr1.push(4);
console.log(newArr);
console.log(newArr1);
console.log(arr1);

// 異なる配列
console.log(newArr === arr1);
// 同じ配列
console.log(newArr1 === arr1);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = "John"

console.log(newObj, obj);

// 引数が可変の際に有効
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

// 特定の引数だけ、変数を分けたい場合
const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
