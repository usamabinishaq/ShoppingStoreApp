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
import Icon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../colors/colors';
import globalStyles from '../../styles/globalStyles';

export default class Appbar2 extends Component<any, any> {
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
          <Text style={globalStyles.logoText}>{this.props.data}</Text>
        </View>

        <View style={globalStyles.bagView}>
          <Icon
            name="shopping-bag"
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
