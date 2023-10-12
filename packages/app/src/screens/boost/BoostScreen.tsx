import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from 'elements/Layout/Container';

interface BoostScreenProps {}

const BoostScreen = (props: BoostScreenProps) => {
  const [state, setState] = useState();
  return (
    <Container style={styles.container}>
      <Text>BoostScreen</Text>
    </Container>
  );
};

export default BoostScreen;

const styles = StyleSheet.create({
  container: {},
});
