import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from 'res/colors';
import {getIn, useFormikContext} from 'formik';
import {PlanCallInput} from 'apollo/query/upsertPlanCall';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-element-dropdown';
import scale from 'utils/scale';

export interface DropdownProp {
  value: string;
  label: string;
}
interface InputFormProps {
  name: keyof PlanCallInput;
  placeholder?: string;
  title?: string;
  numberOfLines?: number;
  rightIcon?: React.ReactNode;
  type?: 'dropdown' | 'input';
  arrDropdown?: DropdownProp[];
}
const InputForm = (props: InputFormProps) => {
  const {handleChange, values, errors, touched, setFieldValue} =
    useFormikContext<PlanCallInput>();
  const error = getIn(errors, props.name);
  const isTouched = getIn(touched, props.name);
  const isError = !!isTouched && !!error;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props?.title}</Text>

      {props?.type == 'dropdown' ? (
        <Dropdown
          style={[styles.dropdownContainer, isError && styles.error]}
          selectedTextStyle={styles.textInput}
          containerStyle={{borderRadius: 4}}
          placeholderStyle={styles.textInput}
          renderRightIcon={() => (
            <IconAntDesign name="downcircle" size={15} color={'black'} />
          )}
          data={props.arrDropdown}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select Type'}
          searchPlaceholder="Select Type"
          value={values?.[props.name]}
          onChange={e => setFieldValue(props.name, e.value)}
        />
      ) : (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {borderColor: colors.red, borderWidth: 2},
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
  dropdownContainer: {
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
