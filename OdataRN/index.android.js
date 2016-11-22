/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import MainView from './OdataRN/View/MainView';
export default class OdataRN extends Component {
  render() {
        const defaultName = 'MainView';
        const defaultComponent = MainView;
        console.disableYellowBox = true;
    return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
              return Navigator.SceneConfigs.PushFromRight;
            }}
          renderScene={(route, navigator) => {
          let Component = route.component;
          if(route.component){
              return <Component  navigator={navigator} />
          }
        }} />
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

AppRegistry.registerComponent('OdataRN', () => OdataRN);
