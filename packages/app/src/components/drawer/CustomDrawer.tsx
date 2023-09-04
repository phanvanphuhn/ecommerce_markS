import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import colors from 'res/colors';
import Animated, {interpolate} from 'react-native-reanimated';
import ExpandableViewSeparate, {
  ExpandableItemComponent,
} from './ExpandableViewSeparate';
import images from 'res/images';
import sizes from 'res/sizes';
import {useDispatch, useSelector} from 'react-redux';
import {AuthReducer} from 'middlewares/reducers/auth/loginReducer';
import ButtonText from 'elements/Buttons/ButtonText';
import strings from 'res/strings';
// import DrawerItemList from './DrawerItemList';

const CustomDrawer = ({progress, ...props}: DrawerContentComponentProps) => {
  console.log('props: ', props);
  const translateX = interpolate(progress, [0, 1], [-100, 0]);

  const userProfile: AuthReducer = useSelector(
    (state: any) => state.userProfile,
  );
  const dispatch = useDispatch();
  const onLogout = () => {
    // dispatch(logout());
    props.navigation.closeDrawer();
  };
  const onLogin = () => {
    // props.navigation.navigate(Routes.LoginScreen, {typeScreen: 'login'});
  };
  return (
    <DrawerContentScrollView {...props}>
      <Animated.View>
        <View style={styles.containerProfile}>
          <Text>a</Text>
        </View>
        <ExpandableViewSeparate {...props} />
        <ExpandableItemComponent
          onPress={onLogout}
          item={{category_name: strings.logout, icon: images.ic_logout}}
          {...props}
        />
      </Animated.View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  imageAvatar: {
    height: sizes._50sdp,
    width: sizes._50sdp,
    borderRadius: sizes._25sdp,
  },
  containerProfile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtName: {
    color: colors.white,
    fontSize: sizes._16sdp,
    fontWeight: '600',
    paddingTop: sizes._15sdp,
  },
  icon: {
    height: sizes._20sdp,
    width: sizes._20sdp,
    resizeMode: 'contain',
  },
  container: {},
});
