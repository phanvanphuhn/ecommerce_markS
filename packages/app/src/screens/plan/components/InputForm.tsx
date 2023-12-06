import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from 'res/colors';
import {useFormikContext} from 'formik';
import {PlanCallInput} from 'apollo/query/upsertPlanCall';
interface InputFormProps {
  name: keyof PlanCallInput;
  placeholder?: string;
  title?: string;
  numberOfLines?: number;
  rightIcon?: React.ReactNode;
}
const InputForm = (props: InputFormProps) => {
  const {handleChange, values} = useFormikContext<PlanCallInput>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props?.title}</Text>

      <View style={styles.textInputContainer}>
        <TextInput
          value={values?.[props.name]}
          onChangeText={handleChange(props.name)}
          placeholder={props?.placeholder}
          style={[
            values[props.name] ? styles.textInput : styles.placeHolder,
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
