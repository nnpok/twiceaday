import React, {Component} from 'react';
import {StyleSheet, Text, View,
  KeyboardAvoidingView} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={style.logoContainer}>
          <Image
            style={styles.logo}
            source={require('img/2xlogo.png')}
          />
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width:
  }

});
