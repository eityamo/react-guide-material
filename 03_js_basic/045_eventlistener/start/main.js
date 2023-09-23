const h1Ellement = document.querySelector("h1");
console.dir(h1Ellement);

console.log(h1Ellement.textContent);

h1Ellement.textContent = "変更後のタイトル";

console.log(h1Ellement.textContent);

const btnEl = document.querySelector("button");
const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log("hello!");
};
btnEl.addEventListener("click", (e) => helloFn);
