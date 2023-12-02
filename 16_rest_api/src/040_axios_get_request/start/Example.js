import { useEffect } from "react";
import axios from "axios";
// POINT axiosでGetリクエスト
// https://axios-http.com/

const Example = () => {
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user')
      console.log(res.data)
    }
    getUser();
  })
};

export default Example;
