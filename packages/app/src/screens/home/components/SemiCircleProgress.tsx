import React from 'react';
import {Animated, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearAnimated = Animated.createAnimatedComponent(LinearGradient);
interface IProps {
  progressShadowColor: string[];
  progressColor: string[];
  interiorCircleColor?: string;
  circleRadius?: number;
  progressWidth?: number;
  percentage?: number;
  exteriorCircleStyle?: StyleProp<ViewStyle>;
  interiorCircleStyle?: StyleProp<ViewStyle>;
  animationSpeed?: number;
  initialPercentage?: number;
  minValue?: number;
  maxValue?: number;
  currentValue?: number;
  children?: React.ReactNode;
}
interface IState {
  rotationAnimation: Animated.Value;
}
export default class SemiCircleProgress extends React.PureComponent<
  IProps,
  IState
> {
  static defaultProps = {
    progressShadowColor: 'silver',
    progressColor: 'steelblue',
    interiorCircleColor: 'white',
    circleRadius: 100,
    progressWidth: 10,
    animationSpeed: 2,
    initialPercentage: 0,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      rotationAnimation: new Animated.Value(props.initialPercentage || 0),
    };
  }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate() {
    this.animate();
  }

  animate = () => {
    const toValue = this.getPercentage();
    console.log('=>(SemiCircleProgress.tsx:55) toValue', toValue);
    const speed = this.props.animationSpeed;

    Animated.spring(this.state.rotationAnimation, {
      toValue,
      speed,
      useNativeDriver: true,
    }).start();
  };

  getPercentage = () => {
    const {percentage, minValue, maxValue, currentValue} = this.props;
    if (percentage) {
      return Math.max(Math.min(percentage, 100), 0);
    }

    if (currentValue && (minValue || minValue == 0) && maxValue) {
      const newPercent =
        ((currentValue - minValue) / (maxValue - minValue)) * 100;
      return Math.max(Math.min(newPercent, 100), 0);
    }

    return 0;
  };

  getStyles = () => {
    const {
      circleRadius = 100,
      progressColor,
      progressWidth = 10,
      interiorCircleColor,
    } = this.props;

    const interiorCircleRadius = circleRadius - progressWidth;

    return StyleSheet.create({
      exteriorCircle: {
        width: circleRadius * 2,
        height: circleRadius,
        borderRadius: circleRadius,
      },
      rotatingCircleWrap: {
        width: circleRadius * 2,
        height: circleRadius,
        top: circleRadius,
      },
      rotatingCircle: {
        width: circleRadius * 2,
        height: circleRadius,
        borderRadius: circleRadius,
        transform: [
          {translateY: -circleRadius / 2},
          {
            rotate: this.state.rotationAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ['0deg', '180deg'],
            }),
          },
          {translateY: circleRadius / 2},
        ],
      },
      interiorCircle: {
        width: interiorCircleRadius * 2,
        height: interiorCircleRadius,
        borderRadius: interiorCircleRadius,
        backgroundColor: interiorCircleColor,
        top: progressWidth,
      },
    });
  };

  render() {
    const styles = this.getStyles();

    return (
      <LinearAnimated
        colors={this.props.progressShadowColor}
        style={[
          defaultStyles.exteriorCircle,
          styles.exteriorCircle,
          this.props.exteriorCircleStyle,
        ]}>
        <View
          style={[defaultStyles.rotatingCircleWrap, styles.rotatingCircleWrap]}>
          <LinearAnimated
            colors={this.props.progressColor}
            style={[defaultStyles.rotatingCircle, styles.rotatingCircle]}
          />
        </View>
        <View
          style={[
            defaultStyles.interiorCircle,
            styles.interiorCircle,
            this.props.interiorCircleStyle,
          ]}>
          {this.props.children}
        </View>
      </LinearAnimated>
    );
  }
}

const defaultStyles = StyleSheet.create({
  exteriorCircle: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    overflow: 'hidden',
  },
  rotatingCircleWrap: {
    position: 'absolute',
    left: 0,
  },
  rotatingCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  interiorCircle: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
