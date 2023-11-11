import React from 'react';
import { StyleSheet, View, TextInput, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.inputContainer}>
        <Icon name="user" size={30} color="black" />
        <TextInput style={styles.textInputStyles} placeholder='UserName' />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={30} color="black" />
        <TextInput style={styles.textInputStyles} placeholder='Password' secureTextEntry />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInputStyles: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
    marginLeft:10
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Adjust the margin as needed
  },
});
