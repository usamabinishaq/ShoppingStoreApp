import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../colors/colors';
import {DATA} from '../../../models/info';
import {RadioButton} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class Shipping extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {rbMethod: 'standard', isChange: false};
  }
  changeInfo() {
    if (this.props.onChange) {
      this.props.onChange('change');
    }
  }
  sendData() {
    if (this.props.onChange) {
      this.props.onChange(this.state.rbMethod);
    }
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
              <Text
                onPress={() => this.changeInfo()}
                style={{color: colors.secondPrimary}}>
                Change
              </Text>
            </View>
            <Text
              style={{
                color: colors.black,
                paddingTop: '2.5%',
                paddingBottom: '7.5%',
                borderBottomWidth: 0.5,
                borderColor: colors.lightGray,
              }}>
              {this.props.email}
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
              <Text
                onPress={() => this.changeInfo()}
                style={{color: colors.secondPrimary}}>
                Change
              </Text>
            </View>
            <Text
              style={{
                color: colors.black,
                fontSize: 14.5,
                paddingTop: '2.5%',
                paddingRight: '12.5%',
              }}>
              {this.props.address}
            </Text>
          </View>
        </View>
        <Text style={styles.topHeading}>Shipping Method</Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            borderRadius: 7.5,
            margin: '2.5%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: colors.lightGray,
              padding: '2.5%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="standard"
                status={
                  this.state.rbMethod === 'standard' ? 'checked' : 'unchecked'
                }
                onPress={() => this.setState({rbMethod: 'standard'})}
                color={colors.secondPrimary}
              />
              <Text style={{color: colors.black}}>Standard</Text>
            </View>
            <Text
              style={{
                color: colors.black,
                fontWeight: 'bold',
                padding: '2.5%',
              }}>
              Free
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '2.5%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="express"
                status={
                  this.state.rbMethod === 'express' ? 'checked' : 'unchecked'
                }
                onPress={() => this.setState({rbMethod: 'express'})}
                color={colors.secondPrimary}
              />
              <Text style={{color: colors.black}}>Express Delivery</Text>
            </View>
            <Text
              style={{
                color: colors.black,
                fontWeight: 'bold',
                padding: '2.5%',
              }}>
              $15.00
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.sendData();
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
            {'Continue To Payment'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    paddingBottom: '1.5%',
    letterSpacing: 0.2,
    marginLeft: '3%',
  },
});
