import { UPDATE_PROFILE, UPDATE_PROFILE_FAIL, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_SUCCESS, GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from './../actions/profile';
import { toast } from 'react-toastify';
import { cookie } from '../utils/cookies/cookies';

const initialState = {
  isLoading: false,
  adminProfile: {},
};

const adminProfileReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case UPDATE_PROFILE: {
    }
    case GET_PROFILE: {
      return { ...state, isLoading: true };
    }

    case UPDATE_PROFILE_SUCCESS: {
      toast.success('Profile updated successfully');
      setTimeout(() => {
        console.log("success");
        window.location.href = '/profile';
      }, 1000);
      return { ...state, adminProfile: payload, isLoading: false };
    }

    case UPDATE_PASSWORD_SUCCESS: {
      toast.success('Password updated successfully');
      setTimeout(() => {
        console.log("success");
        window.location.href = '/change-password';
      }, 1000);
      return { ...state, adminProfile: payload, isLoading: false };
    }

    case GET_PROFILE_SUCCESS: {
      return {
        ...state,
        adminProfile: payload.user,
        isLoading: false,
      };
    }


    case UPDATE_PROFILE_FAIL: {
      setTimeout(() => {
        console.log('fail');
      }, 1000);
    }
    case GET_PROFILE_FAIL: {
      return { ...state, isLoading: false };
    }

    default:
      return { ...state };
  }
};
export default adminProfileReducer;
