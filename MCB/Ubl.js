import React from 'react';
import { StyleSheet, View, Image, TextInput, StatusBar, Button,TouchableOpacity,Text } from 'react-native';

export default function Ubl() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.upperView}>
      <Image source={require('../assets/image.png')} style={styles.logoImage} />
      </View>
      <View style={styles.lowerView}>
        <TextInput style={styles.input}>Username</TextInput>
        <TouchableOpacity>
        <Text style={styles.text}> Forgot Username?</Text>
        </TouchableOpacity>  
        <TextInput style={styles.input}>Password</TextInput>
        <TouchableOpacity>
        <Text style={styles.text}> Forgot Password?</Text>
        </TouchableOpacity>
        <Button title='Sign in' style={styles.button} onPress={()=>alert('Signed in')}/>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  logoImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain', // Adjust the resizeMode property as per your requirement
    marginTop:30
  },
  upperView:{
    flex:0.3
  },
  lowerView:{
    flex:0.7
  },
  input: {
    height: 50,
    width:340,
    margin: 12,
    borderWidth:1,
    borderRadius:20,
    padding: 10,
    
    
  },
  button:{
    borderRadius:20,
    marginTop:10
  },
  text :{
    color:'blue',
    textAlign:'right',
    marginRight:20
  }
});
