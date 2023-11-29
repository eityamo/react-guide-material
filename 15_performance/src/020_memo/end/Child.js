import { memo } from "react";

function areEqual(prevProps, nextProps) {
  if(prevProps.countB !== nextProps.countB) {
    return false; // 再レンダリング
  } else {
    return true; // 再レンダリング発生なし
  }
  /*
  nextProps(前回のPropsの値) を render に渡した結果が
  prevProps(今回のPropsの値) を render に渡した結果となるときに true を返し
  それ以外のときに false を返す'
  */
}

const ChildMemo = memo(({ countB }) => {
  console.log("%cChild render", "color: red;");

  return (
    <div className="child"
    >
      <h2>子コンポーネント領域</h2>
      <span>ボタンBクリック回数：{countB}</span>
    </div>
  );
}, areEqual);

export default ChildMemo;
