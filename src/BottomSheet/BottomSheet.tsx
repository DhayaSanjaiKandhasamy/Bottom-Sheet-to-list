import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetContent from './BottomSheetContent';
const BottomSheet = React.forwardRef((props: any, ref: any) => {

  const showListHandler = () => {
    ref.current.close();
    props.setShowModal(true);
  };
//  const bottomSheetHeight=props.dataSource.length%4 === 0 ? props.dataSource.length /4 : props.dataSource.length / 4 .
//  console.log(bottomSheetHeight)

  return (
    <RBSheet
      ref={ref}
      animationType="fade"
      height={Math.ceil(props.dataSource.length / 4) * 125}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        container: {
          padding: 10,
          borderRadius: 20,
        },
      }}>
      <View style={{margin: 0}}>
        <View style={{marginTop: -20, marginRight: 20, alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={showListHandler}>
            <Text
              style={{
                color: 'blue',
                fontSize: 16,
                textDecorationLine: 'underline',
              }}>
              show in list
            </Text>
          </TouchableOpacity>
        </View>
        <BottomSheetContent dataSource={props.dataSource} />
      </View>
    </RBSheet>
  );
});
export default BottomSheet;
