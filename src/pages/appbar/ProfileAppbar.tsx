import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors/colors';
import globalStyles from '../../styles/globalStyles';

export default class ProfileAppbar extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={globalStyles.appbar}>
        <StatusBar
          animated={true}
          backgroundColor={colors.primary}
          barStyle={'dark-content'}
        />
        <View style={globalStyles.profileView}>
          <Image
            style={globalStyles.img}
            source={require('../../assets/images/logo1.png')}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={globalStyles.username}>{this.props.customer}</Text>
          <TouchableOpacity
            onPress={() => {}}
            style={globalStyles.editProfileView}>
            <Icon name="pen" color={colors.black} size={10} />
            <Text
              style={{
                color: colors.black,
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.profileBagView}>
          <Icon
            name="shopping"
            color={colors.secondary}
            size={24}
            onPress={() => {
              this.props.changeSelectionCallback({nav: this.props.nav});
            }}
          />
        </View>
      </View>
    );
  }
}
