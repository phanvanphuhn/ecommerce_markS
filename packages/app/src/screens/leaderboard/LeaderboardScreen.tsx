import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Container from 'elements/Layout/Container';
import Text from 'elements/Text';
import LeaderRanking from './components/LeaderRanking';
import scale from 'utils/scale';
import colors from 'res/colors';
import LeaderBoard from './components/LeaderBoard';
import useStateCustom from 'hooks/useStateCustom';
import Theme from 'res/style/Theme';
import ItemTab from 'components/ItemTab';

interface LeaderboardScreenProps {}

export type TabDateType = 'MTD' | 'QTD' | 'YTD';
export interface IStateSales {
  type?: TabDateType;
}

const LeaderboardScreen = (props: LeaderboardScreenProps) => {
  const [state, setState] = useStateCustom<IStateSales>({
    type: 'MTD',
  });
  const data = [
    {
      like: '3,500',
      rank: '2',
      name: 'Emma, Charlotte',
      percent: '109',
    },
    {
      like: '5,000',
      rank: '1',
      name: 'Hubert Blaine',
      percent: '110',
    },
    {
      like: '1,000',
      rank: '3',
      name: 'Mia, Isabella',
      percent: '108',
    },
  ];

  const dataLeaderBoard = [
    {
      rank: '98',
      name: 'BSC Supersales',
      percent: '90',
    },
    {
      rank: '99',
      name: 'BSC Supersales',
      percent: '89',
    },
    {
      rank: '100',
      name: 'BSC Supersales',
      percent: '88',
    },
    {
      rank: '101',
      name: 'BSC Supersales',
      percent: '87',
    },
  ];

  return (
    <Container title={'Leaderboard'} style={styles.container}>
      <View style={styles.wrapContainer}>
        <View style={[Theme.shadow, styles.containerTab]}>
          <ItemTab
            title={'MTD'}
            style={[Theme.flex1]}
            isFocused={state.type == 'MTD'}
            onPress={() => {
              setState({type: 'MTD'});
            }}
          />
          <ItemTab
            title={'QTD'}
            style={[Theme.flex1]}
            isFocused={state.type == 'QTD'}
            onPress={() => {
              setState({type: 'QTD'});
            }}
          />
          <ItemTab
            title={'YTD'}
            style={[Theme.flex1]}
            isFocused={state.type == 'YTD'}
            onPress={() => {
              setState({type: 'YTD'});
            }}
          />
        </View>
        <LeaderRanking data={data} />
      </View>

      <View style={[Theme.mb10]}>
        <View
          style={{
            backgroundColor: colors.primary,
            height: '50%',
            position: 'absolute',
            width: '100%',
          }}
        />
        <View style={styles.wrapButtonContainer}>
          <Text style={styles.wrapButtonTitle}>SALES %</Text>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <LeaderBoard data={dataLeaderBoard} />
      </ScrollView>
    </Container>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {},
  wrapContainer: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingBottom: scale(8),
  },
  wrapButtonContainer: {
    padding: scale(8),
    width: scale(200),
    backgroundColor: '#0153CC',
    alignItems: 'center',
    borderRadius: scale(20),
    alignSelf: 'center',
  },
  wrapButtonTitle: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.white,
  },
  containerTab: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    shadowOpacity: 0.2,
    width: '76%',
  },
});
