import {View, StatusBar, Image} from 'react-native';
import React, {Component, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors/colors';
import globalStyles from '../../styles/globalStyles';
// import  Appbar  from 'react-native-paper';

export default class Appbar extends Component<any, any> {
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
        <View style={globalStyles.logoView}>
          <Image
            style={globalStyles.logo}
            source={require('../../assets/images/logo.jpg')}
          />
        </View>

        <View style={globalStyles.bagView}>
          <Icon
            onPress={() => {
              this.props.changeSelectionCallback({nav: this.props.nav});
            }}
            name="shopping"
            color={colors.secondary}
            size={25}
          />
        </View>
      </View>
    );
  }
}
