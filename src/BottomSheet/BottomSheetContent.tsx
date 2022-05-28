import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomSheetContent = (props: any) => {

  const renderItem = ({item}: {item: {name: string; title: string}}) => {
    return (
      <View style={styles.iconContainer}>
        <Icon name={item.name} size={40} color="gray"></Icon>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <FlatList
      numColumns={4}
      data={props.dataSource}
      keyExtractor={item => item.title}
      renderItem={renderItem}
    />
  );
};
export default BottomSheetContent;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
});
