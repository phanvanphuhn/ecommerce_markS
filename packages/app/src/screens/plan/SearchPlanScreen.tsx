import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from 'elements/Layout/Container';
import HeaderPlan from 'screens/plan/components/HeaderPlan';
import scale from 'utils/scale';

interface SearchPlanScreenProps {}

const SearchPlanScreen = (props: SearchPlanScreenProps) => {
  const [state, setState] = useState();

  const onFilter = () => {};
  const onSearch = () => {};

  return (
    <Container hideHeader={true} style={styles.container}>
      <HeaderPlan onFilter={onFilter} onSearch={onSearch} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Recents</Text>
      </View>
    </Container>
  );
};

export default SearchPlanScreen;

const styles = StyleSheet.create({
  container: {},
  bodyContainer: {
    padding: scale(16),
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
