import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from 'elements/Layout/Container';

interface SalesScreenProps {}

const SalesScreen = (props: SalesScreenProps) => {
  const [state, setState] = useState();
  return (
    <Container style={styles.container}>
      <Text>SalesScreen</Text>
    </Container>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  container: {},
});
