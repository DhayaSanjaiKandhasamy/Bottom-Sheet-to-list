import React, {createRef, useState} from 'react';
import {Button, View,Text} from 'react-native';

import BottomSheet from './src/BottomSheet/BottomSheet';
import ListModal from './src/ListRenderer/ListModal';

const DATA_SOURCE = [
  {name: 'home', title: 'Home',id:'1'},
  {name: 'search', title: 'Search',id:'2'},
  {name: 'user', title: 'My Profile',id:'3'},
  {name: 'cog', title: 'Settings',id:'4'},
  {name: 'camera', title: 'Camera',id:'5'},
  {name: 'photo', title: 'Gallery',id:'6'},
  {name: 'envelope', title: 'Email',id:'7'},
  {name: 'comments-o', title: 'Messaging',id:'8'},
  {name: 'battery', title: 'Battery',id:'9'},
  {name: 'rocket', title: 'Rocket',id:'10'},
  {name: 'camera', title: 'Camera',id:'11'},
  {name: 'photo', title: 'Gallery',id:'12'},
  {name: 'envelope', title: 'Email',id:'13'},
  {name: 'comments-o', title: 'Messaging',id:'14'},
  {name: 'battery', title: 'Battery',id:'15'},
];

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const bottomSheetRef: any = createRef();

  return (
    <>
    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end',padding:20}}>
  
      <Button
       color='#CE8900'
        title="Show more"
        onPress={() => bottomSheetRef.current.open()}
      />
    </View>

      <BottomSheet
        ref={bottomSheetRef}
        setShowModal={setShowModal}
        dataSource={DATA_SOURCE}
      />
      <ListModal isVisible={showModal} setShowModal={setShowModal} dataSource={DATA_SOURCE}/>
      </>
  );
};

export default App;
