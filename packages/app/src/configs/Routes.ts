import CreateEmployeeScreen from 'screens/employee/CreateEmployeeScreen';
import SelectOptionScreen from 'screens/home/SelectOptionScreen';
import DrawerStack from 'navigation/DrawerStack';

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
  PlanScreen = 'PlanScreen',
  ProfileScreen = 'ProfileScreen',
  ComplaintsScreen = 'ComplaintsScreen',
  CaseLogScreen = 'CaseLogScreen',
  LeaderboardScreen = 'LeaderboardScreen',
}

export default Routes;
