import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Mcb() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/clouds.jpg')} style={styles.clouds}>
        <View style={styles.centeredContent}>
          <Image source={require('../assets/user.png')} style={styles.icon} />
          <View style={styles.inputSection}>
            <Icon name="user" size={30} color="white" />
            <TextInput style={styles.text} placeholder="Username" />
          </View>
          <View style={styles.inputSection}>
            <Icon name="lock" size={30} color="white" />
            <TextInput style={styles.text} placeholder="Password" secureTextEntry={true} />
          </View>
          <View style={styles.buttonFlex}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>SignUp for Mobile Banking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Open a UBL Account Bank</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  clouds: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 50,
    marginTop: 100,
  },
  text: {
    borderBottomWidth: 2,
    flex: 1,
    fontSize: 20,
    marginLeft: 10,
    borderColor: 'white',
    marginBottom: 15,
    marginTop: 15,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonFlex: {
    marginTop: 'auto', // Pushes the buttons to the bottom
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginTop: 10,
    marginBottom:20
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    width:300
  },
});
