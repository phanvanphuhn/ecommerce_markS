import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Container from 'elements/Layout/Container';
import strings from 'res/strings';
import ButtonText from 'elements/Buttons/ButtonText';
import colors from 'res/colors';
import Image from 'elements/Image';
import images from 'res/images';
import {width} from 'res/sizes';
import Theme from 'res/style/Theme';
import Text from 'elements/Text';
import TextInput from 'elements/TextInput';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import useStateCustom from 'hooks/useStateCustom';

interface DetailDoctorScreenProps {}

const DetailDoctorScreen = (props: DetailDoctorScreenProps) => {
  const [state, setState] = useStateCustom({
    isEdit: false,
  });
  const aref = useAnimatedRef<Animated.ScrollView>();
  const scrollHandler = useScrollViewOffset(aref);
  let translateImage = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollHandler.value,
            [0, width / 3 / 2],
            [-width / 3 / 2, -(width / 3)],
            Extrapolation.CLAMP,
          ),
        },
        // {
        //   translateX: interpolate(
        //     scrollHandler.value,
        //     [0, width / 3 / 2],
        //     [0, -width / 3],
        //     Extrapolation.CLAMP,
        //   ),
        // },
        {
          scale: interpolate(
            scrollHandler.value,
            [0, width / 3 / 2],
            [1, 0.6],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  }, []);
  let translateView = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollHandler.value,
            [0, width / 3 / 2],
            [width / 3 / 2, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  }, []);
  return (
    <Container
      title={strings.doctor.titleDetail}
      buttonRight={
        <ButtonText
          titleColor={colors.white}
          title={strings.edit}
          onPress={() => setState({isEdit: true})}
          textProps={{fontWeight: '700', size: 18, lineHeight: 24}}
        />
      }
      style={styles.container}>
      <View
        style={{
          backgroundColor: colors.primary,
          height: width / 4,
        }}
      />
      <View style={{flex: 1}}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              alignSelf: 'center',
            },
            translateImage,
          ]}>
          <Image
            defaultImage={images.ic_doctor_default}
            style={{
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 100,
              alignSelf: 'center',
              height: width / 3,
              width: width / 3,
            }}
          />
        </Animated.View>
        <Animated.View style={[translateView]}>
          <Animated.ScrollView
            ref={aref}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              {
                padding: 20,
              },
            ]}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text size={21} lineHeight={26} marginBottom={5}>
                Prof. Alistair Chong
              </Text>
              <Text lineHeight={24} size={15}>
                Associate Professor Senior Consultant
              </Text>
              <View style={[Theme.flexRowSpace, Theme.mt20]}>
                <TouchableOpacity
                  style={[
                    Theme.center,
                    Theme.flex1,
                    {
                      backgroundColor: colors.blue4,
                      borderRadius: 10,
                      padding: 8,
                    },
                    Theme.mr10,
                  ]}>
                  <Image source={images.ic_sales_call} />
                  <Text marginTop={5}>Sales Call</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    Theme.center,
                    Theme.flex1,
                    {
                      backgroundColor: colors.blue4,
                      borderRadius: 10,
                      padding: 8,
                    },
                  ]}>
                  <Image source={images.ic_case} />
                  <Text marginTop={5}>Case</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text
                lineHeight={18}
                size={13}
                color={colors.dotActive}
                marginTop={10}>
                Email
              </Text>
              <TextInput
                value={'alistair.chong@singhealth.com.sg'}
                editable={state.isEdit}
                style={styles.input}
              />
              <Text
                lineHeight={18}
                size={13}
                color={colors.dotActive}
                marginTop={10}>
                Alternative Email
              </Text>
              <TextInput value={''} editable={false} style={styles.input} />
              <Text size={13} color={colors.dotActive} marginTop={10}>
                Mobile Number
              </Text>
              <TextInput
                value={'98765432'}
                editable={state.isEdit}
                style={styles.input}
              />
              <Text
                lineHeight={18}
                size={13}
                color={colors.dotActive}
                marginTop={10}>
                Account Name
              </Text>
              <View
                style={[
                  styles.input,
                  Theme.flexRow,
                  {flexWrap: 'wrap', height: undefined},
                ]}>
                {['Raffles Hospita', 'National Heart Centre'].map((e, i) => {
                  return (
                    <View style={styles.containerSelect} key={i}>
                      <Text>{e}</Text>
                    </View>
                  );
                })}
              </View>
              <TextInput
                value={'aaaa@gmail.com'}
                editable={state.isEdit}
                style={styles.input}
              />
              <Text
                lineHeight={18}
                size={13}
                color={colors.dotActive}
                marginTop={10}>
                Country
              </Text>
              <TextInput
                value={'Singapore'}
                editable={state.isEdit}
                style={styles.input}
              />
              <Text
                lineHeight={18}
                size={13}
                color={colors.dotActive}
                marginTop={10}>
                Specialty
              </Text>
              <TextInput
                value={'Cardiology'}
                editable={state.isEdit}
                style={styles.input}
              />
              <Text
                lineHeight={18}
                size={13}
                color={colors.dotActive}
                marginTop={10}>
                Division
              </Text>
              <TextInput
                value={'IC'}
                editable={state.isEdit}
                style={styles.input}
              />
              <Text
                lineHeight={18}
                size={13}
                color={colors.dotActive}
                marginTop={10}>
                Topics Of Interest
              </Text>
              <TextInput
                value={'Lorem Ipsum'}
                editable={state.isEdit}
                style={[styles.input, {borderBottomWidth: 0}]}
              />
            </View>
          </Animated.ScrollView>
        </Animated.View>
      </View>
    </Container>
  );
};

export default DetailDoctorScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    marginLeft: 0,
    paddingLeft: 0,
    borderRadius: 0,
    height: 35,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
  containerSelect: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginTop: 15,
    backgroundColor: colors.gray2,
    marginRight: 5,
  },
});
