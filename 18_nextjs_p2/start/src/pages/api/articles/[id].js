import axios from "axios";

const JSON_SEEVER_URL = "http://localhost:4030/articles";
export default async function hander(req, res) {
  const { method, query } = req;
  try {
    if (method === "GET") {
      const result = await axios.get(`${JSON_SEEVER_URL}/${query.id}`).then((res) => res.data);
      return res.status(200).json(result);
    }
  } catch {}

  return res.status(500).json({
    error: {
      status: 500,
      code: "BAD_REQUEST",
      message: "不正なリクエストです。",
    },
  });
}
