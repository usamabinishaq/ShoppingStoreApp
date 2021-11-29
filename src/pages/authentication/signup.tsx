import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import Appbar from '../appbar/appbar';
export default class SignUpScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {isShow: true};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar />
        <View style={{flex: 0.9}}>
          <View style={{flex: 0.6}}>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => console.log(text)}
                placeholder={'Full Name'}
                placeholderTextColor={colors.lightGray}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => console.log(text)}
                placeholder={'Email Address'}
                placeholderTextColor={colors.lightGray}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => console.log(text)}
                placeholder={'Password'}
                placeholderTextColor={colors.lightGray}
                secureTextEntry={this.state.isShow == true ? true : false}
              />
              {this.state.isShow == true ? (
                <Icon
                  name="eye-off"
                  color={colors.secondary}
                  size={18}
                  onPress={() => this.setState({isShow: false})}
                />
              ) : (
                <Icon
                  name="eye"
                  color={colors.secondary}
                  size={18}
                  onPress={() => this.setState({isShow: true})}
                />
              )}
            </View>
            <Text style={styles.termsText}>
              By signing up you agree with terms and conditions of PIERO Luxury
              Design
            </Text>
            <TouchableOpacity
              onPress={() => console.log('Sign up Method to be Call')}>
              <View
                style={[styles.signinButtonContainer, styles.ButtonContainer]}>
                <Text style={{fontWeight: 'bold', color: colors.white}}>
                  Register
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.4}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: colors.lightGray,
                textAlign: 'center',
                margin: 10,
              }}>
              OR
            </Text>
            <View style={{flex: 0.8}}>
              <TouchableOpacity
                onPress={() => console.log('Sign in with Google')}>
                <View
                  style={[
                    styles.signinButtonContainer2,
                    styles.ButtonContainer,
                  ]}>
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/images/google.png')}
                    />
                  </View>
                  <View style={styles.iconTextView}>
                    <Text style={styles.iconText}>Continue with Google</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => console.log('Sign in with Facebook')}>
                <View
                  style={[
                    styles.signinButtonContainer2,
                    styles.ButtonContainer,
                  ]}>
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/images/facebook.png')}
                    />
                  </View>
                  <View style={styles.iconTextView}>
                    <Text style={styles.iconText}>Continue with Facebook</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{flex: 0.2}}>
              <Text
                onPress={() => this.props.navigation.navigate('SignInScreen')}
                style={{
                  fontWeight: 'bold',
                  color: colors.secondary,
                  alignSelf: 'center',
                }}>
                Already have an account? Sign in
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    flex: 1,
  },
  termsText: {
    color: colors.secondary,
    textAlign: 'left',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    fontSize: 13,
  },
  ButtonContainer: {
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    width: '90%',
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,
  },
  signinButtonContainer: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonContainer2: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  InputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    marginLeft: 20,
    marginRight: 20,
    margin: 15,
    alignItems: 'center',
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  icon: {
    height: 22,
    width: 22,
  },
  iconContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  iconTextView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconText: {
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'right',
  },
});
