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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../colors/colors';
export default class HomeScreen extends Component<any, any> {
  NetInfoSubscription = null;
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('HOME');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}>
        <StatusBar
          animated={true}
          backgroundColor={colors.white}
          barStyle={'dark-content'}
        />
      </View>
    );
  }
}
