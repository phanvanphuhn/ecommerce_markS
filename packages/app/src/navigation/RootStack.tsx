import {createStackNavigator} from '@react-navigation/stack';
import Routes from 'configs/Routes';
import DrawerStack from 'navigation/DrawerStack';
import React, {memo} from 'react';
import ImageViewerScreen from 'screens/Common/Image/ImageViewerScreen';
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import LoginScreen from 'screens/auth/LoginScreen';
import ComplaintsScreen from 'screens/complaints/ComplaintsScreen';
import LeaderboardScreen from 'screens/leaderboard/LeaderboardScreen';
import CallLogScreen from 'screens/plan/CallLogScreen';
import CaseLogScreen2 from 'screens/plan/CaseLogScreen';
import ProfileScreen from 'screens/profile/ProfileScreen';
import DoctorSearchScreen from 'screens/doctor/DoctorSearchScreen';
import FilterDoctorScreen from 'screens/doctor/FilterDoctorScreen';
import FilterHospitalScreen from 'screens/doctor/FilterHospitalScreen';
import DetailDoctorScreen from 'screens/doctor/DetailDoctorScreen';
import ScanBarCodeScreen from 'screens/scanBarCode/ScanBarCodeScreen';
import DetailComplaintScreen from 'screens/complaints/DetailComplaintScreen';

const Stack = createStackNavigator();

const RootStack = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.SplashScreen}>
      <Stack.Screen component={LoginScreen} name={Routes.LoginScreen} />
      <Stack.Screen component={DrawerStack} name={Routes.DrawerStack} />
      <Stack.Screen component={SplashScreen} name={Routes.SplashScreen} />
      <Stack.Screen component={ProfileScreen} name={Routes.ProfileScreen} />
      <Stack.Screen
        component={ComplaintsScreen}
        name={Routes.ComplaintsScreen}
      />
      <Stack.Screen
        component={LeaderboardScreen}
        name={Routes.LeaderboardScreen}
      />
      <Stack.Screen
        component={ImageViewerScreen}
        name={Routes.ImageViewerScreen}
      />
      <Stack.Screen component={CallLogScreen} name={Routes.CallLogScreen} />
      <Stack.Screen component={CaseLogScreen2} name={Routes.CaseLogScreen2} />
      <Stack.Screen
        name={Routes.DoctorSearchScreen}
        component={DoctorSearchScreen}
      />
      <Stack.Screen
        name={Routes.FilterDoctorScreen}
        component={FilterDoctorScreen}
      />
      <Stack.Screen
        name={Routes.DetailDoctorScreen}
        component={DetailDoctorScreen}
      />
      <Stack.Screen
        name={Routes.ScanBarCodeScreen}
        component={ScanBarCodeScreen}
      />
      <Stack.Screen
        name={Routes.DetailComplaintScreen}
        component={DetailComplaintScreen}
      />

      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen
          name={Routes.FilterHospitalScreen}
          component={FilterHospitalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
});

export default RootStack;
