import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import Appbar from '../appbar/appbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class ProfileScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar />
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.secondary,
              fontSize: 15,
              textAlign: 'center',
            }}>
            Access your Bag & Wishlist on any of your Device
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.replace('SignInScreen')}>
              <View
                style={{
                  margin: 10,
                  backgroundColor: colors.primary,
                  borderColor: colors.secondary,
                  borderWidth: 1,
                  width: windowWidth / 2.5,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 2,
                  marginTop: 20,
                }}>
                <Text style={{fontWeight: 'bold', color: colors.secondary}}>
                  Create account
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                margin: 10,
                backgroundColor: colors.secondary,
                width: windowWidth / 2.5,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 2,
                marginTop: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: colors.white}}>
                Sign in
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
