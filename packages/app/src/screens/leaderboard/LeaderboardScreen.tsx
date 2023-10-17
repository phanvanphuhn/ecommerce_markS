import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from 'elements/Layout/Container';

interface LeaderboardScreenProps {}

const LeaderboardScreen = (props: LeaderboardScreenProps) => {
  const [state, setState] = useState();
  return (
    <Container title={'Leader Board'} style={styles.container}>
      <Text>LeaderboardScreen</Text>
    </Container>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {},
});
