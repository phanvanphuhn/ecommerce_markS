import React from 'react';
import {Appearance, StyleSheet, Text, TextInput, View} from 'react-native';
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
  dropdownPosition?: 'auto' | 'top' | 'bottom';
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
          placeholderStyle={styles.placeHolderTextInput}
          renderRightIcon={() => (
            <IconAntDesign name="downcircle" size={15} color={'black'} />
          )}
          data={props.arrDropdown}
          maxHeight={300}
          labelField="label"
          valueField="value"
          search={true}
          searchField={'label'}
          dropdownPosition={props.dropdownPosition}
          placeholder={props.placeholder}
          value={values?.[props.name] ? values?.[props.name] : ''}
          onChange={e => setFieldValue(props.name, e.value)}
          itemTextStyle={styles.textInput}
        />
      ) : (
        <View
          style={[
            styles.textInputContainer,
            !!getIn(errors, props.name) &&
              getIn(touched, props.name) &&
              styles.error,
          ]}>
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
      {!!getIn(errors, props.name) && getIn(touched, props.name) && (
        <View style={{}}>
          <Text style={styles.errorTitle}>{getIn(errors, props.name)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {borderColor: colors.red, borderWidth: 2},
  errorTitle: {
    color: colors.red,
    fontWeight: '500',
  },
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
  placeHolderTextInput: {
    fontSize: 15,
    color: colors.inactive,
    flex: 1,
  },
  placeHolder: {
    fontWeight: '400',
    fontSize: 15,
    flex: 1,
  },
});

export default InputForm;
