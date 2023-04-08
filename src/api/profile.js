import { patch, get, post } from './../utils/api';

export const updateUserProfile = (data) => {
  return patch(`/profile/update`, data);
};

export const updateUserPassword = (data) => {
  return post(`/profile/change-password`, data);
};

export const getProfile = (data) => {
  return get(`/profile/verify`, data);
};


export const profile = {
  updateUserProfile,
  updateUserPassword,
  getProfile,
};
