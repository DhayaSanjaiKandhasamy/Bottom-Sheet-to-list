import React from 'react';
import {
  Modal,
  FlatList,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListHeader from './ListHeader';

const ListModal = ({
  isVisible,
  setShowModal,
  dataSource,
}: {
  isVisible: boolean;
  setShowModal: any;
  dataSource: Array<{name: string; title: string}>;
}) => {
  
  const renderItem = ({item}: {item: {name: string; title: string}}) => {
    return (
      <TouchableOpacity onPress={()=>console.log('pressed row')}>
        <View style={styles.rowContainer}>
          <View style={styles.iconContainer}>
          <Icon
            name={item.name}
            size={30}
            color="gray"
            style={styles.iconStyle}></Icon>
          <Text style={styles.textStyle}>{item.title}</Text>
          </View>
          <Icon name="angle-right" size={30} color="gray" style={{marginRight:20}}/>
        </View>
        <View
          style={{
            borderBottomColor: 'rgba(158, 150, 150, .2)',
            borderBottomWidth: 1,
            marginLeft: 80,
            marginTop: -5,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="fade"
      onRequestClose={() => setShowModal(false)}
      visible={isVisible}
      presentationStyle={'fullScreen'}>
      <SafeAreaView>
      <ListHeader setShowModal={setShowModal}/>
        <FlatList
          data={dataSource}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </Modal>
  );
};
export default ListModal;

const styles = StyleSheet.create({
  rowContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  iconContainer: {
    // borderBottomWidth:2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconStyle: {
    marginRight: 25,
    color: 'white',
    backgroundColor: '#CE8900',
    width: 50,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 12,
  },
  textStyle: {
    fontSize: 17,
    fontWeight: '900',
  },
});


