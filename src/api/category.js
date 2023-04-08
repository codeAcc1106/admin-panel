import { get, post, deleteRequest, getFront } from '../utils/api';

export const getCategory = (data) => {
  return get(`/category`, data);
};

export const getFrontCategory = (data) => {
  return getFront(`/category/list`, data);
};

export const getSingleCategory = (data) => {
  return get(`/category/${data.cid}`, data);
};

export const addCategory = (data) => {
  return post(`/category/add`, data);
};

export const updateCategory = (data) => {
  return post(`/category/edit/${data.id}`, data);
};

export const deleteCategory = (id) => {
  return deleteRequest(`/category/delete/${id}`);
};

export const category = {
  getCategory,
  getFrontCategory,
  getSingleCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
