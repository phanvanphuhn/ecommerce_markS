import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ProfileScreenProps {}

const ProfileScreen = (props: ProfileScreenProps) => {
  const [state, setState] = useState();
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
});
