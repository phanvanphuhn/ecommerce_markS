import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface PlanScreenProps {}

const PlanScreen = (props: PlanScreenProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>PlanScreen</Text>
    </View>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({
  container: {},
});
