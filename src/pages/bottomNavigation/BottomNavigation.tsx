import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Home from '../home/Home';
import Search from '../search/search';
import Wishlist from '../wishlist/wishlist';
import Profile from '../profile/profile';

import colors from '../../colors/colors';
import {useState} from 'react';
import {Headline} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  const tabs = ['Home', 'Search', 'Profile'];
  const [isFocused, setFocused] = useState(false);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.black}
      inactiveColor={colors.lightGray}
      barStyle={{
        backgroundColor: colors.primary,
        elevation: 5,
      }}>
      {tabs.map((tab, index) => {
        return (
          <Tab.Screen
            key={index}
            name={tab}
            component={
              tab == 'Home' ? Home : tab == 'Search' ? Search : Profile
            }
            options={{
              title: tab,
              tabBarIcon: ({color}) => (
                <Icon
                  color={color}
                  name={
                    tab == 'Profile'
                      ? 'person'
                      : tab == 'Home'
                      ? 'home'
                      : 'search'
                  }
                  size={25}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
