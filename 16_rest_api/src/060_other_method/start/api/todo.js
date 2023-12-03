import axios from "axios";

const END_POINT = "http://localhost:3003/todo";

const todoApi = {
  async getAll() {
    const result = await axios.get(END_POINT);
    return result.data;
  },
  async post(todo) {
    const result = await axios.post(END_POINT, todo);
    return result.data;
  },
  async delete(todo) {
    const result = await axios.delete(END_POINT + "/" + todo.id);
    return result.data;
  },
  async patch(todo) {
    const result = await axios.patch(END_POINT + "/" + todo.id, todo);
    return result.data;
  },
};

export default todoApi;
