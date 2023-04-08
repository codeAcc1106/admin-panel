import { get, post, deleteRequest, getFront } from '../utils/api';

export const getProduct = (data) => {
  return get(`/product`, data);
};

export const getProductByCategory = (data) => {
  return getFront(`/category/${data.cid}`, data);
};

export const getSingleProduct = (data) => {
  return get(`/product/${data.cid}`, data);
};

export const addProduct = (data) => {
  return post(`/product/add`, data);
};

export const updateProduct = (data) => {
  return post(`/product/edit/${data.id}`, data);
};

export const updateProductStatus = (data) => {
  return post(`/product/change-status/${data.id}`, data);
};

export const deleteProduct = (id) => {
  return deleteRequest(`/product/delete/${id}`);
};

export const product = {
  getProduct,
  getProductByCategory,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  updateProductStatus
};
