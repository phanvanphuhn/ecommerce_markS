import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import colors from 'res/colors';
import {getIn, useFormikContext} from 'formik';
import {PlanCallInput} from 'apollo/query/upsertPlanCall';
import moment from 'moment';
import DateTimePicker from 'components/DateTimePicker/DateTimePicker';
import useModal from 'hooks/useModal';
interface CalendarFormProps {
  name: keyof PlanCallInput;
  typeDate: 'date' | 'time';
  title?: string;
}
const CalendarForm = (props: CalendarFormProps) => {
  const {handleChange, values, touched, errors, setFieldValue} =
    useFormikContext<PlanCallInput>();
  const [visible, open, close] = useModal();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            open();
          }}
          style={styles.wrapContent}>
          <View style={styles.wrapIcon}>
            <IconAntDesign
              name={props.typeDate == 'date' ? 'calendar' : 'clockcircleo'}
              color={'grey'}
            />
          </View>

          <Text style={styles.contentTitle}>
            {props.typeDate == 'date'
              ? moment(values?.[props.name]).format('DD MMM YYYY')
              : moment(values[props.name]).format('LT')}
          </Text>
        </TouchableOpacity>
      </View>

      <DateTimePicker
        title={props?.title}
        visible={visible}
        value={values[props.name]}
        type={props?.typeDate || 'date'}
        onCloseModal={close}
        onPressClose={(date, dateString) => {
          console.log(
            '=>(CalendarForm.tsx:48) moment(date).utc(true).toISOString()',
            moment(date).toISOString(),
          );
          setFieldValue(props.name, moment(date).toISOString());
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  error: {borderColor: colors.red, borderWidth: 2},
  errorTitle: {
    color: colors.red,
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapContainer: {
    flexDirection: 'row',
  },
  wrapContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#EBEBEB',
    padding: 6,
    alignItems: 'center',
    marginLeft: 6,
  },
  wrapIcon: {
    backgroundColor: '#EBEBEB',
    height: 22,
    width: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  contentTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black,
  },
});

export default CalendarForm;
