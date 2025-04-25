import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getTasks = async () => {
  const response = await api.get("/tasks/");
  return response.data;
};

const createTask = async (task) => {
  console.log(task);
  const response = await api.post("/tasks/create/", task);
  return response.data;
};

const deleteTask = async (id) => {
  await api.delete(`/tasks/delete/${id}/`);
};

const completeTask = async (id) => {
  await api.patch(`/tasks/complete/${id}/`);
};

export {
  getTasks,
  createTask,
  deleteTask,
  completeTask,
};