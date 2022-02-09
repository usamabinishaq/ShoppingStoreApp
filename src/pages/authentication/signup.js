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
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import axios from 'axios';
import globalStyles from '../../styles/globalStyles';
import {api, createUser} from '../../services/StoreFrontAPI/APIService';
import {SUPPORT} from '../../models/support';
import {ActivityIndicator, Appbar} from 'react-native-paper';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      register: false,
      fnameFocused: false,
      lnameFocused: false,
      emailFocused: false,
      pwdFocused: false,
    };
  }

  registerUser = async () => {
    if (
      this.state.firstName != '' &&
      this.state.lastName != '' &&
      this.state.email != '' &&
      this.state.password != ''
    ) {
      this.setState({register: true});
      var data = createUser(
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.password,
      );
      await axios({
        method: 'post',
        url: api.url,
        headers: api.token,
        data: data,
      })
        .then(response => {
          this.setState({register: false});
          this.props.navigation.replace('SignInScreen');
        })
        .catch(function (error) {
          console.log(error);
          this.setState({register: false});
          error.Error == 'Network Error'
            ? alert('Registration Failed!\nCheck Your Internet')
            : null;
        });
    } else {
      alert('Fill all Fields');
    }
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar.Header
          style={{
            backgroundColor: colors.primary,
            elevation: 0,
          }}>
          <Appbar.BackAction onPress={() => this.props.navigation.pop()} />
          <Appbar.Content title={'Register'} color={colors.black} />
        </Appbar.Header>
        <View style={{flex: 1}}>
          <View style={{flex: 0.9, justifyContent: 'center'}}>
            <Text
              style={{
                color: colors.secondPrimary,
                fontSize: 18,
                marginLeft: '6.5%',
                fontWeight: 'bold',
                marginTop: '5%',
              }}>
              {"Let's Get Started"}
            </Text>
            <Text
              style={{
                color: colors.lightGray,
                fontSize: 12.5,
                marginLeft: '6.5%',
              }}>
              {'Sign up with PIERO'}
            </Text>

            <View style={styles.InputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.setState({firstName: text})}
                placeholder={'First Name'}
                placeholderTextColor={colors.lightGray}
                textContentType="namePrefix"
                onFocus={() => this.setState({fnameFocued: true})}
                onBlur={() => this.setState({fnameFocued: false})}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.setState({lastName: text})}
                placeholder={'Last Name'}
                placeholderTextColor={colors.lightGray}
                textContentType="nameSuffix"
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.setState({email: text})}
                placeholder={'Email'}
                placeholderTextColor={colors.lightGray}
                textContentType="emailAddress"
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={{flex: 0.9}}
                onChangeText={text => this.setState({password: text})}
                placeholder={'Password'}
                placeholderTextColor={colors.lightGray}
                secureTextEntry={this.state.isShow == true ? true : false}
                textContentType="password"
              />
              <View
                style={{
                  flex: 0.1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name={this.state.isShow ? 'eye-off' : 'eye'}
                  color={colors.secondary}
                  size={18}
                  onPress={() =>
                    this.state.isShow
                      ? this.setState({isShow: false})
                      : this.setState({isShow: true})
                  }
                />
              </View>
            </View>
            <Text style={styles.termsText}>
              {'By signing up you agree with '}
              <Text
                style={{color: colors.secondPrimary, fontWeight: 'bold'}}
                onPress={() => {
                  this.props.navigation.navigate('SupportView', {
                    data: SUPPORT[1].url,
                  });
                }}>
                {'Terms and Conditions'}
              </Text>
              {' of PIERO Luxury Design'}
            </Text>
            <TouchableOpacity onPress={() => this.registerUser()}>
              <View
                style={[
                  globalStyles.signinButtonContainer,
                  globalStyles.ButtonContainer,
                ]}>
                {this.state.register ? (
                  <ActivityIndicator size={'small'} color={colors.white} />
                ) : (
                  <Text style={{fontWeight: 'bold', color: colors.white}}>
                    Register
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.1, justifyContent: 'flex-end'}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: colors.secondary,
                alignSelf: 'center',
                padding: '2.5%',
              }}>
              Already have an account?
              <Text
                style={{color: colors.secondPrimary}}
                onPress={() => this.props.navigation.navigate('SignInScreen')}>
                {' '}
                Sign in
              </Text>
            </Text>
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
  signinButtonContainer2: {
    backgroundColor: colors.primary,
    borderColor: colors.secondPrimary,
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
    height: 40,
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
    color: colors.secondPrimary,
    textAlign: 'right',
  },
});
