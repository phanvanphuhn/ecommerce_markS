import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import scale from 'utils/scale';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import React, {memo, useMemo} from 'react';
import Text from 'elements/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Routes from 'configs/Routes';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import strings from 'res/strings';

const CustomTab = memo(
  ({state, descriptors, navigation}: BottomTabBarProps) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions?.tabBarVisible === false) {
      return null;
    }
    return useMemo(
      () => (
        <View style={styles.container1}>
          <View style={styles.container}>
            {state.routes.map((route: any, index: number) => {
              const isFocused = state.index === index;

              const getIcon = () => {
                switch (index) {
                  case 0:
                    return (
                      <SimpleLineIcons
                        name={'home'}
                        color={isFocused ? colors.white : colors.gray}
                        size={23}
                      />
                    );
                  case 1:
                    return (
                      <Icon
                        name={'signal-cellular-outline'}
                        color={isFocused ? colors.white : colors.gray}
                        size={24}
                      />
                    );
                  case 2:
                    return (
                      <SimpleLineIcons
                        name={'home'}
                        color={isFocused ? colors.white : colors.gray}
                        size={23}
                      />
                    );
                  case 3:
                    return (
                      <SimpleLineIcons
                        name={'home'}
                        color={isFocused ? colors.white : colors.gray}
                        size={23}
                      />
                    );
                  default:
                    return (
                      <SimpleLineIcons
                        name={'home'}
                        color={isFocused ? colors.white : colors.gray}
                        size={23}
                      />
                    );
                }
              };
              const getTabName = () => {
                switch (route.name) {
                  case Routes.HomeScreen:
                    return strings.home;
                  case Routes.SalesScreen:
                    return strings.sales;
                  case Routes.BoostScreen:
                    return strings.boost;
                  case Routes.PlanScreen:
                    return strings.plan;
                  case Routes.CaseLogScreen:
                    return strings.caseLog;

                  default:
                    return strings.home;
                }
              };
              const onPress = () => {
                // const event = navigation.emit({
                //   type: 'tabPress',
                //   target: route.key,
                //   canPreventDefault: true,
                // });

                //

                if (!isFocused) {
                  return navigation.navigate(route.name);
                }
              };
              return (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    backgroundColor: isFocused ? colors.white : colors.primary,
                  }}>
                  <TouchableOpacity
                    onPress={onPress}
                    style={[
                      styles.btn,
                      isFocused
                        ? styles.btnFocused
                        : {
                            backgroundColor: colors.white,
                            borderBottomLeftRadius:
                              index == state.index + 1 ? 10 : 0,
                            borderBottomRightRadius:
                              index == state.index - 1 ? 10 : 0,
                          },
                    ]}
                    activeOpacity={1}>
                    <View style={[styles.borderButton]}>
                      {getIcon()}
                      <Text
                        color={isFocused ? colors.white : colors.gray}
                        marginTop={10}
                        fontWeight={isFocused ? '600' : '400'}
                        size={14}>
                        {getTabName()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      ),
      [navigation, state, descriptors],
    );
  },
);
export default CustomTab;
const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: 6 + getBottomSpace(),
    paddingBottom: getBottomSpace() + scale(10),
    paddingTop: scale(14),
    backgroundColor: 'transparent',
  },
  btnFocused: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
  container1: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowOffset: {height: 2, width: 0},
    paddingTop: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 2,
  },
  borderButton: {
    ...Theme.center,
  },
  borderActive: {
    backgroundColor: colors.tealBlue20,
  },
});
