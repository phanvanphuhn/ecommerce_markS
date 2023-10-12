import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Image, {IImageProps} from 'elements/Image';
import ButtonIcon from 'elements/Buttons/ButtonIcon';
import images from 'res/images';
import colors from 'res/colors';
import {height, width} from 'res/sizes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface PhotoViewerProps extends IImageProps {
  onClose?: () => void;
}

const PhotoViewer = (props: PhotoViewerProps) => {
  const insets = useSafeAreaInsets();
  const anim = useSharedValue(0);
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            anim.value,
            [0, 1],
            [-height, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  useEffect(() => {
    anim.value = withSpring(1, {});
  }, []);
  return (
    <Animated.View style={[styles.container, translateStyle]}>
      <Image
        {...props}
        style={{
          height: height,
          width: width,
        }}
      />
      <View style={[{position: 'absolute', top: insets.top + 15, left: 10}]}>
        <ButtonIcon
          icon={images.ic_x}
          onPress={props.onClose}
          tintColor={colors.white}
        />
      </View>
    </Animated.View>
  );
};

export default PhotoViewer;

const styles = StyleSheet.create({
  container: {},
});
