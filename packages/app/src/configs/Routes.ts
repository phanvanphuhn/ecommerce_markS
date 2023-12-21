import DoctorSearchScreen from 'screens/doctor/DoctorSearchScreen';
import ScanBarCodeScreen from 'screens/scanBarCode/ScanBarCodeScreen';
import SearchDoctorScreen from 'screens/doctor/SearchDoctorScreen';

enum Routes {
  MainTab = 'MainTab',
  DrawerStack = 'DrawerStack',
  // SplashScreen
  SplashScreen = 'SplashScreen',
  // Login & Sign Up
  LoginScreen = 'LoginScreen',
  ForgotPasswordScreen = 'ForgotPasswordScreen',
  RecoveryPassword = 'RecoveryPassword',
  ChangePasswordScreen = 'ChangePasswordScreen',
  ChangePasswordOldScreen = 'ChangePasswordOldScreen',
  RegisterScreen = 'RegisterScreen',
  VerifyCodeScreen = 'VerifyCodeScreen',
  SignUpSuccessful = 'SignUpSuccessful',
  // Home Dashboard
  HomeScreen = 'HomeScreen',
  NotificationScreen = 'NotificationScreen',
  // Setting
  SettingScreen = 'SettingScreen',

  //Image
  ImageViewerScreen = 'ImageViewerScreen',
  SalesScreen = 'SalesScreen',
  BoostScreen = 'BoostScreen',
  ProfileScreen = 'ProfileScreen',
  ComplaintsScreen = 'ComplaintsScreen',
  CaseLogScreen = 'CaseLogScreen',
  LeaderboardScreen = 'LeaderboardScreen',

  //Plan
  PlanScreen = 'PlanScreen',
  CallLogScreen = 'CallLogScreen',
  CaseLogScreen2 = 'CaseLogScreen2',
  SearchPlanScreen = 'SearchPlanScreen',

  // Doctor
  DoctorSearchScreen = 'DoctorSearchScreen',
  FilterDoctorScreen = 'FilterDoctorScreen',
  FilterHospitalScreen = 'FilterHospitalScreen',
  DetailDoctorScreen = 'DetailDoctorScreen',
  ScanBarCodeScreen = 'ScanBarCodeScreen',
  DetailComplaintScreen = 'DetailComplaintScreen',
}

export default Routes;
