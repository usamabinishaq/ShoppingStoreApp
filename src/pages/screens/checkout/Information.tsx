import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import countryList from 'react-select-country-list';
import colors from '../../../colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  addCheckoutLineItems,
  api,
  createCheckout,
} from '../../../services/StoreFrontAPI/APIService';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'cart.db', createFromLocation: 1});

export default class Information extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      cart: [],
      loggedInUser: null,
      cbEMailMe: false,
      cbSaveInfo: false,
      cbTextMe: false,
      isSHow: false,
      selectedCountry: {label: null, value: null},
      countries: countryList().getData(),
      isLogin: false,
      information: {
        email: null,
        country: null,
        countryCode: null,
        fname: null,
        lname: null,
        address: null,
        apartment: null,
        city: null,
        state: null,
        zip: null,
        phone: null,
      },
    };
  }
  componentDidMount = async () => {
    let val = await AsyncStorage.getItem('@CustomerAccesstoken');
    let user = await AsyncStorage.getItem('@user');
    user ? this.setState({loggedInUser: JSON.parse(user)}) : null;
    val ? this.setState({isLogin: true}) : null;
    this.loadCart();
  };
  makeCheckout = async () => {
    var data = createCheckout(this.state.information);
    await axios({
      method: 'post',
      url: api.url,
      headers: api.token,
      data: data,
    })
      .then(response => {
        if (response.data.data.checkoutCreate.checkout) {
          const add =
            response.data.data.checkoutCreate.checkout.shippingAddress
              .formatted;
          var newAddress = add.map((i, index) => {
            return index != add.length - 1 ? `${i}, ` : `${i}`;
          });
          const cid = response.data.data.checkoutCreate.checkout.id;

          this.setState(prevState => ({
            information: {
              ...prevState.information,
              address: newAddress,
            },
          }));
          this.addLineItems(cid);
        } else {
          console.log(
            'Error Occurred ' +
              response.data.data.checkoutCreate.checkout.checkoutUserErrors,
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  addLineItems = async cid => {
    var data = addCheckoutLineItems(cid, this.state.cart);
    await axios({
      method: 'post',
      url: api.url,
      headers: api.token,
      data: data,
    })
      .then(response => {
        if (response.data.data.checkoutLineItemsAdd.checkout) {
          if (this.props.onChange) {
            this.props.onChange(this.state.information);
          }
        } else {
          console.log(
            'Error Occurred ' +
              response.data.data.checkoutLineItemsAdd.checkout
                .checkoutUserErrors,
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  loadCart = async () => {
    await db.transaction(tx => {
      tx.executeSql(
        'SELECT quantity,variantId FROM cart',
        [],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              this.state.cart.push(results.rows.item(i));
            }
          }
        },
      );
    });
  };
  render() {
    // console.log(countryList().getData());
    return (
      <View>
        <View style={{margin: '3%'}}>
          <Text style={styles.topHeading}>Contact Information</Text>
          {!this.state.isLogin ? (
            <View>
              {/* <Text style={{color: colors.black, letterSpacing: 0.2}}>
                Already have an account?
                <Text
                  onPress={() => {
                    this.props.navigation.navigate('SignInScreen');
                  }}
                  style={{color: colors.secondPrimary}}>
                  {' Login'}
                </Text>
              </Text> */}
              <TextInput
                style={styles.txtInput2}
                placeholder="Email or phone number"
                placeholderTextColor={colors.lightGray}
                onChangeText={text => {
                  this.setState(prevState => ({
                    information: {
                      ...prevState.information,
                      email: text,
                    },
                  }));
                }}
              />
            </View>
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              right: 5,
            }}>
            <CheckBox
              disabled={false}
              value={this.state.cbEMailMe}
              onValueChange={newValue => this.setState({cbEMailMe: newValue})}
              tintColors={{
                true: colors.secondPrimary,
                false: colors.secondPrimary,
              }}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 13,
                letterSpacing: 0.2,
              }}>
              Email me with news and offers
            </Text>
          </View>
        </View>
        <View style={{margin: '3%'}}>
          <Text style={styles.topHeading}>Shipping Address</Text>
          <TouchableOpacity
            onPress={() => {
              this.state.isShow
                ? this.setState({isShow: false})
                : this.setState({isShow: true});
            }}
            style={{
              flexDirection: 'row',
              borderColor: colors.black,
              borderWidth: 0.5,
              width: '100%',
              borderRadius: 5,
              alignItems: 'center',
              height: 45,
              marginTop: '2.5%',
            }}>
            <Text
              style={{
                flex: 0.9,
                color: this.state.information.country
                  ? colors.black
                  : colors.lightGray,
                fontSize: 14,
                letterSpacing: 0.5,
                paddingLeft: '2.5%',
              }}>
              {this.state.information.country
                ? this.state.information.country
                : 'Country/Region'}
            </Text>
            <View
              style={{
                flex: 0.1,
                borderLeftWidth: 0.5,
                alignSelf: 'center',
                paddingLeft: '2.5%',
              }}>
              <Icon name={'menu-down'} color={colors.black} size={18} />
            </View>
          </TouchableOpacity>
          {this.state.isShow ? (
            <ScrollView
              horizontal={true}
              style={{
                width: '100%',
                height: '50%',
                top: 80,
                padding: 10,
                position: 'absolute',
                backgroundColor: colors.white,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                elevation: 5,
                zIndex: 1,
              }}>
              <FlatList
                data={this.state.countries}
                numColumns={1}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => this.renderCountries(item)}
              />
            </ScrollView>
          ) : null}
          <TextInput
            style={styles.txtInput2}
            placeholder="First Name"
            placeholderTextColor={colors.lightGray}
            onChangeText={text => {
              this.setState(prevState => ({
                information: {
                  ...prevState.information,
                  fname: text,
                },
              }));
            }}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Last Name"
            placeholderTextColor={colors.lightGray}
            onChangeText={text => {
              this.setState(prevState => ({
                information: {
                  ...prevState.information,
                  lname: text,
                },
              }));
            }}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Address"
            placeholderTextColor={colors.lightGray}
            onChangeText={text => {
              this.setState(prevState => ({
                information: {
                  ...prevState.information,
                  address: text,
                },
              }));
            }}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Apartment, suite, etc. (optional)"
            placeholderTextColor={colors.lightGray}
            onChangeText={text => {
              this.setState(prevState => ({
                information: {
                  ...prevState.information,
                  apartment: text,
                },
              }));
            }}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="City"
            placeholderTextColor={colors.lightGray}
            onChangeText={text => {
              this.setState(prevState => ({
                information: {
                  ...prevState.information,
                  city: text,
                },
              }));
            }}
          />

          <TextInput
            style={styles.txtInput2}
            placeholder="State"
            placeholderTextColor={colors.lightGray}
            onChangeText={text => {
              this.setState(prevState => ({
                information: {
                  ...prevState.information,
                  state: text,
                },
              }));
            }}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Zip Code"
            placeholderTextColor={colors.lightGray}
            onChangeText={text => {
              this.setState(prevState => ({
                information: {
                  ...prevState.information,
                  zip: text,
                },
              }));
            }}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Phone (optional)"
            placeholderTextColor={colors.lightGray}
            onChangeText={text => {
              this.setState(prevState => ({
                information: {
                  ...prevState.information,
                  phone: text,
                },
              }));
            }}
          />
          <View style={styles.checkBox}>
            <CheckBox
              disabled={false}
              value={this.state.cbSaveInfo}
              onValueChange={newValue => this.setState({cbSaveInfo: newValue})}
              tintColors={{
                true: colors.secondPrimary,
                false: colors.secondPrimary,
              }}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 13,
                letterSpacing: 0.2,
              }}>
              Save this information for next time
            </Text>
          </View>
          <View style={styles.checkBox}>
            <CheckBox
              disabled={false}
              value={this.state.cbTextMe}
              onValueChange={newValue => this.setState({cbTextMe: newValue})}
              tintColors={{
                true: colors.secondPrimary,
                false: colors.secondPrimary,
              }}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 13,
                letterSpacing: 0.2,
              }}>
              Text me with news and offers
            </Text>
          </View>
          <Text style={styles.signupDescription}>
            By signing up via text, you agree to receive recurring automated
            marketing messages, including cart reminders, at the phone number
            provided. Consent is not a condition of purchase. Reply STOP to
            unsubscribe. Reply HELP for help. Message frequency varies. Msg &
            data rates may apply. View our{' '}
            <Text style={{color: colors.secondPrimary}}>Privacy Policy</Text>{' '}
            and{' '}
            <Text style={{color: colors.secondPrimary}}>Terms of Service</Text>.
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (
                this.state.information.fname != null &&
                this.state.information.lname != null &&
                this.state.information.email != null &&
                this.state.information.country != null &&
                this.state.information.address != null &&
                this.state.information.city != null &&
                this.state.information.state != null &&
                this.state.information.zip != null
              ) {
                this.makeCheckout();
              } else {
                alert('Fill All Required Fields');
              }
            }}
            style={{
              backgroundColor: colors.secondPrimary,
              justifyContent: 'center',
              alignItems: 'center',
              margin: '5%',
              marginBottom: 0,
              borderRadius: 5,
            }}>
            <Text style={{color: colors.white, padding: '5%'}}>
              {'Continue To Shipping'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderCountries = item => {
    return (
      <Text
        onPress={() => {
          this.setState(prevState => ({
            isShow: false,
            information: {
              ...prevState.information,
              country: item.label,
              countryCode: item.value,
            },
          }));
        }}
        style={{
          color: colors.black,
          padding: '2.5%',
        }}>
        {item.label.split(',')[0]}
      </Text>
    );
  };
}

const styles = StyleSheet.create({
  txtInput2: {
    borderColor: colors.black,
    paddingLeft: '2.5%',
    borderWidth: 0.5,
    width: '100%',
    height: 45,
    marginTop: '2.5%',
    color: colors.black,
    fontSize: 14,
    letterSpacing: 0.5,
    borderRadius: 5,
  },
  topHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    paddingBottom: '1.5%',
    letterSpacing: 0.2,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 5,
  },
  signupDescription: {
    fontSize: 12.5,
    color: colors.black,
    textAlign: 'justify',
    marginTop: '2.5%',
    letterSpacing: 0.2,
    lineHeight: 20,
  },
});
