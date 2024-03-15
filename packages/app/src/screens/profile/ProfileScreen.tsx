import Container from 'elements/Layout/Container';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import InputProfile from './InputProfile';
import Text from 'elements/Text';
import Theme from 'res/style/Theme';
import {useLazyQuery} from '@apollo/client';
import {GET_ME} from 'apollo/query/me';
import {useSelector} from 'hooks/useSelector';
import useStateCustom from 'hooks/useStateCustom';
import {IStateSales} from 'screens/leaderboard/LeaderboardScreen';
import {GET_LEADERBOARD_QUERY} from 'apollo/query/leaderboard';
import moment from 'moment/moment';
import {pad} from 'utils/other-utils';

interface ProfileScreenProps {}

const ProfileScreen = (props: ProfileScreenProps) => {
  const userProfile = useSelector(state => state.userProfile.user);
  const [getData, {data}] = useLazyQuery(GET_ME);
  useEffect(() => {
    getData();
  }, []);

  const [state, setState] = useStateCustom<IStateSales>({
    type: 'Month',
    dataTop: [],
    dataSurrounding: [],
  });

  const [getDataLeader] = useLazyQuery(GET_LEADERBOARD_QUERY);
  const [getDataSurround] = useLazyQuery(GET_LEADERBOARD_QUERY);

  useEffect(() => {
    getDataSurround({
      variables: {
        year: moment().year().toString(),
        quarter: pad(Math.ceil((moment().month() + 1) / 3)),
        sortBy: 'Quarter',
        type: 'Surrounding',
      },
      onCompleted: data => {
        setState({dataSurrounding: data.data});
      },
    });
  }, []);

  const myRankInfo = state?.dataSurrounding?.filter(
    e => e.salesRepEmail == userProfile?.salesRepEmail,
  );
  const nameArray = userProfile?.fullName?.split(' ');

  return (
    <Container title={'My Profile'}>
      <View style={styles.container}>
        <View style={styles.wrapHeaderContainer}>
          <View style={styles.headerContainer}>
            <Text color={colors.white} size={50} fontWeight={'500'}>
              {nameArray[1]?.substring(0, 1)}
              {nameArray[0]?.substring(0, 1)}
            </Text>
          </View>
          <Text size={25} fontWeight={'500'} color={colors.white}>
            {nameArray[1] + ', ' + nameArray[0]}
          </Text>
        </View>

        <View style={styles.wrapBodyContainer}>
          <View style={styles.containerBodyHeader}>
            <View style={[styles.wrapBodyHeader]}>
              <Image
                source={images.ic_goldMedal}
                style={{height: 70, width: 60}}
              />
              <View style={styles.wrapImageTitle}>
                <Text size={16} fontWeight={'700'} color={colors.black}>
                  Rank
                </Text>
                <Text size={32} fontWeight={'700'} color={colors.black}>
                  {myRankInfo && myRankInfo[0]?.rankQtd}
                </Text>
              </View>
            </View>
            <View style={styles.profileInfoContainer}>
              <Text
                size={14}
                color={colors.white}
                fontWeight={'500'}
                style={styles.profileTitle}>
                PROFILE INFO
              </Text>
            </View>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              padding: 16,
              marginTop: 32,
              flex: 1,
            }}>
            <InputProfile
              title="Email"
              value={userProfile?.salesRepEmail || ''}
            />
            <InputProfile title="Mobile" value={userProfile?.mobile || ''} />
            <InputProfile title="Country" value={userProfile?.country} />
            <InputProfile title="Division" value={userProfile?.division} />
            <InputProfile
              title="Reporting to"
              value={userProfile?.reportingTo}
            />
            <InputProfile
              title="Preferred Language"
              value={userProfile?.preferredLanguage || ''}
            />
            <View style={{height: 100}} />
          </ScrollView>
        </View>
      </View>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  wrapHeaderContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerContainer: {
    height: 117,
    width: 117,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  headerProfileTitle: {
    fontWeight: '500',
    fontSize: 50,
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: 25,
    color: colors.white,
  },
  wrapBodyContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wrapBodyHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',

    flexDirection: 'row',
  },
  containerBodyHeader: {
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 16.0,
    elevation: 5,
    borderRadius: 20,
    paddingTop: 10,
  },
  wrapImageTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  imageTitle: {
    fontWeight: '700',
    fontSize: 32,
    color: colors.black,
  },
  profileInfoContainer: {
    backgroundColor: '#0153CC',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: '10%',
    paddingVertical: 6,
    bottom: '-14%',
  },
  profileTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
});
