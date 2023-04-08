import {
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_STATUS,
  UPDATE_PRODUCT_STATUS_FAIL,
  UPDATE_PRODUCT_STATUS_SUCCESS,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_BY_CATEGORY_FAIL,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL
} from '../actions/product';
import { toast } from 'react-toastify';
import { cookie } from '../utils/cookies/cookies';

const initialState = {
  isLoading: false,
  userProduct: {},
  productList: {},
  userSingleProduct: {},
  page: 1,
  total: 0,
  limit: 10,
  totalPages: 0
};

const userProductReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case UPDATE_PRODUCT: {
    }
    case UPDATE_PRODUCT_STATUS: {
    }
    case GET_PRODUCT: {
      return { ...state, isLoading: true };
    }

    case ADD_PRODUCT_SUCCESS: {
      toast.success('Application added successfully');
      setTimeout(() => {
        window.location.href = '/applications';
      }, 1000);
      return { ...state, isLoading: false };
    }

    case UPDATE_PRODUCT_SUCCESS: {
      toast.success('Application updated successfully');
      setTimeout(() => {
        window.location.href = '/applications';
      }, 1000);
      return { ...state, isLoading: false };
    }

    case UPDATE_PRODUCT_STATUS_SUCCESS: {
      toast.success('Application status updated successfully');
      setTimeout(() => {
        window.location.href = '/applications';
      }, 1000);
      return { ...state, isLoading: false };
    }

    case DELETE_PRODUCT_SUCCESS: {
      toast.success('Application deleted successfully');
      setTimeout(() => {
        window.location.href = '/applications';
      }, 1000);
      return { ...state, isLoading: false };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        userProduct: payload.products.results,
        page: payload.products.page,
        total: payload.products.totalResults,
        limit: payload.products.limit,
        totalPages: payload.products.totalPages,
        isLoading: false,
      };
    }

    case GET_PRODUCT_BY_CATEGORY_SUCCESS: {
      return {
        ...state,
        productList: payload.products.results,
        page: payload.products.page,
        total: payload.products.totalResults,
        limit: payload.products.limit,
        totalPages: payload.products.totalPages,
        isLoading: false,
      };
    }

    case GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        userSingleProduct: payload.product,
        isLoading: false,
      };
    }


    case ADD_PRODUCT_FAIL: {
      toast.error(payload.error);
      setTimeout(() => {
      }, 1000);
    }

    case UPDATE_PRODUCT_FAIL: {
      toast.error(payload.error);
      setTimeout(() => {
      }, 1000);
    }

    case UPDATE_PRODUCT_STATUS_FAIL: {
      toast.error(payload.error);
      setTimeout(() => {
      }, 1000);
    }

    case DELETE_PRODUCT_FAIL: {
      toast.error(payload.error);
      setTimeout(() => {
      }, 1000);
    }

    case GET_PRODUCT_FAIL: {
      return { ...state, isLoading: false };
    }
    case GET_SINGLE_PRODUCT_FAIL: {
      return { ...state, isLoading: false };
    }
    default:
      return { ...state };
  }
};
export default userProductReducer;
