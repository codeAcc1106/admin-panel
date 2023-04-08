import { get, post, patch, deleteRequest } from './../utils/api';

export const getFaq = (data) => {
  return get(`/faqs`, data);
};

export const getFaqById = (id) => {
  return get(`/faqs/${id}`);
};
export const addFaq = (data) => {
  return post(`/faqs`, data);
};

export const updateFaq = (data) => {
  const id = data.id;
  delete data['id'];
  return patch(`/faqs/${id}`, data);
};

export const deleteFaq = (id) => {
  return deleteRequest(`/faqs/${id}`);
};

export const faq = {
  getFaq,
  getFaqById,
  addFaq,
  updateFaq,
  deleteFaq,
};
