import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
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

    }, 2000);

  };
  render() {
    console.log('Splash');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
        }}>
        <View
          style={{
            flex: 0.8,
            justifyContent: 'center',
          }}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={{flex: 0.2}}>
          <ActivityIndicator
            style={styles.loader}
            size="small"
            color={colors.secondary}
          />
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
  },
  logo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
});
