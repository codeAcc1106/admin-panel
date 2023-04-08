import { deleteRequest, get } from './../utils/api';

export const getNotification = (data) => {
  return get(`/notifications`, data);
};

export const deleteNotification = (id) => {
  return deleteRequest(`/notifications/${id}`);
};

export const notification = {
  getNotification,
  deleteNotification,
};
