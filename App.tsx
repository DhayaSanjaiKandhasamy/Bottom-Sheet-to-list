import React, {createRef, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BottomSheet from './src/BottomSheet/BottomSheet';
const App = () => {
  const bottomSheetRef: any = createRef();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Click more"
        onPress={() => bottomSheetRef.current.open()}
      />
      <Icon name="rocket" size={30} color="#900"></Icon>
      <BottomSheet ref={bottomSheetRef} />
    </View>
  );
};

export default App;
