import { get, post, deleteRequest, patch } from './../utils/api';

export const getPrivacy = (data) => {
  return get(`/privacys`, data);
};

export const getPrivacyById = (id) => {
  return get(`/privacys/${id}`);
};

export const addPrivacy = (data) => {
  return post(`/privacys`, data);
};

export const updatePrivacy = (data) => {
  const id = data.id;
  delete data['id'];
  return patch(`/privacys/${id}`, data);
};

export const deletePrivacy = (id) => {
  return deleteRequest(`/privacys/${id}`);
};

export const privacy = {
  getPrivacy,
  getPrivacyById,
  addPrivacy,
  updatePrivacy,
  deletePrivacy,
};
