import {ActionPersist} from './../../actions/ActionData';
import actionTypes from 'middlewares/actions/actionTypes';
import {RoleType} from 'common/Constants';
import {UserProfile} from 'res/type/Auth';
export interface AuthReducer {
  user?: UserProfile | null;
  isLogin: boolean;
  countNotiffication: number;
  loginToken: string;
}
const initialState: AuthReducer = {
  user: null,
  isLogin: false,
  loginToken: '',
  countNotiffication: 0,
};

const loginReducer = (
  state = initialState,
  action: ActionPersist<AuthReducer>,
) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: {...state.user, ...action.payload},
      };
    case actionTypes.SAVE_TOKEN:
      return {
        ...state,
        loginToken: action.token,
        isLogin: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: {},
        isLogin: false,
      };
    case 'persist/REHYDRATE':
      if (action?.payload?.userProfile) {
        if (action?.payload?.userProfile?.isLogin) {
          return {
            ...state,
            ...action.payload.userProfile,
            isLogin: true,
          };
        }

        return {
          ...state,
          ...action.payload.userProfile,
        };
      }
    default:
      return state;
  }
};
export default loginReducer;
