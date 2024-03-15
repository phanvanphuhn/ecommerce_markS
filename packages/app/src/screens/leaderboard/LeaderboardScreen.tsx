import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, LayoutAnimation} from 'react-native';
import Container from 'elements/Layout/Container';
import Text from 'elements/Text';
import LeaderRanking from './components/LeaderRanking';
import scale from 'utils/scale';
import colors from 'res/colors';
import LeaderBoard from './components/LeaderBoard';
import useStateCustom from 'hooks/useStateCustom';
import Theme from 'res/style/Theme';
import ItemTab from 'components/ItemTab';
import {useLazyQuery} from '@apollo/client';
import {GET_COMPLAINTS_QUERY} from 'apollo/query/complaints';
import {
  GET_LEADERBOARD_QUERY,
  ItemLeaderBoardResponse,
} from 'apollo/query/leaderboard';
import {getRank, pad} from 'utils/other-utils';
import moment from 'moment/moment';

interface LeaderboardScreenProps {}

export type TabDateType = 'Month' | 'Quarter' | 'Year';
export interface IStateSales {
  type?: TabDateType;
  dataTop?: ItemLeaderBoardResponse[];
  dataSurrounding?: ItemLeaderBoardResponse[];
}

const LeaderboardScreen = (props: LeaderboardScreenProps) => {
  const [state, setState] = useStateCustom<IStateSales>({
    type: 'Month',
    dataTop: [],
    dataSurrounding: [],
  });
  const [getData] = useLazyQuery(GET_LEADERBOARD_QUERY);
  const [getDataSurround] = useLazyQuery(GET_LEADERBOARD_QUERY);
  useEffect(() => {
    const date = moment();
    getData({
      variables: {
        month:
          state.type != 'Month' ? undefined : pad(date.month() + 1).toString(),
        year: date.year().toString(),
        quarter:
          state.type == 'Year'
            ? undefined
            : pad(Math.ceil((date.month() + 1) / 3)),
        sortBy: state.type,
        type: 'TopThree',
      },
      onCompleted: data => {
        setState({dataTop: data.data});
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      },
    });
    getDataSurround({
      variables: {
        month:
          state.type != 'Month' ? undefined : pad(date.month() + 1).toString(),
        year: date.year().toString(),
        quarter:
          state.type == 'Year'
            ? undefined
            : pad(Math.ceil((date.month() + 1) / 3)),
        sortBy: state.type,
        type: 'Surrounding',
      },
      onCompleted: data => {
        setState({dataSurrounding: data.data});
      },
    });
  }, [state?.type]);

  return (
    <Container title={'Leaderboard'} style={styles.container}>
      <View style={styles.wrapContainer}>
        <View style={[Theme.shadow, styles.containerTab]}>
          <ItemTab
            title={'MTD'}
            style={[Theme.flex1]}
            isFocused={state.type == 'Month'}
            onPress={() => {
              setState({type: 'Month', dataTop: [], dataSurrounding: []});
            }}
          />
          <ItemTab
            title={'QTD'}
            style={[Theme.flex1]}
            isFocused={state.type == 'Quarter'}
            onPress={() => {
              setState({type: 'Quarter', dataTop: [], dataSurrounding: []});
            }}
          />
          <ItemTab
            title={'YTD'}
            style={[Theme.flex1]}
            isFocused={state.type == 'Year'}
            onPress={() => {
              setState({type: 'Year', dataTop: [], dataSurrounding: []});
            }}
          />
        </View>
        {state.dataTop?.length ? (
          <LeaderRanking
            key={state.type}
            data={state.dataTop}
            type={state.type}
          />
        ) : (
          <View style={{height: 260}} />
        )}
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
        <LeaderBoard data={state?.dataSurrounding} type={state.type} />
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
