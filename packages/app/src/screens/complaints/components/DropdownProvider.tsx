import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  TouchableNativeFeedback,
} from 'react-native';
import useStateCustom from 'hooks/useStateCustom';
import DropDownItem from 'screens/complaints/components/DropDownItem';

interface DropdownProviderProps {
  children: React.ReactNode;
}

interface IState {
  isOpen?: boolean;
  top?: number;
  left?: number;
  width?: number;
  widthContent?: number;
  content?: React.ReactNode;
}
interface Dropdown {
  state: IState;
  setState: (value: IState) => void;
}
const DropdownContext = React.createContext<Dropdown>({
  state: {isOpen: false, top: 0, left: 0, width: 0},
  setState: () => {},
});
export const useDropdown = () => useContext(DropdownContext);
const DropdownProvider = (props: DropdownProviderProps) => {
  const [state, setState] = useStateCustom<IState>({
    isOpen: false,
    top: 0,
    left: 0,
    width: 0,
    widthContent: 0,
  });
  const onClose = () => {
    setState({
      isOpen: false,
      content: undefined,
      width: 0,
    });
  };
  return (
    <DropdownContext.Provider value={{state, setState}}>
      <TouchableNativeFeedback onPress={onClose}>
        <View style={styles.container}>{props.children}</View>
      </TouchableNativeFeedback>
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;

const styles = StyleSheet.create({
  container: {flex: 1},
});
