import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import colors from '../../../colors/colors';
import {DATA} from '../../../models/info';
import {RadioButton} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Payment extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {rbMethod: 'card', rbBilling: 'same'};
  }
  render() {
    return (
      <View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            borderRadius: 7.5,
            margin: '2.5%',
          }}>
          <View
            style={{
              padding: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: colors.lightGray}}>Contact</Text>
              <Text style={{color: colors.secondPrimary}}>Change</Text>
            </View>
            <Text
              style={{
                color: colors.black,
                paddingTop: '2.5%',
                paddingBottom: '7.5%',
                borderBottomWidth: 0.5,
                borderColor: colors.lightGray,
              }}>
              test@gmail.com
            </Text>
          </View>
          <View
            style={{
              padding: '5%',
              paddingTop: 0,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: colors.lightGray}}>Ship to</Text>
              <Text style={{color: colors.secondPrimary}}>Change</Text>
            </View>
            <Text
              style={{
                color: colors.black,
                fontSize: 14.5,
                paddingTop: '2.5%',
                paddingRight: '12.5%',
                paddingBottom: '7.5%',
                borderBottomWidth: 0.5,
                borderColor: colors.lightGray,
              }}>
              Street 16, Mehmoodabad Pindora, Rawalpindi 43600, Pakistan
            </Text>
          </View>
          <View
            style={{
              padding: '5%',
              paddingTop: 0,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: colors.lightGray}}>Method</Text>
              <Text style={{color: colors.secondPrimary}}>Change</Text>
            </View>
            <Text
              style={{
                color: colors.black,
                fontSize: 14.5,
                paddingTop: '2.5%',
                paddingRight: '12.5%',
              }}>
              Standard . Free
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.topHeading}>Discount</Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: '2.5%',
              marginRight: '2.5%',
              marginTop: '2.5%',
              paddingBottom: '2.5%',
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
        </View>

        <Text style={styles.topHeading}>Payment</Text>
        <Text style={styles.normalTxt}>
          All transactions are secure and encrypted
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            borderRadius: 7.5,
            margin: '2.5%',
          }}>
          <View
            style={{
              justifyContent: 'center',
              borderBottomWidth: 0.5,
              borderColor: colors.lightGray,
              padding: '2.5%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="card"
                status={
                  this.state.rbMethod === 'card' ? 'checked' : 'unchecked'
                }
                onPress={() => this.setState({rbMethod: 'card'})}
                color={colors.secondPrimary}
              />
              <Text style={{color: colors.black}}>Credit Card</Text>
            </View>
            <Image
              style={{
                width: 125,
                height: 25,
                left: 5,
              }}
              source={require('../../../assets/images/cards.png')}
              resizeMode="contain"
            />
            {this.state.rbMethod === 'card' ? (
              <Text
                style={{
                  color: colors.lightGray,
                  textAlign: 'center',
                  padding: '5%',
                }}>
                After clicking “Complete order”, you will be redirected to
                Credit card to complete your purchase securely.
              </Text>
            ) : null}
          </View>
          <View
            style={{
              justifyContent: 'center',
              padding: '2.5%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="coin"
                status={
                  this.state.rbMethod === 'coin' ? 'checked' : 'unchecked'
                }
                onPress={() => this.setState({rbMethod: 'coin'})}
                color={colors.secondPrimary}
              />
              <Text style={{color: colors.black}}>Coinbase</Text>
            </View>
            <Image
              style={{
                width: 125,
                height: 25,
                right: 5,
              }}
              source={require('../../../assets/images/coins.png')}
              resizeMode="contain"
            />
            {this.state.rbMethod === 'coin' ? (
              <Text
                style={{
                  color: colors.lightGray,
                  textAlign: 'center',
                  padding: '5%',
                }}>
                After clicking “Complete order”, you will be redirected to
                Coinbase Commerce to complete your purchase securely.
              </Text>
            ) : null}
          </View>
        </View>
        <Text style={styles.topHeading}>Billing address</Text>
        <Text style={styles.normalTxt}>
          Select the address that matches your payment method.
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            borderRadius: 7.5,
            margin: '2.5%',
          }}>
          <View
            style={{
              justifyContent: 'center',
              borderBottomWidth: 0.5,
              borderColor: colors.lightGray,
              padding: '2.5%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="same"
                status={
                  this.state.rbBilling === 'same' ? 'checked' : 'unchecked'
                }
                onPress={() => this.setState({rbBilling: 'same'})}
                color={colors.secondPrimary}
              />
              <Text style={{color: colors.black}}>
                Same as shipping address
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              padding: '2.5%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="different"
                status={
                  this.state.rbBilling === 'different' ? 'checked' : 'unchecked'
                }
                onPress={() => this.setState({rbBilling: 'different'})}
                color={colors.secondPrimary}
              />
              <Text style={{color: colors.black}}>
                Use a different billing address
              </Text>
            </View>
            {this.state.rbBilling === 'different' ? (
              <View style={{marginBottom: '5%'}}>
                <TextInput
                  style={styles.txtInput2}
                  placeholder="Country/region"
                  placeholderTextColor={colors.lightGray}
                />
                <TextInput
                  style={styles.txtInput2}
                  placeholder="First Name"
                  placeholderTextColor={colors.lightGray}
                />
                <TextInput
                  style={styles.txtInput2}
                  placeholder="Last Name"
                  placeholderTextColor={colors.lightGray}
                />
                <TextInput
                  style={styles.txtInput2}
                  placeholder="Address"
                  placeholderTextColor={colors.lightGray}
                />
                <TextInput
                  style={styles.txtInput2}
                  placeholder="Apartment, suite, etc. (optional)"
                  placeholderTextColor={colors.lightGray}
                />
                <TextInput
                  style={styles.txtInput2}
                  placeholder="City"
                  placeholderTextColor={colors.lightGray}
                />

                <TextInput
                  style={styles.txtInput2}
                  placeholder="State"
                  placeholderTextColor={colors.lightGray}
                />
                <TextInput
                  style={styles.txtInput2}
                  placeholder="Zip Code"
                  placeholderTextColor={colors.lightGray}
                />
                <TextInput
                  style={styles.txtInput2}
                  placeholder="Phone (optional)"
                  placeholderTextColor={colors.lightGray}
                />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    paddingBottom: '0.5%',
    letterSpacing: 0.2,
    marginLeft: '3%',
    marginTop: '2.5%',
  },
  normalTxt: {
    color: colors.lightGray,
    paddingBottom: '0.5%',
    letterSpacing: 0.2,
    marginLeft: '3%',
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
});
