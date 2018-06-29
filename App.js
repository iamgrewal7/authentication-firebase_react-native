import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


import LogInScreen from './LogInScreen'
import HomeScreen from './HomeScreen'
import {Router, Scene,Stack} from 'react-native-router-flux';


export default class App extends React.Component {
  render() {
    return (
      <Router>
       <Stack key="root">
         <Scene key="login" component={LogInScreen} title="LOGIN"/>
         <Scene key="home" component={HomeScreen} title="HOME"/>
       </Stack>
     </Router>
    );
  }
}
