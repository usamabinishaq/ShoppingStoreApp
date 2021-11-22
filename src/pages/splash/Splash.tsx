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
export default class splashScreen extends Component<any, any> {
  NetInfoSubscription = null;
  constructor(props: any) {
    super(props);
    this.state = {};
    this.setTimeCall();
  }

  setTimeCall = () => {
    setTimeout(() => {
      this.props.navigation.replace('BottomNavigation');
    }, 1500);
  };
  render() {
    console.log('Splash');
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#E8E8E8',
        }}>
        <Text
          style={{
            fontSize: 65,
            fontWeight: '700',
            textAlign: 'center',
            color: '#131410',
            letterSpacing: 5,
          }}>
          PIERO
        </Text>

        <Text
          style={{
            fontSize: 16,

            textAlign: 'center',
            color: '#5E5C5B',
            letterSpacing: 1,
          }}>
          LUXURY DESIGN
        </Text>
      </View>
    );
  }
}
