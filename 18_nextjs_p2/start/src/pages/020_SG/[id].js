import { useRouter } from "next/router";

export default function Page({ id }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading</h3>
  }
  return <h3>このページは{id}です。</h3>;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}
