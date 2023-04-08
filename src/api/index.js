import { authApi } from './authApi';
// import { invoice } from './invoice';
import { user } from './user';
import { profile } from './profile';
import { otp } from './otp';
import { notification } from './notification';
import { activityLog } from './activityLog';
import { faq } from './faq';
import { privacy } from './privacy';
import { category } from './category';
import { product } from './product';

export const API = {
  ...authApi,
  ...user,
  ...profile,
  ...otp,
  ...notification,
  ...activityLog,
  ...faq,
  ...privacy,
  ...category,
  ...product,
};
