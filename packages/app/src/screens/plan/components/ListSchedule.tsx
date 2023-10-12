import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'elements/Text';
import colors from 'res/colors';
import item from 'lib/react-native-calendars/src/calendar-list/item';

interface ListScheduleProps {
  data: any[];
}

const ListSchedule = (props: ListScheduleProps) => {
  const [state, setState] = useState([{name: 'a'}, {name: 'B'}]);
  return (
    <View style={styles.container}>
      {props.data.slice(0, 3).map((item, index) => {
        return (
          <View
            key={index.toString()}
            style={{
              backgroundColor: colors.pink2,
              padding: 4,
              borderRadius: 5,
              marginTop: 3,
              width: '100%',
            }}>
            <Text size={9} color={'#80C'} center={true} fontWeight={'600'}>
              {item.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ListSchedule;

const styles = StyleSheet.create({
  container: {
    padding: 1,
    width: '100%',
  },
});
