import {ApolloError, gql, useMutation} from '@apollo/client';
import {UserProfile} from 'res/type/Auth';
import {FormikProps, useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {RootReducer} from 'middlewares/reducers';
import {reset} from 'navigation/service/RootNavigation';
import Routes from 'configs/Routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainParamList} from 'navigation/service/NavigationParams';

const query = gql('');
export interface LoginForm {
  identify: string;
  password: string;
  remember_me: boolean;
}
interface UserForm {
  user: LoginForm;
}

interface Response {
  login: {
    role: any;
    user: UserProfile;
    success: boolean;
    token: string;
  };
}
interface Result<Values> extends FormikProps<Values> {
  loading: boolean;
  data?: Response | null;
  error?: ApolloError;
}

const useLogin = (): Result<LoginForm> => {
  const [onPressLogin, {loading, data, error}] = useMutation<
    Response,
    UserForm
  >(query, {
    onCompleted: async response => {
      try {
        if (response?.login?.success) {
          // snackbarUtils.show('Đăng nhập thành công', 'success');
          reset(Routes.MainTab);
        }
      } catch (e) {
        console.log('=>(useLogin.ts:73)  e');
      }
    },
  });

  const navigation =
    useNavigation<NavigationProp<MainParamList, Routes.LoginScreen>>();
  const userProfile = useSelector((state: RootReducer) => state.userProfile);
  const dispatch = useDispatch();
  const onSubmit = () => {
    const {identify, password, remember_me} = values;
    onPressLogin({
      variables: {
        user: {
          identify,
          password,
          remember_me,
        },
      },
    });
  };
  const {handleChange, handleSubmit, values, setFieldValue, ...formik} =
    useFormik<LoginForm>({
      initialValues: {
        identify: '',
        password: '',
        remember_me: userProfile?.userLogin?.isSave || false,
      },
      onSubmit,
    });

  return {
    values,
    data,
    error,
    loading,
    handleChange,
    handleSubmit,
    setFieldValue,
    ...formik,
  };
};
export default useLogin;
