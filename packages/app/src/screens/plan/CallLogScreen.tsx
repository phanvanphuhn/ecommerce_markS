import Button1Click from 'components/Button/Button1Click';
import Container from 'elements/Layout/Container';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CalendarForm from './components/CalendarForm';
import InputForm from './components/InputForm';
import images from 'res/images';
import Button2Click from 'components/Button/Button2Click';
import {goBack, navigate} from 'navigation/service/RootNavigation';

const CallLogScreen = (props: any) => {
  const {route} = props;
  const onCancel = () => {};

  const onSave = () => {};

  return (
    <>
      <Container
        title={route?.params?.isCreateNew ? 'Scheduling Call' : 'Call Log'}
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

            <InputForm
              title={'Type'}
              placeholder={'Select Type'}
              rightIcon={
                <IconAntDesign name="downcircle" size={15} color={'black'} />
              }
            />

            <InputForm
              title={'Description'}
              placeholder={'Enter Description'}
              numberOfLines={3}
            />

            <InputForm title={'Location'} placeholder={'Location'} />

            <InputForm title={'Related To'} placeholder={'Related To'} />

            <InputForm
              title={'Name'}
              placeholder={'Doctor Name'}
              rightIcon={
                <IconAntDesign name="search1" size={15} color={'grey'} />
              }
            />

            <InputForm
              title={'Attendees'}
              placeholder={'Search Name'}
              rightIcon={
                <IconAntDesign name="search1" size={15} color={'grey'} />
              }
            />

            <InputForm
              title={'Division'}
              placeholder={'Select Division'}
              rightIcon={
                <IconAntDesign name="downcircle" size={15} color={'black'} />
              }
            />

            <InputForm title={'Assigned To'} placeholder={'Name'} />
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
});

export default CallLogScreen;
