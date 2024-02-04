import Hello, { Btn } from "./Hello";

const Example = () => {
  return (
    <>
      <Btn fn={(text) => console.log(`Hello ${text}`)} />
      <Hello text="TypeScript">Children</Hello>
    </>
  );
};

export default Example;
