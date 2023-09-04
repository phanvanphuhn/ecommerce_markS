import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface BoostScreenProps {}

const BoostScreen = (props: BoostScreenProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>BoostScreen</Text>
    </View>
  );
};

export default BoostScreen;

const styles = StyleSheet.create({
  container: {},
});
