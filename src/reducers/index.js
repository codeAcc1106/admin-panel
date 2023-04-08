import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profile from './profile';
import category from './category';
import product from './product';


const rootReducer = combineReducers({
  auth: authReducer,
  profile: profile,
  category: category,
  product: product,
});

export default rootReducer;
