import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CaseLogProps {}

const CaseLogScreen = (props: CaseLogProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>CaseLog</Text>
    </View>
  );
};

export default CaseLogScreen;

const styles = StyleSheet.create({
  container: {},
});
