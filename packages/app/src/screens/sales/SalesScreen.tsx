import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface SalesScreenProps {}

const SalesScreen = (props: SalesScreenProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>SalesScreen</Text>
    </View>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  container: {},
});
