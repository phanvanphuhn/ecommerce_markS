import React, {useCallback, useState} from 'react';
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

interface DetailComplaintScreenProps {}

const DetailComplaintScreen = (
  props: BaseNavigationProps<MainParamList, Routes.DetailComplaintScreen>,
) => {
  const [state, setState] = useState();
  const renderColor = useCallback((status: string) => {
    switch (status) {
      case 'submitted':
        return colors.primary;
      case 'not_submitted':
        return '#80C';
    }
  }, []);
  const renderStatus = useCallback((status: string) => {
    switch (status) {
      case 'submitted':
        return 'Submitted';
      case 'not_submitted':
        return 'Not submitted';
    }
  }, []);
  return (
    <Container
      title={'GCMS-TW ' + props?.route.params?.item?.name}
      style={styles.container}>
      <ScrollView>
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
              CP-0000059399
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
                  backgroundColor: renderColor(props.route.params.item.status),
                  alignSelf: 'flex-start',
                  paddingHorizontal: 10,
                  borderRadius: 10,
                },
              ]}>
              <Text color={colors.white} size={15} lineHeight={23}>
                {renderStatus(props.route.params.item.status)}
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
              Product and/or Patient Event
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
              IC
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
              Singapore
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
              12/16/2022
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
              12/16/2022
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
              12/16/2022
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
