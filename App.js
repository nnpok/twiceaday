/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { BleManager } from 'react-native-ble-plx';



// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.manager = new BleManager();

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to 2X!</Text>
        <Text style={styles.instructions}>The healthy habit building app!</Text>
        {//<Text style={styles.instructions}>{instructions}</Text>
        }

        <Button
          onPress = {() =>{
            Alert.alert('Whoops, this is Nolans job lol');
          }}
          title = "Login"
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
