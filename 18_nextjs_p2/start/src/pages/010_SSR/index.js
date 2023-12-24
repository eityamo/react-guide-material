import { useEffect, useState } from "react";

export default function SSR({ message }) {
  console.log("hello");
  console.log(message);
  useEffect(() => {
    window.localStorage.setItem("key", "value");
    document.cokkie = 'val=0; path=/;'
  }, []);
  const [state, setState] = useState("bye");
  const val = 0;
  return <h3>{state}</h3>;
}

export async function getServerSideProps(context) {
  const { cookie } = context.req.headers;
  console.log('cookie', cookie);
  return {
    // redirect: {
    //   destination: "/",
    //   permanent: true,
    // },
    props: { message: "From Srever Side Props" },
  };
}
