import Routes from 'configs/Routes';
import {ImageSource} from 'react-native-image-viewing/dist/@types';
import {BaseParam} from 'network/BaseParam';

export interface MainParamList extends Record<string, object | undefined> {
  [Routes.MainTab]: MainTabParams;
  [Routes.LoginScreen]: LoginScreen;
  [Routes.ForgotPasswordScreen]: undefined;
  [Routes.RecoveryPassword]: undefined;
  [Routes.ChangePasswordScreen]: ChangePasswordScreen;
  [Routes.RegisterScreen]: undefined;

  [Routes.VerifyCodeScreen]: VerifyCodeScreen;
  [Routes.SignUpSuccessful]: undefined;

  [Routes.DetailCategoryScreen]: DetailCategoryScreen;

  [Routes.ImageViewerScreen]: ImageViewerScreen;
  [Routes.SelectOptionScreen]: SelectOptionScreen;
}
type LoginScreen = undefined;
type SelectOptionScreen = {
  api: (params: BaseParam) => Promise<any>;
};
type DetailCategoryScreen = {
  item?: HotDealsItemProp;
  slug: string;
};
type ImageViewerScreen = {
  data: ImageSource[];
  index: number;
};
type ChangePasswordScreen = {
  username: string;
  code: string;
};
type VerifyCodeScreen = {
  type: string;
  value: string;
};
type MainTabParams = {
  screen: string;
};
