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
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import Appbar from '../appbar/appbar';

export default class SignInScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {isShow: true};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar />
        <View style={{flex: 0.9}}>
          <View style={{flex: 0.5}}>
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
              <Icon
                name={this.state.isShow == true ? 'eye-off' : 'eye'}
                color={colors.secondary}
                size={18}
                onPress={() =>
                  this.state.isShow == true
                    ? this.setState({isShow: false})
                    : this.setState({isShow: true})
                }
              />
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert('Sign in', 'Sign in Successful')}>
              <View
                style={[styles.signinButtonContainer, styles.ButtonContainer]}>
                <Text style={{fontWeight: 'bold', color: colors.white}}>
                  Sign in
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: colors.lightGray,
                textAlign: 'center',
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
                onPress={() => this.props.navigation.navigate('SignUpScreen')}
                style={{
                  fontWeight: 'bold',
                  color: colors.secondary,
                  alignSelf: 'center',
                }}>
                New to PIERO? Register
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
  forgetText: {
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'right',
    marginRight: 20,
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
