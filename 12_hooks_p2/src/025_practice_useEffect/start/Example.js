import { useEffect, useState } from "react";

const Example = () => {
  const [checked, setChecked] = useState(false);

  const clickAlert = () => {
    setChecked((checked) => !checked);
  };

  useEffect(() => {
      checked && window.alert("checked!");
  }, [checked]);

  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように、checkedがtrueの場合のみalertで「checked!」と表示されるようにしてください。useEffectを用いて実装してください。
      </p>
      <label>
        <input type={"checkbox"} value={checked} onClick={clickAlert} />
        click me
      </label>
    </>
  );
};

export default Example;
