import React from 'react';
import {View, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = React.forwardRef((props: any, ref: any) => {
  return (
    <RBSheet
      ref={ref}
      animationType="fade"
      height={350}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        container: {
          padding: 10,
          borderRadius: 20,
        },
      }}>
      <Text>Hello</Text>
    </RBSheet>
  );
});
export default BottomSheet;
