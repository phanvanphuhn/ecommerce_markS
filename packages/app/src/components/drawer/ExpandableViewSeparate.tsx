import {DrawerItem} from '@react-navigation/drawer';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import {
  CommonActions,
  DrawerActions,
  DrawerNavigationState,
  ParamListBase,
} from '@react-navigation/native';
import {ROLE} from 'common/Constants';
import {AuthReducer} from 'middlewares/reducers/auth/loginReducer';
import * as React from 'react';
import {memo} from 'react';
import {useMemo} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  ImageSourcePropType,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import colors from 'res/colors';
import images from 'res/images';
import sizes from 'res/sizes';
import strings from 'res/strings';
import Routes from 'configs/Routes';
export interface SubMenu {
  id: number;
  value: string;
  route: string;
}
export interface MenuProps {
  isExpanded?: boolean;
  category_name: string;
  subcategory?: SubMenu[];
  isSubMenu?: boolean;
  icon: ImageSourcePropType;
  route?: string;
}
interface State {
  listDataSource: MenuProps[];
}
type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};
interface ExpandableItemComponentProps extends Props {
  item: MenuProps;
  onPress: () => void;
}
interface ExpandableItemComponentState {
  layoutHeight: number | null;
}
export const ExpandableItemComponent = memo(
  ({item, onPress, ...props}: ExpandableItemComponentProps) => {
    const onPressRoute = (item: SubMenu | null) => () => {
      props.navigation.closeDrawer();

      !!item?.route && props.navigation.navigate(item.route);
    };
    const onPressMenu = () => {
      if (item.isSubMenu) {
        onPress && onPress();
      } else {
        onPressRoute(item)();
      }
    };

    return (
      <View>
        {/*Header of the Expandable List Item*/}
        <DrawerItem
          label={item.category_name}
          icon={({color}) => (
            <Image
              source={item.icon}
              style={[styles.icon, {tintColor: colors.primary}]}
            />
          )}
          // focused={true}
          onPress={onPressMenu}
          style={styles.labelStyle}
          {...props}
        />
        <View style={[styles.containerContent]}>
          {/*Content under the header of the Expandable List Item*/}
          {item?.isExpanded &&
            !!item.isSubMenu &&
            item?.subcategory?.map((item, key) => (
              <DrawerItem
                {...props}
                key={key}
                label={item.value}
                labelStyle={styles.labelSub}
                onPress={onPressRoute(item)}
              />
            ))}
        </View>
      </View>
    );
  },
);

const ExpandableViewSeparate = (props: Props) => {
  const [listDataSource, setListDataSource] = useState<MenuProps[]>([
    {
      category_name: strings.profile,
      route: Routes.ProfileScreen,
      icon: images.ic_user,
    },
    {
      category_name: strings.sales,
      route: Routes.SalesScreen,
      icon: images.ic_user,
    },
    {
      category_name: strings.boost,
      route: Routes.BoostScreen,
      icon: images.ic_user,
    },
    {
      category_name: strings.plan,
      route: Routes.PlanScreen,
      icon: images.ic_user,
    },
    {
      category_name: strings.complaints,
      route: Routes.ComplaintsScreen,
      icon: images.ic_user,
    },
    {
      category_name: strings.leaderboard,
      route: Routes.LeaderboardScreen,
      icon: images.ic_user,
    },
  ]);
  //Main View defined under this Class
  const userProfile: AuthReducer = useSelector(
    (state: any) => state.userProfile,
  );
  React.useLayoutEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const updateLayout = (index: number) => () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array[index].isExpanded = !array[index].isExpanded;
    setListDataSource(array);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {listDataSource.map((item, key) => (
          <ExpandableItemComponent
            key={item.category_name}
            onPress={updateLayout(key)}
            item={item}
            {...props}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default ExpandableViewSeparate;
const styles = StyleSheet.create({
  labelSub: {
    color: colors.inactive,
    paddingLeft: sizes._30sdp,
  },
  containerContent: {
    overflow: 'hidden',
  },
  labelStyle: {borderBottomColor: colors.white, borderBottomWidth: 0.2},
  icon: {
    width: sizes._20sdp,
    height: sizes._20sdp,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  topHeading: {
    paddingLeft: 10,
    fontSize: 20,
  },
  header: {
    backgroundColor: colors.black,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});
