import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Container from 'elements/Layout/Container';
import Text from 'elements/Text';
import colors from 'res/colors';
import {BaseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {UserProfile} from 'res/type/Auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import scale from 'utils/scale';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import ItemSales from 'screens/home/components/ItemSales';
import {height} from 'res/sizes';

interface HomeScreenProps {
  data: UserProfile[];
}
type TypeMenu = 'sales' | 'boost' | 'plan' | 'leaderboard';

interface IMenuProps {
  type: TypeMenu;
  isPriority?: boolean;
}
const HomeScreen = (props: BaseNavigationProps<MainParamList>) => {
  console.log('=>(HomeScreen.tsx:86) props', props);
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
    switch (item.type) {
      case 'sales':
        return <ItemSales />;
      default:
        return null;
    }
  };
  const insets = useSafeAreaInsets();
  const onOpenDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <Container hideHeader={true} style={styles.container}>
      <View
        style={{
          backgroundColor: colors.blue,
          paddingTop: insets.top,
          paddingBottom: scale(10),
          paddingHorizontal: scale(10),
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={onOpenDrawer}>
          <Icon name={'menu'} size={30} color={colors.white} />
        </TouchableOpacity>
        <Icon name={'menu'} size={30} color={colors.white} />
      </View>
      <View>
        <View
          style={{
            backgroundColor: colors.blue2,
            height: height / 4,
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute',
          }}
        />
        <View>
          <Text color={colors.white}>aa</Text>
        </View>
        <View style={{padding: 20}}>
          {data.map((item, index) => {
            return (
              <View key={index.toString()}>{renderItem(item, index)}</View>
            );
          })}
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
