import { useRouter } from "next/router";

export default function Setting({ query }) {
  const router = useRouter();
  const clickHandler = () => {
    // 履歴が残る
    // router.push('/', '/dummy-url');
    // 履歴を上書きする
    // router.replace('/', '/dummy-url');
    // router.back();
    router.reload();
  };
  return (
    <>
      <h1>Routerから取得:{router.query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}
