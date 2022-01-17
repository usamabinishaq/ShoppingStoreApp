import {View, StatusBar, Image} from 'react-native';
import React, {Component, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
            source={require('../../assets/images/logo.png')}
          />
        </View>

        <View style={globalStyles.bagView}>
          <Icon
            onPress={() => {
              this.props.changeSelectionCallback({nav: this.props.nav});
            }}
            name="shopping-bag"
            color={colors.secondary}
            size={24}
          />
        </View>
      </View>
    );
  }
}
