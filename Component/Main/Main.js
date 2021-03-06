import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Navigator
} from 'react-native';

// 引入外部组件
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

var Main = React.createClass({
    // 初始化函数
    getInitialState() {
        return {
            selectedTab: 'home'
        }
    },

    render() {
        return (
            <TabNavigator>
                {/*--首页--*/}
                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image source={require('../image/icon/tabbar/homepage.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../image/icon/tabbar/homepage_selected.png')} style={styles.selectedIconStyle} />}
                    badgeText="1"
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    <Navigator
                        initialRoute={{name: '首页', component:Home}}
                            // 跳转动画
                            configureScene={()=> {
                                return Navigator.SceneConfigs.PushFromRight;
                            }}
                            renderScene={(route, navigator) =>{
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />
                            }}
                    />
                </TabNavigator.Item>
                {/*--商家--*/}
                <TabNavigator.Item
                    title="商家"
                    renderIcon={() => <Image source={require('../image/icon/tabbar/merchant_normal.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../image/icon/tabbar/merchant_selected.png')} style={styles.selectedIconStyle} />}
                    badgeText="1"
                    selected={this.state.selectedTab === 'shop'}
                    onPress={() => this.setState({ selectedTab: 'shop' })}
                >
                    <Navigator
                        initialRoute={{name: '商家', component:Shop}}
                            // 跳转动画
                            configureScene={()=> {
                                return Navigator.SceneConfigs.PushFromRight;
                            }}
                            renderScene={(route, navigator) =>{
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />
                            }}
                    />
                </TabNavigator.Item>
                {/*--我的--*/}
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={require('../image/icon/tabbar/mine.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../image/icon/tabbar/mine_selected.png')} style={styles.selectedIconStyle} />}
                    badgeText="1"
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => this.setState({ selectedTab: 'mine' })}
                >
                    <Navigator
                        initialRoute={{name: '我的', component:Mine}}
                            // 跳转动画
                            configureScene={()=> {
                                return Navigator.SceneConfigs.PushFromRight;
                            }}
                            renderScene={(route, navigator) =>{
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />
                            }}
                    />
                </TabNavigator.Item>
                {/*--更多--*/}
                <TabNavigator.Item
                    title="更多"
                    renderIcon={() => <Image source={require('../image/icon/tabbar/misc.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../image/icon/tabbar/misc_selected.png')} style={styles.selectedIconStyle} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'more' })}
                    selected={this.state.selectedTab === 'more'}
                >
                    <Navigator
                        initialRoute={{name: '更多', component:More}}
                            // 跳转动画
                            configureScene={()=> {
                                return Navigator.SceneConfigs.PushFromRight;
                            }}
                            renderScene={(route, navigator) =>{
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />
                            }}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
});

const styles = StyleSheet.create({
  iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    },
    selectedIconStyle:{
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    },
});

// 输出
module.exports = Main;