import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import Theme from 'res/style/Theme';
import Image from 'elements/Image';
import images from 'res/images';
import colors from 'res/colors';
import Text from 'elements/Text';

interface ItemCollapsibleProps {
  icon: ImageSourcePropType;
  title: string;
  currentValue?: number;
  potentialValue?: number;
  children?: React.ReactNode;
}

const ItemCollapsible = (props: ItemCollapsibleProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={[Theme.flexRowSpace, {alignItems: 'flex-start'}]}>
        <Image source={props.icon} />
        <View style={[Theme.flex1, Theme.pl10]}>
          <TouchableOpacity
            disabled={!props.children}
            onPress={() => setIsShow(!isShow)}
            style={[Theme.flexRow]}>
            <View style={[Theme.flexRow, Theme.flex1]}>
              <Text color={colors.pink3} fontWeight={'700'} size={14}>
                {props.title}
              </Text>
            </View>
            <View style={{width: '30%'}}>
              {props.currentValue ? (
                <Text fontWeight={'700'} center={true}>
                  {props.currentValue}
                </Text>
              ) : (
                <Text center={true} fontWeight={'700'} color={colors.orange}>
                  -
                </Text>
              )}
            </View>
            <View
              style={[
                Theme.flexRow,
                {width: '30%', justifyContent: 'flex-end'},
              ]}>
              <View style={[Theme.flex1]}>
                {props.potentialValue ? (
                  <Text center={true} marginRight={20}>
                    {props.potentialValue}
                  </Text>
                ) : (
                  <Text center={true} fontWeight={'700'} color={colors.orange}>
                    -
                  </Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
          {!!isShow && props.children}
        </View>
        {props.children ? (
          <Image
            source={images.ic_dropdown}
            tintColor={colors.black}
            style={{marginTop: 5}}
          />
        ) : (
          <Image source={images.ic_dropdown} style={{opacity: 0}} />
        )}
      </View>
    </View>
  );
};

export default ItemCollapsible;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 7},
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 2,
  },
});
