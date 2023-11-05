import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from 'elements/Layout/Container';
import HeaderPlan from 'screens/plan/components/HeaderPlan';

interface SearchPlanScreenProps {}

const SearchPlanScreen = (props: SearchPlanScreenProps) => {
  const [state, setState] = useState();
  return (
    <Container hideHeader={true} style={styles.container}>
      <HeaderPlan />
      <Text>SearchPlanScreen</Text>
    </Container>
  );
};

export default SearchPlanScreen;

const styles = StyleSheet.create({
  container: {},
});
