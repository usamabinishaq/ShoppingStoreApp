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
    }, 1200);
  };
  render() {
    console.log('Splash');
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar
          animated={true}
          backgroundColor="#FFF"
          barStyle={'dark-content'}
        />

        <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
          <Text>Splash</Text>
        </View>
      </SafeAreaView>
    );
  }
}
