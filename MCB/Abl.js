import React from 'react';
import { StyleSheet, View, TextInput, StatusBar, Image, TouchableOpacity, Text,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native'

export default function Abl() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={require('../assets/hbl1.png')} style={styles.imageOne} />
      <Image source={require('../assets/hbl2.png')} style={styles.imagetwo} />
      <View style={{marginTop:10}}>
        <View style={styles.textInputSection}>
          <Icon name="user" size={30} color="black" />
          <TextInput placeholder='Username' style={styles.inputStyles} />
        </View>
        <View style={styles.opacityStyles}>
          <TouchableOpacity>
            <Text style={styles.textStyles}>Forgot Username?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textInputSection}>
          <Icon name="lock" size={30} color="black" />
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
            <TextInput placeholder='Password' style={styles.inputStyles} secureTextEntry />
            <TouchableOpacity>
              <Icon name="eye" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.opacityStyles}>
          <TouchableOpacity>
            <Text style={styles.textStyles}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.toggleStyles}>
        <ToggleSwitch
          isOn={false}
          onColor="green"
          offColor="grey"
          label=""
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="medium"
          onToggle={isOn => console.log("changed to : ", isOn)}
          />
          <Text style={{marginLeft:10}}> Alternate Login</Text>
        </View>
        <View style={{marginTop:10, alignItems:'center', justifyContent:'center', backgroundColor:'orange', padding:10}}>
          <TouchableOpacity onPress={()=>{alert('Welcome to the Al-Habib Mobile Banking')}}>
            <Text style={styles.loginStyles}>Login</Text>   
          </TouchableOpacity>          
        </View>
        <View style={styles.register}>
          <Text>Not a Registered User ?</Text>
          <TouchableOpacity>
            <Text style={{marginLeft:10, color:'green', fontWeight:'bold'}}>Register Now !</Text>
          </TouchableOpacity>         
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor:'white'
  },
  imageOne: {
    width: 90,
    height: 70,
    alignItems: 'center',
  },
  imagetwo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 15,
  },
  textInputSection: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    width: 350, // Adjust the width as needed
  },
  inputStyles: {
    marginLeft: 10,
    flex: 1, // Added to make TextInput take the available space
  },
  textStyles: {
    color: 'green',
    fontWeight:'bold',
    marginTop:10
  },
  opacityStyles: {
    alignItems: 'flex-end',
  },
  toggleStyles:{
    flexDirection:'row'
  },
  loginStyles:{
    color:'white',
  },
  register:{
    flexDirection:'row',   
  }
});
