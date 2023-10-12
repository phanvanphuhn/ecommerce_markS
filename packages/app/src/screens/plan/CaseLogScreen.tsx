import Button1Click from 'components/Button/Button1Click';
import Button2Click from 'components/Button/Button2Click';
import Container from 'elements/Layout/Container';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import images from 'res/images';
import CalendarForm from './components/CalendarForm';
import InputForm from './components/InputForm';
import {goBack, navigate} from 'navigation/service/RootNavigation';

const CaseLogScreen2 = (props: any) => {
  const {route} = props;
  const onCancel = () => {};

  const onSave = () => {};

  return (
    <>
      <Container
        title={route?.params?.isCreateNew ? 'Scheduling Case' : 'Case Log'}
        subTitle={route?.params?.isCreateNew ? 'Calendar' : null}
        iconTile={route?.params?.isCreateNew ? images.ic_circleCalendar : null}
        style={styles.container}
        buttonLeft={
          route?.params?.isCreateNew && (
            <TouchableOpacity onPress={() => goBack()}>
              <IconAntDesign name="close" color={'white'} size={32} />
            </TouchableOpacity>
          )
        }>
        <ScrollView
          style={{flex: 1, marginBottom: 100}}
          showsVerticalScrollIndicator={false}>
          {/*{route?.params && <StatusPlanForm data={route?.params} />}*/}

          <View style={{padding: 16}}>
            <InputForm title={'Subject'} placeholder={'Procedure'} />

            <CalendarForm title={'Starts'} />

            <CalendarForm title={'Ends'} />

            <InputForm title={'Account'} placeholder={'Account Name'} />

            <InputForm title={'Location'} placeholder={'Location'} />

            <InputForm title={'Doctor'} placeholder={'Doctor Name'} />

            {!route?.params?.isCreateNew && (
              <>
                <View style={styles.wrapItem}>
                  <Image
                    source={images.ic_scanBarcode}
                    style={{height: 24, width: 24, marginRight: 8}}
                  />

                  <Text>Scan Barcode</Text>
                </View>

                <View style={styles.wrapItem}>
                  <TouchableOpacity style={styles.wrapButton}>
                    <IconMaterialCommunityIcons
                      name="line-scan"
                      size={15}
                      color={'#8D8D8D'}
                    />
                    <Text style={styles.buttonTitle}>Scan Barcode</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.wrapButton}>
                    <IconAntDesign name="plus" size={15} color={'#8D8D8D'} />
                    <Text style={styles.buttonTitle}>Add Product</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.wrapItem}>
                  <Image
                    source={images.ic_scanBarcode}
                    style={{height: 24, width: 24, marginRight: 8}}
                  />

                  <Text>Upload Photos</Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </Container>

      {!route?.params?.isCreateNew ? (
        <Button2Click
          leftTile="Cancelled"
          rightTitle="Save"
          onLeftPress={onCancel}
          onRightPress={onSave}
        />
      ) : (
        <Button1Click title="Save" onPress={onSave} isSave={true} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  wrapButton: {
    padding: 8,
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  buttonTitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#8D8D8D',
    marginLeft: 4,
  },
});

export default CaseLogScreen2;
