import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const ListHeader = (props:any) => {
  return (
    <View style={styles.headerContainer}>
      <Icon name="arrowleft" size={30} color="gray" style={{marginRight: 20}} onPress={()=>props.setShowModal(false)}/>
      <Text style={styles.textStyles}>List navigation</Text>
    </View>
  );
};
export default ListHeader;
const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(158, 150, 150, .2)',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyles: {fontSize: 18, marginLeft: 20,},
});
