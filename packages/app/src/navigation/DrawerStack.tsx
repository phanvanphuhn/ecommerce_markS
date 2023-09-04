import * as React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTab from 'navigation/MainTab';
import {Routes} from 'configs';
import CustomDrawer from 'components/drawer/CustomDrawer';

const Drawer = createDrawerNavigator();
interface DrawerStackProps {}

const DrawerStack = (props: DrawerStackProps) => {
  const [state, setState] = useState();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.MainTab}>
      <Drawer.Screen name={Routes.MainTab} component={MainTab} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({
  container: {},
});
