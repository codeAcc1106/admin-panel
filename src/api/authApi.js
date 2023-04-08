import { post } from './../utils/api';

export const login = (data) => {
  return post(`/auth/login`, data);
};

export const forgotPassword = (data) => {
  return post(`/auth/forgotPasswordOtp`, data);
};

export const changePassword = (data) => {
  return post(`/auth/change-password`, data);
};

export const resetPassword = (data) => {
  return post(`/auth/changePasswordOtp`, data);
};

export const authApi = {
  login,
  forgotPassword,
  changePassword,
  resetPassword,
};
