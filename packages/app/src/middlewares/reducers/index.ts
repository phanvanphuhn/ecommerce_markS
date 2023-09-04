import {combineReducers} from 'redux';
import loginReducer, {AuthReducer} from './auth/loginReducer';
import {CartReducer} from './cart';
import {EnumsReducer} from 'middlewares/reducers/enums/enumsReducer';

export interface RootReducer {
  userProfile: AuthReducer;
  cart: CartReducer;
  enums: EnumsReducer;
}
const allReducer = combineReducers({
  userProfile: loginReducer,
});
export default allReducer;
