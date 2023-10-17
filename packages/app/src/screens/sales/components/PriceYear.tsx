import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import ItemCollapsible from 'screens/sales/components/ItemCollapsible';
import images from 'res/images';
import ItemPrice from 'screens/sales/components/ItemPrice';
import Text from 'elements/Text';

interface PriceYearProps {}

const PriceYear = (props: PriceYearProps) => {
  const [state, setState] = useState();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 20,
        }}>
        <View style={[Theme.flexRow]}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: colors.dotActive,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 20,
              }}>
              <Text size={13} color={colors.white}>
                2023
              </Text>
            </View>
          </View>
          <Text style={{width: '30%'}} marginRight={10}>
            Current Est.$
          </Text>
          <Text style={{width: '30%'}} marginRight={10}>
            Potential Est.$
          </Text>
        </View>
        <ItemCollapsible
          icon={images.ic_dolar}
          title={'Rewards'}
          currentValue={2000}>
          <View style={{}}>
            <ItemPrice
              title={'Variable'}
              currentValue={1000}
              potentialValue={2000}
            />
            <ItemPrice
              title={'Commission'}
              currentValue={1000}
              potentialValue={2000}
            />
          </View>
        </ItemCollapsible>
        <ItemCollapsible
          icon={images.ic_booster}
          title={'Sales Booster'}
          currentValue={2000}>
          <View style={{}}>
            <ItemPrice
              title={'Kicker'}
              currentValue={1000}
              potentialValue={2000}
            />
            <ItemPrice
              title={'Early Bird'}
              currentValue={0}
              potentialValue={2000}
            />
          </View>
        </ItemCollapsible>
        <ItemCollapsible
          icon={images.ic_dolar}
          title={'Additional Payout'}
          currentValue={2000}>
          <View style={{}}>
            <ItemPrice
              title={'Capital Equipment'}
              currentValue={1000}
              potentialValue={2000}
            />
            <ItemPrice
              title={'Service Conteact'}
              currentValue={0}
              potentialValue={2000}
            />
          </View>
        </ItemCollapsible>
        <ItemCollapsible
          icon={images.ic_total}
          title={'Total'}
          currentValue={2000}
        />
      </View>
    </ScrollView>
  );
};

export default PriceYear;

const styles = StyleSheet.create({
  container: {},
});
