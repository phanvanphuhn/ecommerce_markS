import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  findNodeHandle,
  NativeModules,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native';
import colors from 'res/colors';
import {useDropdown} from 'screens/complaints/components/DropdownProvider';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface DropDownItemProps {
  content: React.ReactNode;
}

const DropDownItem = (props: DropDownItemProps) => {
  const anim = useSharedValue(0);
  const {state, setState} = useDropdown();

  const styleAnim = useAnimatedStyle(() => {
    return {
      opacity: interpolate(anim.value, [0, 1], [0, 1]),
    };
  }, []);
  useEffect(() => {
    anim.value = withTiming(1, {duration: 500});
  }, []);
  if (!state.content) {
    return null;
  }
  const onLayout = (event: LayoutChangeEvent) => {
    if ((state.width || 0) < event.nativeEvent.layout.width) {
      setState({
        width: event.nativeEvent.layout.width,
      });
      console.log(
        '=>(DropDownItem.tsx:42) event.nativeEvent.layout.width',
        event.nativeEvent.layout.width,
      );
    }
  };
  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        styles.container,
        styleAnim,
        {
          top: state.top,
          minWidth: state.width,
        },
      ]}>
      {props.content}
    </Animated.View>
  );
};

export default DropDownItem;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: colors.blue4,
    zIndex: 999,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    left: 0,
    right: 0,
  },
});
