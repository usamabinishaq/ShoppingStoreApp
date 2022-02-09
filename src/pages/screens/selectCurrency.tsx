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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors/colors';

export default class SelectCurrency extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.primary}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.1,
            alignItems: 'center',
            elevation: 5,
            shadowColor: colors.black,
          }}>
          <Icon
            name={'arrow-left'}
            size={20}
            color={colors.black}
            style={{paddingLeft: '2.5%'}}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: colors.black,
              padding: '2.5%',
            }}>
            Select Currency
          </Text>
        </View>
        <View style={{flex: 0.9}}></View>
      </View>
    );
  }
}
