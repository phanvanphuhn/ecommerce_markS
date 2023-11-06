import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Container from 'elements/Layout/Container';
import Text from 'elements/Text';
import LeaderRanking from './LeaderRanking';
import scale from 'utils/scale';
import colors from 'res/colors';
import LeaderBoard from './LeaderBoard';

interface LeaderboardScreenProps {}

const LeaderboardScreen = (props: LeaderboardScreenProps) => {
  const [state, setState] = useState();

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
        <LeaderRanking data={data} />
      </View>
      <View style={styles.wrapButtonContainer}>
        <Text style={styles.wrapButtonTitle}>SALES %</Text>
      </View>
      <View>
        <LeaderBoard data={dataLeaderBoard} />
      </View>
    </Container>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {},
  wrapContainer: {},
  wrapButtonContainer: {
    padding: scale(8),
    width: scale(200),
    backgroundColor: '#0153CC',
    alignItems: 'center',
    borderRadius: scale(20),
    left: '25%',
    bottom: 15,
  },
  wrapButtonTitle: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.white,
  },
});
