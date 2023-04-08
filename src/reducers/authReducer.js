import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_WITH_OTP,
  LOGIN_WITH_OTP_SUCCESS,
  LOGIN_WITH_OTP_FAIL,
} from './../actions/authAction';
import { cookie } from './../utils/cookies/cookies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  loginData: {},
  error: '',
  isLoading: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
    case CHANGE_PASSWORD:
    case LOGIN_WITH_OTP: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case LOGIN_SUCCESS: {
      toast.success('Login successfully');
      console.log("'token',--->", 'token', payload.tokens.access.token);
      console.log("'user-role', payload.user.role--->", payload.user.role);

      cookie.set('token', payload.tokens.access.token);
      cookie.set('user-role', payload.user.role);
      setTimeout(() => {
        window.location.href = '/dashboard';
        console.log('success')
      }, 2000);


      return {
        ...state,
        loginData: payload.user,
        isLoading: false,
      };
    }
    case CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loginData: payload,
        isLoading: false,
      };
    }
    case LOGIN_WITH_OTP_SUCCESS: {
      toast.success('Login successfully');

      cookie.set('token', payload.tokens.access.token);
      cookie.set('user-role', payload.user.role);
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
      return {
        ...state,
        loginData: payload.user,
        isLoading: false,
      };
    }

    case LOGIN_FAIL: {
      toast.error('Incorrect Email or Password');
      setTimeout(() => {
        console.log("fail");
        window.location.href = '/';
      }, 1000);
    }
    case CHANGE_PASSWORD_FAIL:
    case LOGIN_WITH_OTP_FAIL: {
      return {
        ...state,
        error: payload.message,
        isLoading: false,
      };
    }

    default:
      return { ...state };
  }
};
export default authReducer;
