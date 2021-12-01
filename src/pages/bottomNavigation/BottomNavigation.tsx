import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import HomeScreen from '../home/Home';
import SearchScreen from '../search/search';
import Wishlist from '../wishlist/wishlist';
import ProfileScreen from '../profile/profile';

import colors from '../../colors/colors';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={colors.secondary}
      barStyle={{backgroundColor: colors.primary, elevation: 10}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" color={colors.black} size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Icon name="search" color={colors.black} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={Wishlist}
        options={{
          tabBarLabel: 'WishList',
          tabBarIcon: () => (
            <Icon name="star-sharp" color={colors.black} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon name="person" color={colors.black} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
