import {View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../colors/colors';
import globalStyles from '../../styles/globalStyles';

export default function Appbar() {
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
            console.log('1');
          }}
          name="shopping-bag"
          color={colors.secondary}
          size={24}
        />
      </View>
    </View>
  );
}
