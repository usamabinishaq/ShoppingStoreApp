import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import {SUPPORT} from '../../models/support';
import ProfileAppbar from '../appbar/ProfileAppbar';
import ToggleSwitch from 'toggle-switch-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appbar} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
export default class ProfileScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      support: SUPPORT,
      isLogin: false,
      isNotify: false,
      customer: null,
    };
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('@CustomerAccesstoken').then(
      data => {
        data ? this.setState({isLogin: true}) : null;
      },
    );
    let value = await AsyncStorage.getItem('@user').then(data => {
      this.setState({customer: JSON.parse(data)});
    });
  };
  logout() {
    AsyncStorage.removeItem('@user');
    AsyncStorage.removeItem('@CustomerAccesstoken');
    this.setState({customer: null, isLogin: false});
  }
  getData = data => {
    this.props.navigation.navigate(data.nav);
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Appbar.Header
          style={{
            backgroundColor: colors.primary,
            elevation: 0,
          }}>
          <Icon
            name={'person-circle'}
            size={35}
            color={colors.lightGray}
            style={{paddingLeft: '2.5%'}}
          />
          <Appbar.Content
            titleStyle={{fontSize: 18, marginLeft: '-5%', margin: 0}}
            title={
              this.state.customer
                ? this.state.customer.displayName
                : 'My profile'
            }
            color={colors.black}
          />
          <Appbar.Action
            icon="shopping"
            onPress={() => {
              this.props.navigation.navigate('ShoppingBag');
            }}
            style={{marginRight: 0}}
          />
        </Appbar.Header>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {!this.state.isLogin ? (
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
                      borderColor: colors.secondPrimary,
                      borderWidth: 1,
                      width: windowWidth / 2.5,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      borderRadius: 2,
                      marginTop: 20,
                    }}>
                    <Text
                      style={{fontWeight: 'bold', color: colors.secondPrimary}}>
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
                      backgroundColor: colors.secondPrimary,
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
            <Text style={styles.heading}>Settings</Text>
            <TouchableOpacity style={styles.categoryListView}>
              <Text style={[styles.categoryItem]}>Language</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.lightGray,
                    paddingRight: '2.5%',
                  }}>
                  English
                </Text>
                <Icon
                  name="chevron-forward"
                  size={16}
                  color={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryListView}
              onPress={() => this.props.navigation.navigate('SelectCurrency')}>
              <Text style={[styles.categoryItem]}>Currency</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.lightGray,
                    paddingRight: '2.5%',
                  }}>
                  USD
                </Text>
                <Icon
                  name="chevron-forward"
                  size={16}
                  color={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.categoryListView}>
              <Text style={[styles.categoryItem]}>Notifications</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingRight: '2.5%',
                }}>
                {/* <TouchableOpacity
                  onPress={() => {
                    this.state.isNotify
                      ? this.setState({isNotify: false})
                      : this.setState({isNotify: true});
                  }}
                  style={{
                    flexDirection: 'row',
                    justifyContent: this.state.isNotify
                      ? 'flex-end'
                      : 'flex-start',
                    alignItems: 'center',
                    backgroundColor: this.state.isNotify
                      ? colors.secondPrimary
                      : colors.lightGray,
                    height: 12,
                    width: 30,
                    borderRadius: 12 / 2,
                  }}>
                  <View
                    style={{
                      backgroundColor: colors.secondPrimary,
                      height: 20,
                      width: 20,
                      borderRadius: 20 / 2,
                    }}></View>
                </TouchableOpacity> */}
                <ToggleSwitch
                  isOn={this.state.isNotify}
                  onColor={colors.secondPrimary}
                  offColor={colors.lightGray}
                  size="small"
                  onToggle={() =>
                    this.state.isNotify
                      ? this.setState({isNotify: false})
                      : this.setState({isNotify: true})
                  }
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Support</Text>
            {this.state.support.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.categoryListView}
                  onPress={() => {
                    this.props.navigation.navigate('SupportView', {
                      data: item.url,
                    });
                  }}>
                  <Text style={[styles.categoryItem]}>{item.name}</Text>
                  <View>
                    <Icon
                      name="chevron-forward"
                      size={16}
                      color={colors.secondary}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
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
                  color={colors.secondPrimary}
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
                  color={colors.secondPrimary}
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
          {this.state.isLogin ? (
            <TouchableOpacity
              onPress={() => {
                this.logout();
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0.5,
                borderColor: colors.lightGray,
                backgroundColor: colors.secondPrimary,
                marginTop: '2.5%',
                marginBottom: '2.5%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: colors.white,
                  textAlign: 'center',
                  padding: '2.5%',
                }}>
                Logout
              </Text>
            </TouchableOpacity>
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
    marginBottom: '2.5%',
    marginLeft: 20,
    marginTop: '5%',
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
