import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

// 引入外部组件
var HomeDetail = require('./HomeDetail');

var Home = React.createClass({
  // 首页的导航条
  renderNavBar() {
    return(
        <View style={styles.navBarStyle}>
          <TouchableOpacity onPress={()=>{this.pushToDetail()}} >
            <Text style={styles.leftTitleStyle}>宁波</Text>
          </TouchableOpacity>
          <TextInput placeholder="输入商家,品类,商圈" style={styles.topInputStyle} />
          <View style={styles.rightNavViewStyle}>
            <TouchableOpacity onPress={()=>{alert('点击了')}} >
              <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{alert('点击了')}} >
                <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
            </TouchableOpacity>
          </View>
        </View>
      )
  },

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
          {/*首页的导航条*/}
          {this.renderNavBar()}
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
  // 导航栏
  navBarStyle:{
      height:Platform.OS === 'ios' ? 60 : 44,
      backgroundColor:'rgba(255,96,0,1)',
      // 主轴方向
      flexDirection:'row',
      // 侧轴对齐方式 垂直居中
      alignItems:'center',
      // 主轴对齐方式
      justifyContent:'space-around', // 平均分布
  },
  // 导航条左侧文字
  leftTitleStyle:{
      color:'white',
  },
  // 导航栏输入框
  topInputStyle:{
      width:screenW * 0.70,
      height:Platform.OS === 'ios' ? 35 : 30,
      backgroundColor:'white',
      marginTop:Platform.OS === 'ios' ? 18 : 0,
      // 圆角
      borderRadius:18,
      paddingLeft:10,
  },
  // 导航条右侧视图
  rightNavViewStyle:{
      flexDirection:'row',
      height:64,
      // 侧轴对齐方式
      alignItems:'center',
      // backgroundColor:'blue',
  },
  // 导航栏右侧图片
  navRightImgStyle:{
      width:Platform.OS === 'ios' ? 28 : 24,
      height:Platform.OS === 'ios' ? 28 : 24,
  },
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
});

// 输出
module.exports = Home;