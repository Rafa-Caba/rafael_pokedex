import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';
// import { Navigator } from './src/navigator/Navigator';


const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      <Tabs />
    </NavigationContainer>
  )
}

export default App;