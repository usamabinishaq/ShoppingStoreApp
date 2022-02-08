import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Home from '../home/Home';
import Search from '../search/search';
import Wishlist from '../wishlist/wishlist';
import Profile from '../profile/profile';

import colors from '../../colors/colors';
import {useState} from 'react';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  const tabs = ['Home', 'Search', 'Profile'];
  const [isFocused, setFocused] = useState(false);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.black}
      inactiveColor={colors.lightGray}
      barStyle={{backgroundColor: colors.primary, elevation: 10}}>
      {tabs.map(tab => {
        return (
          <Tab.Screen
            name={tab}
            component={
              tab == 'Home' ? Home : tab == 'Search' ? Search : Profile
            }
            options={{
              tabBarLabel: tab,
              tabBarIcon: () => (
                <Icon
                  color={colors.black}
                  name={
                    tab == 'Profile'
                      ? 'person'
                      : tab == 'Home'
                      ? 'home'
                      : 'search'
                  }
                  size={24}
                />
              ),
            }}
          />
        );
      })}

      {/* <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <Icon name="search" size={24} />,
        }}
      />
      <Tab.Screen
        name="WishList"
        component={Wishlist}
        options={{
          tabBarLabel: 'WishList',
          tabBarIcon: () => (
            <Icon name="star-sharp"  size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Icon name="person" size={24} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
