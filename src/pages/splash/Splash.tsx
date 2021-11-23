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
import colors from '../../colors/colors';

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
          backgroundColor: colors.primary,
        }}>
        <Text
          style={{
            fontSize: 65,
            fontWeight: '700',
            textAlign: 'center',
            color: colors.secondary,
            letterSpacing: 5,
          }}>
          PIERO
        </Text>

        <Text
          style={{
            fontSize: 16,

            textAlign: 'center',
            color: colors.lightGray,
            letterSpacing: 1,
          }}>
          LUXURY DESIGN
        </Text>
      </View>
    );
  }
}
