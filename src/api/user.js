import { get, post, deleteRequest } from './../utils/api';

export const getUsers = (data) => {
  return get(`/users`, data);
};

export const addUser = (data) => {
  return post(`/users`, data);
};

export const deleteUser = (id) => {
  return deleteRequest(`/users/${id}`);
};

export const user = {
  getUsers,
  addUser,
  deleteUser,
};
