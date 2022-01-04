import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../colors/colors';
import globalStyles from '../../styles/globalStyles';

export default function Appbar2(props) {
  return (
    <View style={globalStyles.appbar}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={'dark-content'}
      />
      <View style={globalStyles.logoView}>
        <Text style={globalStyles.logoText}>{props.data}</Text>
      </View>

      <View style={globalStyles.bagView}>
        <Icon name="shopping-bag" color={colors.secondary} size={24} />
      </View>
    </View>
  );
}
