import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from 'elements/Layout/Container';
import colors from 'res/colors';
import {BaseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {UserProfile} from 'res/type/Auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import scale from 'utils/scale';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import ItemSales from 'screens/home/components/ItemSales';
import {height, width} from 'res/sizes';
import AzureAuth from 'react-native-azure-auth';
import Text from 'elements/Text';
import Image from 'elements/Image';
import images from 'res/images';
import ItemBoost from 'screens/home/components/ItemBoost';
import LinearGradient from 'react-native-linear-gradient';
import Theme from 'res/style/Theme';
import ItemPlan from 'screens/home/components/ItemPlan';
import ItemLeaderBoard from 'screens/home/components/ItemLeaderBoard';
import ItemUser from 'screens/home/components/ItemUser';
import Routes from 'configs/Routes';

interface HomeScreenProps {
  data: UserProfile[];
}
type TypeMenu = 'sales' | 'boost' | 'plan' | 'leaderboard';

interface IMenuProps {
  type: TypeMenu;
  isPriority?: boolean;
}
const HomeScreen = (props: BaseNavigationProps<MainParamList>) => {
  const [data, setData] = useState<IMenuProps[]>([
    {
      type: 'sales',
      isPriority: true,
    },
    {
      type: 'boost',
    },
    {
      type: 'plan',
    },
    {
      type: 'leaderboard',
    },
  ]);
  const navigation = useNavigation();
  console.log('=>(HomeScreen.tsx:35) navigation', navigation);
  const renderItem = (item: IMenuProps, index: number) => {
    const Component: any = {
      sales: <ItemSales isPriority={item.isPriority} />,
      boost: <ItemBoost isPriority={item.isPriority} />,
      plan: <ItemPlan isPriority={item.isPriority} />,
      leaderboard: <ItemLeaderBoard isPriority={item.isPriority} />,
    };
    return (
      <View>
        {!!item.isPriority && (
          <LinearGradient
            style={{
              height: 5,
              width: '100%',
            }}
            start={{x: 0.1, y: 0}}
            end={{x: 1, y: 0}}
            colors={[
              '#137CFF',
              '#1775FF',
              '#2B6BFF',
              '#5457FF',
              '#7946FF',
              '#B32BFF',
              '#BC45FF',
              '#AB71FF',
              '#9B97FF',
              '#91B1FF',
              '#80D9FF',
              '#77EFFF',
            ]}
          />
        )}
        {!item.isPriority && (
          <View
            style={{height: 5, width: '100%', backgroundColor: colors.gray2}}
          />
        )}
        {Component[item.type]}
      </View>
    );
  };
  const insets = useSafeAreaInsets();
  const onOpenDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const onContactSearch = () => {
    navigation.navigate(Routes.DoctorSearchScreen);
  };
  return (
    <Container hideHeader={true} style={styles.container}>
      <View
        style={{
          backgroundColor: colors.blue,
          paddingTop: insets.top + 10,
          paddingBottom: scale(10),
          paddingHorizontal: scale(10),
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={onOpenDrawer}>
          <Icon name={'menu'} size={30} color={colors.white} />
        </TouchableOpacity>
        <Image source={images.ic_logo} />
      </View>
      <View style={Theme.flex1}>
        <View
          style={{
            backgroundColor: colors.blue2,
            height: height / 3,
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute',
          }}
        />
        <View style={[Theme.flex1]}>
          <ScrollView>
            <ItemUser />
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingBottom: 20,
              }}>
              {data
                .sort((x, y) =>
                  x.isPriority === y.isPriority ? 0 : x.isPriority ? -1 : 1,
                )
                .map((item, index) => {
                  return (
                    <View
                      key={index.toString()}
                      style={{
                        width: item.isPriority ? width : width / 2,
                        paddingRight: index % 2 === 0 ? 20 : 3,
                        paddingLeft: index % 2 === 0 && index != 0 ? 3 : 20,
                        paddingTop: 30,
                      }}>
                      {renderItem(item, index)}
                    </View>
                  );
                })}
            </View>
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity style={styles.floatBtn} onPress={onContactSearch}>
        <Image
          source={images.ic_book}
          style={{height: scale(51), width: scale(51)}}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  floatBtn: {
    position: 'absolute',
    bottom: scale(32),
    right: scale(16),
  },
});
