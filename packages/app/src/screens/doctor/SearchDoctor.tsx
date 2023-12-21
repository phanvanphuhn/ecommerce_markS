import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Container from 'elements/Layout/Container';
import HeaderPlan from 'screens/plan/components/HeaderPlan';
import scale from 'utils/scale';
import ListRecents from 'screens/plan/components/ListRecents';
import keyExtractor from 'utils/keyExtractor';
import StatusPlanForm from 'screens/plan/components/StatusPlanForm';
import useStateCustom from 'hooks/useStateCustom';
import moment from 'moment';
import Text from 'elements/Text';
import {useLazyQuery, useMutation} from '@apollo/client';
import {GET_PLAN_CALLS} from 'apollo/query/getPlanCalls';
import {upsertSearchHistory} from 'apollo/query/upsertSearchHistory';

interface SearchDoctorProps {}

const SearchDoctor = (props: SearchDoctorProps) => {
  const [state, setState] = useStateCustom({keyword: '', eventsByDate: []});

  const onSearch = (value: string) => {
    setState({keyword: value});
  };
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.title}>Recents</Text>
      <ListRecents types={['ContactSearch']} onSearch={onSearch} />
    </View>
  );
};

export default SearchDoctor;

const styles = StyleSheet.create({
  container: {flex: 1},
  bodyContainer: {
    padding: scale(16),
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
