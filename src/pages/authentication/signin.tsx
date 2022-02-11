import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import globalStyles from '../../styles/globalStyles';
import axios from 'axios';
import {
  api,
  createAccessToken,
  getUser,
} from '../../services/StoreFrontAPI/APIService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, Appbar} from 'react-native-paper';

var data = null;
export default class SignInScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShow: true,
      email: '',
      password: '',
      token: '',
      login: false,
    };
  }

  loginUser = async token => {
    data = getUser(token);
    await axios({
      method: 'post',
      url: api.url,
      headers: api.token,
      data: data,
    })
      .then(response => {
        if (response.data.data.customer) {
          AsyncStorage.setItem(
            '@user',
            JSON.stringify(response.data.data.customer),
          );
          this.setState({login: false});
          this.props.navigation.goBack();
        } else {
          alert('User Not FOund');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  createAccessToken = async () => {
    if (this.state.email != '' && this.state.password != '') {
      this.setState({login: true});
      data = createAccessToken(this.state.email, this.state.password);
      await axios({
        method: 'post',
        url: api.url,
        headers: api.token,
        data: data,
      })
        .then(response => {
          if (
            response.data.data.customerAccessTokenCreate.customerAccessToken
          ) {
            AsyncStorage.setItem(
              '@CustomerAccesstoken',
              response.data.data.customerAccessTokenCreate.customerAccessToken
                .accessToken,
            );

            let token =
              response.data.data.customerAccessTokenCreate.customerAccessToken
                .accessToken;
            this.loginUser(token);
          } else {
            alert('User Not Found');
          }
        })
        .catch(function (error) {
          console.log(error);
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
            elevation: 2.5,
          }}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title={'Sign in'} color={colors.black} />
        </Appbar.Header>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.9,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.secondPrimary,
                fontSize: 22,
                marginLeft: '6.5%',
                fontWeight: 'bold',
                marginTop: '5%',
              }}>
              {'Welcome'}
            </Text>
            <Text
              style={{
                color: colors.lightGray,
                fontSize: 12.5,
                marginLeft: '6.5%',
              }}>
              {'Sign in with PIERO'}
            </Text>
            <View style={globalStyles.InputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.setState({email: text})}
                placeholder={'Email Address'}
                placeholderTextColor={colors.lightGray}
              />
            </View>
            <View style={globalStyles.InputContainer}>
              <TextInput
                style={{flex: 0.9}}
                onChangeText={text => this.setState({password: text})}
                placeholder={'Password'}
                placeholderTextColor={colors.lightGray}
                secureTextEntry={this.state.isShow == true ? true : false}
              />
              <View style={{flex: 0.1, alignItems: 'center'}}>
                <Icon
                  name={this.state.isShow == true ? 'eye-off' : 'eye'}
                  color={colors.black}
                  size={18}
                  onPress={() =>
                    this.state.isShow == true
                      ? this.setState({isShow: false})
                      : this.setState({isShow: true})
                  }
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => this.createAccessToken()}>
              <View
                style={[
                  globalStyles.signinButtonContainer,
                  globalStyles.ButtonContainer,
                ]}>
                {this.state.login ? (
                  <ActivityIndicator size={'small'} color={colors.white} />
                ) : (
                  <Text style={{fontWeight: 'bold', color: colors.white}}>
                    Sign in
                  </Text>
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </View>
          <View style={{flex: 0.1, justifyContent: 'flex-end'}}>
            <Text
              onPress={() => this.props.navigation.navigate('SignUpScreen')}
              style={{
                fontWeight: 'bold',
                color: colors.secondary,
                alignSelf: 'center',
                padding: '2.5%',
              }}>
              {'New to PIERO? '}
              <Text style={{color: colors.secondPrimary}}>Register</Text>
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
  forgetText: {
    fontWeight: 'bold',
    color: colors.secondPrimary,
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
