function fn(number) {
  return number * 2;
}

// アロー関数の記述を少なくする

console.log(fn(2));

const fnArrow = (number) => {
  console.log(number);
  return number * 2;
};

const fnArrowObj = (number) => ({
  result: number * 2,
});

console.log(fnArrowObj(2));
