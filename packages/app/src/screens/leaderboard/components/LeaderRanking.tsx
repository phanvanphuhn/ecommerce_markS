import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
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
        ?.sort((a, b) => {
          const rankA = parseInt(getRank(a, props.type));
          const rankB = parseInt(getRank(b, props.type));

          // Check if ranks are in the sortOrder array
          const isRankAIncluded = sortOrder.includes(rankA);
          const isRankBIncluded = sortOrder.includes(rankB);

          // Handle missing ranks
          if (!isRankAIncluded && !isRankBIncluded) {
            // If both ranks are missing, maintain the original order
            return 0;
          } else if (!isRankAIncluded) {
            // If rank A is missing, place rank B before rank A
            return 1;
          } else if (!isRankBIncluded) {
            // If rank B is missing, place rank A before rank B
            return -1;
          } else {
            // Both ranks are present, sort based on sortOrder
            return sortOrder.indexOf(rankA) - sortOrder.indexOf(rankB);
          }
        })
        ?.map(item => {
          const avatarName =
            item.fullName.split(' ')[0][0] + item.fullName.split(' ')[1][0];
          return (
            <View
              style={[
                styles.wrapContainer,
                getRank(item, props.type) !== '1'
                  ? {marginTop: scale(64)}
                  : {marginLeft: scale(12), marginRight: scale(12)},
              ]}>
              <View
                style={[
                  styles.headerContainer,
                  getRank(item, props.type) == '1'
                    ? {
                        height: scale(110),
                        width: scale(110),
                        borderWidth: 3,
                        borderColor: '#BB9147',
                      }
                    : getRank(item, props.type) == '2'
                    ? {
                        height: scale(92),
                        width: scale(92),
                        borderWidth: 3,
                        borderColor: '#CCCCCC',
                      }
                    : {
                        height: scale(92),
                        width: scale(92),
                        borderWidth: 3,
                        borderColor: '#CE7C49',
                      },
                ]}>
                <Text color={colors.borderColor} size={50} fontWeight={'500'}>
                  {avatarName}
                </Text>
              </View>
              {getRank(item, props.type) == '1' ? (
                <ImageBackground
                  source={images.ic_goldMedal1}
                  style={{
                    height: 41,
                    width: 35,
                    position: 'absolute',
                    top: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontWeight: '900', fontSize: 28, color: '#CF973F'}}>
                    1
                  </Text>
                </ImageBackground>
              ) : getRank(item, props.type) == '2' ? (
                <ImageBackground
                  source={images.ic_silverMedal1}
                  style={{
                    height: 31,
                    width: 26,
                    position: 'absolute',
                    top: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              ) : (
                <ImageBackground
                  source={images.ic_bronzeMedal1}
                  style={{
                    height: 31,
                    width: 26,
                    position: 'absolute',
                    top: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              )}
              {/* <Image
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
              /> */}

              <Text
                center={true}
                numberOfLines={2}
                style={
                  getRank(item, props.type) == '1'
                    ? {
                        fontSize: 20,
                        fontWeight: '400',
                        color: '#BB9147',
                        marginTop: 20,
                      }
                    : getRank(item, props.type) == '2'
                    ? {
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#F2F2F2',
                        marginTop: 20,
                      }
                    : {
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#CE7C49',
                        marginTop: 20,
                      }
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
  headerContainer: {
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
});

export default LeaderRanking;
