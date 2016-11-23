import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var HomeDetail = React.createClass({
	// 返回首页
	popToHome() {
		this.props.nagivator.pop();
	},

	render() {
		return (
				<View style={styles.container}>
					<TouchableOpacity onPress={() => {this.popToHome}}>
						<Text style={styles.welcome}>
							HomeDetail
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
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

// 输出
module.exports = HomeDetail;