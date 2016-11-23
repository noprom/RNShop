import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

// 引入外部组件
var HomeDetail = require('./HomeDetail');

var Home = React.createClass({
  // 跳转到详情页面
  pushToDetail() {
    this.props.navigator.push({
      component: HomeDetail,
      title: '首页详情'
    });
  },

  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {this.pushToDetail()}}>
            <Text style={styles.welcome}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
      );
  }
});

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

// 输出
module.exports = Home;