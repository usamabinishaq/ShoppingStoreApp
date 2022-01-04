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

export default function ProfileAppbar() {
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
          source={require('../../assets/images/img.jpg')}
        />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={globalStyles.username}>Mathew Charles</Text>
        <TouchableOpacity
          onPress={() => console.log('Edit Profile')}
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
        <Icon name="shopping-bag" color={colors.secondary} size={24} />
      </View>
    </View>
  );
}
