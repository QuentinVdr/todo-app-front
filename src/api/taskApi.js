import { HttpClient } from './HttpClient';

const baseTaskURL = '/task';

export const getTasks = () => {
  return HttpClient.get(baseTaskURL).then((res) => res.data);
};

export const getTaskById = (id) => {
  return HttpClient.get(`${baseTaskURL}/${id}`).then((res) => res.data);
};

export const createTask = (task) => {
  return HttpClient.post(baseTaskURL, task).then((res) => res.data);
};

export const updateTask = (id, task) => {
  return HttpClient.patch(`${baseTaskURL}/${id}`, task).then((res) => res.data);
};

export const deleteTaskById = (id) => {
  return HttpClient.delete(`${baseTaskURL}/${id}`);
};
