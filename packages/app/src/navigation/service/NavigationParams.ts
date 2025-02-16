import Routes from 'configs/Routes';
import {ImageSource} from 'react-native-image-viewing/dist/@types';
import {BaseParam} from 'network/BaseParam';
import {
  IDoctorSearchList,
  ItemOptionResponse,
} from 'network/apis/doctor/DoctorResponse';
import {ItemComplaintResponse} from 'apollo/query/complaint';

export interface MainParamList extends Record<string, object | undefined> {
  [Routes.MainTab]: MainTabParams;
  [Routes.LoginScreen]: LoginScreen;
  [Routes.ForgotPasswordScreen]: undefined;
  [Routes.RecoveryPassword]: undefined;
  [Routes.ChangePasswordScreen]: ChangePasswordScreen;
  [Routes.RegisterScreen]: undefined;

  [Routes.VerifyCodeScreen]: VerifyCodeScreen;
  [Routes.SignUpSuccessful]: undefined;

  [Routes.ImageViewerScreen]: ImageViewerScreen;
  [Routes.FilterHospitalScreen]: FilterHospitalParam;
  [Routes.FilterDoctorScreen]: FilterDoctorParam;
  [Routes.DetailComplaintScreen]: DetailComplaintParam;
  [Routes.DetailDoctorScreen]: DetailDoctorParam;
}
type LoginScreen = undefined;
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

interface FilterHospitalParam {
  onSelected: (item: string) => void;
  listSelected: string;
}
interface FilterDoctorParam {
  onSelected: (
    hospital: '',
    special: ItemOptionResponse[],
    division: ItemOptionResponse[],
    topics: ItemOptionResponse[],
  ) => void;
  hospital: string;
  special: ItemOptionResponse[];
  division: ItemOptionResponse[];
  topics: ItemOptionResponse[];
}
interface DetailComplaintParam {
  item: ItemComplaintResponse;
}
interface DetailDoctorParam {
  item: IDoctorSearchList;
}
