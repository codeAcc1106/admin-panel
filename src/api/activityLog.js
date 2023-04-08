import { deleteRequest, get } from './../utils/api';

export const getActivityLog = (data) => {
  return get(`/charger_logs`, data);
};

export const deleteActivityLog = (id) => {
  return deleteRequest(`/charger_logs/${id}`);
};

export const activityLog = {
  getActivityLog,
  deleteActivityLog,
};
