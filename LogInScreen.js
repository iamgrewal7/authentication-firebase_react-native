import React from 'react';
import { StyleSheet, Text, View,Image, Font, KeyboardAvoidingView, TextInput} from 'react-native';
import * as firebase from 'firebase';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Container,Form, Input, Item, Button,Label} from 'native-base';
import {Actions} from 'react-native-router-flux';

// Fill your firebaseinfo
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ""
};
 firebase.initializeApp(config);

export default class LogInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  signUpUser = (email, password) =>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(()=>{
        alert("Signup Successful");
      })
      .catch( error =>{
        alert(error);
        return;
      })
    }

  loginUser = (email, password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() =>{
        Actions.home()
      })
      .catch( error =>{
        alert(error);
        return;
      })
  };


  render() {
    return (
      <ParallaxScrollView
        parallaxHeaderHeight = {300}
        backgroundScrollSpeed = {2}
        renderBackground = {()=>(
          <Container style = {{position:'absolute', top:0, height:300, width:'100%', justifyContent:'center'}}>
            <Image
              style={{ width:'100%', height:300, resizeMode:'cover',opacity:0.8}}
              source={{uri: 'https://images.unsplash.com/photo-1508862842963-67ae79d4eded?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=956a3c2360de2bd2855383daef03e8d4&auto=format&fit=crop&w=668&q=80'}}
            />
            <Text style = {{position:'absolute',left:3,top:'40%',fontSize:75, color:'white', fontWeight:'bold'}}>WELCOME</Text>
          </Container>
        )}
      >
	   <Container style={styles.container}>
        <Container style = {styles.form}>
          <Form>
            <Item>
              <Label>Email</Label>
              <Input
                returnKeyType = "next"
                keyboardType = "email-address"
                autoCorrect={false}
                autoCapitalise="none"
                onChangeText={email => this.setState({email})}
                onSubmitEditing = {()=> this.passwordInput.focus()}/>
            </Item>
            <Item>
              <Label>Password</Label>
              <Input
                returnKeyType = "go"
                ref = {(input) => this.passwordInput = input}
                autoCorrect={false}
                autoCapitalise="none"
                secureTextEntry={true}
                onChangeText={password => this.setState({password})}/>
            </Item>
            <Button
              style={{marginTop: 20}} full rounded success
              onPress={() => this.loginUser(this.state.email, this.state.password) }>
              <Text style={{ color: 'white', fontSize: 24 }}>Login</Text>
            </Button>
            <Button
              style={{marginTop:20}} full rounded
              onPress={() => this.signUpUser(this.state.email, this.state.password)}>
              <Text style={{ color: 'white', fontSize: 24 }}>Sign Up</Text>
            </Button>
        </Form>
      </Container>
    </Container>
    </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form:{
    marginTop:50,
    padding:20,
    flex:1,
  },
});
