import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Container from 'elements/Layout/Container';
import strings from 'res/strings';
import ButtonIcon from 'elements/Buttons/ButtonIcon';
import images from 'res/images';
import colors from 'res/colors';
import Image from 'elements/Image';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';
import keyExtractor from 'utils/keyExtractor';
import ItemComplaint from 'screens/complaints/components/ItemComplaint';
import useStateCustom from 'hooks/useStateCustom';
import moment from 'moment';
import CustomDropdown from 'components/Menu/CustomDropdown';
import Dropdown from 'screens/complaints/components/Dropdown';
import DropdownProvider from 'screens/complaints/components/DropdownProvider';
import {renderColorComplaint, renderStatusComplaint} from 'utils/other-utils';
import ItemFilter from 'screens/complaints/components/ItemFilter';
import ItemSort from 'screens/complaints/components/ItemSort';
import _ from 'lodash';
import HeaderComplaint from 'screens/complaints/components/HeaderComplaint';
import {ItemComplaintResponse} from 'apollo/query/complaint';
import {useLazyQuery} from '@apollo/client';
import {GET_DOCTOR_QUERY} from 'apollo/query/getDoctorSearchList';
import {GET_COMPLAINTS_QUERY} from 'apollo/query/complaints';

interface ComplaintsScreenProps {}

const ComplaintsScreen = (props: ComplaintsScreenProps) => {
  const [state, setState] = useStateCustom({
    data: [],
    filterSelected: '',
    sortBy: null,
    loading: false,
  });
  const [getData, {data, loading}] = useLazyQuery(GET_COMPLAINTS_QUERY);
  useEffect(() => {
    setState({loading: true});
    getData({
      onCompleted: data => {
        setState({data: data?.data, loading: false});
      },
    });
    const tout = setTimeout(() => {
      clearTimeout(tout);
      setState({data: [], loading: false});
    }, 5000);
  }, []);
  const renderItem: ListRenderItem<ItemComplaintResponse> = ({item}) => {
    return <ItemComplaint item={item} />;
  };
  const onSelectFilter = (status: string) => {
    let list = data?.data?.filter(e => e.complaintStatus == status);
    setState({data: list, filterSelected: status});
  };

  const onSearch = (text: string) => {
    let list = data?.data?.filter((e: any) => {
      return Object.keys(e).some((key: any) =>
        e[key]
          ?.unsignText()
          .toLowerCase()
          .includes(text.unsignText().toLowerCase()),
      );
    });
    setState({data: list});
  };
  const listComplaintStatus = data?.data.map(item => item.complaintStatus);
  return (
    <DropdownProvider>
      <Container hideHeader={true} style={styles.container}>
        <HeaderComplaint title={strings.complaints} onSearch={onSearch} />
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            flex: 1,
          }}>
          <Text size={18} fontWeight={'700'} lineHeight={26} marginBottom={10}>
            {/*{state.data.length < data.length*/}
            {/*  ? 'Search Results'*/}
            {/*  : strings.complaint.allComplaints}*/}
          </Text>
          <View
            style={[
              {
                zIndex: 999,
                flexDirection: 'row',
              },
            ]}>
            <Dropdown
              onClear={() => {
                setState({data: data?.data, filterSelected: ''});
              }}
              content={
                <ScrollView style={styles.containerDropdown}>
                  {[...new Set(listComplaintStatus)].map((e, i) => {
                    return (
                      <ItemFilter
                        item={e}
                        index={i}
                        onSelected={onSelectFilter}
                      />
                    );
                  })}
                </ScrollView>
              }
              value={state.filterSelected}
              style={[Theme.mr10, Theme.flex1]}
              iconLeft={images.ic_filter2}
              title={strings.filter}
              type={'filter'}
            />
            <View style={{width: 15}} />
            <Dropdown
              type={'sort'}
              content={
                <View style={styles.containerDropdown}>
                  <ItemSort
                    onSelected={(type, value) => {
                      let sort: 'asc' | 'desc' = 'desc';
                      if (value == 'Newest') {
                        sort = 'desc';
                      } else {
                        sort = 'asc';
                      }
                      console.log(
                        '=>(ComplaintsScreen.tsx:134) state.data',
                        state.data,
                      );
                      let list = _.orderBy(
                        state.data,
                        function (dateObj: any) {
                          return moment(
                            new Date(Number(dateObj[type])),
                            'DD/MM/YYYY',
                          ).toDate();
                        },
                        sort,
                      );
                      console.log('=>(ComplaintsScreen.tsx:134) list', list);
                      setState({
                        sortBy: {
                          type,
                          value,
                        },
                        data: list,
                      });
                    }}
                    value={
                      state.sortBy?.type
                        ? {[state.sortBy?.type]: state.sortBy.value}
                        : {}
                    }
                  />
                </View>
              }
              onClear={() => setState({data: data?.data, sortBy: null})}
              iconLeft={images.ic_sort}
              title={strings.sort}
              value={state.sortBy}
            />
          </View>
          <View style={{flex: 1, marginTop: 15}}>
            {state.loading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={state.data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
              />
            )}
          </View>
        </View>
      </Container>
    </DropdownProvider>
  );
};

export default ComplaintsScreen;

const styles = StyleSheet.create({
  containerSelect: {
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  containerDropdown: {
    marginHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
    paddingVertical: 5,
  },
  container: {flex: 1},
  button: {
    backgroundColor: colors.blue4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
