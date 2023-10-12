import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from 'res/colors';

const InputForm = (props: any) => {
  const [value, setValue] = React.useState<String | null>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props?.title}</Text>

      <View style={styles.textInputContainer}>
        <TextInput
          onChangeText={text => setValue(text)}
          placeholder={props?.placeholder}
          style={[
            value ? styles.textInput : styles.placeHolder,
            props?.numberOfLines
              ? {height: 73}
              : {paddingVertical: 0, height: 20},
          ]}
          multiline={props?.numberOfLines ? true : false}
          numberOfLines={props?.numberOfLines}
          selectionColor={colors.black}
          placeholderTextColor={colors.dotActive}
        />
        {props?.rightIcon && <View>{props?.rightIcon}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontWeight: '300',
    fontSize: 15,
    color: colors.black,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 8,
    padding: 8,
    borderRadius: 15,
    borderColor: '#EBEBEB',
  },
  textInput: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.black,
    flex: 1,
  },
  placeHolder: {
    fontWeight: '400',
    fontSize: 15,
    flex: 1,
  },
});

export default InputForm;
