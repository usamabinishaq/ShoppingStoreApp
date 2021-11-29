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

export default function Appbar() {
  return (
    <View style={styles.appbar}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={'dark-content'}
      />
      <View style={styles.logoView}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </View>

      <View style={styles.bagView}>
        <Icon name="shopping-bag" color={colors.secondary} size={24} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appbar: {
    flex: 0.1,
    flexDirection: 'row',
  },
  logoText: {
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'left',
    color: colors.secondary,
    letterSpacing: 5,
  },
  bagView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    height: 110,
    width: 110,
  },
});
