import React, {useEffect, useState} from 'react';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  NumberProp,
  Path,
  Stop,
} from 'react-native-svg';
import {Platform, View} from 'react-native';
import type {RadialSliderProps} from './types';
import {styles} from './styles';
import {useRadialSlider, useSilderAnimation} from './hooks';
import {defaultProps} from './SliderDefaultProps';
import CenterContent from './CenterContent';

const RadialSlider = (props: RadialSliderProps & typeof defaultProps) => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [iconPosition, setIconPosition] = useState<string>('');

  const {
    step,
    radius,
    sliderWidth,
    linearGradientPlaceholder,
    linearGradient,
    thumbRadius,
    thumbBorderColor,
    thumbColor,
    thumbBorderWidth,
    style,
    markerLineSize,
    contentStyle,
    min,
    max,
    isHideSlider,
    isHideCircle,
    isHideCenterContent,
  } = props;

  const {panResponder, value, setValue, curPoint, currentRadian, prevValue} =
    useSilderAnimation(props);

  const {
    svgSize,
    containerRef,
    startPoint,
    endPoint,
    startRadian,
    radianValue,
    isRadialCircleVariant,
    centerValue,
  } = useRadialSlider(props);

  useEffect(() => {
    //check max value length
    const maxLength = max?.toString()?.length;

    const timerId = setTimeout(handleValue, maxLength > 2 ? 10 : 100);
    return () => clearTimeout(timerId);
  });

  const handleValue = () => {
    if (iconPosition === 'up' && max > value) {
      isStart && onPressButtons('up');
    } else if (iconPosition === 'down' && min < value) {
      isStart && onPressButtons('down');
    }
  };

  const onLayout = () => {
    const ref = containerRef.current as any;
    if (ref) {
      ref.measure((_x: any, _y: any, _width: any, _height: any) => {});
    }
  };

  const onPressButtons = (type: string) => {
    if (type === 'up' && max > value) {
      setValue((prevState: number) => {
        prevValue.current = prevState + step;

        return prevState + step;
      });
    } else if (type === 'down' && min < value) {
      setValue((prevState: number) => {
        prevValue.current = prevState - step;

        return prevState - step;
      });
    }
  };

  const circleXPosition = isRadialCircleVariant
    ? centerValue < value
      ? -7
      : 4
    : 0;

  const strokeLinecap = isRadialCircleVariant ? 'square' : 'round';

  return (
    <View
      onLayout={onLayout}
      ref={containerRef as any}
      style={[styles.container, style, {width: svgSize, aspectRatio: 1.2}]}
      testID="slider-view">
      <Svg
        // width={svgSize + markerLineSize / 2 - (Platform.OS === 'web' ? 20 : 0)}
        // height={svgSize + markerLineSize / 2}
        // viewBox={`-${markerLineSize / 2} -${markerLineSize / 2} ${
        //   svgSize + markerLineSize
        // } ${svgSize + markerLineSize}`}
        preserveAspectRatio="none">
        <Defs>
          <LinearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="gradient">
            {linearGradientPlaceholder.map(
              (
                item: {
                  offset: NumberProp | undefined;
                  color: string | undefined;
                },
                index: React.Key | null | undefined,
              ) => (
                <Stop key={index} offset={item.offset} stopColor={item.color} />
              ),
            )}
          </LinearGradient>
          <LinearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="gradient2">
            {linearGradient.map(
              (
                item: {
                  offset: NumberProp | undefined;
                  color: string | undefined;
                },
                index: React.Key | null | undefined,
              ) => (
                <Stop key={index} offset={item.offset} stopColor={item.color} />
              ),
            )}
          </LinearGradient>
        </Defs>
        {!isHideSlider && (
          <>
            <Path
              strokeWidth={sliderWidth}
              stroke="url(#gradient)"
              fill="none"
              strokeLinecap={strokeLinecap}
              d={`M${startPoint.x},${startPoint.y} A ${radius},${radius},0,${
                startRadian - radianValue >= Math.PI ? '1' : '0'
              },1,${endPoint.x},${endPoint.y}`}
            />
            <Path
              strokeWidth={sliderWidth}
              stroke="url(#gradient2)"
              fill="none"
              strokeLinecap={strokeLinecap}
              d={`M${startPoint.x},${startPoint.y} A ${radius},${radius},0,${
                startRadian - currentRadian >= Math.PI ? '1' : '0'
              },1,${curPoint.x},${curPoint.y}`}
              {...panResponder.panHandlers}
            />
            {!isHideCircle && (
              <Circle
                cx={curPoint.x + circleXPosition}
                cy={curPoint.y}
                r={thumbRadius}
                fill={thumbColor || thumbBorderColor}
                stroke={thumbBorderColor}
                strokeWidth={thumbBorderWidth}
                {...panResponder.panHandlers}
              />
            )}
          </>
        )}
      </Svg>
      <View style={[styles.content, contentStyle]} pointerEvents="box-none">
        {/* Center Content */}
        {!isHideCenterContent && props.children}
        {/* Button Content */}
      </View>
    </View>
  );
};

RadialSlider.defaultProps = defaultProps;
export default RadialSlider;
