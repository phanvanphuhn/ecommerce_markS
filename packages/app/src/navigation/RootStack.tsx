import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from 'configs';
import {RootReducer} from 'middlewares/reducers';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import ImageViewerScreen from 'screens/Common/Image/ImageViewerScreen';
import DrawerStack from 'navigation/DrawerStack';
import ProfileScreen from 'screens/profile/ProfileScreen';
import ComplaintsScreen from 'screens/complaints/ComplaintsScreen';
import LeaderboardScreen from 'screens/leaderboard/LeaderboardScreen';

const Stack = createStackNavigator();

const RootStack = memo(() => {
  const userProfile = useSelector((state: RootReducer) => state.userProfile);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.SplashScreen}>
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
    </Stack.Navigator>
  );
});

export default RootStack;
