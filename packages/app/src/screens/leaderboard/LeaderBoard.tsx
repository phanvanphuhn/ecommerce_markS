import Text from 'elements/Text';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import scale from 'utils/scale';

type TProps = {
  rank: String;
  name: String;
  percent: String;
};

type TData = {
  data: TProps[];
};

const LeaderBoard = (props: TData) => {
  console.log('props: ', props);
  const {data} = props;
  console.log('data: ', data);

  return (
    <View style={styles.container}>
      {data.map(item => {
        return (
          <View style={{backgroundColor: 'rgb(0, 26, 77)'}}>
            <Text>{item.rank}</Text>
            <Text>{item.name}</Text>
            <Text>{item.percent}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(8),
  },
});

export default LeaderBoard;
