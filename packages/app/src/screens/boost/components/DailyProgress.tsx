import React, {useCallback, useMemo, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from 'res/colors';
import Text from 'elements/Text';
import Theme from 'res/style/Theme';
import ItemProgress from 'screens/boost/components/ItemProgress';
import Image from 'elements/Image';
import images from 'res/images';

interface DailyProgressProps {
  value: number;
  steps: DailyStepProps[];
}
export interface DailyStepProps {
  step: number;
  value: number;
}
const DailyProgress = (props: DailyProgressProps) => {
  const [state, setState] = useState();
  const _getPercentage = useCallback(
    (e: number) => ((e / 7) * 100).toFixed(),
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {props?.steps?.map((e, i) => {
          if (props.value >= e.step) {
            return null;
          }
          return (
            <View
              key={i}
              style={[
                styles.dots,
                {
                  left: `${parseInt(_getPercentage(e.step)) - 7}%`,
                },
              ]}>
              <Text fontWeight={'700'} color={colors.white}>
                {e.step}
              </Text>
            </View>
          );
        })}
        <ItemProgress value={props.value} total={7} />
      </View>
      <View style={styles.containerValue}>
        {props?.steps?.map((e, i) => {
          if (props.value >= e.step) {
            return null;
          }
          return (
            <View
              key={i}
              style={[
                styles.containerUnder,
                {
                  left: `${parseInt(_getPercentage(e.step)) - 7}%`,
                },
              ]}>
              <Image source={images.ic_coin} />
              <Text marginLeft={5} fontWeight={'700'} color={colors.black}>
                {e.value}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DailyProgress;

const styles = StyleSheet.create({
  container: {},
  container2: {
    backgroundColor: colors.borderColor,
    width: '100%',
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    padding: 3,
    flexDirection: 'row',
  },
  dots: {
    backgroundColor: '#666',
    width: 25,
    height: 25,
    borderRadius: 20,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    ...Theme.shadow,
  },
  containerUnder: {
    width: 25,
    height: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
  },
  containerValue: {
    flexDirection: 'row',
    position: 'relative',
    padding: 3,
    height: 40,
  },
});
