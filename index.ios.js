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
  View
} from 'react-native';

// 引入外部组件
var Main = require('./Component/Main/Main');

export default class RNShop extends Component {
  render() {
    return (
      <Main />
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('RNShop', () => RNShop);
