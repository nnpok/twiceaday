import React, {Component} from 'react';
import {StyleSheet, Text, View,
  TextInput, TouchableOpacity} from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='username'
          placeholderTextColor='rgba(255,255,255,0.7)'
          underlineColorAndroid='transparent'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize='none'
          style={styles.input}
          />

        <TextInput
          placeholder='password'
          placeholderTextColor='rgba(255,255,255,0.7)'
          underlineColorAndroid='transparent'
          returnKeyType='go'
          secureTextEntry
          ref={() => this.passwordInput = input}
          autoCapitalize='none'
          style={styles.input}
          />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF'.
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
