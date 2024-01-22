import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'elements/Text';
import Image from 'elements/Image';
import colors from 'res/colors';
import scale from 'utils/scale';
import images from 'res/images';
import {ItemLeaderBoardResponse} from 'apollo/query/leaderboard';
import {TabDateType} from 'screens/leaderboard/LeaderboardScreen';
import {getRank, getTargetAchieved} from 'utils/other-utils';

type TData = {
  data?: ItemLeaderBoardResponse[];
  type?: TabDateType;
};

var sortOrder = [2, 1, 3];
const LeaderRanking = (props: TData) => {
  const {data} = props;
  if (!data?.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      {[...data]
        ?.sort(
          (a, b) =>
            sortOrder.indexOf(parseInt(getRank(a, props.type))) -
            sortOrder.indexOf(parseInt(getRank(b, props.type))),
        )
        ?.map(item => {
          return (
            <View
              style={[
                styles.wrapContainer,
                getRank(item, props.type) !== '1'
                  ? {marginTop: scale(64)}
                  : {marginLeft: scale(12), marginRight: scale(12)},
              ]}>
              <Image
                source={
                  getRank(item, props.type) == '1'
                    ? images.ic_top1
                    : getRank(item, props.type) == '2'
                    ? images.ic_top2
                    : images.ic_top3
                }
                style={
                  getRank(item, props.type) == '1'
                    ? {
                        height: scale(139),
                        width: scale(112),
                      }
                    : {
                        height: scale(116),
                        width: scale(92),
                      }
                }
                resizeMode="contain"
              />

              <Text
                center={true}
                numberOfLines={2}
                style={
                  getRank(item, props.type) == '1'
                    ? {fontSize: 20, fontWeight: '400', color: '#BB9147'}
                    : getRank(item, props.type) == '2'
                    ? {fontSize: 14, fontWeight: '400', color: '#F2F2F2'}
                    : {fontSize: 14, fontWeight: '400', color: '#CE7C49'}
                }>
                {item.fullName}
              </Text>
              <Text
                style={
                  getRank(item, props.type) == '1'
                    ? {fontSize: 20, fontWeight: '700', color: '#BB9147'}
                    : getRank(item, props.type) == '2'
                    ? {fontSize: 14, fontWeight: '700', color: '#F2F2F2'}
                    : {fontSize: 14, fontWeight: '700', color: '#CE7C49'}
                }>
                {getTargetAchieved(item, props.type)}%
              </Text>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  wrapContainer: {
    alignItems: 'center',
    marginBottom: scale(12),
    maxWidth: '33%',
  },
  wrapTitleLike: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(4),
  },
  titleLike: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.dotActive,
    marginLeft: scale(4),
  },
});

export default LeaderRanking;
