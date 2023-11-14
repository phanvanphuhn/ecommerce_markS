import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Container from 'elements/Layout/Container';
import {BaseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import {Routes} from 'configs';
import Image from 'elements/Image';
import Text from 'elements/Text';
import colors from 'res/colors';
import images from 'res/images';
import Theme from 'res/style/Theme';
import {useLazyQuery} from '@apollo/client';
import {GET_COMPLAINTS_QUERY} from 'apollo/query/complaints';
import {GET_COMPLAINT_QUERY} from 'apollo/query/complaint';
import moment from 'moment';

interface DetailComplaintScreenProps {}

const DetailComplaintScreen = (
  props: BaseNavigationProps<MainParamList, Routes.DetailComplaintScreen>,
) => {
  const [state, setState] = useState();
  const [getData, {data, loading}] = useLazyQuery(GET_COMPLAINT_QUERY);
  useEffect(() => {
    getData({
      variables: {
        id: props.route.params.item.id,
      },
    });
  }, []);
  const renderColor = useCallback((status: string) => {
    switch (status) {
      case 'Submitted':
        return colors.primary;
      case 'Auto Submitted':
        return '#80C';
    }
  }, []);
  const renderStatus = useCallback((status: string) => {
    switch (status) {
      case 'Submitted':
        return 'Submitted';
      case 'Auto Submitted':
        return 'Auto Submitted';
    }
  }, []);
  return (
    <Container
      title={'GCMS-TW ' + props?.route.params?.item?.complaintName}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={[Theme.flexRowCenter, Theme.mt10]}>
          <TouchableOpacity
            style={[
              styles.button,
              Theme.center,
              {paddingHorizontal: 40, marginRight: 10},
            ]}>
            <Image
              style={{height: 24, width: 24, resizeMode: 'contain'}}
              source={images.ic_view_file}
            />
            <Text marginTop={5}>View Files</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, Theme.center, {paddingHorizontal: 40}]}>
            <Image
              style={{height: 24, width: 24, resizeMode: 'contain'}}
              source={images.ic_sharing}
            />
            <Text marginTop={5}>Sharing</Text>
          </TouchableOpacity>
        </View> */}
        <View style={{padding: 20}}>
          <Text size={21} lineHeight={24} fontWeight={'700'}>
            Info
          </Text>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Record Type
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              CIPI Read Only
            </Text>
          </View>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Complaint Name
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              {data?.data?.complaintName}
            </Text>
          </View>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Complaint Status
          </Text>
          <View style={styles.containerText}>
            <View
              style={[
                {
                  backgroundColor: renderColor(
                    props.route.params.item.complaintStatus,
                  ),
                  alignSelf: 'flex-start',
                  paddingHorizontal: 10,
                  borderRadius: 10,
                },
              ]}>
              <Text color={colors.white} size={15} lineHeight={23}>
                {renderStatus(props.route.params.item.complaintStatus)}
              </Text>
            </View>
          </View>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            What Type Of Situation Are You Reporting
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              {data?.data?.typeOfSituationReporting}
            </Text>
          </View>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Division
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              {data?.data?.division}
            </Text>
          </View>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Country Where Event Occurred
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              {data?.data?.country}
            </Text>
          </View>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Date You Became Aware Of The Event
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              {moment.unix(data?.data?.awareDate).format('DD/MM/YYYY')}
            </Text>
          </View>

          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Event Date
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              {moment.unix(data?.data?.eventDate).format('DD/MM/YYYY')}
            </Text>
          </View>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Select The Time Of The Event
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              {data?.data?.timeOfEvent}
            </Text>
          </View>

          <Text size={21} lineHeight={24} marginTop={30} fontWeight={'700'}>
            Procedure Information
          </Text>
          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Procedure Type
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              Test Procedure
            </Text>
          </View>

          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Procedure Date
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              12/02/2020
            </Text>
          </View>

          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            What Was The Patient Being Treated For
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              Test Condition
            </Text>
          </View>

          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Procedure Outcome
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              Procedure Cancelled
            </Text>
          </View>

          <Text
            marginTop={10}
            size={13}
            lineHeight={16}
            color={colors.dotActive}>
            Reason For Unsuccessful Procedure
          </Text>
          <View style={styles.containerText}>
            <Text size={15} fontWeight={'700'} lineHeight={23}>
              Nil
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default DetailComplaintScreen;

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: colors.blue4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
  },
  containerText: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 5,
    paddingTop: 10,
  },
});
