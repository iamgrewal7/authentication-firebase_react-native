import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Container } from 'native-base';


export default class HomeScreen extends React.Component {
  render() {
    return (
	     <Container style = {styles.container}>
          <Text style = {styles.text}>You are in :)</Text>
       </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    color:'white',
    fontSize:48,
  },
});
