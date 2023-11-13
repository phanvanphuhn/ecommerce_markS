import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'elements/Text';
import Image from 'elements/Image';
import colors from 'res/colors';
import scale from 'utils/scale';
import images from 'res/images';

type TProps = {
  like: String;
  rank: String;
  name: String;
  percent: String;
};

type TData = {
  data: TProps[];
};

const LeaderRanking = (props: TData) => {
  const {data} = props;

  return (
    <View style={styles.container}>
      {data.map(item => {
        return (
          <View
            style={[
              styles.wrapContainer,
              item.rank !== '1'
                ? {marginTop: scale(64)}
                : {marginLeft: scale(12), marginRight: scale(12)},
            ]}>
            <Image
              source={
                item.rank == '1'
                  ? images.ic_top1
                  : item.rank == '2'
                  ? images.ic_top2
                  : images.ic_top3
              }
              style={
                item.rank == '1'
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
              style={
                item.rank == '1'
                  ? {fontSize: 20, fontWeight: '400', color: '#BB9147'}
                  : item.rank == '2'
                  ? {fontSize: 14, fontWeight: '400', color: '#F2F2F2'}
                  : {fontSize: 14, fontWeight: '400', color: '#CE7C49'}
              }>
              {item.name}
            </Text>
            <Text
              style={
                item.rank == '1'
                  ? {fontSize: 20, fontWeight: '700', color: '#BB9147'}
                  : item.rank == '2'
                  ? {fontSize: 14, fontWeight: '700', color: '#F2F2F2'}
                  : {fontSize: 14, fontWeight: '700', color: '#CE7C49'}
              }>
              {item.percent}%
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
  },
  wrapContainer: {
    alignItems: 'center',
    marginBottom: scale(12),
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
