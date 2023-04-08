import {
  FETCH_CHARGER_LOG,
  FETCH_CHARGER_LOG_SUCCESS,
  FETCH_CHARGER_LOG_FAIL,
  DELETE_CHARGER_LOG,
  DELETE_CHARGER_LOG_SUCCESS,
  DELETE_CHARGER_LOG_FAIL,
} from 'actions/activityLog';

const initialState = {
  isLoading: false,
  activityLogs: [],
  page: 1,
  limit: 10,
  totalPages: 1,
  total: 1,
};

const activityLogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARGER_LOG:
    case DELETE_CHARGER_LOG: {
      return { ...state, isLoading: true };
    }
    case FETCH_CHARGER_LOG_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        activityLogs: payload.results,
        page: payload.page,
        limit: payload.limit,
        totalPages: payload.totalPages,
        total: payload.totalResults,
      };
    }
    case DELETE_CHARGER_LOG_SUCCESS: {
      return {
        ...state,
        activityLogs: state.activityLogs.filter((data) => data.id !== payload),
      };
    }

    case FETCH_CHARGER_LOG_FAIL:
    case DELETE_CHARGER_LOG_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return { ...state };
  }
};
export default activityLogReducer;
