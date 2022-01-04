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
  TextInput,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../colors/colors';
import Appbar2 from '../../appbar/appbar2';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DATA} from '../../../models/info';
import Information from './Information';
import Shipping from './shippingDetails';
import Payment from './paymentDetails';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Checkout extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      qty: 1,
      isShow: false,
      dataSrc: DATA,
      totalPrice: 0,
      isInfo: true,
      isShipping: false,
      isPayment: false,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.appbar}>
          <StatusBar
            animated={true}
            backgroundColor={colors.primary}
            barStyle={'dark-content'}
          />
          <View style={styles.bagView}>
            <Icon
              onPress={() => console.log('Back')}
              name="arrow-left"
              color={colors.secondary}
              size={20}
            />
          </View>
          <View style={styles.logoView}>
            <Text style={styles.logoText}>Checkout</Text>
          </View>
        </View>
        <View style={{flex: 0.9}}>
          <ScrollView
            style={{backgroundColor: colors.white}}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                padding: '5%',
                borderColor: colors.lightGray,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: colors.white,
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.state.isShow
                    ? this.setState({isShow: false})
                    : this.setState({isShow: true})
                }
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="cart-outline"
                  size={25}
                  color={colors.secondPrimary}
                />
                <Text
                  style={{
                    color: colors.secondPrimary,

                    textAlign: 'center',
                    paddingLeft: '2.5%',
                  }}>
                  {this.state.isShow ? 'Hide' : 'Show'}
                  {' order summary'}
                </Text>
                <Icon
                  name={this.state.isShow ? 'chevron-up' : 'chevron-down'}
                  size={16}
                  color={colors.secondPrimary}
                  style={{alignSelf: 'center', paddingTop: '1.5%'}}
                />
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    color: colors.black,
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {'$2000'}
                </Text>
              </View>
            </View>
            {this.state.isShow ? (
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FlatList
                    data={this.state.dataSrc}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => this.renderMyBag(item)}
                  />
                </ScrollView>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: '2.5%',
                    marginRight: '2.5%',
                    marginTop: '5%',
                    paddingTop: '7.5%',
                    paddingBottom: '7.5%',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: colors.lightGray,
                  }}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Discount code"
                    placeholderTextColor={colors.lightGray}
                  />
                  <TouchableOpacity
                    style={{
                      flex: 0.2,
                      marginLeft: 5,
                      backgroundColor: colors.secondPrimary,
                      height: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Icon
                      style={{
                        color: colors.white,
                      }}
                      name="arrow-right"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    paddingTop: '2.5%',
                    paddingBottom: '2.5%',
                    marginLeft: '2.5%',
                    marginRight: '2.5%',
                    borderBottomWidth: 1,
                    borderColor: colors.lightGray,
                  }}>
                  <View style={styles.receiptView}>
                    <Text style={{fontSize: 15, color: colors.black}}>
                      Subotal
                    </Text>
                    <Text style={styles.receiptText}>$100</Text>
                  </View>
                  <View style={styles.receiptView}>
                    <Text style={{fontSize: 15, color: colors.black}}>
                      Shipping
                    </Text>
                    <Text style={{fontSize: 15, color: colors.lightGray}}>
                      Calculated at next step
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.receiptView,
                    {
                      padding: '2.5%',
                      marginLeft: '2.5%',
                      marginRight: '2.5%',
                      borderBottomWidth: 1,
                      borderColor: colors.lightGray,
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: colors.black,
                      fontWeight: 'bold',
                    }}>
                    Total
                  </Text>
                  <Text style={{fontSize: 15, color: colors.lightGray}}>
                    USD
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: colors.black,
                      }}>
                      {'  '}$2000
                    </Text>
                  </Text>
                </View>
              </View>
            ) : null}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: '2.5%',
              }}>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('ShoppingBag');
                }}
                style={{color: colors.secondPrimary}}>
                Cart
              </Text>
              <Icon name={'chevron-right'} size={20} color={colors.lightGray} />
              <Text
                onPress={() => {
                  this.setState({
                    isInfo: true,
                    isShpping: false,
                    isPayment: false,
                  });
                }}
                style={{
                  color: this.state.isInfo
                    ? colors.black
                    : colors.secondPrimary,
                }}>
                Information
              </Text>
              <Icon name={'chevron-right'} size={20} color={colors.lightGray} />
              <Text
                onPress={() => {
                  this.setState({
                    isInfo: false,
                    isShipping: true,
                    isPayment: false,
                  });
                }}
                style={{
                  color: this.state.isShipping
                    ? colors.black
                    : colors.secondPrimary,
                }}>
                Shipping
              </Text>
              <Icon name={'chevron-right'} size={20} color={colors.lightGray} />
              <Text
                onPress={() => {
                  this.setState({
                    isInfo: false,
                    isShipping: false,
                    isPayment: true,
                  });
                }}
                style={{
                  color: this.state.isPayment
                    ? colors.black
                    : colors.secondPrimary,
                }}>
                Payment
              </Text>
            </View>
            {/* <View
              style={{
                borderRadius: 5,
                borderColor: colors.lightGray,
                borderWidth: 0.5,
                margin: '2.5%',
                marginTop: '5%',
              }}>
              <View
                style={{
                  position: 'absolute',
                  left: '33%',
                  top: -10,
                  backgroundColor: colors.white,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: colors.black,
                    padding: '0.5%',
                    paddingLeft: '2.5%',
                    paddingRight: '2.5%',
                  }}>
                  ExpressCheckout
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: colors.paypalBtn,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '5%',
                  borderRadius: 5,
                }}>
                <Image
                  style={{width: 90, height: 45}}
                  source={require('../../assets/images/paypal.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderTopWidth: 0.5,
                borderColor: colors.lightGray,
                margin: '2.5%',
              }}>
              <View
                style={{position: 'absolute', backgroundColor: colors.white}}>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.black,
                    paddingLeft: '2.5%',
                    paddingRight: '2.5%',
                  }}>
                  OR
                </Text>
              </View>
            </View> */}
            <View>{this.renderElements()}</View>
            <TouchableOpacity
              onPress={() => {
                if (this.state.isInfo) {
                  this.setState({isInfo: false, isShipping: true});
                } else if (this.state.isShipping) {
                  this.setState({isShipping: false, isPayment: true});
                } else {
                  alert('Order Completed');
                }
              }}
              style={{
                backgroundColor: colors.secondPrimary,
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5%',
                borderRadius: 5,
              }}>
              <Text style={{color: colors.white, padding: '5%'}}>
                {this.state.isInfo
                  ? 'Continue To Shipping'
                  : this.state.isShipping
                  ? 'Continue To Payment'
                  : 'Complete Order'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.state.isInfo
                  ? this.props.navigation.navigate('ShoppingBag')
                  : this.state.isShipping
                  ? this.setState({isShipping: false, isInfo: true})
                  : this.setState({isPayment: false, isShipping: true});
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2.5%',
                marginTop: '2.5%',
              }}>
              <Icon
                name={'chevron-left'}
                size={20}
                color={colors.secondPrimary}
              />
              <Text style={{color: colors.secondPrimary}}>
                {this.state.isInfo
                  ? 'Return to cart'
                  : this.state.isShipping
                  ? 'Return to information'
                  : 'Return to shipping'}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
  renderMyBag = item => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          width: windowWidth,
        }}>
        <View
          style={{
            flex: 0.15,
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.5%',
          }}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: colors.fab,
              width: 15,
              height: 15,
              borderRadius: 15 / 2,
              justifyContent: 'center',
              zIndex: 1,
              alignItems: 'center',
              top: 0,
              right: 0,
            }}>
            <Text style={{fontSize: 10.5, color: colors.white}}>
              {this.state.qty}
            </Text>
          </View>
          <Image
            source={item.img}
            style={{
              height: 50,
              alignSelf: 'center',
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flex: 0.65,
            padding: '2.5%',
          }}>
          <View style={{alignContent: 'center'}}>
            <Text
              style={{
                fontSize: 13,
                color: colors.secondary,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>

            <Text
              style={{
                fontSize: 13,
                color: colors.lightGray,
              }}>
              {'Size: ' + item.size}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.2,
          }}>
          <Text
            style={{
              fontSize: 13,
              color: colors.black,
              fontWeight: 'bold',
              paddingLeft: '5%',
              padding: 10,
            }}>
            {'$' + item.price}
          </Text>
        </View>
      </View>
    );
  };
  renderElements() {
    if (this.state.isInfo) {
      return <Information />;
    } else if (this.state.isShipping) {
      return <Shipping />;
    } else {
      return <Payment />;
    }
  }
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  appbar: {
    flex: 0.1,
    backgroundColor: colors.primary,
    flexDirection: 'row',
  },
  bagView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  logoView: {justifyContent: 'center', alignItems: 'center', marginLeft: 10},
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  textInput: {
    flex: 0.8,
    borderColor: colors.black,
    borderWidth: 0.5,
    width: '85%',
    height: 45,
    color: colors.black,
    fontSize: 14,
    letterSpacing: 1,
    borderRadius: 5,
  },
  txtInput2: {
    borderColor: colors.black,
    borderWidth: 0.5,
    width: '100%',
    height: 45,
    marginTop: '2.5%',
    color: colors.black,
    fontSize: 14,
    letterSpacing: 0.5,
    borderRadius: 5,
  },
  receiptView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  receiptText: {fontSize: 15, color: colors.secondary, fontWeight: 'bold'},
});
