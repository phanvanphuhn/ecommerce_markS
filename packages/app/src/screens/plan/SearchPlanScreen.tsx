import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Container from 'elements/Layout/Container';
import HeaderPlan from 'screens/plan/components/HeaderPlan';
import scale from 'utils/scale';
import ListRecents from 'screens/plan/components/ListRecents';
import keyExtractor from 'utils/keyExtractor';
import StatusPlanForm from 'screens/plan/components/StatusPlanForm';
import groupBy from 'lodash/groupBy';
import {CalendarUtils} from 'lib/react-native-calendars';
import {timelineEvents} from 'screens/plan/components/timelineEvents';
import useStateCustom from 'hooks/useStateCustom';
import moment from 'moment';
import Text from 'elements/Text';
import {useLazyQuery, useMutation} from '@apollo/client';
import {GET_PLAN_CALLS} from 'apollo/query/getPlanCalls';
import {upsertSearchHistory} from 'apollo/query/upsertSearchHistory';

interface SearchPlanScreenProps {}

const SearchPlanScreen = (props: SearchPlanScreenProps) => {
  const [state, setState] = useStateCustom({keyword: '', eventsByDate: []});
  const [updateSearch] = useMutation(upsertSearchHistory);
  const [getData] = useLazyQuery(GET_PLAN_CALLS, {
    onCompleted: data => {
      let events = data?.data
        .map(e => moment(new Date(Number(e.startDate))).format('DD/MM/YYYY'))
        .filter((e, index, arr) => arr.indexOf(e) == index)
        .map(item => {
          let array = data?.data.filter(
            e =>
              moment(new Date(Number(e.startDate))).format('DD/MM/YYYY') ==
              item,
          );
          return {
            title: item,
            data: array.map(e => ({
              ...e,
              start: moment(new Date(Number(e.startDate))).format(
                'YYYY-MM-DD HH:mm:ss',
              ),
              end: moment(new Date(Number(e.endDate))).format(
                'YYYY-MM-DD HH:mm:ss',
              ),
              startDate: moment(new Date(Number(e.startDate))).format(
                'YYYY-MM-DD HH:mm:ss',
              ),
              endDate: moment(new Date(Number(e.endDate))).format(
                'YYYY-MM-DD HH:mm:ss',
              ),
            })),
          };
        });
      console.log('=>(SearchPlanScreen.tsx:24) events', events);
      setState({
        eventsByDate: events,
      });
    },
  });

  const onFilter = (filter: string) => {
    switch (filter) {
      case 'All':
        break;
      case 'Cases':
        break;
      case 'Calls':
        break;
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (state.keyword) {
        getData({variables: {subject: state.keyword}});

        updateSearch({
          variables: {
            data: {
              searchQuery: state.keyword,
              searchType: ['PlanCall'],
            },
          },
        });
      }
    }, 500);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [state.keyword]);
  const onSearch = (value: string) => {
    setState({keyword: value});
  };
  const renderItem = ({item}) => {
    return (
      <View style={{padding: 10}}>
        <Text fontWeight={'700'}>
          {moment(item.title, 'DD/MM/YYYY')
            .format('dddd, DD MMM')
            .toUpperCase()}
        </Text>
        <View style={{}}>
          {item.data?.map((e, i) => {
            return (
              <View
                style={{
                  marginTop: 5,
                }}>
                <StatusPlanForm item={e} key={i} />
              </View>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <Container hideHeader={true} style={styles.container}>
      <HeaderPlan
        onFilter={onFilter}
        value={state.keyword}
        onSearch={onSearch}
      />
      {!state.keyword && (
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Recents</Text>
          <ListRecents onSearch={value => setState({keyword: value})} />
        </View>
      )}
      {!!state.keyword && (
        <FlatList
          data={state.eventsByDate}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </Container>
  );
};

export default SearchPlanScreen;

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
