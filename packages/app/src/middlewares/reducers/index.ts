import {combineReducers} from 'redux';
import loginReducer, {AuthReducer} from './auth/loginReducer';

export interface RootReducer {
  userProfile: AuthReducer;
}
const allReducer = combineReducers({
  userProfile: loginReducer,
});
export default allReducer;
