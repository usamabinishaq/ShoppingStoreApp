import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/pages/splash/Splash';
import HomeScreen from './src/pages/home/Home';
import CartScreen from './src/pages/cart/cart';
import ProfileScreen from './src/pages/profile/profile';
import SignUpScreen from './src/pages/authentication/signup';
import SignInScreen from './src/pages/authentication/signin';
import BottomTabs from './src/pages/bottomNavigation/BottomNavigation';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {});

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
