import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Image, Dimensions} from 'react-native';
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
      this.props.navigation.replace('SignInScreen');
    }, 2000);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.black,
        }}>
        <StatusBar hidden={true} />
        <View
          style={{
            flex: 0.9,
            justifyContent: 'center',
          }}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo1.png')}
          />
        </View>
        <View style={{flex: 0.1}}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    height: Dimensions.get('window').height / 2.35,
    width: Dimensions.get('window').width,
    alignSelf: 'center',
  },
});
