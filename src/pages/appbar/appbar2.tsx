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

export default function Appbar2(props) {
  return (
    <View style={styles.appbar}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={'dark-content'}
      />
      <View style={styles.logoView}>
        <Text style={styles.logoText}>{props.data}</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.secondary,
    marginLeft: 15,
  },
  bagView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    flex: 0.9,
    justifyContent: 'center',
    padding: 10,
  },
});
