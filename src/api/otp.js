import { post } from './../utils/api';

export const sendOtp = (data) => {
  return post('/otps', data);
};

export const verifyOtp = (data) => {
  return post('/otps/verify', data);
};

export const resendOtp = (data) => {
  return post('/otps/resend', data);
};

export const otp = {
  sendOtp,
  verifyOtp,
  resendOtp,
};
