import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface LeaderboardScreenProps {}

const LeaderboardScreen = (props: LeaderboardScreenProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>LeaderboardScreen</Text>
    </View>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {},
});
