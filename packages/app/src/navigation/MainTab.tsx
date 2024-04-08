import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from 'configs/Routes';
import React, {memo} from 'react';
import {View} from 'react-native';
import colors from 'res/colors';
import HomeScreen from 'screens/home/HomeScreen';
import CustomTab from 'navigation/CustomTab';
import SalesScreen from 'screens/sales/SalesScreen';
import BoostScreen from 'screens/boost/BoostScreen';
import PlanScreen from 'screens/plan/PlanScreen';
import CaseLogScreen from 'screens/caseLog/CaseLogScreen';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import ScanBarCodeScreen from 'screens/scanBarCode/ScanBarCodeScreen';

const Tab = createBottomTabNavigator();
const MainTab = memo(() => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props: BottomTabBarProps) => <CustomTab {...props} />}>
        <Tab.Screen name={Routes.HomeScreen} component={HomeScreen} />
        <Tab.Screen
          name={Routes.SalesScreen}
          component={SalesScreen}
          options={{
            unmountOnBlur: true,
          }}
        />
        {/* <Tab.Screen name={Routes.BoostScreen} component={BoostScreen} /> */}
        <Tab.Screen
          name={Routes.PlanScreen}
          component={PlanScreen}
          options={{
            unmountOnBlur: true,
          }}
        />
        {/* <Tab.Screen
          name={Routes.CaseLogScreen}
          options={{
            headerShown: false,
          }}
          component={CaseLogScreen}
        /> */}
      </Tab.Navigator>
    </View>
  );
});

export default MainTab;
