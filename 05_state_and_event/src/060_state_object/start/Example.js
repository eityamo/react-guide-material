import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    // Stateを更新する際は新しいオブジェクトを生成する必要がある
    // setPerson({ name: e.target.value, age: person.age});
    setPerson({ ...person, name: e.target.value });
  };
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value });
  };
  const reset = () => {
    setPerson({ name: "", age: "" });
  };
  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName}></input>
      <input type="number" value={person.age} onChange={changeAge}></input>
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
