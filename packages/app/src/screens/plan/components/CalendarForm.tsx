import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import colors from 'res/colors';

const CalendarForm = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props?.title}</Text>

      <View style={styles.wrapContainer}>
        <TouchableOpacity style={styles.wrapContent}>
          <View style={styles.wrapIcon}>
            <IconAntDesign name="calendar" color={'grey'} />
          </View>

          <Text style={styles.contentTitle}>30 Jun 2023</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.wrapContent}>
          <View style={styles.wrapIcon}>
            <IconAntDesign name="clockcircleo" color={'grey'} />
          </View>

          <Text style={styles.contentTitle}>1:00 PM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapContainer: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: '300',
    fontSize: 15,
    color: colors.black,
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
