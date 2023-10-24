import React, {useDeferredValue, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  LayoutChangeEvent,
  NativeModules,
  findNodeHandle,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import strings from 'res/strings';
import Text from 'elements/Text';
import colors from 'res/colors';
import {useDropdown} from 'screens/complaints/components/DropdownProvider';
import {isTablet} from 'react-native-device-info';
import scale from 'utils/scale';
import useStateCustom from 'hooks/useStateCustom';
import {height} from 'res/sizes';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ItemFilter from 'screens/complaints/components/ItemFilter';
import {renderColorComplaint, renderStatusComplaint} from 'utils/other-utils';
import DropDownItem from 'screens/complaints/components/DropDownItem';
import {useIsFocused} from '@react-navigation/core';

interface DropdownProps {
  style?: StyleProp<ViewStyle>;
  content?: React.ReactNode;
  title?: string;
  iconLeft?: ImageSourcePropType;
  value?: string | object;
  onClear?: () => void;
  type: 'filter' | 'sort';
}

const Dropdown = (props: DropdownProps) => {
  const {state, setState} = useDropdown();
  const [isShow, setIsShow] = useState<boolean>(false);
  const dropdownRef = useRef<TouchableOpacity>();
  const animIcon = useSharedValue(0);
  const rotate = useDerivedValue(
    () => interpolate(animIcon.value, [0, 1], [0, 180]),
    [],
  );
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotate.value}deg`}],
    };
  }, []);
  useEffect(() => {
    animIcon.value = withTiming(isShow ? 1 : 0, {duration: 500});
    return () => {};
  }, [isShow]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (!state.isOpen) {
      setIsShow(false);
    }
  }, [state.isOpen]);
  useEffect(() => {
    if (!isFocused) {
      setIsShow(false);
    }
  }, [isFocused]);
  const onLayout = () => {
    if (dropdownRef.current) {
      const handle = findNodeHandle(dropdownRef.current);

      NativeModules.UIManager.measureInWindow(
        handle,
        (x: number, y: number, dx: number, dy: number) => {
          setState({
            top: dy,
            left: x,
            width: dx,
          });
        },
      );
    }
  };
  const onClear = () => {
    props.onClear && props.onClear();
    setState({isOpen: false});
  };
  const renderClear = () => {
    return (
      <TouchableOpacity
        onPress={onClear}
        style={[Theme.flex1, {paddingVertical: 8}]}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
        <Text size={18} color={colors.blue3} fontWeight={'700'}>
          Clear Filter
        </Text>
      </TouchableOpacity>
    );
  };
  const renderFilter = () => {
    return (
      <View
        style={[
          styles.containerSelect,
          {
            backgroundColor: renderColorComplaint(
              (props.value as string) || '',
            ),
            marginVertical: 8,
          },
          Theme.center,
        ]}>
        <Text color={colors.white}>
          {renderStatusComplaint((props.value as string) || '')}
        </Text>
      </View>
    );
  };
  const renderSort = () => {
    return (
      <View
        style={[
          styles.containerSelect,
          {
            backgroundColor: colors.blue3,
            marginVertical: 8,
          },
        ]}>
        <Text color={colors.white} >
          {props.value.type === 'createdDate' ? 'Created Date' : 'Event Date'}:{' '}
          <Text color={colors.white} fontWeight={'600'} >
            {props.value.value}
          </Text>
        </Text>
      </View>
    );
  };
  const renderDefault = () => {
    return (
      <View style={[Theme.flexRow, Theme.flex1, {paddingVertical: 8}]}>
        {!!props.iconLeft && (
          <Image source={props.iconLeft} style={styles.icon} />
        )}
        <Text size={18} marginLeft={10} marginRight={10}>
          {props.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        ref={dropdownRef}
        onPress={() => {
          setState({
            isOpen: true,
            content: props.content,
          });
          setIsShow(true);
        }}
        onLayout={onLayout}
        style={[
          Theme.flexRow,
          styles.button,
          isShow ? [styles.dropdownShow] : {},
        ]}>
        {!props.value && renderDefault()}
        {props.value
          ? isShow
            ? renderClear()
            : props.type == 'filter'
            ? renderFilter()
            : !!props.value && renderSort()
          : null}
        <Animated.Image
          style={[iconStyle, {resizeMode: 'contain'}]}
          source={images.ic_down}
        />
      </TouchableOpacity>
      {!!isShow && <DropDownItem content={props.content} />}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  containerSelect: {
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    flex: 1,
    marginRight: 6,
  },
  containerDropdown: {
    position: 'absolute',
    backgroundColor: colors.blue4,
    left: 0,
    right: 0,
    borderBottomEndRadius: 10,
    zIndex: 999,
  },
  dropdownShow: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  container: {
    borderRadius: 10,
    zIndex: 999,
    flex: 1,
    backgroundColor: colors.blue4,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.blue4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
