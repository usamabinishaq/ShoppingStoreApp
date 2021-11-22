import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import HomeScreen from '../home/Home';
import SearchScreen from '../search/search';
import Wishlist from '../wishlist/wishlist';
import ProfileScreen from '../profile/profile';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#1AAB4B"
      barStyle={{backgroundColor: '#212121'}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={Wishlist}
        options={{
          tabBarLabel: 'WishList',
          tabBarIcon: ({color}) => (
            <Icon name="star-sharp" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
