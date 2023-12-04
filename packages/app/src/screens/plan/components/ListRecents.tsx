import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import keyExtractor from 'utils/keyExtractor';
import Image from 'elements/Image';
import images from 'res/images';
import Text from 'elements/Text';
import Theme from 'res/style/Theme';
import colors from 'res/colors';
import {useLazyQuery} from '@apollo/client';
import {getSearchHistory} from 'apollo/query/getSearchHistory';

interface ListRecentsProps {
  onSearch: (keyword: string) => void;
}

const ListRecents = (props: ListRecentsProps) => {
  const [getData, {data}] = useLazyQuery(getSearchHistory);

  useEffect(() => {
    getData({variables: {searchType: 'PlanCall', sort: 'desc'}});
  }, []);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props?.onSearch && props?.onSearch(item.name)}
        style={[Theme.flexRow, styles.containerItem]}>
        <Image
          source={images.ic_recent2}
          style={{
            resizeMode: 'contain',
          }}
        />
        <Text marginLeft={10}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default ListRecents;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  containerItem: {
    marginBottom: 7,
    paddingBottom: 7,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
});
