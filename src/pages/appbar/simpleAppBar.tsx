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

export default function Appbar2() {
  return (
    <View style={styles.appbar}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primary}
        barStyle={'dark-content'}
      />
      <View style={styles.profileView}>
        <Image
          style={styles.img}
          source={require('../../assets/images/img.jpg')}
        />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.username}>Mathew Charles</Text>
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
  username: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
    letterSpacing: 1,
  },
  bagView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginRight: 10,
  },
  profileView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
