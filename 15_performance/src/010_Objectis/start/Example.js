import { useState } from "react";
import "../end/Example";

const Example = () => {
  console.log("render");
  const [countA, setCountA] = useState({
    val: 0,
  });

  const obj1 = { val: 0 };
  const obj2 = obj1;
  const obj3 = { val: 0 };
  const isSame = Object.is(obj1, obj2);
  const isSame2 = Object.is(obj1, obj3);
  console.log(isSame);
  console.log(isSame2);

  return (
    <div className="parent">
      <div>
        <h3>再レンダリング？</h3>
        <button
          onClick={() => {
            setCountA((prev) => {
              const newState = { ...prev }
              return newState;
            });
          }}
        >
          ボタンA
        </button>
      </div>
      <div>
        <p>ボタンAクリック回数：{countA.val}</p>
      </div>
    </div>
  );
};

export default Example;
