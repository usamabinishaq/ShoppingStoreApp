import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default class HomeScreen extends Component<any, any> {
  NetInfoSubscription = null;
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('HOME');
    return (
      <View>
        <StatusBar
          animated={true}
          backgroundColor="#E8E8E8"
          barStyle={'dark-content'}
        />
        <View
          style={{
            flex: 0.5,
            justifyContent: 'flex-end',
          }}></View>
      </View>
    );
  }
}
