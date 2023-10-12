import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from 'res/colors';
import Text from 'elements/Text';

type TProps = {
  title: string;
  value: string;
};

const InputProfile = (props: TProps) => {
  return (
    <View style={styles.container}>
      <Text
        size={13}
        fontWeight={'400'}
        color={colors.dotActive}
        marginBottom={8}>
        {props.title}
      </Text>

      <Text size={15} color={colors.black} fontWeight={'400'}>
        {props.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    paddingBottom: 16,
    marginBottom: 8,
    borderColor: '#CCCCCC',
    paddingLeft: 32,
    paddingRight: 32,
  },
  title: {
    fontWeight: '400',
    fontSize: 13,
    color: colors.dotActive,
    marginBottom: 8,
  },
  value: {
    fontWeight: '400',
    fontSize: 15,
    color: colors.black,
  },
});

export default InputProfile;
