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
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors/colors';
import Appbar from '../appbar/appbar';
import SimpleAppbar from '../appbar/simpleAppBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class ProfileScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {isLogin: true};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <SimpleAppbar />
        <ScrollView style={{flex: 0.9, marginTop: 25}}>
          {this.state.isLogin == true ? (
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
                  onPress={() =>
                    this.props.navigation.navigate('SignUpScreen')
                  }>
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
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('SignInScreen')
                  }>
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
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          <View>
            <Text style={styles.heading}>My Location</Text>
            <View style={[styles.categoryListView]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={[styles.img]}
                  source={require('../../assets/images/flag_us.jpg')}
                />
                <Text style={[styles.categoryItem, {padding: 10}]}>
                  United States
                </Text>
              </View>
              <View>
                <Icon
                  name="chevron-forward"
                  size={20}
                  color={colors.secondary}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>My Settings</Text>
            <View style={styles.categoryListView}>
              <Text style={[styles.categoryItem]}>Notifications</Text>
              <View>
                <Icon
                  name="chevron-forward"
                  size={20}
                  color={colors.secondary}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Support</Text>
            <View style={styles.categoryListView}>
              <Text style={[styles.categoryItem]}>About Piero</Text>
              <View>
                <Icon
                  name="chevron-forward"
                  size={20}
                  color={colors.secondary}
                />
              </View>
            </View>
            <View style={styles.categoryListView}>
              <Text style={[styles.categoryItem]}>Terms & Conditions</Text>
              <View>
                <Icon
                  name="chevron-forward"
                  size={20}
                  color={colors.secondary}
                />
              </View>
            </View>
            <View style={styles.categoryListView}>
              <Text style={[styles.categoryItem]}>Privacy Policy</Text>
              <View>
                <Icon
                  name="chevron-forward"
                  size={20}
                  color={colors.secondary}
                />
              </View>
            </View>
            <View style={styles.categoryListView}>
              <Text style={[styles.categoryItem]}>FAQ's & guides</Text>
              <View>
                <Icon
                  name="chevron-forward"
                  size={20}
                  color={colors.secondary}
                />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#D8D8D8',
                borderBottomWidth: 1,
              }}>
              <Text style={styles.heading2}>Contact Us</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 0,
                height: 65,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#D8D8D8',
                borderBottomWidth: 1,
              }}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="call-outline"
                  size={25}
                  color={colors.secondary}
                  style={{padding: 5}}
                />
                <Text>Phone</Text>
              </View>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="mail-outline"
                  size={25}
                  color={colors.secondary}
                  style={{padding: 5}}
                />
                <Text>Email</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: windowWidth / 1.2,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              margin: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: colors.secondary,
              }}>
              Available Monday To Friday 8am - 9pm EST and saturday to sunday
              9am - 8pm EST
            </Text>
          </View>
          {this.state.isLogin == true ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <MIcon name="logout" size={25} color={colors.secondary} />
              <Text style={styles.heading}>Logout</Text>
            </View>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  categoryListView: {
    flexDirection: 'row',
    paddingLeft: 0,
    marginLeft: 20,
    marginRight: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  contactUsView: {
    flexDirection: 'row',
    paddingLeft: 0,
    marginLeft: 20,
    marginRight: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  heading2: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 0,
    textAlign: 'center',
  },
  categoryItem: {
    fontSize: 14,
    color: colors.secondary,
  },
  img: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
});
