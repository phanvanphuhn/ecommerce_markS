import Text from 'elements/Text';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import scale from 'utils/scale';
import LinearGradient from 'react-native-linear-gradient';

type TProps = {
  rank: String;
  name: String;
  percent: String;
};

type TData = {
  data: TProps[];
};

const LeaderBoard = (props: TData) => {
  const {data} = props;

  return (
    <View style={styles.container}>
      {data.map(item => {
        return (
          <LinearGradient
            colors={['#001c45', colors.primary, '#001c45']}
            style={styles.wrapContainer}>
            <View style={styles.wrapItemContainer}>
              <View
                style={{
                  height: '100%',
                  marginRight: scale(16),
                  marginTop: scale(16),
                }}>
                <Text style={styles.rank}>{item.rank}</Text>
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <View
                style={{
                  height: 2,
                  backgroundColor: colors.inactive,
                  width: scale(54),
                  position: 'absolute',
                  transform: [{rotate: '135deg'}],
                  top: scale(20),
                }}
              />
            </View>
            <View style={styles.wrapItemContainer}>
              <Text style={styles.percent}>{item.percent}%</Text>
              <Image
                source={images.ic_logoLeaderBoard}
                style={{
                  height: scale(69),
                  width: scale(69),
                  marginLeft: scale(16),
                  marginTop: scale(4),
                  marginRight: scale(4),
                  marginBottom: scale(4),
                }}
              />
            </View>
          </LinearGradient>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: scale(8),
    paddingRight: scale(8),
  },
  wrapContainer: {
    backgroundColor: 'rgb(0, 26, 77)',
    marginBottom: scale(8),
    borderTopLeftRadius: scale(16),
    borderBottomLeftRadius: scale(16),
    borderTopRightRadius: scale(36),
    borderBottomRightRadius: scale(36),
    borderWidth: 1,
    borderColor: colors.inactive,
    paddingLeft: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rank: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.white,
  },
  name: {
    fontWeight: '400',
    fontSize: 15,
    color: colors.white,
  },
  percent: {
    fontWeight: '700',
    fontSize: 25,
    color: colors.white,
  },
});

export default LeaderBoard;
