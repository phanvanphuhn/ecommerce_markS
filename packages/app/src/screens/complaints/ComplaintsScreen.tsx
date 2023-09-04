import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ComplaintsScreenProps {}

const ComplaintsScreen = (props: ComplaintsScreenProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>ComplaintsScreen</Text>
    </View>
  );
};

export default ComplaintsScreen;

const styles = StyleSheet.create({
  container: {},
});
