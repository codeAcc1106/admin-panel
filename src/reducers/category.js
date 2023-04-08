import {
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_SUCCESS,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_FRONT_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_SINGLE_CATEGORY_SUCCESS,
  GET_SINGLE_CATEGORY_FAIL,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL
} from '../actions/category';
import { toast } from 'react-toastify';
import { cookie } from '../utils/cookies/cookies';

const initialState = {
  isLoading: false,
  categoryList: {},
  userCategory: {},
  userSingleCategory: {},
  page: 1,
  total: 0,
  limit: 10,
  totalPages: 0
};

const userCategoryReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case UPDATE_CATEGORY: {
    }
    case GET_CATEGORY: {
      return { ...state, isLoading: true };
    }

    case ADD_CATEGORY_SUCCESS: {
      toast.success('Category added successfully');
      setTimeout(() => {
        window.location.href = '/category';
      }, 1000);
      return { ...state, isLoading: false };
    }

    case UPDATE_CATEGORY_SUCCESS: {
      toast.success('Category updated successfully');
      setTimeout(() => {
        window.location.href = '/category';
      }, 1000);
      return { ...state, isLoading: false };
    }

    case DELETE_CATEGORY_SUCCESS: {
      toast.success('Category deleted successfully');
      setTimeout(() => {
        window.location.href = '/category';
      }, 1000);
      return { ...state, isLoading: false };
    }

    case GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        userCategory: payload.categories.results,
        page: payload.categories.page,
        total: payload.categories.totalResults,
        limit: payload.categories.limit,
        totalPages: payload.categories.totalPages,
        isLoading: false,
      };
    }

    case GET_FRONT_CATEGORY_SUCCESS: {
      return {
        ...state,
        categoryList: payload.categories.results,
        page: payload.categories.page,
        total: payload.categories.totalResults,
        limit: payload.categories.limit,
        totalPages: payload.categories.totalPages,
        isLoading: false,
      };
    }

    case GET_SINGLE_CATEGORY_SUCCESS: {
      return {
        ...state,
        userSingleCategory: payload.category,
        isLoading: false,
      };
    }


    case ADD_CATEGORY_FAIL: {
      toast.error(payload.error);
      setTimeout(() => {
      }, 1000);
    }

    case UPDATE_CATEGORY_FAIL: {
      toast.error(payload.error);
      setTimeout(() => {
      }, 1000);
    }

    case DELETE_CATEGORY_FAIL: {
      toast.error(payload.error);
      setTimeout(() => {
      }, 1000);
    }

    case GET_CATEGORY_FAIL: {
      return { ...state, isLoading: false };
    }
    case GET_SINGLE_CATEGORY_FAIL: {
      return { ...state, isLoading: false };
    }
    default:
      return { ...state };
  }
};
export default userCategoryReducer;
