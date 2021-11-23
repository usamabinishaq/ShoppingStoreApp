import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
export default class SignInScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={{}}></View>
        <TextInput
          style={styles.textInput}
          onChangeText={text => console.log(text)}
          placeholder={'Email Address'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => console.log(text)}
          placeholder={'Password'}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.replace('SignInScreen')}>
          <View
            style={{
              margin: 20,
              backgroundColor: colors.secondary,
              width: '90%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 2,
            }}>
            <Text style={{fontWeight: 'bold', color: colors.white}}>
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: colors.secondary,
            textAlign: 'right',
            marginRight: 20,
          }}>
          Forgot Password?
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: colors.lightGray,
            textAlign: 'center',
            marginRight: 20,
          }}>
          OR
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.replace('SignInScreen')}>
          <View
            style={{
              margin: 10,
              backgroundColor: colors.primary,
              borderColor: colors.secondary,
              borderWidth: 1,
              width: '90%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 2,
              marginTop: 20,
            }}>
            <Text style={{fontWeight: 'bold', color: colors.secondary}}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.replace('SignInScreen')}>
          <View
            style={{
              margin: 10,
              backgroundColor: colors.primary,
              borderColor: colors.secondary,
              borderWidth: 1,
              width: '90%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 2,
              marginTop: 20,
            }}>
            <Text style={{fontWeight: 'bold', color: colors.secondary}}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: colors.secondary,
            alignSelf: 'center',
          }}>
          New to App? Register Here
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    margin: 10,
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
