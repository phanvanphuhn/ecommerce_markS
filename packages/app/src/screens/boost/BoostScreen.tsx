import React from 'react';
import {Platform, ScrollView, StyleSheet, UIManager, View} from 'react-native';
import Container from 'elements/Layout/Container';
import strings from 'res/strings';
import colors from 'res/colors';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';
import useStateCustom from 'hooks/useStateCustom';
import ItemTab from 'components/ItemTab';
import DailyProgress from 'screens/boost/components/DailyProgress';
import Daily from 'screens/boost/components/Daily';
import Recommended from 'screens/boost/components/Recommended';
import BoostProvider, {
  IStateBoost,
} from 'screens/boost/components/BoostProvider';
import ContainerProvider from 'components/ContainerProvider';

interface BoostScreenProps {}

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const BoostScreen = (props: BoostScreenProps) => {
  const [state, setState] = useStateCustom<IStateBoost>({
    total: 7,
    daily: 0,
    recommended: 0,
    type: 'all',
  });
  return (
    <ContainerProvider state={state} setState={setState}>
      <Container title={'My Boost'} style={styles.container}>
        <View
          style={{
            backgroundColor: '#F2F7FF',
            marginBottom: 5,
          }}>
          <View style={styles.containerUnder} />
          <View style={[Theme.shadow, styles.containerTab]}>
            <ItemTab
              title={'All'}
              content={
                (state?.daily || 0) +
                (state.recommended || 0) +
                '/' +
                state.total
              }
              style={[Theme.flex1, {paddingVertical: 3}]}
              isFocused={state.type == 'all'}
              onPress={() => {
                setState({type: 'all'});
              }}
            />
            <ItemTab
              title={'DAILY'}
              style={[Theme.flex1, {paddingVertical: 3}]}
              content={(state?.daily || 0) + '/' + state.total}
              isFocused={state.type == 'daily'}
              onPress={() => {
                setState({type: 'daily'});
              }}
            />
            <ItemTab
              title={'RECO'}
              style={[Theme.flex1, {paddingVertical: 3}]}
              content={(state?.recommended || 0) + '/' + state.total}
              isFocused={state.type == 'reco'}
              onPress={() => {
                setState({type: 'reco'});
              }}
            />
          </View>
        </View>
        <View style={styles.containerDaily}>
          <Text marginBottom={10} size={15} fontWeight={'700'}>
            My Daily Progress:
          </Text>
          <DailyProgress
            value={(state.daily || 0) + (state.recommended || 0)}
            steps={[
              {step: 4, value: 20},
              {step: 7, value: 40},
            ]}
          />
        </View>
        <View style={{backgroundColor: colors.white, flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {(state.type == 'all' || state.type == 'daily') && <Daily />}
            {(state.type == 'all' || state.type == 'reco') && <Recommended />}
          </ScrollView>
        </View>
      </Container>
    </ContainerProvider>
  );
};

export default BoostScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F7FF',
    flex: 1,
  },
  containerDaily: {
    backgroundColor: '#F2F7FF',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  containerUnder: {
    width: '100%',
    height: '50%',
    backgroundColor: colors.primary,
    position: 'absolute',
  },
  containerTab: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50,
    shadowOpacity: 0.2,
    width: '80%',
  },
  buttonTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flex: 1,
    ...Theme.center,
  },
  buttonTabActive: {
    backgroundColor: colors.blue3,
  },
});
